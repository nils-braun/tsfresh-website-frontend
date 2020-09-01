import { FC } from "react";

interface BackButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const BackButton: FC<BackButtonProps> = (props) => (
  <button
    type="button"
    onClick={props.onClick}
    className="ml-10 mb-10 float-left bg-tsfresh-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
  >
    Back to example
  </button>
);

export default BackButton;
