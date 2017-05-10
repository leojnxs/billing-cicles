import {TAB_SELECTED, TAB_SHOWED} from '../../config/constants';

export const selectTab = tabId => {
  return {
    type: TAB_SELECTED,
    payload: tabId
  };
};

export const showTabs = (...tabIds) => {
  const tabsToShow = {};

  tabIds.forEach(tabId => tabsToShow[tabId] = true)

  return {
    type: TAB_SHOWED,
    payload: tabsToShow
  };
};