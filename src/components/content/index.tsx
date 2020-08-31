export default function Content() {
  return (
    <>
      <section className="bg-gray-100 border-b py-8">
        <div className="container max-w-5xl mx-auto m-8">
          <h2 className="w-full my-2 text-5xl font-black leading-tight text-center text-gray-800">
            Extract <span className="text-tsfresh-green-500">Relevant</span>{" "}
            Features Automatically
          </h2>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>

          <div className="flex flex-wrap items-center">
            <div className="w-full sm:w-1/2 p-6">
              <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                Do not waste time on feature engineering
              </h3>
              <p className="text-gray-600 mb-8">
                tsfresh extracts hundreds of field-tested features on your time
                series data in seconds, so you can spend more time on using
                these features.
              </p>
            </div>
            <div data-aos="fade-up" className="w-full sm:w-1/2 p-6">
              <img className="w-full" src={process.env.ASSET_PREFIX + "/images/feature_extraction.svg"}/>
            </div>
          </div>

          <div className="flex flex-wrap flex-col-reverse sm:flex-row items-center">
            <div data-aos="fade-down" className="w-full sm:w-1/2 p-6">
              <img className="w-full" src={process.env.ASSET_PREFIX + "/images/feature_selection.svg"}/>
            </div>
            <div className="w-full sm:w-1/2 p-6 mt-6">
              <div className="align-middle">
                <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                  Use only, what is relevant for you
                </h3>
                <p className="text-gray-600 mb-8">
                  Using statistical hypothesis tests, tsfresh knows which of the
                  features are relevant to solve your problem, so it can tailor
                  down its large feature library for your use case.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
