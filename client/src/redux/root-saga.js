import { all, call } from 'redux-saga/effects';

import { userSagas } from './user/user.types';
import { cartSagas } from './cart/cart.types';
import { shopSagas } from './shop/shop.types';

export default function* rootSaga() {
  yield all([
    call(userSagas),
    call(cartSagas),
    call(shopSagas)
  ]);
}
