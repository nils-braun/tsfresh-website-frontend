import React from "react";
import InteractiveTerminal from "./interactive";
import NonInteractiveTerminal from "./noninteractive";

export default class Hero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      interactive: true,
    };
  }

  submitForm(evt) {
    console.log("ok");
    evt.preventDefault();
    return false;
  }

  toggleInteractive() {
    this.setState({
      interactive: !this.state.interactive,
    });
  }

  render() {
    return (
      <div className="container mx-auto">
        <div className="text-center px-3 lg:px-0">
          <h1 className="my-4 text-2xl md:text-3xl lg:text-5xl font-black leading-tight">
            Extract Features on Time Series Easily
          </h1>
          <p className="leading-normal text-gray-800 text-base md:text-xl lg:text-2xl mb-8">
            Automatically extract hundreds of relevant features to solve your
            time series problem with ease
          </p>
        </div>

        <div className="flex items-center w-full mx-auto content-end">
          <div className="browser-mockup flex flex-1 m-6 md:px-0 md:m-12 w-1/2 rounded shadow-xl">
            {this.state.interactive ? (
              <InteractiveTerminal
                onClick={this.toggleInteractive.bind(this)}
                onSubmit={this.submitForm.bind(this)}
              />
            ) : (
              <NonInteractiveTerminal
                onClick={this.toggleInteractive.bind(this)}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}
