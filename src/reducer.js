import * as Shrugapillar from '../../src';

import * as Actions from './actions';

const DEFAULT_STATE = {
    selectedCommonName: Shrugapillar.getAll()[0].commonName,
    length: 1,
    outputType: Shrugapillar.TYPES.PLAIN,
};

export default function reducer(state = DEFAULT_STATE, action){
    switch(action.type){
        case Actions.SET_SELECTED_COMMON_NAME:
            return Object.assign(state, {
                selectedCommonName: action.name,
            });
        case Actions.CHANGE_LENGTH:
            return Object.assign(state, {
                length: Math.max(state.length + action.amount, 1),
            });
        case Actions.SET_OUTPUT_TYPE:
            return Object.assign(state, {
                outputType: action.outputType,
            });
        default:
            return state;
    }
}