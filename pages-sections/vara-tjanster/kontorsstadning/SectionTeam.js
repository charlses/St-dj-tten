import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// core components
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'

import teamStyle from 'styles/jss/nextjs-material-kit-pro/pages/aboutUsSections/teamStyle.js'
import Button from 'components/CustomButtons/Button.js'

import Accordion from 'components/Accordion/Accordion.js'

import SectionImageLeft from 'components/SectionComponent/SectionImageLeft'
import SectionNoImage from 'components/SectionComponent/SectionNoimage'

const useStyles = makeStyles(teamStyle)

export default function SectionTeam() {
  const classes = useStyles()
  return (
    <div className={classes.team}>
      <SectionImageLeft image='/img/tjejen.png' alt='Lokalv[rdare'>
        <h2 className={classes.title}>Vad ingår i en kontorsstädning?</h2>
        <h5 className={classes.description}>
          <ul
            style={{
              listStyleImage: "url('/img/bullet.png')"
            }}
          >
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
          <Button color='primary' href='/vara-tjanster'>
            Se hela checklistan här
          </Button>
        </h5>
      </SectionImageLeft>

      <div className={classes.container}>
        <GridContainer>
          <GridItem
            xl={5}
            md={9}
            sm={9}
            xs={10}
            className={classNames(
              classes.mrAuto,
              classes.mlAuto,
              classes.textCenter
            )}
          >
            <h2 className={classes.title}>Effektiva & ansvarsförsäkrade</h2>
            <h5 className={classes.description}>
              Vi erbjuder en effektiv kontorsstädning. Ni inhandlar de produkter
              ni vill att vi ska använda., Vvi rekommenderar er att de ska vara
              miljömärkta. Fråga oss gärna! Verksamheten är försäkrad för din
              trygghet och ansvarsförsäkringen täcker eventuella skador för att
              du som kund ska känna sig säker. Se vår checklista för
              kontorsstädning! <br /> <br />
              <Button color='primary' href='/offert'>
                Skicka en offertförfrågan nu!
              </Button>
            </h5>
          </GridItem>
        </GridContainer>
      </div>

      <SectionNoImage>
        <h2 className={classes.title}>FAQ?</h2>
        <Accordion
          sx={{ backgroundColor: 'transparent' }}
          active={0}
          collapses={[
            {
              title: 'Vad kostar kontorsstädning?',
              content: 'Pris för kontorsstädning är från 358 kr/h'
            },
            {
              title: 'Gäller RUT-avdrag även för företag?',
              content:
                'RUT-avdraget gäller endast för privatpersoner men vi hjälper självklart företag också och erbjuder förmånliga priser.'
            }
          ]}
        />
      </SectionNoImage>
    </div>
  )
}
