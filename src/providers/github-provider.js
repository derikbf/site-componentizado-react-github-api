import React, { createContext, useState, useCallback } from 'react';
import api from '.../services/api';

export const GithubContext = createContext({
  user: {},
  repositories: [],
  starred: [],
  loading: false,
});

  const GithubProvider = ({ children }) => {
    const [githubState, setGithubState] = useState({
      loading: false,
      user: {
        login: undefined,
        name: undefined,
        html_url: undefined,
        blog: undefined,
        company: undefined,
        location: undefined,
        followers: undefined,
        following: undefined,
        public_gists: undefined,
      },
      repositories: [],
      starred: [],
    });

    const getUser = ( username ) => {
      api.get(`users/${username}`).then(({ data: { user } }) => {
        setGithubState((prevState) => ({
          ...prevState,
          user: {
            login: user.login,
            name: user.name,
            html_url: user.html_url,
            blog: user.blog,
            company: user.company,
            location: user.location,
            followers: user.followers,
            following: user.following,
            public_gists: user.public_gists,
          },
        }));
      });
    };  

  const contextValue = {
    githubState,
    getUser: useCallback((username) => getUser(username), []), 
  };
  
  return (
    <GithubContext.Provider 
      value={contextValue}
    >
    {children}  
    </GithubContext.Provider>
  );
};

export default GithubProvider;