import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// core components
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'

import teamStyle from 'styles/jss/nextjs-material-kit-pro/pages/aboutUsSections/teamStyle.js'

const useStyles = makeStyles(teamStyle)

export default function SectionTeam() {
  const classes = useStyles()
  return (
    <div className={classes.team}>
      <GridContainer>
        <GridItem
          md={12}
          sm={12}
          className={classNames(
            classes.mrAuto,
            classes.mlAuto,
            classes.textCenter
          )}
        >
          <h2 className={classes.title}>
            Behöver du en flyttfirma i Stockholm?
          </h2>
          <h5 className={classes.description}>
            Vi hjälper dig när det är det dags för flytt till och från
            Stockholm. Med Städjätten som flyttfirma sker din flytt på ett
            snabbt, prisvärt och effektivt sätt. Städjätten är ansvarsförsäkrade
            via Trygg Hansa. Detta gör att du som kund kan känna dig trygg när
            du anlitar oss för flytthjälp.
          </h5>
        </GridItem>
      </GridContainer>
    </div>
  )
}
