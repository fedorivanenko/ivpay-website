import * as React from 'react'

import { cn } from "@/lib/utils"

/**
 * Creates an array of col-span-VALUE for each element that came into a grid.
 */
function unfoldArray(arr: number[]): number[] {
    const result: number[] = []
    for (const num of arr) {
        if (num === 1) {
            result.push(6)
        }
        else if (num === 2) {
            result.push(3, 3)
        }
        else if (num === 3) {
            result.push(2, 2, 2)
        }
    }
    return result
}

/**
 * Rearranges array to match a [ 2, 3, 2, 3, 3... ] pattern
 */
function rearrangeArray(arr: number[]): number[] {
    const count: { [key: number]: number } = {};
    for (const num of arr) {
        count[num] = (count[num] || 0) + 1;
    }
    const result: number[] = [];
    while (Object.keys(count).length > 0) {
        for (const num of Object.keys(count).map(Number).sort((a, b) => a - b)) {
            if (count[num] > 0) {
                result.push(num);
                count[num]--;
                if (count[num] === 0) {
                    delete count[num];
                }
            }
        }
    }
    return result;
}

/**
 * Generates a grid pattern for 2 or 3 cell in each row for grid-cols-6 grid
 * 
 * | --- | --- | --- |
 * | ------ | ------ |
 * 
 * Creates an array where the elements represent amound of cell in each row by decompose N into summands of 2 and 3,
 * rearrange it to match a [ 2, 3, 2, 3, 3... ] pattern,
 * unfold array to create an array of col-span-VALUE for each element that came into a grid.
 * 
 * @param n - The number of elements that came into the grid
 * @return An array of col-span-VALUE to put into className for each element
 */

function generatePattern(n: number) {
    if (n <= 0) {
        return [];
    }
    if (n <= 3) {
        return [n];
    }
    let result = [];
    let remaining = n;
    while (remaining > 0) {
        if (remaining === 4) {
            result.push(2, 2);
            break;
        } else if (remaining === 5) {
            result.push(2, 3);
            break;
        } else if (remaining >= 3) {
            result.push(3);
            remaining -= 3;
        } else {
            result.push(remaining);
            break;
        }
    }
    return unfoldArray(rearrangeArray(result));
}

/**
 * CardGridLayout component organizes its children into a grid layout for 2 or 3 cell in a row.
 * 
 * | --- | --- | --- |
 * | ------ | ------ |
 * 
*/
const CardGridLayout = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, children, ...props }, ref) => {

    const gridPattern = generatePattern(React.Children.count(children))

    const childrenWithClassName = React.Children.map(children, (child, index) => {
        //get a col-span-VALUE from a gridPattern
        const cellSize = gridPattern[index % gridPattern.length];
        if (typeof child === 'string' || typeof child === 'number') {
            return (
                <span className={cn('col-span-1 md:col-span-' + cellSize)}>
                    {child}
                </span>
            );
        } else if (React.isValidElement(child)) {
            const originalClassName = child.props.className || '';
            const className = cn(originalClassName, ('col-span-1 md:col-span-' + cellSize));
            return React.cloneElement(child, {
                className,
            } as React.HTMLAttributes<HTMLElement>);
        }
        return child;
    });

    return (
        <div
            className={cn('grid grid-cols-1 md:grid-cols-6', className)}
            ref={ref}
            {...props}
        >
            {childrenWithClassName}
        </div>
    )
})
CardGridLayout.displayName = 'CardGridLayout'

export { CardGridLayout }