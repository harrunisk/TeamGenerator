import leagues from '../data/leagues';
import {
  SWAP_CURRENCY,
  CHANGE_BASE_CURRENCY,
  CHANGE_QUOTE_CURRENCY,
  GET_INITIAL_CONVERSION,
  GIVE_RANDOM_TEAM,
} from '../actions/currencies';


const initialState = {
  firstTeam: 'Real Madrid',
  secondTeam: 'Barcelona',
  baseCurrency: 'UEFA Champions League',
  quoteCurrency: 'UEFA Champions League',
  primaryColor: '#4F6D7A',
  logoPlace: 'Down',
  animationType: 'bounceInDown',
};


const createAnimationType = (state, action) => {
  let type;

  if (state.animationType === 'bounceInDown') {
    type = 'bounceInUp';
  } else if (state.animationType === 'bounceInUp') {
    type = 'bounceIn';
  } else if (state.animationType === 'bounceIn') {
    type = 'bounceInLeft';
  } else if (state.animationType === 'bounceInLeft') {
    type = 'bounceInRight';
  } else if (state.animationType === 'bounceInRight') {
    type = 'bounceInDown';
  }
  return type;
};


// we are not modifying input we are creating new brand object
// in CHANGE_CURRENCY_AMOUNT
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GIVE_RANDOM_TEAM:
      return {
        ...state,
        firstTeam: leagues[Math.floor(Math.random() * leagues.length)].toString(),
        secondTeam: leagues[Math.floor(Math.random() * leagues.length)].toString(),
        animationType: createAnimationType(state, action),
      };
    case SWAP_CURRENCY:
      return {
        ...state,
        baseCurrency: state.quoteCurrency,
        quoteCurrency: state.baseCurrency,
      };
    case CHANGE_BASE_CURRENCY:
      return {
        ...state,
        baseCurrency: action.currency,
      };
    case CHANGE_QUOTE_CURRENCY:
      return {
        ...state,
        quoteCurrency: action.currency,
      };
    default:
    case GET_INITIAL_CONVERSION:
      return {
        ...state,
      };
  }
};

export default reducer;
