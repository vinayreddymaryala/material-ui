import * as React from 'react';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import TabUnstyled from '@mui/base/TabUnstyled';

export default function UnstyledTabsBasic() {
  return (
    <TabsUnstyled defaultValue={0} className='tabs'>
      <TabsListUnstyled>
        <TabUnstyled style={{border: 'none', background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.64), rgba(255, 255, 255, 0.64)), #EDEFF1'}}><label>Overview</label></TabUnstyled>
        <TabUnstyled style={{border: 'none', background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.64), rgba(255, 255, 255, 0.64)), #EDEFF1'}}><label>Two</label></TabUnstyled>
        <TabUnstyled style={{border: 'none', background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.64), rgba(255, 255, 255, 0.64)), #EDEFF1'}}>Three</TabUnstyled>
      </TabsListUnstyled>
      <TabPanelUnstyled value={0}>First content</TabPanelUnstyled>
      <TabPanelUnstyled value={1}>Second content</TabPanelUnstyled>
      <TabPanelUnstyled value={2}>Third content</TabPanelUnstyled>
    </TabsUnstyled>
  );
}
