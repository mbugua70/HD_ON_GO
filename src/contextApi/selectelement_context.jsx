import { createContext, useReducer, useEffect, useCallback } from "react";

const initialState = {
  showNoQuestion: false,
};

// initilizing the contextapi
export const FormContext = createContext();

const formReducer = (state, action) => {
  switch (action.type) {
    case "SELECT_YES":
      return {
        ...state,
        showNoQuestion: true,
      };
    case "SELECT_NO":
      return {
        ...state,
        showNoQuestion: false,
      };
    default:
      return state;
  }
};

export const FormProvider = ({ children }) => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  return (
    <FormContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
