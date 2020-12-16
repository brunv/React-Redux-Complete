import React, { useState } from 'react';

/**
 * 'createContext()' accepts a context object and return the current context.
 */
export const AuthContext = React.createContext({
  isAuth: false,
  login: () => { }
});

const AuthContextProvider = props => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const loginHandler = () => {
    setIsAuthenticated(true);
  }

  return (
    /**
     * The current context value is set by 'value' in the Prodider.
     */
    <AuthContext.Provider value={{ login: loginHandler, isAuth: isAuthenticated }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;