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
        <h2 className={classes.title + ' ' + classes.tectCenter}>
          Vad ingår i storstädning?
        </h2>
        <h5 className={classes.description}>
          <ul
            style={{
              listStyleImage: "url('/img/bullet.png')"
            }}
          >
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
              En storstädning är en mer omfattande städning vilket gör att det
              blir rent i hela bostaden. Damm lägger sig som ett lager och är
              svårt att bli av med om du inte städar på rätt sätt. För att få
              ett dammfritt hem så behöver du arbeta uppifrån och ned, detta för
              att inte sprida runt dammet till andra ytor. I vår storstädning så
              går vi igenom alla utrymmen i hemmet för att du ska få ett
              dammfritt och skinande rent hem. Vi rekommenderar storstädning
              minst två gånger per år. <br /> <br /> För att ge dig som kund en
              bättre överblick över vad som görs i olika rum följer här en
              genomgång av vilka moment en storstädning omfattar.
              <br /> <br />
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
              title: 'Vad kostar storstädning?  ',
              content: 'Pris för storstädning är från 250 kr/h'
            },
            {
              title: 'Vad är skillnaden mellan storstädning och hemstädning ?',
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
      </SectionNoImage>
    </div>
  )
}
