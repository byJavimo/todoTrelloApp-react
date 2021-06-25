import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
}));

export default function HeaderNav() {
    const classes = useStyles();
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <Link className="App-header-link" to="/home">
                    <HomeIcon />
                </Link>
            </IconButton>
            <Button color="inherit">
                <Link className="App-header-link" to="/boards-manager"> BoardsManager </Link>
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }