import 'react-native-gesture-handler';
import React from 'react';
import RootNavigation from './src/navigation/RootNavigation';
import { enableScreens } from 'react-native-screens';

declare const global: { HermesInternal: null | {} };

enableScreens();

const App = () => {
  return (
    <>
      <RootNavigation />
    </>
  );
};

export default App;
