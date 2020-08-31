import { FC } from 'react';

import Card from "../sub/card";
import HLine from "../sub/hline";

export interface UseCaseProps {};

const UseCase: FC<UseCaseProps> = () => (
  <section className="bg-white border-b py-12 ">
    <div className="container mx-auto flex flex-wrap items-center justify-between pb-12">
      <h2 className="w-full my-2 text-3xl font-black leading-tight text-center text-gray-800 lg:mt-8">
        Use Cases
      </h2>
      <HLine/>

      <Card title="Classification">
        Use the extracted relevant features
        to train your usual ML model to distinguish
        between different time series classes.
      </Card>

      <Card title="Forecasting">
        No need for complicated methods!
        With <code>tsfresh</code> your time series
        forecasting problem becomes a usual
        regression problem.
      </Card>

      <Card title="Outlier Detection">
        Detect interesting patterns and outliers
        in your time series data by clustering
        the extracted features or training an ML
        method on them.
      </Card>
    </div>

    <p className="text-lg p-3 text-center"><code>tsfresh</code> is the basis for your next time series project!</p>
  </section>
);

export default UseCase;
