import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// core components
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'

import teamStyle from 'styles/jss/nextjs-material-kit-pro/pages/aboutUsSections/teamStyle.js'

import Accordion from 'components/Accordion/Accordion.js'

const useStyles = makeStyles(teamStyle)

export default function SectionTeam() {
  const classes = useStyles()
  return (
    <div className={classes.team}>
      <GridContainer>
        <GridItem
          md={12}
          sm={12}
          className={classNames(classes.mrAuto, classes.mlAuto)}
        >
          <h2 className={classes.title}>
            Ansvarsförsäkrade och certifierad personal
          </h2>
          <h5 className={classes.description}>
            Vi på Städjätten är måna om våra anställda och våra kunder, därför
            är vi ansvarsförsäkrade och vår personal är utbildade i lyftteknik
            för att kunna bära ergonomiskt och lasta på ett säkert sätt.
            Städjätten har personal som är certifierad och har SRY-yrkesbevis.
          </h5>
        </GridItem>

        <GridItem
          md={12}
          sm={12}
          className={classNames(classes.mrAuto, classes.mlAuto)}
        >
          <div className={classes.title}>
            <h3>FAQ</h3>
          </div>
          <Accordion
            active={0}
            activeColor='rose'
            collapses={[
              {
                title: 'Vad kostar kontorsflytt? ',
                content: 'Pris för kontorsflytt är från 990 kr/h'
              },
              {
                title: 'Kan man låna flyttkartonger?',
                content:
                  ' Hos oss ingår alltid lån av flyttkartonger som ni kan ha 2 veckor innan och efter utförande av flytten. Kartongerna går att hämta ut eller få utkörda till er. Kontakta oss så hjälper vi er med er kontorsflytt!'
              },
              {
                title: 'Kan man boka kontorsstädning också?',
                content:
                  'Absolut, vi skräddarsyr kontorsstädning efter era önskemål.'
              }
            ]}
          />
        </GridItem>
      </GridContainer>
    </div>
  )
}
