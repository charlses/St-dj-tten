import React from 'react'
// nodejs library that concatenates classes
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
// @material-ui/icons
import { Check } from '@material-ui/icons'
// core components
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
import InfoArea from 'components/InfoArea/InfoArea.js'

import servicesStyle from 'styles/jss/nextjs-material-kit-pro/pages/aboutUsSections/servicesStyle.js'

const useStyles = makeStyles(servicesStyle)

export default function SectionServices() {
  const classes = useStyles()
  return (
    <div className={classes.services}>
      <GridContainer style={{ paddingTop: '30px' }}>
        <GridItem md={4} sm={4} className={classes.textCenter}>
          <InfoArea title='Miljövänliga' icon={Check} iconColor='rose' />
        </GridItem>
        <GridItem md={4} sm={4} className={classes.textCenter}>
          <InfoArea title='Kompetenta' icon={Check} iconColor='rose' />
        </GridItem>
        <GridItem md={4} sm={4} className={classes.textCenter}>
          <InfoArea title='Tidsbesparande' icon={Check} iconColor='rose' />
        </GridItem>
      </GridContainer>
    </div>
  )
}
