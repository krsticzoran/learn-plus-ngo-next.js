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
    <Component
      className={`mx-auto max-w-[1570px] w-[95%] sm:w-[96%] md:w-[97%] xl:w-[98%] ${className}`}
    >
      {children}
    </Component>
  );
}
