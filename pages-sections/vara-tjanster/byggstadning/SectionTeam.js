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
        <h5 className={classes.description}>
          <h2 className={classes.title}>Vad ingår i Byggstädning?</h2>
          <ul
            style={{
              listStyleImage: "url('/img/bullet.png')"
            }}
          >
            <li>Rengöring av fläkt och filter (ej inuti)</li>
            <li>Rengöring in- och utvändigt av vitvaror (om dessa är tömda)</li>
            <li>Rengöring av badrumsskåp in- och utvändigt</li>
            <li>
              Rengöring av badkar och/eller duschkabin, in/utvändigt samt under
            </li>
            <li>
              Rengöring av golvlister, dörrfoder, dörrar, elkontakter,
              strömbrytare, handtag, krokar m.m
            </li>
            <li>Dammsugning och våttorkning av golv</li>
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
            <h2 className={classes.title}>Nöjd-kund-garanti</h2>
            <h5 className={classes.description}>
              Visste du till exempel att det är viktigt att börja städa uppifrån
              och ner vid en byggstädning eller att en byggstädning kräver
              dammsugning 2-3 gånger? Efter en omfattande renovering eller bygge
              är det en hel del saker att ta hand om. Det ska både städas och
              forslas bort saker, byggstädning kräver kunskaper om vart avfallet
              ska ta vägen och vilken utrustning som krävs för att utföra
              jobbet. Vi har personal som är utbildade för att effektivt ta hand
              om den här typen av städning och saneringar. <br />
              Efter många års erfarenhet av byggstäd åt en mängd olika
              byggföretag, bostadsrättsföreningar och andra fastighetsägare i
              Stockholm och Göteborg har vi kunskapen och verktygen som behövs.
            </h5>
          </GridItem>
        </GridContainer>
      </div>
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
            <h2 className={classes.title}>Rätt byggstädning är viktigt</h2>
            <h5 className={classes.description}>
              Det är inte lätt att städa efter en renovering oavsett storlek,
              speciellt inte när findammet lägger sig i minsta springa. Det är
              även viktigt att tänka på att damm och liknande små partiklar
              reser sig och kan göra det jobbigt för allergiker. Städjätten
              utför byggstädning i hela Stockholm och Göteborg, vi har både
              kunskapen och verktygen för att ta hand om en byggstädning på rätt
              sätt. Boka byggstädning med Städjätten för att bidra med en
              behagligare och renare arbetsplats för alla. <br /> <br />
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
          active={0}
          activeColor='rose'
          collapses={[
            {
              title: 'Vad kostar byggstädning? ',
              content: 'Pris för byggstädning är från 250 kr/h'
            },
            {
              title:
                'Varför ska du boka en byggstädning hos oss på Städjätten?',
              content:
                ' Rätt byggstädning är viktigt. En omfattande städning är nödvändigt efter en renovering. Vår personal är utbildade och har flera års erfarenhet av byggstäd där vi har hjälpt ett flertal byggföretag, bostadsrättsföreningar och andra fastighetsägare i Stockholm. '
            },
            {
              title: 'Vad ingår i en byggstädning?',
              content:
                'Tjänsten byggstädning bokas ofta i samband en renovering eller en flytt. Vi utför en grovstädning och hjälper dig med bortforsling av material till återvinningen. Önskar du veta vad som ingår i byggstädning?'
            }
          ]}
        />
      </SectionNoImage>
    </div>
  )
}
