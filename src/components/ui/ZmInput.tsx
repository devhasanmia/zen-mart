import { UseFormRegisterReturn } from "react-hook-form";

interface ZmInputProps {
  label?: string;
  type?: string;
  classes?: string;
  placeholder?: string;
  required?: boolean;
  register?: UseFormRegisterReturn;
  error?: string;
}

const ZmInput = ({
  label,
  type,
  classes,
  placeholder,
  required,
  register,
  error,
}: ZmInputProps) => {
  return (
    <div>
      <label
        htmlFor={label}
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <input
        id={label}
        {...register}
        className={`mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-zm-p focus:border-zm-p ${classes}`}
        type={type}
        placeholder={placeholder}
        required={required}
      />
        <div className="text-red-500 text-xs">{error}</div>
    </div>
  );
};

export default ZmInput;
