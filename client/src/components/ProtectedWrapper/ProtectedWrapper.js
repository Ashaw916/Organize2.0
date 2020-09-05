//needs to be translated to our own app

//using react-redux, material-ui/core

//wrapper that authenticates

import React from 'react';
import { LinearProgress } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import Can from 'components/helpers/Can';
import LoginDialog from '../auth/LoginDialog';
import { appError, appInfo } from 'actions/notifications';
import { register } from 'common/serviceWorker';

// Helper function to notify user of service worker status
const handleAuthenticated = (error, info) => {
  const onFailure = (title = '') => {
    title = title || 'Unknown error. App will NOT work offline.';
    error({ title });
  };
  const onSuccess = () => info({ title: 'App is available for offline mode' });
  const onUpdate = () =>
    info({ title: 'Updated app. click below to refresh and update.' });
  // Authenticated user - register service worker
  register({ onFailure, onSuccess, onUpdate });
};

// Higher Order Component which uses code splitting techniques to separate "Restricted" Components
//  Example of call:
export default protectedComponent(() => import('./CreateUser'), { //this line is component
  action: action.USER_CREATE, //this is user permision
});

const ProtectedWrapper = (restrictedComponent, canProps) => {
  const BaseComponent = React.lazy(restrictedComponent);
  return (props) => {
    const dispatch = useDispatch();
    const { isAuthenticated } = useSelector((state) => state.auth);
    React.useEffect(() => {
      if (isAuthenticated) {
        const error = (props) => dispatch(appError(props));
        const info = (props) => dispatch(appInfo(props));
        handleAuthenticated(error, info);
      }
    }, [dispatch, isAuthenticated]);
    // Need to authenticate
    if (!isAuthenticated) {
      return <LoginDialog />;
    }
    const renderComponent = (
      <React.Suspense fallback={<LinearProgress />}>
        <BaseComponent {...props} />
      </React.Suspense>
    );
    // Authenticated without permission check
    if (!canProps) {
      return renderComponent;
    }
    // Authenticated with permission check
    return <Can {...canProps}>{renderComponent}</Can>;
  };
};
export default ProtectedWrapper;

//This is in react redux so we will have to alter it to fit our app.

/*

*/