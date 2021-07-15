import styled from 'styled-components';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

export const WrappersTabs = styled( Tabs )`
  font-size: 16px;
  width: 100%;
  margin-top: 16px;
`;

export const WrappersTabList = styled( TabList )`
  list0style-type: none;
  padding: 4px;
  display: flex;
  margin: 0;
`;

WrappersTabList.tabsRole = 'TabList';


export const WrappersTab = styled( Tab )`
  border-radius: 16px;
  border: 1px solid #ccc;
  padding: 16px;
  user-select: none;
  cursor: pointer;
  z-index: 99999;
  background-color: '#fff';
  margin: 8px;


  &:focus {
    outline: none;
  }

  &.is-selected {
    box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.5);
  }

`;

WrappersTab.tabsRole = 'Tab';

export const WrappersTabPanel = styled(TabPanel)`
  padding: 16px;
  border: 1px solid "#ccc";
  display: none;
  margin-top: -5px;

  &.is-selected {
   display: block;
  }
`;

WrappersTabPanel.tabsRole = 'TabPanel';