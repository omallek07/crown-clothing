import { all, call } from 'redux-sage/effects';

import { fetchCollectionsStart } from './shop/shop.sagas';

export default function* rootSaga() {
  yield all([
    call(fetchCollectionsStart)
  ]);
}
