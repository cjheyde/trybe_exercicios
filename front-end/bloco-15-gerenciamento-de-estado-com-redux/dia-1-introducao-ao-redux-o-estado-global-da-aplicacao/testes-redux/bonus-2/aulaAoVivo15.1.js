const showCountValue = (counter) => {
  const h1Element = document.getElementById("counter");
  h1Element.innerText = counter;
};

showCountValue(0);
// ========== ACTIONTYPES ==========
const INCREMENTO = "INCREMENTO";
const DECREMENTO = "DECREMENTO";

// ========== ACTIONS ==========
const actionIncremento = () => {
  return { type: INCREMENTO };
  // ACTION DE ADICIONAR + 1 AO COUNTER
  //store.???
};

const actionDecremento = () => {
  return { type: DECREMENTO };
  // ACTION DE REMOVER - 1 AO COUNTER
  //store.???
};
// ========== REDUCER ==========
const initialState = {
  counterNumber: 0
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENTO:
      return { ...state, counterNumber: state.counterNumber + 1 };
    case DECREMENTO:
      return { ...state, counterNumber: state.counterNumber - 1 };
    default:
      return state;
  }
};

// ========== STORE ==========
const store = Redux.createStore(reducer);

store.subscribe(() => {
  const { counterNumber } = store.getState();
  showCountValue(counterNumber);
});

const btnInc = document.getElementById("inc");
const btnDec = document.getElementById("dec");

// Evento que disparar a action
btnInc.addEventListener("click", () => {
  store.dispatch(actionIncremento());
});
btnDec.addEventListener("click", () => {
  store.dispatch(actionDecremento());
});