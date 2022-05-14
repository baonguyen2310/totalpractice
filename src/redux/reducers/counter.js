import { INCREASE } from "../constants";

const INIT_STATE = {
    counter: 0
};

const counterReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case INCREASE:
            return {
                ...state,
                counter: state.counter + action.payload
            }
        default:
            return state;
    }
};

export default counterReducer;