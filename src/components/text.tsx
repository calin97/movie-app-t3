import { cva, VariantProps } from "class-variance-authority";
import React, { forwardRef } from "react";

const variants = {
  variant: {
    h1: "text-5xl font-bold leading-[7rem] tracking-tighest",
    h2: "text-4xl font-bold leading-[5rem] tracking-tight",
    h3: "text-3xl font-bold leading-[4.5rem] tracking-normal",
    h4: "text-2xl font-bold leading-[3rem] tracking-normal",
    h5: "text-xl font-bold leading-8 tracking-normal",
    h6: "text-lg font-bold leading-6 tracking-normal",
    "subtitle-1": "font-bold leading-6 tracking-broad",
    "subtitle-2": "text-md font-bold leading-6 tracking-broad",
    "body-1": "leading-6 tracking-spacious",
    "body-2": "text-md font-medium leading-5 tracking-spacious",
    link: "font-medium leading-6 tracking-wide underline text-blue-main",
    description: "text-lg tracking-wide leading-6 italic",
    instruction: "text-md leading-5 tracking-wide italic",
    caption: "text-sm font-medium leading-[0.875rem] tracking-wider",
    small: "text-xs leading-3 tracking-widest",
  },
};

export type TextVariant = keyof typeof variants.variant;

const textStyles = cva(["block"], {
  variants,
  defaultVariants: {
    variant: "body-1",
  },
});

export interface TextProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof textStyles> {
  as?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "p"
    | "span"
    | "small"
    | "b"
    | "strong";
}

export const Text = forwardRef<HTMLHeadingElement, TextProps>(
  ({ as = "span", variant, ...props }, ref) => {
    let className = textStyles({ variant, className: props.className });

    if (!variant && variants.variant[as as TextVariant]) {
      className = textStyles({
        variant: as as TextVariant,
        className: props.className,
      });
    }

    return React.createElement(as, {
      ...props,
      className,
      ref,
    });
  }
);

Text.displayName = "Text";
