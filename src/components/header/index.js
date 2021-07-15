import React from 'react';
import * as S from './styled';
import userGithub from "../../hooks/github-hooks";

const Header = () => {
  const { getUser } = useGithub();
  const [ usernameForSearch, setUsernameForSearch ] = useState()

  const submitGetUser = () => {
    if ( !usernameForSearch ) return;
    return getUser( usernameForSearch );
  }

  return (
    <S.Wrapper>
      <input 
        type="text"
        placeholder="digite o username para pesquisa..."
        onChange={submitGetUser}
      />
      <button type="submit" > 
        <span>
          Buscar
        </span>
      </button>
    </S.Wrapper>
  );
}

export default Header