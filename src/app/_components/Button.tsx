import { cva, type VariantProps } from "class-variance-authority";
import Link, { LinkProps as NextLinkProps } from "next/link";
import {
  ComponentPropsWithoutRef,
  HTMLAttributeAnchorTarget,
  MouseEventHandler,
  ReactNode,
} from "react";

import cn from "@/lib/clsx";

const buttonVariants = cva(
  "inline-block rounded-full transition-all duration-500",
  {
    variants: {
      variant: {
        primary:
          "bg-primary-400 px-6 py-3 hover:bg-primary-200 text-base text-white disabled:text-neutral-500 disabled:bg-neutral-300",
        secondary:
          "border-primary-400 px-6 py-3 hover:bg-primary-50 text-base text-primary-400 disabled:bg-neutral-300 text-primary-400 disabled:text-neutral-500",
        tertiary:
          "text-base text-black hover:text-primary-400 text-black disabled:text-neutral-500",
        quartiary:
          "text-base px-6 py-3 text-primary-400 bg-white hover:bg-primary-50 disabled:bg-neutral-400 disabled:text-white",
      },
    },
  },
);

interface LinkButtonProps
  extends NextLinkProps,
    VariantProps<typeof buttonVariants> {
  children?: ReactNode;
  href: string;
  scroll?: boolean;
  target?: HTMLAttributeAnchorTarget;
  className?: string;
  download?: boolean;
  disabledProgressBar?: boolean;
}

interface ButtonProps
  extends ComponentPropsWithoutRef<"button">,
    VariantProps<typeof buttonVariants> {
  children?: ReactNode;
  type?: "button" | "reset" | "submit";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  isDisabled?: boolean;
  className?: string;
}

export default function LinkButton({
  children,
  href,
  variant,
  className,
  target,
  scroll,
  download,
  disabledProgressBar,
  prefetch,
}: Readonly<LinkButtonProps>) {
  return (
    <Link
      href={href}
      className={cn(buttonVariants({ variant }), className)}
      target={target}
      scroll={scroll}
      download={download}
      data-disable-nprogress={disabledProgressBar}
      prefetch={prefetch}
    >
      {children}
    </Link>
  );
}

export function Button({
  children,
  type,
  onClick,
  isDisabled,
  className,
  variant,
}: Readonly<ButtonProps>) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      className={cn(buttonVariants({ variant }), className)}
    >
      {children}
    </button>
  );
}
