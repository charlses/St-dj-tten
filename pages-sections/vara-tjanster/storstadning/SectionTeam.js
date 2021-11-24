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
          <h2 className={classes.title + ' ' + classes.textCenter}>
            Vad ingår i storstädning?
          </h2>
          <h5 className={classes.description}>
            En storstädning är en mer omfattande städning vilket gör att det
            blir rent på riktigt i hela bostaden. Damm lägger sig som ett lager
            och är svårt att bli av med om du inte städar på rätt sätt. För att
            få ett dammfritt hem så behöver du arbeta uppifrån och ned, detta
            för att inte sprida runt dammet till andra ytor. I vår storstädning
            så går vi igenom alla utrymmen i hemmet för att du ska få ett
            dammfritt och skinande rent hem. Vi rekommenderar storstädning minst
            två gånger per år. <br /> <br /> För att ge dig som kund en bättre
            överblick över vad som görs i olika rum följer här en genomgång av
            vilka moment en storstädning omfattar.
          </h5>
          <h5 className={classes.description}>
            <ul>
              <li>Rengöring av vitvaror utvändigt</li>
              <li>
                Ugnsrengöring, avtorkning mellan ugnsglas (demontering av kund),
                avtorkning av ugnsplåtar samt galler
              </li>
              <li>Rengöring av kyl och frys in- och utvändigt (om möjligt)</li>
              <li>Rengöring av tvättmaskin, torktumlare och torkskåp</li>
              <li>Fönsterputs in- och utsida samt mellan glasen</li>
              <li>Dammsugning av klädda/stoppade möbler</li>
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
                title: 'Vad kostar storstädning?  ',
                content: 'Pris för storstädning är från 250 kr/h'
              },
              {
                title:
                  'Vad är skillnaden mellan storstädning och hemstädning ?',
                content:
                  'En storstädning är en mer grundlig och noggrann städning, medan en hemstädning är en mer övergripande städning. Läs vår checklista för att få information om vilka områden som ingår. '
              },
              {
                title: 'Får jag RUT-avdrag för storstädning?',
                content:
                  'Ja, storstädning är en tjänst som omfattas av RUT-avdrag. Alla våra priser är inklusive 50% avdrag för arbetskostnaden och vi sköter pappersarbetet med Skatteverket. '
              }
            ]}
          />
        </GridItem>
      </GridContainer>
    </div>
  )
}
