import React from "react";
const variantClasses = {
  h1: "font-black md:text-[48px] sm:text-[48px] text-[60px]",
  h2: "font-extrabold sm:text-[28px] md:text-[30px] text-[32px]",
  h3: "font-bold sm:text-[24px] md:text-[26px] text-[28px]",
  h4: "font-bold sm:text-[20px] md:text-[22px] text-[24px]",
  h5: "font-bold sm:text-[18px] md:text-[20px] text-[22px]",
  h6: "font-medium text-[18px]",
  body1: "text-[16px]",
  body2: "text-[14px]",
  body3: "font-normal text-[12px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
