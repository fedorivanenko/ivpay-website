import type { MDXComponents } from "mdx/types";
import { Heading } from "./components/ui/heading";
import { Text } from "./components/ui/text";
import { MotionWrapper } from "./components/motion/motion-wrapper";
import { AnimatedTextWrapper } from "./components/motion/animatedTextWrapper";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <Heading as="h1" size="64" className="mb-2.5 sm:mb-4">
        {children}
      </Heading>
    ),
    h2: ({ children }) => (
      <Heading as="h2" size="48" className="mb-2.5 sm:mb-4 mt-8">
        {children}
      </Heading>
    ),
    h3: ({ children }) => (
      <Heading as="h3" size="32" className="mb-5 mt-4">
        {children}
      </Heading>
    ),
    h4: ({ children }) => (
      <Heading as="h4" size="32" className="mb-5 mt-4">
        {children}
      </Heading>
    ),
    p: ({ children }) => <Text className="mb-4">{children}</Text>,
    ol: ({ children }) => (
      <ol className="mb-5 list-outside list-decimal">{children}</ol>
    ),
    ul: ({ children }) => (
      <ul className="mb-5 list-outside list-disc">{children}</ul>
    ),
    li: ({ children }) => (
      <MotionWrapper>
        <li className="mb-5 ml-5">
          <AnimatedTextWrapper>{children}</AnimatedTextWrapper>
        </li>
      </MotionWrapper>
    ),
    ...components,
  };
}
