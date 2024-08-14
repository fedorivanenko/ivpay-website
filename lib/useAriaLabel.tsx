import { useEffect } from 'react';

/**
 * Custom hook to dynamically set the `aria-label` attribute of a HTML element
 * based on its child text content and aria-label attributes of its child elements.
 * This ensures accessibility for screen readers.
 * 
 * @param ref Ref object pointing to the <span> element whose aria-label needs to be set.
 */

export const useAriaLabel = (ref: React.RefObject<HTMLElement>) => {
    useEffect(() => {
      const outerSpan = ref.current;
      if (outerSpan) {
        const textNodes: string[] = [];
        outerSpan.childNodes.forEach((node) => {
          if (node.nodeType === Node.TEXT_NODE) {
            textNodes.push(node.textContent?.trim() ?? '');
          } else if (node.nodeType === Node.ELEMENT_NODE) {
            const element = node as HTMLElement;
            if (element.hasAttribute('aria-label')) {
              textNodes.push(element.getAttribute('aria-label') ?? '');
            } else {
              textNodes.push(element.textContent?.trim() ?? '');
            }
          }
        });
        const ariaLabel = textNodes.join(' ').replace(/\s+/g, ' ').trim();
        outerSpan.setAttribute('aria-label', ariaLabel);
      }
    }, [ref]);
  };