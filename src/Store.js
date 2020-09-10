import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

const initState = {
	greeting: "Welcome to Redux",
	tick: 3
}

const Store = (state = initState, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return {
				...state,
				greeting: 'coucou',
			}
		default:
			return state
	}
};

const rootReducer = combineReducers({
	state: Store,
	form: formReducer
})

const store = createStore(
	rootReducer,
	initState

);

store.subscribe(() => {
	console.log("state updated", store.getState());
	
});

export default store;
