import { FC } from "react";

interface NonInteractiveTerminalProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const NonInteractiveTerminal: FC<NonInteractiveTerminalProps> = (props) => (
  <div className="bg-black w-full h-full overflow-x-auto">
    <p className="text-white font-mono text-base p-10">
      <span className="whitespace-no-wrap">
        <span className="text-green-500 font-bold">from</span>{" "}
        <span className="text-blue-500 font-bold">tsfresh</span>{" "}
        <span className="text-green-500 font-bold">import</span>{" "}
        extract_relevant_features
      </span>
      <br />
      <span className="whitespace-no-wrap">
        <span className="text-green-500 font-bold">from</span>{" "}
        <span className="text-blue-500 font-bold">
          tsfresh.examples.robot_execution_failures
        </span>{" "}
        <span className="text-green-500 font-bold">import</span>{" "}
        <span>load_robot_execution_failures</span>
      </span>{" "}
      <br />
      <br />
      <span className="whitespace-no-wrap">
        timeseries, y = load_robot_execution_failures()
      </span>
      <br />
      <br />
      <span className="whitespace-no-wrap">
        <span>
          features = extract_relevant_features(timeseries, y, column_id=
        </span>
        <span className="text-blue-600">"id"</span>, column_sort=
        <span className="text-blue-600">"time"</span>)
      </span>
      <br />
    </p>
    <button
      onClick={props.onClick}
      className="ml-10 mb-10 float-left bg-tsfresh-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
    >
      Test with your own data
    </button>
  </div>
);

export default NonInteractiveTerminal;
