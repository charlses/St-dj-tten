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
        <h2 className={classes.title + ' ' + classes.textCenter}>
          Vad ingår i hemstädning
        </h2>
        <h5 className={classes.description}>
          Vi på Städjätten finns för dig som vill förenkla vardagen. Därför
          låter vi dig bestämma hur din städning ska utföras tillsammans med
          våra experter. Vi har tagit fram en standardlista för vad som ingår i
          en hemstädning, men självklart anpassar vi den efter just dina behov
          och önskemål. Listan över vad som ingår i en hemstädning finner du
          nedan.
        </h5>
        <h5 className={classes.description}>
          <ul
            style={{
              listStyleImage: "url('/img/bullet.png')"
            }}
          >
            <li>Avtorkning av diskbänk, arbetsbänk och kranar</li>
            <li>Avtorkning av vitvaror </li>
            <li>Rengöring av toalettstol, in- och utsida</li>
            <li>
              Avtorkning utvändigt av torkskåp, torktumlare och tvättmaskin
            </li>
            <li>Våttorkning av golv</li>
            <li>Avtorkning av golvlister, fönsterbrädor och element</li>
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
            <h2 className={classes.title}>Hemstädning efter dina önskemål</h2>
            <h5 className={classes.description}>
              För oss är det viktigt att våra kunder är 100 % nöjda. Vi utför
              därför städning helt enligt dina önskemål. Oavsett behov finns vi
              där för dig när du behöver städhjälp. Vi erbjuder flexibla
              lösningar utifrån dina krav, oavsett om det är städning en gång i
              veckan eller en gång i månaden. Vi erbjuder även tilläggstjänster
              till din hemstädning för en komplett lösning för din vardag.{' '}
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
