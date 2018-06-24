import React, { Component } from 'react';

export default class App extends Component {
  render() {
    const { sampleReducer } = this.props;
    return (
      <div className="container">
        <section className="section">
          <h1 className="title">Hello, Redux Boilerplate</h1>
          <hr/>
          <p>
            This is a sample application made with {sampleReducer}, compiled with webpack and babel.
          </p>
        </section>
      </div>
    );
  }
}
