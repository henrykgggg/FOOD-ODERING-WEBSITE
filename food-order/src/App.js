import React,{Fragment} from "react";  
import Header from "./components/LAYOUT/Header";
import Meals from "./components/MEALS/Meals";

const App = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
};

export default App;
