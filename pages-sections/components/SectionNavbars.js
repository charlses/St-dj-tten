import React from 'react'

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
// @material-ui/icons
import Header from 'components/Header/Header.js'
import Button from 'components/CustomButtons/Button.js'

import navbarsStyle from 'styles/jss/nextjs-material-kit-pro/pages/componentsSections/navbarsStyle.js'

const useStyles = makeStyles(navbarsStyle)

export default function SectionNavbars() {
  const classes = useStyles()
  return (
    <div className={classes.section + ' cd-section'} id='navigation'>
      <div id='navbar' className={classes.navbar}>
        <Header
          brand='Hej Hej'
          links={
            <List className={classes.list + ' ' + classes.mlAuto}>
              <ListItem className={classes.listItem}>
                <Button
                  href='#pablo'
                  className={classes.navLink}
                  onClick={(e) => e.preventDefault()}
                  color='transparent'
                >
                  Discover
                </Button>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Button
                  href='#pablo'
                  className={classes.navLink}
                  onClick={(e) => e.preventDefault()}
                  color='transparent'
                >
                  Wishlist
                </Button>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Button
                  href='#pablo'
                  className={classes.registerNavLink}
                  onClick={(e) => e.preventDefault()}
                  color='rose'
                  round
                >
                  Register
                </Button>
              </ListItem>
            </List>
          }
        />
      </div>
    </div>
  )
}
