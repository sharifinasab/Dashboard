import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import {reducer as oidcReducer} from 'redux-oidc';


const rootReducer = (history) => combineReducers({
//   counter: Counter.reducer,
  router: connectRouter(history),
  oidc: oidcReducer
});

export default rootReducer;