interface ZmButtonProps {
  text: string;
  type?: "submit" | "button" | "reset";
  classes?: string;
}
const ZmButton = ({ text, type, classes }: ZmButtonProps) => {
  return (
    <button
      type={type}
      className={`p-2 w-full bg-zm-p font-semibold text-white rounded-lg hover:bg-zm-p-h transition duration-200 ${classes}`}
    >
      {text}
    </button>
  );
};

export default ZmButton;
