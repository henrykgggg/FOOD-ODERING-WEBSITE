import React, { Fragment } from "react";
import mealsImage from '../../ASSETS/meals.jpg'
import classes from './Header.modules.css'


const Header = (props) =>  {
return <Fragment>
    <Header className={classes.header}>
        <h1>FOOD ORDER</h1>
        <button>Cart</button>
    </Header>
    <div className={classes['main-image']}>
        <img src={mealsImage} alt=" meals"/>
    </div>
</Fragment>
}
export default Header;