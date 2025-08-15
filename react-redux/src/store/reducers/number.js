const defaultState = {
  number: 1,
};

const numberAcionTypes = {
  INC: "increment",
  DEC: "Decrement",
};

const numberIncrement = (payload = 1) => ({
  type: numberAcionTypes.INC,
  payload,
});

const numberDecrement = (payload = 1) => ({
  type: numberAcionTypes.DEC,
  payload,
});

const reducer = (state = defaultState, action) => {
  if (action.type === numberAcionTypes.INC) {
    return {
      number: state.number + action.payload,
    };
  }
  if (action.type === numberAcionTypes.DEC) {
    return {
      number: state.number - action.payload,
    };
  }
  return state;
};
export { numberDecrement, numberIncrement };
export default reducer;
