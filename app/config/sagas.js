import {
  takeEvery, select, put,
} from 'redux-saga/effects';
import {
  SWAP_CURRENCY, CHANGE_BASE_CURRENCY, GET_INITIAL_CONVERSION, CONVERSION_ERROR,
} from '../actions/currencies';


function* fetchLatestConversionRates(action) {
  try {
    let {
      currency,
    } = action;
    if (currency === undefined) {
      // cevap gelesiye kadar bekle
      currency = yield select(state => state.currencies.baseCurrency);
    }
  } catch (e) {
    yield put({ type: CONVERSION_ERROR, error: e.message });
  }
}
// generator function
export default function* rootSaga() {
  yield takeEvery(GET_INITIAL_CONVERSION, fetchLatestConversionRates);
  yield takeEvery(SWAP_CURRENCY, fetchLatestConversionRates);
  yield takeEvery(CHANGE_BASE_CURRENCY, fetchLatestConversionRates);
}
