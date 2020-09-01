import { FC } from "react";
import WithLabel from "./withlabel";

interface ColumnSpecificationProps {
  identifier: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const ColumnSpecification: FC<ColumnSpecificationProps> = (props) => (
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

export default ColumnSpecification;
