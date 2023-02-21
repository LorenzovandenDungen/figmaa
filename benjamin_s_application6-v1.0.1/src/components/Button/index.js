import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder10: "rounded-radius10",
  icbCircleBorder30: "rounded-radius30",
};
const variants = {
  FillIndigoA200: "bg-indigo_A200 text-white_A700",
  OutlineWhiteA700: "border border-solid border-white_A700 text-white_A700",
  icbFillWhiteA70063: "bg-white_A700_63",
  icbFillTealA4006c: "bg-teal_A400_6c",
  icbFillPinkA10063: "bg-pink_A100_63",
};
const sizes = { sm: "p-[7px]", md: "p-[12px]", smIcn: "p-[18px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["RoundedBorder10", "icbCircleBorder30"]),
  variant: PropTypes.oneOf([
    "FillIndigoA200",
    "OutlineWhiteA700",
    "icbFillWhiteA70063",
    "icbFillTealA4006c",
    "icbFillPinkA10063",
  ]),
  size: PropTypes.oneOf(["sm", "md", "smIcn"]),
};
Button.defaultProps = {
  className: "",
  shape: "RoundedBorder10",
  variant: "FillIndigoA200",
  size: "smIcn",
};

export { Button };
