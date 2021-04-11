import React from 'react';
import { PropTypes } from 'prop-types';
import { Route } from 'react-router-dom';

const RouteHandler = props => {
  const {
    appRoute: { path, component: RenderComponent, exact }
  } = props;

  return <Route path={path} render={() => <RenderComponent />} exact={exact} />;
};

RouteHandler.propTypes = {
  appRoute: PropTypes.shape({
    path: PropTypes.string.isRequired,
    component: PropTypes.func.isRequired,
    exact: PropTypes.bool
  }).isRequired
};

RouteHandler.defaultProps = {
  exact: true
};

export default RouteHandler;
