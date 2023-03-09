import React, { Fragment } from "react";
import SummaryMeals from "./SummaryMeals";
import AvailableMeals from "./Available";
const Meals = (props) => {
  return (
    <Fragment>
      
<SummaryMeals />
      <AvailableMeals />

    </Fragment>
  );
};
export default Meals;
