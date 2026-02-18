import { type ForwardedRef, type InputHTMLAttributes, forwardRef } from "react";

export const Input = forwardRef(function Input(
  props: InputHTMLAttributes<HTMLInputElement>,
  ref: ForwardedRef<HTMLInputElement>,
) {
  const { className = "", ...rest } = props;
  const commonClasses =
    "h-10 border border-default rounded-base block px-3 sm:text-sm w-full";

  return (
    <input ref={ref} className={`${commonClasses} ${className}`} {...rest} />
  );
});
