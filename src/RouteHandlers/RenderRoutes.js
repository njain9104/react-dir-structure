import React from 'react';
import { Switch } from 'react-router-dom';
import { appRoutes } from '../constants';
import RouteHandler from './RouteHandler';

const RenderRoutes = () => {
  const renderRoutes = () => {
    return appRoutes.map((appRoute, index) => (
      <RouteHandler key={index} appRoute={appRoute} />
    ));
  };

  return <Switch>{renderRoutes()}</Switch>;
};

export default RenderRoutes;
