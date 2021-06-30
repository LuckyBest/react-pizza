const initialState = {
  items: {},
  totalCount: 0,
  totalPrice: 0,
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PIZZA_CART": {
      const newItems = {
        ...state.items,
        [action.payload.id]: !state.items[action.payload.id]
          ? [action.payload]
          : [...state.items[action.payload.id], action.payload],
      };

      const allPizzas = Object.values(newItems).flat();
      const totalPrice = allPizzas.reduce((sum, obj) => obj.price + sum, 0);

      return {
        ...state,
        items: newItems,
        totalCount: allPizzas.length,
        totalPrice,
      };
    }
    case "SET_TOTAL_PRICE":
      return {
        ...state,
        totalPrice: action.payload,
      };
    case "SET_TOTAL_COUNT":
      return {
        ...state,
        totalCount: action.payload,
      };
    default:
      return state;
  }
};

export default cart;
