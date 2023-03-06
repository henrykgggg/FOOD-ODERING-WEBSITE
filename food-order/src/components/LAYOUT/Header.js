import React, { Fragment } from "react";
import mealsImage from '../../ASSETS/meals.jpg'
const Header = (props) =>  {
return <Fragment>
    <Header>
        <h1>FOOD ORDER</h1>
        <button>Cart</button>
    </Header>
    <div>
        <img src={mealsImage} alt=" meals"/>
    </div>
</Fragment>
}
export default Header;