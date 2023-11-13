import { createStore, combineReducers } from 'redux';
import initialState from './initialState';
import listsReducer from './listsRedux';
import columnsReducer from './columnsRedux';
import cardsReducer from './cardsRedux';
import searchStringReducer from './searchStringRedux';

//selectors
// export const getFilteredCards = (state, columnId) => state.cards
//   .filter(card => card.columnId === columnId && card.title.toLowerCase().includes(state.searchString.toLowerCase()));

// ver 2
// export const getFilteredCards = ({ cards, searchString }, columnId) => cards
//   .filter(card => card.columnId === columnId && card.title.toLowerCase().includes(searchString.toLowerCase()));

// OLD CODE:
// const reducer = (state, action) => {
// switch (action.type) {
//   case 'ADD_COLUMN':
//     return { ...state, columns: [...state.columns, { ...action.payload, id: shortid() }] };
//   case 'ADD_CARD':
//     return { ...state, cards: [...state.cards, { ...action.payload, id: shortid() }] };
//   case 'REMOVE_CARD':
//     return { ...state, cards: state.cards.filter(card => card.id !== action.payload) };
//   case 'ADD_LIST':
//     return { ...state, lists: [...state.lists, { ...action.payload, id: shortid() }] };
//   case 'UPDATE_SEARCHSTRING':
//     return { ...state, searchString: action.payload };
//   case 'TOGGLE_CARD_FAVORITE':
//     return { ...state, cards: state.cards.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card) };
//   default:
//     return state;
// }
// }

// const reducer = (state, action) => {
//   const newState = {
//     lists: listsReducer(state.lists, action),
//     columns: columnsReducer(state.columns, action),
//     cards: cardsReducer(state.cards, action),
//     searchString: searchStringReducer(state.searchString, action)
//   };
//   return newState;
// };
// OLD CODE ABOVE, NEW CODE:

const subreducers = {
  lists: listsReducer,
  columns: columnsReducer,
  cards: cardsReducer,
  searchString: searchStringReducer
}

const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;