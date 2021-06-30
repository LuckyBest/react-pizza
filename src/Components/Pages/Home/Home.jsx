import React, { useEffect } from "react";
import {
  Categories,
  SortPopup,
  PizzaBlock,
  PizzaLoadingBlock,
} from "../../index";
import { useSelector, useDispatch } from "react-redux";
import { setCategory, setSortBy } from "../../../redux/actions/filters";
import { fetchPizzas } from "../../../redux/actions/pizzas";
import { addPizzaToCart } from "../../../redux/actions/cart";

const categoryNames = [
  "М'ясні",
  "Вегетеріанські",
  "Гриль",
  "Гострі",
  "Закриті",
];

const sortItems = [
  { name: "популярности", type: "popular", order: "desc" },
  { name: "цене", type: "price", order: "desc" },
  { name: "алфавиту", type: "name", order: "asc" },
];

const Home = () => {
  const dispatch = useDispatch(); //стукає до actionCreators
  const items = useSelector(({ pizzas }) => pizzas.items); // стукає до state
  const cartItems = useSelector(({ cart }) => cart.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { sortBy, category } = useSelector(({ filters }) => filters);

  useEffect(() => {
    dispatch(fetchPizzas(sortBy, category));
  }, [sortBy, category]);

  const onSelectCategory = React.useCallback((index) => {
    // render 1 time
    dispatch(setCategory(index));
  }, []);

  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  const handleAddPizzaToCart = (obj) => {
    dispatch(addPizzaToCart(obj));
    console.log(obj);
  };

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          onClickCategory={onSelectCategory}
          items={categoryNames}
        />
        <SortPopup
          onClickSortType={onSelectSortType}
          activeSortType={sortBy.type}
          items={sortItems}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((pizza) => (
              <PizzaBlock
                onClickAddPizza={handleAddPizzaToCart}
                key={pizza.id}
                addedCount={cartItems[pizza.id] && cartItems[pizza.id].length}
                {...pizza}
              />
            ))
          : Array(12)
              .fill(0)
              .map((_, index) => <PizzaLoadingBlock key={index} />)}
      </div>
    </div>
  );
};

export default Home;
