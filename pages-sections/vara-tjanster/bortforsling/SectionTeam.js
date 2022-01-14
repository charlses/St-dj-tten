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
      <SectionNoImage>
        <h2 className={classes.title}>FAQ?</h2>
        <Accordion
          sx={{ backgroundColor: 'transparent' }}
          active={0}
          collapses={[
            {
              title: 'Vad kostar hemstädning? ',
              content: 'Pris för hemstädningen är från 179 kr/h'
            },
            {
              title: 'Vad är skillnaden mellan hemstädning och storstädning?',
              content:
                ' En hemstädning är en mer övergripande städning, medan storstädning är en mer grundlig städning. Läs vår checklista här för att få information om vilka områden som ingår. '
            },
            {
              title: 'Hur sker hanteringen av nycklar?',
              content:
                'För att vår personal ska kunna komma in behöver antingen någon öppna åt dem eller så behöver de nycklar. Ifall du själv eller någon annan inte kan vara på plats vid den angivna tiden, kan du komma in med nycklar till vårt kontor på Gullmarsvägen 27 eller lämna nycklar med bud.'
            },
            {
              title: 'Behöver jag ha rengöringsprodukter hemma?',
              content:
                ' Vi rekommenderar att du har dina egna rengöringsprodukter hemma. Är du osäker på vilka städprodukter som behövs, kontakta oss så svarar vi på dina frågor!'
            }
          ]}
        />
      </SectionNoImage>
    </div>
  )
}
