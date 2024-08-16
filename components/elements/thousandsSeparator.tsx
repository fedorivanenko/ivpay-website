import React from 'react';

type ThousandsSeparatorProps = {
  number: string | number;
  decimal?: 'comma' | 'dot';
  separator?: 'comma' | 'dot' | 'space';
}

export const thousandsSeparator: React.FC<ThousandsSeparatorProps> = ({ number, decimal = 'dot', separator = 'space' }) => {

  const numString = typeof number === 'number' ? number.toString() : number;

  let integerPart = numString;
  let decimalPart = '';

  if (decimal === 'dot') {
    const dotIndex = numString.indexOf('.');
    if (dotIndex !== -1) {
      integerPart = numString.substring(0, dotIndex);
      decimalPart = numString.substring(dotIndex + 1);
    }
  } else if (decimal === 'comma') {
    const commaIndex = numString.indexOf(',');
    if (commaIndex !== -1) {
      integerPart = numString.substring(0, commaIndex);
      decimalPart = numString.substring(commaIndex + 1);
    }
  }

  const integerSpans: JSX.Element[] = [];
  const integerLength = integerPart.length;
  let separatorSpan = null;

  const totalGroups = Math.ceil(integerLength / 3);

  //start counter from 1 because minimal value of totalGroups is 1
  for (let i = integerLength, counter = 1; i > 0; i -= 3, counter++) {

    const isLastGroup = counter === totalGroups;

    const start = Math.max(i - 3, 0);
    const part = integerPart.substring(start, i);

    // Add separator span based on current position and separator type
    if (i > 3 && separator !== 'space') {
      separatorSpan = <span>{separator === 'comma' ? ',' : '.'}</span>;
    } else {
      separatorSpan = null;
    }

    integerSpans.unshift(
      <span className={isLastGroup ? '' : (separator === 'space' ? 'ml-[0.2em]' : '')} key={start}>
        {separatorSpan}
        {part}
      </span>
    );
  }

  const decimalSpans: JSX.Element[] = [];
  if (decimalPart) {
    const decimalLength = decimalPart.length;

    for (let i = 0; i < decimalLength; i += 3) {
      const end = Math.min(i + 3, decimalLength);
      const part = decimalPart.substring(i, end);

      decimalSpans.push(
        <span key={i} className={i > 0 ? 'ml-[0.2em]' : ''}>
          {part}
        </span>
      );
    }
  }

  const decimalSeparator = decimalSpans.length > 0 ? (decimal === 'dot' ? '.' : ',') : null;

  return (
    <>
      {integerSpans}
      <span key="decimal-separator">
        {decimalSeparator}
      </span>
      {decimalSpans}
    </>
  );
};

/**
 * splitAndFormat extracts a numeric parts like 55.66 or 244,66 from the string,
 * formatting numeric parts with a thousands separator component.
 * 
 * @param item The input string to process.
 * @returns An array of formatted parts, with numeric parts wrapped in a thousands separator.
 */

export function splitAndFormat(item: string) {
  /** 
   * Extract numbers
   * 'aaa55.66' or 'aaa55,66' -> ['aaa', '55.66'] or ['aaa', '55,66']
   * 'aa55.' -> ['aa', '55', '.']
   * '555.' -> ['555', '.']
   * '128.0.0.1' -> ['128', '.', '0', '.', '0', '.', '1']
  */
  const parts = item.split(/(\d*[,.]\d*|\d+[,.]\D+)/).filter(Boolean);

  const formattedParts = parts.map((part, i) => {
    /**
     * Formatting only numbers
     * '123.76' or '23,56' true
     * '123' true
     * ',' or '.' false
     * '123.' false
     * '12a,34' false
     * '123,45,67' false
     * 'abc' false
     */
    if (/^\d+([,.]\d+)?$/.test(part)) {
      return <React.Fragment key={i}>{thousandsSeparator({ number: part })}</React.Fragment>
    }
    return part;
  });
  return formattedParts.filter(Boolean);
}