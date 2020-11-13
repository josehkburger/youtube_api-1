import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    zIndex: 1000,
    flexShrink: 1,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
}));

const sidebarValues = [{'name':'Sobre', 'link':'sobre'}, {'name':'Comentarios', 'link':'comantarios'}, {'name':'Login', 'link':'Login'}]

export default function ClippedDrawer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar>
          <span>
           LOGO... youtube API
          </span>
          
        </Toolbar> 

        <div className={classes.drawerContainer}>
          <List>
            {
              sidebarValues.map((item) => (
                <Link to={item.link} style={{ textDecoration: 'none', color: 'black' }}>
                  <ListItem button key={item.name}>
                    <ListItemText primary={item.name} />
                  </ListItem>
                </Link>
              ))
            }
          </List>
        </div>
      </Drawer>

    </div>
  );
}
