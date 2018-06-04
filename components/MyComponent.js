import React from 'react';
import PropTypes from 'prop-types';

MyComponent.propTypes = {
  title: PropTypes.string,
};

MyComponent.defaultProps = {
  title: 'Hello bro!',
};

export default function MyComponent(props) {
  return <h1>{props.title}</h1>;
}
