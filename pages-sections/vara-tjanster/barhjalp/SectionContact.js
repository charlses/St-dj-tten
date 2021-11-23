import React from 'react'
// nodejs library that concatenates classe
import { makeStyles } from '@material-ui/core/styles'
// @material-ui/icons
import { ArrowLeft } from '@material-ui/icons'
// core components
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
import Button from 'components/CustomButtons/Button.js'

import contactStyle from 'styles/jss/nextjs-material-kit-pro/pages/aboutUsSections/contactStyle.js'

const useStyles = makeStyles(contactStyle)

export default function SectionContact() {
  const classes = useStyles()
  return (
    <div className={classes.aboutUs}>
      <GridContainer mt={3}>
        <GridItem xs={12} sm={12} md={12} lg={12} mt={2}>
          <Button color='primary' href='/vara-tjanster'>
            <ArrowLeft />
            Tillbaka till alla våra tjänster
          </Button>
        </GridItem>
      </GridContainer>
    </div>
  )
}
