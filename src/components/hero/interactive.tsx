import React from "react";

import { NotificationManager } from "react-notifications";
import { serveFile } from "./utils";
import SubmitButton from "./subcomponents/submitbutton";
import BackButton from "./subcomponents/backbutton";
import ColumnSpecification from "./subcomponents/columnspecification";
import InputFileSpecification from "./subcomponents/inputfilespecification";

interface InteractiveTerminalProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

interface InteractiveTerminalState {
  column_id: string;
  column_value: string;
  column_sort: string;
  column_kind: string;
  data_file: string;
  loading: boolean;
}

export default class InteractiveTerminal extends React.Component<
  InteractiveTerminalProps,
  InteractiveTerminalState
> {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      column_id: "",
      column_value: "",
      column_sort: "",
      column_kind: "",
      data_file: "",
      loading: false,
    };
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    switch (name) {
      case "column_id":
        this.setState({
          column_id: value,
        });
        break;
      case "column_value":
        this.setState({
          column_value: value,
        });
        break;
      case "column_kind":
        this.setState({
          column_kind: value,
        });
        break;
      case "column_sort":
        this.setState({
          column_sort: value,
        });
        break;
      case "data_file":
        this.setState({
          data_file: value,
        });
        break;
    }

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
    const rawData = Array.from(formData.entries());
    let params = new URLSearchParams(
      rawData
        .filter(
          ([input_name, input_value]) =>
            input_value != "" && input_name != "data_file"
        )
        .map(([input_name, input_value]) => [input_name, String(input_value)])
    );

    if ((formData.get("data_file") as File).name === "") {
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
    fetch(process.env.FRESH_API_URL + "?" + params.toString(), {
      method: "POST",
      body: formData,
    })
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
        className="bg-black w-full h-full overflow-x-auto"
      >
        <p className="text-white font-mono text-base p-10">
          <span className="whitespace-no-wrap">
            <span className="text-green-500 font-bold">from</span>{" "}
            <span className="text-blue-500 font-bold">tsfresh</span>{" "}
            <span className="text-green-500 font-bold">import</span>{" "}
            <span>extract_features</span>
          </span>
          <br />
          <span className="whitespace-no-wrap">
            <span className="text-green-500 font-bold">import</span>{" "}
            <span className="text-blue-500 font-bold">pandas</span>{" "}
            <span className="text-green-500 font-bold">as</span> <span>pd</span>
          </span>
          <br />
          <br />
          <span className="whitespace-no-wrap">
            <span>df = pd.read_csv(</span>
            <InputFileSpecification
              data_file={this.state.data_file}
              onChange={this.handleChange}
            />
            <span>)</span>
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
            <span>features = extract_features(df, </span>
            <ColumnSpecification
              identifier="column_id"
              onChange={this.handleChange}
              value={this.state.column_id}
            />
            <span>, </span>
            <ColumnSpecification
              identifier="column_sort"
              onChange={this.handleChange}
              value={this.state.column_sort}
            />
            <span>,</span>
          </span>
          <br />
          <span className="whitespace-no-wrap">
            <span style={{ paddingLeft: "17.5em" }}>
              <ColumnSpecification
                identifier="column_value"
                onChange={this.handleChange}
                value={this.state.column_value}
              />
            </span>
            <span>, </span>
            <ColumnSpecification
              identifier="column_kind"
              onChange={this.handleChange}
              value={this.state.column_kind}
            />
            <span>)</span>
          </span>
        </p>
        <BackButton onClick={this.props.onClick} />
        <SubmitButton loading={this.state.loading} />
      </form>
    );
  }
}
