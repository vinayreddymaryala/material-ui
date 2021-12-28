import React from "react";
import { Typography, Card, CardMedia, CardContent, CardActions, Button, CardHeader, Avatar, Grid } from '@mui/material';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { makeStyles } from "@mui/styles";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
//linearprogress

const BorderLinearProgress1 = styled(LinearProgress)(({ theme }) => ({
  height: 17,
  borderRadius: 10,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 200],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 10,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}));
const BorderLinearProgress2 = styled(LinearProgress)(({ theme }) => ({
  height: 17,
  borderRadius: 10,
  color: '#d61abd',
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 200],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 10,
    backgroundColor: theme.palette.mode === 'light' ? '#ffcf81' : '#ffcf81',
  },
}));
const BorderLinearProgress3 = styled(LinearProgress)(({ theme }) => ({
  height: 17,
  borderRadius: 10,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 200],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 10,
    backgroundColor: theme.palette.mode === 'light' ? '#b0be13' : '#b0be13',
  },
}));
//   //linearprogress
const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    margin: 60,
    borderRadius: '14px !important',
    '& .MuiCardContent-root': {
      padding: 16
    }
  },
  iconAvatar: {
    // display: 'block !important',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 13,
    background: 'unset !important',
    color: '#000 !important',
    border: '2px solid !important',
    width: '50px !important',
    height: '50px !important',
    '& svg': {
      width: '1.3em !important',
      height: '1.3em !important'
    }
  },
  btn: {
    background: '#0A56A3 !important',
    color: '#fff !important',
    fontSize: '14px !important',
    fontWeight: '800 !important',
    lineHeight: '16px !important',
    borderRadius: '25px !important',
    padding: '8px 16px !important',
    textTransform: 'uppercase',
    marginLeft: '140px !important',

  }
});
function PlusCards() {
  const classes = useStyles();
  return (

    <>
      <Grid container>
        <Grid item md={4}>
          <Card className={classes.card}>

            <CardContent>
              <Avatar className={classes.iconAvatar}>
                <LocalOfferIcon />
              </Avatar>
              <Typography gutterBottom variant="h5" component="div" style={{ textAlign: 'center' }}>
                Result group
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
              <Typography variant="body1" color="text.secondary" style={{ paddingTop: 10 }}>Result Status</Typography>
              <CardActions>
                <Grid container spacing={1}>
                  <Grid item sm={4}>
                    <BorderLinearProgress1 variant="determinate" value={40} />
                  </Grid>
                  <Grid item sm={4}>
                    <BorderLinearProgress2 variant="determinate" value={60} />
                  </Grid>
                  <Grid item sm={4}>
                    <BorderLinearProgress3 variant="determinate" value={80} />
                  </Grid>
                </Grid>
              </CardActions>
              <Typography variant="body1" color="text.secondary" style={{ paddingTop: 10 }}>2 ready, 1 processing, 5 need more info</Typography>


            </CardContent>
            <CardActions className="p-3">
              <Button className="btn btn__blue__primary" style={{ marginLeft: 'auto' }}>view Results</Button>
            </CardActions>

          </Card>
        </Grid>
        <Grid item md={4}>
          <Card className={classes.card}>

            <CardContent>
              <Avatar className={classes.iconAvatar}>
                <LocalOfferIcon />
              </Avatar>
              <Typography gutterBottom variant="h5" component="div" style={{ textAlign: 'center' }}>
                Result group
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
              <Typography variant="body1" color="text.secondary" style={{ paddingTop: 10 }}>Result Status</Typography>
              <CardActions>
                <Grid container spacing={1}>
                  <Grid item sm={4}>
                    <BorderLinearProgress1 variant="determinate" value={40} />
                  </Grid>
                  <Grid item sm={4}>
                    <BorderLinearProgress2 variant="determinate" value={60} />
                  </Grid>
                  <Grid item sm={4}>
                    <BorderLinearProgress3 variant="determinate" value={80} />
                  </Grid>
                </Grid>
              </CardActions>
              <Typography variant="body1" color="text.secondary" style={{ paddingTop: 10 }}>2 ready, 1 processing, 5 need more info</Typography>


            </CardContent>
            <CardActions className="p-3">
              <Button className="btn btn__blue__primary" style={{ marginLeft: 'auto' }}>view Results</Button>
            </CardActions>

          </Card>
        </Grid>
        <Grid item md={4}>
          <Card className={classes.card}>

            <CardContent>
              <Avatar className={classes.iconAvatar}>
                <LocalOfferIcon />
              </Avatar>
              <Typography gutterBottom variant="h5" component="div" style={{ textAlign: 'center' }}>
                Result group
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
              <Typography variant="body1" color="text.secondary" style={{ paddingTop: 10 }}>Result Status</Typography>
              <CardActions>
                <Grid container spacing={1}>
                  <Grid item sm={4}>
                    <BorderLinearProgress1 variant="determinate" value={40} />
                  </Grid>
                  <Grid item sm={4}>
                    <BorderLinearProgress2 variant="determinate" value={60} />
                  </Grid>
                  <Grid item sm={4}>
                    <BorderLinearProgress3 variant="determinate" value={80} />
                  </Grid>
                </Grid>
              </CardActions>
              <Typography variant="body1" color="text.secondary" style={{ paddingTop: 10 }}>2 ready, 1 processing, 5 need more info</Typography>


            </CardContent>
            <CardActions className="p-3">
              <Button className="btn btn__blue__primary" style={{ marginLeft: 'auto' }}>view Results</Button>
            </CardActions>

          </Card>
        </Grid>
        <Grid item md={4}>
          <Card className={classes.card}>

            <CardContent>
              <Avatar className={classes.iconAvatar}>
                <LocalOfferIcon />
              </Avatar>
              <Typography gutterBottom variant="h5" component="div" style={{ textAlign: 'center' }}>
                Result group
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
              <Typography variant="body1" color="text.secondary" style={{ paddingTop: 10 }}>Result Status</Typography>
              <CardActions>
                <Grid container spacing={1}>
                  <Grid item sm={4}>
                    <BorderLinearProgress1 variant="determinate" value={40} />
                  </Grid>
                  <Grid item sm={4}>
                    <BorderLinearProgress2 variant="determinate" value={60} />
                  </Grid>
                  <Grid item sm={4}>
                    <BorderLinearProgress3 variant="determinate" value={80} />
                  </Grid>
                </Grid>
              </CardActions>
              <Typography variant="body1" color="text.secondary" style={{ paddingTop: 10 }}>2 ready, 1 processing, 5 need more info</Typography>


            </CardContent>
            <CardActions className="p-3">
              <Button className="btn btn__blue__primary" style={{ marginLeft: 'auto' }}>view Results</Button>
            </CardActions>

          </Card>
        </Grid>
        <Grid item md={4}>
          <Card className={classes.card}>

            <CardContent>
              <Avatar className={classes.iconAvatar}>
                <LocalOfferIcon />
              </Avatar>
              <Typography gutterBottom variant="h5" component="div" style={{ textAlign: 'center' }}>
                Result group
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
              <Typography variant="body1" color="text.secondary" style={{ paddingTop: 10 }}>Result Status</Typography>
              <CardActions>
                <Grid container spacing={1}>
                  <Grid item sm={4}>
                    <BorderLinearProgress1 variant="determinate" value={40} />
                  </Grid>
                  <Grid item sm={4}>
                    <BorderLinearProgress2 variant="determinate" value={60} />
                  </Grid>
                  <Grid item sm={4}>
                    <BorderLinearProgress3 variant="determinate" value={80} />
                  </Grid>
                </Grid>
              </CardActions>
              <Typography variant="body1" color="text.secondary" style={{ paddingTop: 10 }}>2 ready, 1 processing, 5 need more info</Typography>


            </CardContent>
            <CardActions className="p-3">
              <Button className="btn btn__blue__primary" style={{ marginLeft: 'auto' }}>upgrade To access</Button>
            </CardActions>

          </Card>
        </Grid>
        <Grid item md={4}>
          <Card className={classes.card}>

            <CardContent>
              <Avatar className={classes.iconAvatar}>
                <LocalOfferIcon />
              </Avatar>
              <Typography gutterBottom variant="h5" component="div" style={{ textAlign: 'center' }}>
                Result group
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
              <Typography variant="body1" color="text.secondary" style={{ paddingTop: 10 }}>Result Status</Typography>
              <CardActions>
                <Grid container spacing={1}>
                  <Grid item sm={4}>
                    <BorderLinearProgress1 variant="determinate" value={40} />
                  </Grid>
                  <Grid item sm={4}>
                    <BorderLinearProgress2 variant="determinate" value={60} />
                  </Grid>
                  <Grid item sm={4}>
                    <BorderLinearProgress3 variant="determinate" value={80} />
                  </Grid>
                </Grid>
              </CardActions>
              <Typography variant="body1" color="text.secondary" style={{ paddingTop: 10 }}>2 ready, 1 processing, 5 need more info</Typography>


            </CardContent>
            <CardActions className="p-3">
              <Button className="btn btn__blue__primary" style={{ marginLeft: 'auto' }}>upgrade To access</Button>
            </CardActions>

          </Card>
        </Grid>
      </Grid>

    </>
  )
}
export default PlusCards