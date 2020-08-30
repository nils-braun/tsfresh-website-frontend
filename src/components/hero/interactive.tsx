import React from "react";

import { NotificationManager } from "react-notifications";

function WithLabel({ children }) {
  return (
    <>
      <span className="text-blue-600">"</span>
      <label className="w-5 py-2 bg-black text-blue-600 rounded-lg shadow-lg">
        {children}
      </label>
      <span className="text-blue-600">"</span>
    </>
  );
}

function Spinner() {
  return (
    <svg
      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  );
}

function serveFile(blob) {
  // "Fake" downloading a file
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "result.csv";
  document.body.appendChild(a);
  a.click();
  a.remove();
}

export default class InteractiveTerminal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      column_id: "",
      column_value: "",
      column_sort: "",
      column_kind: "",
      loading: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });

    if (target.type == "text") {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      context.font = window
        .getComputedStyle(target, null)
        .getPropertyValue("font");

      const width = Math.max(context.measureText(value).width, 15);
      target.style.width = Math.ceil(width) + "px";
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const rawData = [...formData.entries()];
    let params = new URLSearchParams(
      rawData.filter((x) => x[1] != "" && x[0] != "data_file")
    );

    if (formData.get("data_file").name === "") {
      NotificationManager.error("You need to choose a file", "Error!");
      return;
    }

    if (params.toString() === "") {
      NotificationManager.error(
        "You need to set at least one of the columns",
        "Error!"
      );
      return;
    }

    this.setState({ loading: true });
    fetch(
      "https://backend-kus76h2pea-uc.a.run.app/extraction?" + params.toString(),
      {
        method: "POST",
        body: formData,
      }
    )
      .then((response) => {
        if (!response.ok) {
          response
            .json()
            .then((json) => {
              NotificationManager.error(json["detail"], "Error!");
            })
            .catch((error) => {
              NotificationManager.error(
                "Unexpected exception: " + response.statusText,
                "Error!"
              );
            });
        } else {
          response.blob().then(serveFile);
        }
      })
      .catch((error) => {
        NotificationManager.error(
          "Unexpected exception. Please try again later!",
          "Error!"
        );
      })
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    return (
      <form
        autoComplete="off"
        onSubmit={this.handleSubmit}
        className="bg-black w-full h-full"
      >
        <p className="text-white font-mono overflow-x-auto text-base p-10">
          <span className="whitespace-no-wrap">
            <span className="text-green-500 font-bold">from</span>{" "}
            <span className="text-blue-500 font-bold">tsfresh</span>{" "}
            <span className="text-green-500 font-bold">import</span>{" "}
            extract_features
          </span>
          <br />
          <span className="whitespace-no-wrap">
            <span className="text-green-500 font-bold">import</span>{" "}
            <span className="text-blue-500 font-bold">pandas</span>{" "}
            <span className="text-green-500 font-bold">as</span> pd
          </span>{" "}
          <br />
          <br />
          <span className="whitespace-no-wrap">
            df = pd.read_csv(
            <WithLabel>
              <span className="cursor-pointer">
                {this.state.data_file ? this.state.data_file : "Select a file"}
              </span>
              <input
                type="file"
                accept=".csv"
                name="data_file"
                className="hidden"
                onChange={this.handleChange}
              />
            </WithLabel>
            )
          </span>
          <br />
          <br />
          <span className="whitespace-no-wrap text-gray-600">
            # Replace the column names as appropriate
          </span>
          <br />
          <span className="whitespace-no-wrap text-gray-600">
            # Leave the column names empty
          </span>
          <br />
          <span className="whitespace-no-wrap text-gray-600">
            # if you don't have them in your data
          </span>
          <br />
          <span className="whitespace-no-wrap">
            features = extract_features(df, column_id=
            <WithLabel>
              <input
                name="column_id"
                type="text"
                onChange={this.handleChange}
                value={this.state.column_id}
                className="w-5 bg-black cursor-pointer focus:outline-none"
              />
            </WithLabel>
            , column_sort=
            <WithLabel>
              <input
                name="column_sort"
                type="text"
                onChange={this.handleChange}
                value={this.state.column_sort}
                className="w-5 bg-black cursor-pointer focus:outline-none"
              />
            </WithLabel>
            ,
          </span>
          <br />
          <span className="whitespace-no-wrap">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp; column_value=
            <WithLabel>
              <input
                name="column_value"
                type="text"
                value={this.state.column_value}
                onChange={this.handleChange}
                className="w-5 bg-black cursor-pointer focus:outline-none"
              />
            </WithLabel>
            , column_kind=
            <WithLabel>
              <input
                name="column_kind"
                type="text"
                onChange={this.handleChange}
                value={this.state.column_kind}
                className="w-5 bg-black cursor-pointer focus:outline-none"
              />
            </WithLabel>
            )
          </span>
        </p>
        <button
          type="button"
          onClick={this.props.onClick}
          className="mr-10 mb-10 float-right bg-tsfresh-green hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Back to example
        </button>
        <button
          type="submit"
          // className=" transition ease-in-out duration-150"
          className="inline-flex items-center mr-10 mb-10 float-right bg-tsfresh-green hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          { this.state.loading ? <Spinner/> : null } Submit
        </button>
      </form>
    );
  }
}
