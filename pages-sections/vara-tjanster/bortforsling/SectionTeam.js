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
          <h2 className={classes.title}>
            Vi forslar bort skräp och grovavfall i hela Stockholm & Göteborg
          </h2>
          <h5 className={classes.description}>
            Allt ifrån gamla möbler, elektronikskrot till stora förpackningar
            forslar vi bort på ett ansvarsfullt sätt till närmaste
            återvinningscentral. Då har du säkert samlat på dig skräp, kompost,
            rivning och grovavfall du vill bli av med. När du behöver bli av med
            gamla möbler, elektronikskrot, stora förpackningar och annat
            skrymmande ska du höra av dig till oss. Vi ordnar med bortforsling i
            hela Stockholms län samt Göteborgs stad och kan ta hand om allt i
            avfallsväg. Vi forslar alltid bort på ett ansvarsfullt sätt till
            närmaste återvinningscentral.
          </h5>
        </GridItem>
        <GridItem
          md={12}
          sm={12}
          className={classNames(classes.mrAuto, classes.mlAuto)}
        >
          <h2 className={classes.title}>Bortforsling av möbler på rätt sätt</h2>
          <h5 className={classes.description}>
            Kroppen kan ta stora skador om man inte har rätt kunskap och verktyg
            vid lyft. Ibland är tunga möbler och andra föremål alldeles för
            svåra för att transportera bort på egen hand. Då är det viktigt att
            ta hjälp av någon som har rätt verktyg och besitter kunskapen om hur
            bortforslingen ska ske på rätt sätt. Vi hämtar din bortforsling och
            gör grovjobbet så att du kan lägga din dyrbara tid och energi på
            andra roliga saker.
          </h5>
        </GridItem>

        <GridItem
          md={12}
          sm={12}
          className={classNames(
            classes.mrAuto,
            classes.mlAuto,
            classes.textCenter
          )}
        >
          <h2 className={classes.title + ' ' + classes.textCenter}>
            Bortforsling för företag
          </h2>
          <h5 className={classes.description}>
            Som företag är det viktigt att ta sitt ansvar för miljö och
            samhälle. Det är inte ovanligt att företag slarvar med sin
            bortforsling och inte tar sitt ansvar hos återvinningscentralen,
            något som kan leda till böter på upp till 500 miljoner kronor.
            Undvik att riskera böter eller miljöskada som kräver sanering och
            anlita Städjätten. Vi har rätt kunskap, de tillstånd som krävs och
            säkerställer att bortforsling sker regelrätt.
          </h5>
        </GridItem>
        {/* <GridItem
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
        </GridItem> */}
      </GridContainer>
    </div>
  )
}
