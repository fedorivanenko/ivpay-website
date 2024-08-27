import { useState, useEffect, useMemo } from "react";
import { MotionValue } from "framer-motion";

/**
 * The same thing as useTranform in framer-motion but can accept arrays
 * This is needed if you want to animate a non-predefined set of elements from a single motionValue
 * like animate on scroll any number of children
 * @param value Motion Value
 * @param inputRanges
 * @param outputRanges
 * @returns
 */
function useMultipleTransform(
  value: MotionValue<number>,
  inputRanges: number[][],
  outputRanges: number[][],
): number[] {
  const [currentValue, setCurrentValue] = useState<number | null>(null);

  useEffect(() => {
    const updateValue = () => {
      const newValue = value.get();
      setCurrentValue(newValue);
    };

    // Initial update
    updateValue();

    // Subscribe to changes
    const unsubscribe = value.on("change", updateValue);

    // Force recalculation if value is null
    if (currentValue === null) {
      const timeoutId = setTimeout(updateValue, 100);
      return () => {
        clearTimeout(timeoutId);
        unsubscribe();
      };
    }

    return () => unsubscribe();
  }, [value, currentValue]);

  return useMemo(() => {
    //fallback if value is still null
    if (currentValue === null) {
      return outputRanges[0] || [];
    }

    // Check if the number of input ranges matches the number of output ranges
    if (inputRanges.length !== outputRanges.length) {
      throw new Error("inputRanges and outputRanges must have the same length");
    }

    const calculateOutput = (
      value: number,
      inputRange: number[],
      outputRange: number[],
    ): number => {
      if (
        inputRange.length < 2 ||
        outputRange.length < 2 ||
        inputRange.length !== outputRange.length
      ) {
        console.error(
          "Input and output ranges must have at least two elements and must be of equal length.",
        );
        return NaN;
      }

      const clampedValue = Math.min(
        Math.max(value, inputRange[0]),
        inputRange[inputRange.length - 1],
      );

      let result = outputRange[0];

      for (let i = 1; i < inputRange.length; i++) {
        const inputRangeDiff = inputRange[i] - inputRange[i - 1];
        if (clampedValue <= inputRange[i] && inputRangeDiff !== 0) {
          const inputProgress =
            (clampedValue - inputRange[i - 1]) / inputRangeDiff;
          result =
            outputRange[i - 1] +
            inputProgress * (outputRange[i] - outputRange[i - 1]);
          break;
        }
      }

      return result;
    };

    return inputRanges.map((inputRange, index) => {
      return calculateOutput(currentValue, inputRange, outputRanges[index]);
    });
  }, [currentValue, inputRanges, outputRanges]);
}

export { useMultipleTransform };
