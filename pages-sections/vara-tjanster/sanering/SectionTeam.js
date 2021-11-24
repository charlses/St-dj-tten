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
          <h2 className={classes.title}>
            Effektiv sanering i Stockholm & Göteborg
          </h2>
          <h5 className={classes.description}>
            Innan saneringen utförs har vi som rutin att gå igenom bostaden
            eller byggnaden tillsammans med kunden. Vi tittar närmare på
            känsliga föremål och värdesaker för att markera saker som ska tas
            hänsyn till. Därefter går vi igenom steg för steg vilka åtgärder som
            kommer att utföras för att saneringen ska ge det bästa resultatet.
            Vi hjälper er med alla era önskemål. Vårt team har den utbildning
            och de kompetenser som krävs för att ge våra kunder hjälp på ett
            effektivt sätt. Saneringsjobb kräver kompetent personal med rätt
            utrustning som vet hur man genomför saneringen på ett säkert sätt.
            Du som kund ska alltid känna dig trygg och bekväm när jobbet av
            sanering utförs
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
                title: 'Vad kostar sanering? ',
                content: 'Kontakta oss för att få ett prisförslag'
              },
              {
                title: 'Vilken typ av sanering utför ni?',
                content:
                  'Vi tar hand om alla typer av saneringsjobb, allt från socialsaneringar till specialsaneringar.'
              },
              {
                title: 'Hur sker hanteringen av nycklar?',
                content:
                  'Innan saneringen utförs har vi som rutin att gå igenom bostaden eller byggnaden tillsammans med kunden. Vi tittar närmare på känsliga föremål och värdesaker för att markera saker som ska tas hänsyn till. Därefter går vi igenom steg för steg vilka åtgärder som kommer att utföras för att saneringen ska ge det bästa resultatet. '
              }
            ]}
          />
        </GridItem>
      </GridContainer>
    </div>
  )
}
