import React from "react";
import AppNavigator from "@/config/AppNavigator";

const App = () => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <AppNavigator />
    </React.Suspense>
  );
};

export default App;
