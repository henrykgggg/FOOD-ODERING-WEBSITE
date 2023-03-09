import React,{Fragment} from "react";  
import Header from "./components/LAYOUT/Header.js";
import Meals from "./components/MEALS/Meals.js"

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





