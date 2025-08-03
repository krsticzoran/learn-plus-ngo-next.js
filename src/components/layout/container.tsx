import React, { ElementType, ReactNode, CSSProperties } from "react";

interface ContainerProps<T extends ElementType> {
  as?: T;
  className?: string;
  children?: ReactNode;
  style?: CSSProperties;
}

export function Container<T extends ElementType = "div">({
  as,
  className = "",
  children,
  style,
}: ContainerProps<T>) {
  const Component = as || "div";

  return (
    <Component
      className={`mx-auto max-w-[1570px] w-[95%] sm:w-[96%] md:w-[97%] xl:w-[98%] ${className}`}
      style={style}
    >
      {children}
    </Component>
  );
}
