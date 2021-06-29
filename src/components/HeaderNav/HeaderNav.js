import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import './HeaderNav.scss';


export default function HeaderNav() {
  const boards = [
    {
      id: 1,
      name: 'Tablero 1'
    },
    {
      id: 2,
      name: 'Tablero 2'
    },
    {
      id: 3,
      name: 'Tablero 3'
    }
  ];
    return (
      <div>
        <AppBar position="static" >
          <Toolbar className='header-nav'>
            <IconButton edge="start" aria-label="menu" className="header-nav-button" >
                <Link className="header-nav-link" to="/home">
                    <HomeIcon />
                </Link>
            </IconButton>
            <Button className="header-nav-button">
                <Link className="header-nav-link" to={'/boards-manager/'+ boards[0].id}> BoardsManager </Link>
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }