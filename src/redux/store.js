import { CreateStore, combineReducers } from 'redux';
//action
const BAY_POKEMON = 'BUY_POKEMON';
const BAY_SWITCH = 'BUY_SWBAY_SWITCH';
const RETURN_POKEMON = 'RETURN_POKEMON';

const buy_switch_action = cant => {
  return {
    type: BAY_SWITCH,
    payload: cant
  };
};

const buy_pokemon_action = cant => {
  return {
    type: BAY_POKEMON,
    payload: cant
  };
};

const return_pokemon_action = cant => {
  return {
    type: RETURN_POKEMON,
    payload: cant
  };
};
//state
const default_games_state = {
  pokemon: 10
};

const default_console_state = {
  ps5: 30,
  switch: 30
};

//reducers
const games_reducer = (state = default_games_state, action) => {
  switch (action.type) {
    case BAY_POKEMON: {
      return {
        ...state,
        pokemon: state.pokemon - action.payload
      };
    }
    case RETURN_POKEMON: {
      return {
        ...state,
        pokemon: state.pokemon + action.payload
      };
    }
    default:
      return state;
  }
};

const console_reducer = (state = default_console_state, action) => {
  switch (action.type) {
    case BAY_SWITCH: {
      return {
        ...state,
        pokemon: state.switch - action.payload
      };
    }
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  games_reducer,
  console_reducer
});
//store
const store = CreateStore(rootReducer);
console.log('Estado Inicial: ', store.getSate());

store.subscribe(() => {
  console.log('Cambio de estado:', store.getSate);
});

store.dispath(buy_pokemon_action(3));
store.dispath(return_pokemon_action(3));
