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
          className={classNames(
            classes.mrAuto,
            classes.mlAuto,
            classes.textCenter
          )}
        >
          <h2 className={classes.title}>Effektiva & ansvarsförsäkrade</h2>
          <h5 className={classes.description}>
            Vi erbjuder en effektiv kontorsstädning. Ni inhandlar de produkter
            ni vill att vi ska använda, vi rekommenderar och uppmuntrar till att
            de ska vara miljömärkta. Fråga oss gärna! Verksamheten är försäkrad
            för din trygghet och ansvarsförsäkringen täcker eventuella skador
            för att du som kund ska känna sig säker. Se vår checklista för
            kontorsstädning!
          </h5>
        </GridItem>
        <GridItem
          md={12}
          sm={12}
          className={classNames(classes.mrAuto, classes.mlAuto)}
        >
          <h2 className={classes.title + ' ' + classes.textCenter}>
            Vad ingår i en kontorsstädning?
          </h2>

          <h5 className={classes.description}>
            <ul>
              <li>Rengöring av diskbänk och bänkskivor</li>
              <li>Rengöring av mikrovågsugn in- och utvändigt </li>
              <li>Rengöring av toalett in- och utvändigt</li>
              <li>Påfyllning av tvål, desinfektionsmedel och toalettpapper</li>
              <li>
                Avtorkning av fria ytor som skrivbord, fönsterbänk, hyllor m.m
              </li>
              <li>Avtorkning av dator, tangentbord, telefon</li>
              <li>Tömning och rengöring av papperskorgar</li>
            </ul>
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
                title: 'Vad kostar kontorsstädning?',
                content: 'Pris för kontorsstädning är från 358 kr/h'
              },
              {
                title: 'Är er personal certifierade?',
                content:
                  ' När ni bokar kontorsstädning så är ni alltid i trygga händer. Vi har personal som innehar ett SRY-yrkesbevis och som är certifierade vilket innebär att de besitter på en kompetensutveckling inom städ- och servicebranschen.'
              },
              {
                title: 'Gäller RUT-avdrag även för företag?',
                content:
                  'RUT-avdraget gäller endast för privatpersoner men vi hjälper självklart företag också och erbjuder förmånliga priser.'
              }
            ]}
          />
        </GridItem>
      </GridContainer>
    </div>
  )
}
