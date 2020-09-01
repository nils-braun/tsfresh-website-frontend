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

export default WithLabel;
