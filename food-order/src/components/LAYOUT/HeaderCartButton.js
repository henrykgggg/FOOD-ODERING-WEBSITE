import CartIcon from "../CART/CartIcon";
import classes from './HeaderCartBuutton.module.css'
const HeaderCartButton = (props) => {
return <button className={classes.button}>
    <span className={classes.icon}>
        <CartIcon />
    </span>
    <span>your Cart</span>
    <span>3</span>
</button>
}

export default HeaderCartButton;