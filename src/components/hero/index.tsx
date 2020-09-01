import { FC, useState } from "react";
import InteractiveTerminal from "./interactive";
import NonInteractiveTerminal from "./noninteractive";

interface HeroProps {}

const Hero: FC<HeroProps> = (props) => {
  const [interactive, setInteractive] = useState(false);

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
          {interactive ? (
            <InteractiveTerminal onClick={() => setInteractive(false)} />
          ) : (
            <NonInteractiveTerminal onClick={() => setInteractive(true)} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
