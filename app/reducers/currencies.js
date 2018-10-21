import leagues from '../data/leagues';
import {
  CHANGE_CURRENCY_AMOUNT,
  SWAP_CURRENCY,
  CHANGE_BASE_CURRENCY,
  CHANGE_QUOTE_CURRENCY,
  GET_INITIAL_CONVERSION,
  CONVERSION_ERROR,
  CONVERSION_RESULT,
  GIVE_RANDOM_TEAM,
} from '../actions/currencies';


const initialState = {
  firstTeam: 'Real Madrid',
  secondTeam: 'Barcelona',
  baseCurrency: 'UEFA Champions League',
  quoteCurrency: 'UEFA Champions League',
  amount: 100,
  conversions: {},
  error: null,
};


const setConversions = (state, action) => {
  let conversion = {
    isFetching: true,
    date: '',
    rates: {},
  };
  // yazar burada api'den çekerken. cache'de zaten varsa onları kullanıcıya vermek istemiş
  if (state.conversions[action.currency]) {
    conversion = state.conversions[action.currency];
  }
  return {
    ...state.conversions,
    [action.currency]: conversion,
  };
};


// we are not modifying input we are creating new brand object
// in CHANGE_CURRENCY_AMOUNT
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GIVE_RANDOM_TEAM:
      return {
        ...state,
        firstTeam: state.firstTeam,
        secondTeam: state.secondTeam,
      };
    case CHANGE_CURRENCY_AMOUNT:
      return {
        // ..state ile önceki statein tamamını kopyalıyor ve yeni state yaratıyor
        ...state,
        amount: action.amount || 0,
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
        conversions: setConversions(state, action),
      };
    case CHANGE_QUOTE_CURRENCY:
      return {
        ...state,
        quoteCurrency: action.currency,
        conversions: setConversions(state, action),
      };
    default:
    case GET_INITIAL_CONVERSION:
      return {
        ...state,
        conversion: setConversions(state, { currency: state.baseCurrency }),
      };
    case CONVERSION_RESULT:
      return {
        ...state,
        baseCurrency: action.result.base,
        conversions: {
          ...state.conversions,
          [action.result.base]: {
            isFetching: false,
            ...action.result,
          },
        },
      };
    case CONVERSION_ERROR:
      return {
        ...state,
        error: action.error,
      };
  }
};

export default reducer;