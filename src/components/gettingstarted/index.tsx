import HLine from "../sub/hline";

function EndButton({ title }) {
  return (
    <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow">
      <div className="flex items-center justify-center">
        <span className="mx-auto lg:mx-0 hover:underline text-gray-800 font-extrabold text-xl rounded my-3 py-4 px-8">
          {title}
        </span>
      </div>
    </div>
  );
}

export default function GettingStarted() {
  return (
    <section className="bg-white border-b py-8">
      <div className="container mx-auto flex flex-wrap pt-4 pb-12">
        <h2 className="w-full my-2 text-4xl font-black leading-tight text-center text-gray-800">
          Getting Started
        </h2>
        <HLine />

        <a
          className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink"
          href="https://tsfresh.readthedocs.io/en/latest/text/quick_start.html"
        >
          <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
            <p className="w-full text-gray-600 text-xs md:text-sm px-6 mt-6">
              FEATURE EXTRACTION
            </p>
            <div className="w-full mb-2 font-bold text-xl text-gray-800 px-6">
              Learn how to extract features
            </div>
            <p className="text-gray-600 text-base px-6 mb-5">
              Follow our QuickStart tutorial and set up your first feature
              extraction project on time series.
            </p>
          </div>
          <EndButton title="Tutorial" />
        </a>

        <a
          href="https://tsfresh.readthedocs.io/en/latest/"
          className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink"
        >
          <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
            <p className="w-full text-gray-600 text-xs md:text-sm px-6 mt-6">
              FEATURE SELECTION
            </p>
            <div className="w-full mb-2 font-bold text-xl text-gray-800 px-6">
              Understand how we select relevant features
            </div>
            <p className="text-gray-600 text-base px-6 mb-5">
              Read through the documentation on how the feature selection and
              all the other algorithms work.
            </p>
          </div>
          <EndButton title="Documentation" />
        </a>

        <a
          href="https://nils-braun.github.io/tsfresh-on-cluster-1/"
          className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink"
        >
          <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
            <p className="w-full text-gray-600 text-xs md:text-sm px-6 mt-6">
              LARGE DATA
            </p>
            <div className="w-full mb-2 font-bold text-xl text-gray-800 px-6">
              Use tsfresh on large data samples
            </div>
            <p className=" text-gray-600 text-base px-6 mb-5">
              Find out, how to apply tsfresh on large data samples using
              multiprocessing, dask or spark.
            </p>
          </div>
          <EndButton title="Think big" />
        </a>
      </div>
    </section>
  );
}
