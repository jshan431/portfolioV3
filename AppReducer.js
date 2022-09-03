export const initialState = {
  darkMode: true,
};

export const AppReducer = (state, action) => {
  switch (action.type){
    case 'toggle_darkMode':{
      return{
        ...state,
        darkMode: !state.darkMode
       };
    }
  }
};