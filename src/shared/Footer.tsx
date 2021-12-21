import React from "react";
import { Button, Grid  } from '@mui/material'
import LogoBig from '../assets/images/logo-big.png';
import facebook from '../assets/images/face-book.png';
import instagram from '../assets/images/instagram.png';
import linkedIn from '../assets/images/linkedIn.png';
import twitter from '../assets/images/Twitter.png';
import './common.css';
import { makeStyles } from "@mui/styles";
const useStyles=makeStyles({
    root:{
        background:'#fff',
        padding: '0 40px',
    }
});
function Footer() {
   const classes=useStyles();
    return (
        <div>
            <Grid container className={classes.root} >
                <Grid item sm={3}>
                    <div className="footer__left_box" style={{ paddingTop: 50 }}>
                        <div className="pb-xl">
                            <img src={LogoBig} alt="" />
                        </div>
                        <div className="clearfix"></div>
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <p>Give the gift of lorem ipsum dolor</p>
                                {/* <button type="button" className="btn btn_primary_gradient mt-xl mb-xl">Give a
                                                    gift</button> */}
                                <Button variant="contained" className="btn btn_primary_gradient mt-xl mb-xl" href="#contained-buttons">Give a
                                    gift
                                </Button>

                            </div>
                            <div className="col-lg-6 col-md-6">
                                <p>Earn up to $25 for each friend you refer.</p>
                                {/* <button type="button" className="btn btn_primary_gradient  mt-xl mb-xl">get $20</button> */}
                                <Button variant="contained" className="btn btn_primary_gradient mt-xl mb-xl" href="#contained-buttons">get $20

                                </Button>

                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item sm={9} pl={10}>
                    <Grid container>
                        <Grid item sm={2.5}>
                            <div className="footer_lists">
                                <div className="footer_list_name">FEATURES</div>
                                <div className="footer_list_items">
                                    <ul className="">
                                        <li><a href="#">Feature Overview</a></li>
                                        <li><a href="#">All Features</a></li>
                                        <li><a href="#">Option 1</a></li>
                                        <li><a href="#">Option 2</a></li>
                                        <li><a href="#">Option 3</a></li>
                                        <li><a href="#">Option 4</a></li>
                                        <li><a href="#">Option 5</a></li>
                                        <li><a href="#">Option 6</a></li>
                                    </ul>
                                </div>
                            </div>
                        </Grid>
                        <Grid item sm={2.5}>
                            <div className="footer_lists">
                                <div className="footer_list_name">FEATURES</div>
                                <div className="footer_list_items">
                                    <ul className="">
                                        <li><a href="#">Feature Overview</a></li>
                                        <li><a href="#">All Features</a></li>
                                        <li><a href="#">Option 1</a></li>
                                        <li><a href="#">Option 2</a></li>
                                        <li><a href="#">Option 3</a></li>
                                        <li><a href="#">Option 4</a></li>
                                        <li><a href="#">Option 5</a></li>
                                        <li><a href="#">Option 6</a></li>
                                    </ul>
                                </div>
                            </div>
                        </Grid>
                        <Grid item sm={2.5}>
                            <div className="footer_lists">
                                <div className="footer_list_name">FEATURES</div>
                                <div className="footer_list_items">
                                    <ul className="">
                                        <li><a href="#">Feature Overview</a></li>
                                        <li><a href="#">All Features</a></li>
                                        <li><a href="#">Option 1</a></li>
                                        <li><a href="#">Option 2</a></li>
                                        <li><a href="#">Option 3</a></li>
                                        <li><a href="#">Option 4</a></li>
                                        <li><a href="#">Option 5</a></li>
                                        <li><a href="#">Option 6</a></li>
                                    </ul>
                                </div>
                            </div>
                        </Grid>
                        <Grid item sm={2.5}>
                            <div className="footer_lists">
                                <div className="footer_list_name">FEATURES</div>
                                <div className="footer_list_items">
                                    <ul className="">
                                        <li><a href="#">Feature Overview</a></li>
                                        <li><a href="#">All Features</a></li>
                                        <li><a href="#">Option 1</a></li>
                                        <li><a href="#">Option 2</a></li>
                                        <li><a href="#">Option 3</a></li>
                                        <li><a href="#">Option 4</a></li>
                                        <li><a href="#">Option 5</a></li>
                                        <li><a href="#">Option 6</a></li>
                                    </ul>
                                </div>
                            </div>
                        </Grid>
                        <Grid item sm={2}>
                            <div className="footer_lists">
                                <div className="footer_list_name">FEATURES</div>
                                <div className="footer_list_items">
                                    <ul className="">
                                        <li><a href="#">Feature Overview</a></li>
                                        <li><a href="#">All Features</a></li>
                                        <li><a href="#">Option 1</a></li>
                                        <li><a href="#">Option 2</a></li>
                                        <li><a href="#">Option 3</a></li>
                                        <li><a href="#">Option 4</a></li>
                                        <li><a href="#">Option 5</a></li>
                                        <li><a href="#">Option 6</a></li>
                                    </ul>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}
export default Footer;