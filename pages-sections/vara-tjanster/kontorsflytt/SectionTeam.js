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
        <h2 className={classes.title}>
          Ansvarsförsäkrade och certifierad personal
        </h2>
        <h5 className={classes.description}>
          Vi på Städjätten är måna om våra anställda och våra kunder, därför är
          vi ansvarsförsäkrade och vår personal är utbildade i lyftteknik för
          att kunna bära ergonomiskt och lasta på ett säkert sätt. Städjätten
          har personal som är certifierad och har SRY-yrkesbevis. <br /> <br />
          <Button color='primary' href='/offert'>
            Skicka en offertförfrågan nu!
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
          ></GridItem>
        </GridContainer>
      </div>

      <SectionNoImage>
        <h2 className={classes.title}>FAQ?</h2>
        <Accordion
          sx={{ backgroundColor: 'transparent' }}
          active={0}
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
      </SectionNoImage>
    </div>
  )
}
