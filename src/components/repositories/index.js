import React from 'react';
import * as S from './styled';

const Repositories = () => {
  return (
    <S.WrappersTabs
      selectedTabClassName="is-selected"
      selectedTabPanelClassName="is-selected"
    >
      <S.WrappersTabList> 
        <S.WrappersTab>Repositories</S.WrappersTab>
        <S.WrappersTab>Starred</S.WrappersTab>
      </S.WrappersTabList>
    </S.WrappersTabs>
  );
};

export default Repositories;