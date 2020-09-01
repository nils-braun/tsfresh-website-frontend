import { FC } from "react";

interface WithLabelProps {}

const WithLabel: FC<WithLabelProps> = (props) => (
  <>
    <span className="text-blue-600">"</span>
    <label className="w-5 py-2 bg-black text-blue-600 rounded-lg shadow-lg">
      {props.children}
    </label>
    <span className="text-blue-600">"</span>
  </>
);

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

interface BackButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const BackButton: FC<BackButtonProps> = (props) => (
  <button
    type="button"
    onClick={props.onClick}
    className="ml-10 mb-10 float-left bg-tsfresh-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
  >
    Back to example
  </button>
);

interface ColumnSpecificationProps {
  identifier: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export const ColumnSpecification: FC<ColumnSpecificationProps> = (props) => (
  <>
    <span>{props.identifier}=</span>
    <WithLabel>
      <input
        name={props.identifier}
        type="text"
        onChange={props.onChange}
        value={props.value}
        className="w-5 bg-black cursor-pointer focus:outline-none"
      />
    </WithLabel>
  </>
);

interface InputFileSpecificationProps {
  data_file: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputFileSpecification: FC<InputFileSpecificationProps> = (
  props
) => (
  <WithLabel>
    <span className="cursor-pointer">
      {props.data_file ? props.data_file : "Select a file"}
    </span>
    <input
      type="file"
      accept=".csv"
      name="data_file"
      className="hidden"
      onChange={props.onChange}
    />
  </WithLabel>
);

interface SubmitButtonProps {
  loading: boolean;
}

export const SubmitButton: FC<SubmitButtonProps> = (props) => (
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
