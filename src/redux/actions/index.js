import {INCREASE} from '../constants';

const increment = (payload) => {
    return {
        type: INCREASE,
        payload
    }
}

export {increment};