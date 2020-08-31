import React from "react";

import { NotificationManager } from "react-notifications";
import { serveFile } from "./utils";
import {
  InputFileSpecification,
  ColumnSpecification,
  BackButton,
  SubmitButton,
} from "./subcomponents";

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
  }

  componentWillMount() {
    this.setState({
      column_id: "",
      column_value: "",
      column_sort: "",
      column_kind: "",
      data_file: "",
      loading: false,
    });
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
      process.env.FRESH_API_URL + "?" + params.toString(),
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
            <span>features = extract_features(df,</span>
            <ColumnSpecification
              identifier="column_id"
              onChange={this.handleChange}
              value={this.state.column_id}
            />
            <span>,</span>
            <ColumnSpecification
              identifier="column_sort"
              onChange={this.handleChange}
              value={this.state.column_sort}
            />
            <span>,</span>
          </span>
          <br />
          <span className="whitespace-no-wrap">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;
            <ColumnSpecification
              identifier="column_value"
              onChange={this.handleChange}
              value={this.state.column_value}
            />
            <span>,</span>
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
