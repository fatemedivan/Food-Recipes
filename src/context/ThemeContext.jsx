import { createContext, useContext, useReducer } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must use within a ThemeProvider!!");
  }
  return context;
};

const themeReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_COLOR':
            return {...state, color: action.payload}
            break;
    
        default:
            return state
            break;
    }
};

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, {
    color: "#b70233",
  });
  const changeColor = (color) => {
    dispatch({type: 'CHANGE_COLOR', payload: color})
  };
  return (
    <ThemeContext.Provider value={{ ...state, changeColor }}>
      {children}
    </ThemeContext.Provider>
  );
};
