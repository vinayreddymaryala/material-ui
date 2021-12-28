import React from 'react'
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import TabUnstyled from '@mui/base/TabUnstyled';
import {Typography,Button,Box,Grid,Card,CardContent,Chip } from '@mui/material'
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop' 
import SendIcon from '@mui/icons-material/Send';
import { margin } from '@mui/system'
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles({
  root: {
    border: 'none',
    background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.64), rgba(255, 255, 255, 0.64)), #EDEFF1'
  },
  btn:{
    padding: '8px 16px',
color: '#fff',
backgroundColor: '#0A56A3',
fontWeight: 800,
fontSize: 14,
lineHeight: 16,
borderRadius: 25,
textTransform: 'capitalize',
justifyContent: 'center'
}
})
function Resultitself(){
    const classes=useStyles()
    return(
       
         <>
<Grid container>

    <Grid item md={12}>
        <Card>
            <CardContent>
<Box component="span" className={classes.btn}>
<Button  startIcon={<LocalPrintshopIcon />}>
                                    PRINT </Button>
                                    </Box> 

                                    <Box component="span"  className={classes.btn}>
                                    <Button  startIcon={<SendIcon />}>
                                    SHARE</Button>
                                    </Box>
                                    <Typography variant='h5' component="div">Individual Result Title  </Typography>
                                   
                                    </CardContent>
                                    </Card>  
                                    </Grid>  
                                    </Grid>      
 
     {/* tabs */}
     <TabsUnstyled defaultValue={0} className='tabs'>
      <TabsListUnstyled >
        <TabUnstyled className={classes.root}><label>Overview
        </label></TabUnstyled>
        <TabUnstyled className={classes.root}><label>Details</label></TabUnstyled>
        <TabUnstyled className={classes.root}><label>Frequently asked qstn
        </label></TabUnstyled>
       
      </TabsListUnstyled>
      <TabPanelUnstyled value={0}> 
      <Typography variant='h1'>first content</Typography>
      Lorem ipsum dolor sit 
      amet consectetur, adipisicing elit. Cupiditate quis nesciunt reprehenderit enim magnam voluptatem est id provident aliquid totam, rem minus delectus libero.
       Odit atque exercitationem saepe doloremque quaerat. </TabPanelUnstyled>
      <TabPanelUnstyled value={1}>
          <Typography variant='h1'>Second content</Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque necessitatibus, ducimus quasi aliquam modi nemo neque, officia quisquam sunt consequatur
           iure. Quidem rem tempore cum fugiat harum, modi totam ipsum?
      </TabPanelUnstyled>
      <TabPanelUnstyled value={2}>
      <Typography variant='h1'> Third content</Typography>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto perspiciatis, repudiandae quae nostrum earum odit. Voluptate, inventore enim eos dolorum modi, laboriosam, dignissimos 
      perspiciatis eligendi vero iure voluptates laudantium odit.
          </TabPanelUnstyled>
    </TabsUnstyled>


        {/* tabs */}
        </>
    )
}
export default Resultitself
    
