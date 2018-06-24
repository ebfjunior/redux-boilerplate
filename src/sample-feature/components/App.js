import React from 'react';
import PropTypes from 'prop-types';


const App = ({ sampleReducer }) => (
  <div className="container">
    <section className="section">
      <h1 className="title">Hello, Redux Boilerplate</h1>
      <hr />
      <p>
        This is a sample application made with {sampleReducer}, compiled with webpack and babel.
      </p>
    </section>
  </div>
);

App.propTypes = {
  sampleReducer: PropTypes.string.isRequired,
};

export default App;
