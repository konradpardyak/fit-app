const SET = 'set_progress';

export const setProgress = (progress) => ({
  type : SET,
  progress
});

const initialState = {
  progress: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET:
      return { ...state, progress: action.progress };
    default:
      return state;      
  }
};