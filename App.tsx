import 'react-native-gesture-handler';
import React from 'react';
import RootNavigation from './src/navigation/RootNavigation';

declare const global: { HermesInternal: null | {} };

const App = () => {
  return (
    <>
      <RootNavigation />
    </>
  );
};

export default App;
