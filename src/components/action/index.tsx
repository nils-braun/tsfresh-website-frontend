import { FC } from 'react';

export interface ActionProps {};

const Action: FC<ActionProps> = () => (
  <section className="gradient w-full mx-auto text-center pt-6 pb-12">
    <h2 className="w-full my-2 text-4xl font-black leading-tight text-center text-white">
      Extract Features Now
    </h2>
    <div className="w-full mb-4">
      <div className="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
    </div>

    <h3 className="my-4 text-2xl font-bold">
      Install tsfresh via <code>pip</code> or <code>conda</code>.
    </h3>

    <div data-aos="zoom-out" className="mx-auto w-1/2 bg-black rounded my-6 py-4 px-8 shadow-lg">
      <p className="text-left text-gray-200 font-mono ">
        <span className="font-bold text-orange-700">$ </span>pip install -U
        tsfresh
        <br />
        # or <br />
        <span className="font-bold text-orange-700">$ </span>conda install
        -c conda-forge tsfresh
      </p>
    </div>
  </section>
);

export default Action;