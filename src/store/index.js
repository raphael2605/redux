import { createStore } from 'redux';

import reducers from './reducers'

// const createAppropriateStore = process.env.NODE_ENV === 'development' ? console.tron.createStore : createStore;

const store = createStore(reducers)

export default store;
