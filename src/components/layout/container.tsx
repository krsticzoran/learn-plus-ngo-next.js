import React, { ElementType, ReactNode } from "react";

interface ContainerProps<T extends ElementType> {
  as?: T;
  className?: string;
  children?: ReactNode;
}

export function Container<T extends ElementType = "div">({
  as,
  className = "",
  children,
}: ContainerProps<T>) {
  const Component = as || "div";

  return (
    <Component className={`mx-auto max-w-screen-xl px-4 xl:px-8 ${className}`}>
      {children}
    </Component>
  );
}
