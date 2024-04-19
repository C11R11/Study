import React from "react";

type HelloWorldProps = {
  title: string;
};

type HelloWorldState = {
  value: number;
};

export default class HelloWorld extends React.Component<
  HelloWorldProps,
  HelloWorldState
> {
  state: HelloWorldState = {
    value: 0,
  };

  private AddOne(that: HelloWorld) {
    console.log("Add one to value ", that.state.value);
    that.setState({ value: that.state.value + 1 });
    console.log("equals ", that.state.value);
  }

  render() {
    const { title } = this.props;

    return (
      <div className="HelloWorld">
        <h1>Props title = "{title}"</h1>
        <span> value state counter: {this.state.value}</span>
        <br></br>
        <button onClick={() => this.AddOne(this)}> Add one</button>
        {this.props.children}
      </div>
    );
  }
}
