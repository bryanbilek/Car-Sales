export const REMOVE_FEATURE = 'REMOVE_FEATURE';
export const removeFeature = () => {
    return { type: REMOVE_FEATURE }
};

export const ADD_FEATURE = 'ADD_FEATURE';
export const addFeature = (feature) => {
    return { type: ADD_FEATURE, payload: feature }
};

