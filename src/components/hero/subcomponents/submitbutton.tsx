import { FC } from "react";

interface SpinnerProps {}

const Spinner: FC<SpinnerProps> = (props) => (
  <svg
    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    ></circle>
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    ></path>
  </svg>
);

interface SubmitButtonProps {
  loading: boolean;
}

const SubmitButton: FC<SubmitButtonProps> = (props) => (
  <button
    type="submit"
    className="inline-flex items-center ml-10 mb-10 float-left bg-tsfresh-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
  >
    Submit
    {props.loading ? (
      <span className="ml-4">
        <Spinner />
      </span>
    ) : null}
  </button>
);

export default SubmitButton;
