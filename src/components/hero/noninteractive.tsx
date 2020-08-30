export default function NonInteractiveTerminal({ onClick }) {
    return (
      <div className="bg-black w-full h-full">
        <p className="text-white font-mono overflow-x-auto text-base p-10">
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
            load_robot_execution_failures
          </span>{" "}
          <br />
          <br />
          <span className="whitespace-no-wrap">
            timeseries, y = load_robot_execution_failures()
          </span>
          <br />
          <br />
          <span className="whitespace-no-wrap">
            features = extract_relevant_features(timeseries, y, column_id=
            <span className="text-blue-600">"id"</span>, column_sort=
            <span className="text-blue-600">"time"</span>)
          </span>
          <br />
        </p>
        <button
          onClick={onClick}
          className="mr-10 mb-10 float-right bg-tsfresh-green hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Test with your own data
        </button>
      </div>
    );
  }