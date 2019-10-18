import { all, call } from 'redux-sage/effects';

import { fetchCollectionsStart } from './shop/shop.sagas';
import { userSagas } from './user/user.types';

export default function* rootSaga() {
  yield all([
    call(fetchCollectionsStart),
    call(userSagas)
  ]);
}
