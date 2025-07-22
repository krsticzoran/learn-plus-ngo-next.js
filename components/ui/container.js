import React from "react";
import clsx from "clsx";

export function Container({
  as: Component = "div",
  className = "",
  children,
  ...props
}) {
  return (
    <Component
      className={clsx(
        "mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 xl:px-0",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
