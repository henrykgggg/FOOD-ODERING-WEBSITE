import Cart from "../UI/Cart";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MEALITEM/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "pirau",
    description: "rice,onion  , asante , pirau masara",
    price: 22.99,
  },
  {
    id: "m2",
    name: "mangoes",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "pizza",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Cart>
        <ul>{mealsList}</ul>
      </Cart>
    </section>
  );
};
export default AvailableMeals;
