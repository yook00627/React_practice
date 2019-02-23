import React, { Component } from "react";
import "./App.scss";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
      sorted: false
    };
  }

  componentDidMount() {
    fetch("https://fakerestapi.azurewebsites.net/API/Activities")
      .then(data => {
        return data.json();
      })
      .then(data => {
        this.setState({
          data
        });
      });
  }

  handleClick = id => {
    const data = this.state.data;
    const filteredData = data.filter(val => val.ID !== id);
    console.log("filtered" + filteredData);
    this.setState({
      data: filteredData
    });
  };

  handleSort = data => {
    let s = this.state.sorted;
    const sorted = data.sort(function(a, b) {
      return s ? b.ID - a.ID : a.ID - b.ID;
    });
    this.setState({
      data: sorted,
      sorted: !this.state.sorted
    });
  };

  render() {
    const { data } = this.state;

    if (data) {
      let item = data[0].DueDate;
      let thing = new Date(item);
      console.log(thing);
      console.log(item);
      console.log(`todos: ${data}`);
      return (
        <div className="todolist">
          <h1 className="todolist__header"> Todos </h1>{" "}
          <button
            className="todolist__button"
            onClick={() => this.handleSort(data)}
          >
            {" "}
            Sort{" "}
          </button>{" "}
          {data.map(todo => (
            <p
              className="todolist__item"
              onClick={() => this.handleClick(todo.ID)}
            >
              {" "}
              {todo.Title}{" "}
            </p>
          ))}{" "}
        </div>
      );
    } else {
      return <p> Need Todos </p>;
    }
  }
}

export default App;
