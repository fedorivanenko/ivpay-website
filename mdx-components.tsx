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
      <Heading as="h3" size="32" className="mb-5 mt-6">
        {children}
      </Heading>
    ),
    h4: ({ children }) => (
      <Heading as="h4" size="32" className="mb-5 mt-6">
        {children}
      </Heading>
    ),
    p: ({ children }) => <Text className="mb-4 leading-relaxed">{children}</Text>,
    ol: ({ children }) => (
      <ol className="list-outside list-decimal mt-3">{children}</ol>
    ),
    ul: ({ children }) => (
      <ul className="list-outside list-disc mt-3">{children}</ul>
    ),
    li: ({ children }) => (
        <li className="ml-8 mt-3 leading-relaxed">
          {children}
        </li>
    ),
    strong: ({children}) => (
      <strong className="uppercase">
        {children}
      </strong>
    ),
    ...components,
  };
}
