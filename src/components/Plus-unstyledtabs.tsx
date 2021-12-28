import * as React from 'react';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import TabUnstyled from '@mui/base/TabUnstyled';
import PlusCards from '../components/Plus-cards';
import { Button, Grid, Chip } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles({
  root: {
    border: 'none',
    background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.64), rgba(255, 255, 255, 0.64)), #EDEFF1'
  }
})

export default function UnstyledTabsBasic() {
  const classes = useStyles();
  return (
    <TabsUnstyled defaultValue={0} className='tabs'>
      <TabsListUnstyled >
        <TabUnstyled className={classes.root}><label>Overview
        </label></TabUnstyled>
        <TabUnstyled className={classes.root}><label>All item</label></TabUnstyled>
        <TabUnstyled className={classes.root}><label>Group1<Chip label="1" variant="outlined" />
        </label></TabUnstyled>
        <TabUnstyled className={classes.root}><label>Group2<Chip label="2" variant="outlined" />
        </label></TabUnstyled>
        <TabUnstyled className={classes.root}><label>Group3<Chip label="3" variant="outlined" />
        </label></TabUnstyled>
      </TabsListUnstyled>
      <TabPanelUnstyled value={0}>
        <Grid container>
          <Grid item sm={12}>
          <div className='pt-xlg'>
                                <div className='d-flex search_input_bar'> <input className='search_input' type='text'
                                    placeholder='Search for a specific result' />
                                    <span><SearchIcon/></span></div>
                            </div>

          </Grid>
          <Grid item sm={12}>
          <PlusCards />
          </Grid>
        </Grid>





      </TabPanelUnstyled>
      <TabPanelUnstyled value={1}>Second content</TabPanelUnstyled>
      <TabPanelUnstyled value={2}>Third content</TabPanelUnstyled>
      <TabPanelUnstyled value={3}>Tab Three Content</TabPanelUnstyled>
      <TabPanelUnstyled value={4}>Tab 4 Content</TabPanelUnstyled>
      <TabPanelUnstyled value={5}>Tab 5 Content</TabPanelUnstyled>
    </TabsUnstyled>
  );
}
