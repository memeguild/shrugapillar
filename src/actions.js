
export const SET_SELECTED_COMMON_NAME = 'SET_SELECTED_COMMON_NAME';
export const setSelectedCommonName = name => ({
    type: SET_SELECTED_COMMON_NAME,
    name,
});

export const CHANGE_LENGTH = 'CHANGE_LENGTH';
export const changeLength = amount => ({
    type: CHANGE_LENGTH,
    amount,
});

export const SET_OUTPUT_TYPE = 'SET_OUTPUT_TYPE';
export const setOutputType = outputType => ({
    type: SET_OUTPUT_TYPE,
    outputType,
});
