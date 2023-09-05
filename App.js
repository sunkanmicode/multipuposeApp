import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigation from './src/navigations';
import { store, persistor } from "./src/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
// import persistStore from 'redux-persist/es/persistStore';

// let persistor = persistStore(store)

export default function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <AppNavigation />
          <StatusBar style="auto" />
        </PersistGate>
      </Provider>
    </>
  );
}


