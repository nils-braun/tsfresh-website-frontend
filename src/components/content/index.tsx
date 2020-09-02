import { FC } from "react";

export interface ContentProps {}

const Content: FC<ContentProps> = () => (
  <section className="bg-gray-100 border-b py-8">
    <div className="container max-w-5xl mx-auto m-8">
      <h2 className="w-full my-2 text-5xl font-black leading-tight text-center text-gray-800">
        Extract Features{" "}
        <span className="text-tsfresh-green-500">Automatically</span>
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
            tsfresh extracts features on your time series data simple and fast,
            so you can spend more time on using these features.
          </p>
        </div>
        <div data-aos="fade-up" className="w-full sm:w-1/2 p-6">
          <img
            className="w-full"
            src={process.env.ASSET_PREFIX + "/images/feature_extraction.svg"}
          />
        </div>
      </div>

      <div className="flex flex-wrap flex-col-reverse sm:flex-row items-center">
        <div data-aos="fade-down" className="w-full sm:w-1/2 p-6">
          <img
            className="w-full"
            src={process.env.ASSET_PREFIX + "/images/features.svg"}
          />
        </div>
        <div className="w-full sm:w-1/2 p-6 mt-6">
          <div className="align-middle">
            <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
              Use hundreds of field tested features
            </h3>
            <p className="text-gray-600 mb-8">
              The feature library in tsfresh contains features calculators from
              multiple domains, so you can get the best out of your data
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Content;
