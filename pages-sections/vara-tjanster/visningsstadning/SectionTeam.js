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

import Link from 'next/link'
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
          <h2 className={classes.title}>Anlita oss för visningsstädning</h2>
          <h5 className={classes.description}>
            En lägenhet eller lokal som är städad är alltid uppskattat och ökar
            chansen för försäljning. Spekulantens första intryck vid visningen
            har stor betydelse för slutpriset. En professionell visningsstädning
            kan ge dig en lyckad affär, ett hem eller företagslokal som känns
            skinande rent och andas harmoni kan få vilken spekulant som helst
            att slå till.
          </h5>
        </GridItem>
        <GridItem
          md={12}
          sm={12}
          className={classNames(classes.mrAuto, classes.mlAuto)}
        >
          <h2 className={classes.title + ' ' + classes.textCenter}>
            Vad ingår i visningsstädning?
          </h2>
          <h5 className={classes.description}>
            <ul>
              <li>Avtorkning av diskbänk, arbetsbänk, kranar</li>
              <li>Tömning och avtorkning i och runt sopbehållare</li>
              <li>
                Avtorkning med fuktig trasa av badkar och/eller duschkabin
              </li>
              <li>Avtorkning av kakel och klinkers</li>
              <li>Dammsugning av golv, golvsocklar, trösklar och mattor</li>
              <li>
                Avtorkning med fuktig trasa av fria horisontella ytor på bord,
                stolar, skåp och hyllor
              </li>
            </ul>
          </h5>
        </GridItem>
        <GridItem
          md={12}
          sm={12}
          className={classNames(classes.mrAuto, classes.mlAuto)}
        >
          <h2 className={classes.title + ' ' + classes.textCenter}>
            Några snabba tips att tänka på vid en bostadsvisning:
          </h2>
          <h5 className={classes.description}>
            <ul>
              <li>
                Ta bort alla gamla växter. Plocka istället fram en vacker vas
                med blommor i för att förhöja känslan av ett rent och välstädat
                hem.
              </li>
              <li>
                {' '}
                Lägg fram skoskydd för spekulanter att ta på sig, detta för att
                inte smutsa ner hemmet utan istället bevara det så rent som
                möjligt.
              </li>
              <li>
                Ställ fram en fruktskål eller dylikt, t ex citron, chili,
                avokado eller annat.
              </li>
              <li>Släng soporna för att undvika dålig lukt i hemmet.</li>
              <li>
                Kanske behöver du en mer utförligare städning? Läs mer om vår
                populära{' '}
                <Link href={{ pathname: '/vara-tjanster/flyttstadning' }}>
                  Flyttstädning
                </Link>
                !
              </li>
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
        </GridItem>
      </GridContainer>
    </div>
  )
}
