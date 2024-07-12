import { useEffect, useRef } from 'react';

const useAriaLabel = (ref: React.RefObject<HTMLSpanElement>) => {
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

  export default useAriaLabel