import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// core components
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'

import descriptionStyle from 'styles/jss/nextjs-material-kit-pro/pages/aboutUsSections/descriptionStyle.js'

const useStyles = makeStyles(descriptionStyle)

export default function SectionDescription() {
  const classes = useStyles()
  return (
    <div className={classNames(classes.aboutDescription, classes.textCenter)}>
      <GridContainer>
        <GridItem
          md={8}
          sm={8}
          className={classNames(classes.mrAuto, classes.mlAuto)}
        >
          <h5 className={classes.description}>
            Vi är ett medelstort företag som erbjuder städ- och flytthjälp. Vi
            finns i både Stockholm och Göteborg för flyttstädning, hemstädning,
            storstädning, byggstädning, visningsstädning, kontorsstädning,
            sanering, trädgårdsskötsel, flytthjälp, bortforsling, packhjälp
            eller bärhjälp.
          </h5>
        </GridItem>
      </GridContainer>
    </div>
  )
}
