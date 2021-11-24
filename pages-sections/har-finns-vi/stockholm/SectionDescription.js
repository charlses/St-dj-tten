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
            Förenkla din vardag genom att boka Städjätten som din städfirma i
            Stockholm. Vi hjälper dig med bland annat hemstädning, storstädning
            och flyttstädning. I vår städning arbetar vi med miljövänliga
            städprodukter samt väljer miljövänliga resor till våra kunder.
          </h5>
        </GridItem>
      </GridContainer>
    </div>
  )
}
