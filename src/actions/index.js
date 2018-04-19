export const uiEventDispatch = (e) => {
    return {
        type: e.target.id,
        payload: e.target.value
    }
}

export const uiEvent = (e) => {

    return (dispatch, getState) => {
        dispatch(uiEventDispatch(e));
        dispatch(uiEventDispatch({
        	target: {
        		id: 'default',
        		value: ''
        	}
        }));
    }   
}

export const uiCheckEvent = (e) => {

    return (dispatch, getState) => {
        dispatch(uiEventDispatch({
        	target: {
	        	id: e.target.id,
	        	value: e.target.checked
	        }
        }));
        dispatch(uiEventDispatch({
        	target: {
        		id: 'default',
        		value: ''
        	}
        }));
    }   
}