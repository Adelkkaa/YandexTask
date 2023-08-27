import { Typography } from "../typography";
import cn from "classnames";
import { forwardRef } from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  errorMessage?: string;
  supportText?: string;
}

export const Input = forwardRef<any, Props>(function ForwardInput(
  { label, errorMessage, supportText, id, disabled, className, ...other },
  ref
) {
  return (
    <div
      className={cn(
        "form-group w-full pt-2",
        {
          "pointer-events-none": disabled,
        },
        className
      )}
    >
      <input
        className={cn(
          "form__field w-full border-b rounded-none border-white pt-2.5 pb-2.5 text-textS hover:border-green focus:border-green focus:pb-2.5",
          { "border-gray-4 text-gray-4": disabled },
          { "!border-red": !!errorMessage }
        )}
        placeholder={label}
        id={id}
        ref={ref}
        {...other}
      ></input>
      {label && (
        <label
          className={cn(
            "form__label pointer-events-none",
            { "border-gray-4 !text-gray-4": disabled },
            { "!text-red": !!errorMessage }
          )}
          htmlFor={id}
        >
          {label}
        </label>
      )}
      {(supportText || errorMessage) && (
        <Typography
          variant="textS"
          className={cn(
            "mt-1",
            {
              "text-gray-3": !disabled,
            },
            {
              "text-gray-4": disabled,
            },
            { "text-red": !!errorMessage }
          )}
        >
          {errorMessage || supportText}
        </Typography>
      )}
    </div>
  );
});
