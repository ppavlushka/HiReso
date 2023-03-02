import PropTypes from "prop-types";
import classNames from "classnames";
import { useField } from "formik";
import { ExclamationCircleIcon } from "@heroicons/react/solid";

const Input = ({ type = "", label = "", className = "", ...props }) => {
  const [field, meta] = useField(props);
  const error = meta?.touched && meta?.error;

  return (
    <div className={classNames(className, "flex flex-col space-y-1")}>
      {label ? (
        <label
          htmlFor="email"
          className="font-semibold text-[15px] text-black dark:text-white mb-1"
        >
          {label}
        </label>
      ) : null}

      <div className="flex-1">
        {type === "textarea" ? (
          <textarea
            {...field}
            {...props}
            className={classNames(
              "w-full rounded-[10px] p-3.5 truncate border placeholder:text-custom-placeholder focus:outline-none transition disabled:opacity-75 disabled:cursor-not-allowed disabled:pointer-events-none",
              error
                ? "border-danger text-danger focus:border-danger focus:ring-danger"
                : "border-custom-border text-custom-inputtext  bg-custom-inputbg"
            )}
          />
        ) : (
          <div className="relative">
            <input
              {...field}
              {...props}
              type={type}
              className={classNames(
                "w-full rounded-[10px] p-3.5 truncate border placeholder:text-custom-placeholder focus:outline-none transition disabled:opacity-75 disabled:cursor-not-allowed disabled:pointer-events-none",
                error
                  ? "border-danger text-danger focus:border-danger focus:ring-danger"
                  : "border-custom-border text-custom-inputtext  bg-custom-inputbg"
              )}
            />
            {error && type !== "number" ? (
              <span className="pr-2 absolute right-0 top-1/2 -translate-y-1/2">
                <ExclamationCircleIcon className="w-6 h-6 text-danger" />
              </span>
            ) : null}
          </div>
        )}
      </div>

      {error ? (
        <p name="email" className="text-danger text-sm first-letter:uppercase">
          {error}
        </p>
      ) : null}
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
  className: PropTypes.string,
};

export default Input;
