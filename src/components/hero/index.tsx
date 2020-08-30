export default function Hero() {
  return (
    <div className="container mx-auto">
      <div className="text-center px-3 lg:px-0">
        <h1 className="my-4 text-2xl md:text-3xl lg:text-5xl font-black leading-tight">
          Extract Features on Time Series Easily
        </h1>
        <p className="leading-normal text-gray-800 text-base md:text-xl lg:text-2xl mb-8">
          Automatically extract hundreds of relevant features to solve your time
          series problem with ease
        </p>
      </div>

      <div className="flex items-center w-full mx-auto content-end">
        <div className="browser-mockup flex flex-1 m-6 md:px-0 md:m-12 w-1/2 rounded shadow-xl">
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
                <span className="text-blue-600">"id"</span>,
                column_sort=
                <span className="text-blue-600">"time"</span>)
              </span>
              <br />
            </p>
            {/* <button className="mr-10 mb-10 float-right bg-tsfresh-green hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Test with your own data
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
