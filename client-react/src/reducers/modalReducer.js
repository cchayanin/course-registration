const initialState = {
	visible: false,
	isEdit: false,
	record: {},
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'TOGGLE_MODAL':
			state = {
				...state,
				visible: !action.payload,
			}
			break
		case 'PASS_RECORD':
			state = {
				...state,
				record: action.payload,
			}
			break
		case 'TOGGLE_EDIT':
			state = {
				...state,
				isEdit: action.payload,
			}
			break
		default:
			state = {
				...state,
			}
			break
	}
	return state
}

export default reducer
