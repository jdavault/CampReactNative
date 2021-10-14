/** @format */

import React from "react"
import Main from "./components/MainComponent"
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import { PersistGate } from 'redux-persist/es/integration/react';
import Loading from './components/LoadingComponent';

const { store, persistor } = ConfigureStore();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate
        loading={<Loading />}
        persistor={persistor}>
        <Main />
      </PersistGate>
    </Provider>
  )
}

/*
 1. Clear watchman watches: watchman watch-del-all
 2. Delete node_modules and run yarn install
 3. Reset Metro's cache: yarn start --reset-cache
 4. Remove the cache: rm -rf /tmp/metro-*
*/