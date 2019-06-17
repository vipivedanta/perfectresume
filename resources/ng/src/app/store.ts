export interface IAppState{

}

export function rootReducer(state,action){
	switch (action.type) {
		case "add":
			alert('adding');
			break;
		
		default:
			alert('default');
			break;
	}

	return state;
}