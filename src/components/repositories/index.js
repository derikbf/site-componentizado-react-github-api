import React from 'react';
import RepositoryItem from '../repository-item';
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
      
      <S.WrappersTabPanel>
          <RepositoryItem 
            name="site-componentizado-react-github-api"
            linkToRepo="https://github.com/derikbf/site-componentizado-react-github-api"
            fullName="derikbf/site-componentizado-react-github-api"
           />
      </S.WrappersTabPanel>
      
      <S.WrappersTabPanel>
        <RepositoryItem 
          name="derikbf"
          linkToRepo="https://github.com/derikbf"
          fullName="derikbf/derikbf"
        />
      </S.WrappersTabPanel>
    </S.WrappersTabs>
  );
};

export default Repositories;