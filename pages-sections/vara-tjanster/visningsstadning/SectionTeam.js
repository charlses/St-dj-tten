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
          Några snabba tips att tänka på vid en bostadsvisning:
        </h2>
        <h5 className={classes.description}>
          <ul
            style={{
              listStyleImage: "url('/img/bullet.png')"
            }}
          >
            <li>Avtorkning av diskbänk, arbetsbänk, kranar</li>
            <li>Tömning och avtorkning i och runt sopbehållare</li>
            <li>Avtorkning med fuktig trasa av badkar och/eller duschkabin</li>
            <li>Avtorkning av kakel och klinkers</li>
            <li>Dammsugning av golv, golvsocklar, trösklar och mattor</li>
            <li>
              Avtorkning med fuktig trasa av fria horisontella ytor på bord,
              stolar, skåp och hyllor
            </li>
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
            <h2 className={classes.title}>Anlita oss för visningsstädning</h2>
            <h5 className={classes.description}>
              En lägenhet eller lokal som är städad är alltid uppskattat och
              ökar chansen för försäljning. Spekulantens första intryck vid
              visningen har stor betydelse för slutpriset. En professionell
              visningsstädning kan ge dig en lyckad affär. Ett hem eller
              företagslokal som känns skinande rent och andas harmoni kan få
              vilken spekulant som helst att slå till.
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
