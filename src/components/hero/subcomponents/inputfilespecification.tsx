import { FC } from "react";
import WithLabel from "./withlabel";

interface InputFileSpecificationProps {
  data_file: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputFileSpecification: FC<InputFileSpecificationProps> = (props) => (
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

export default InputFileSpecification;
