import { combineReducers } from 'redux';

const initialState = {
    frutas: []
}

function frutasReducer(state = initialState, action){

    if (action.type === "Adicionar") {
        return {frutas: [...state.frutas, { ...action.value }]};
    }
    else {
        return state;
    }
}

function tituloReducer(state = { titulo: "fruta"}, action) {
    if (action.type === "alterar") {
        return { titulo: action.value };
    }
    else {
        return state;
    }
}

const reducers = combineReducers({ frutasReducer, tituloReducer});

export default reducers;