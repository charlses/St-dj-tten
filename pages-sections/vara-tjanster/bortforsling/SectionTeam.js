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
            <h2 className={classes.title}>
              Bortforsling av möbler på rätt sätt
            </h2>
            <h5 className={classes.description}>
              Kroppen kan ta stora skador om man inte har rätt kunskap och
              verktyg vid lyft. Ibland är tunga möbler och andra föremål
              alldeles för svåra för att transportera bort på egen hand. Då är
              det viktigt att ta hjälp av någon som har rätt verktyg och
              besitter kunskapen om hur bortforslingen ska ske på rätt sätt. Vi
              hämtar din bortforsling och gör grovjobbet så att du kan lägga din
              dyrbara tid och energi på andra roliga saker. <br /> <br />
              <Button color='primary' href='/offert'>
                Skicka en offertförfrågan nu!
              </Button>
            </h5>
          </GridItem>
        </GridContainer>
      </div>

      <SectionNoImage>
        <h2 className={classes.title + ' ' + classes.textCenter}>
          Bortforsling för företag
        </h2>
        <h5 className={classes.description + ' ' + classes.textCenter}>
          Som företag är det viktigt att ta sitt ansvar för miljö och samhälle.
          Det är inte ovanligt att företag slarvar med sin bortforsling och inte
          tar sitt ansvar hos återvinningscentralen, något som kan leda till
          böter på upp till 500 miljoner kronor. Undvik att riskera böter eller
          miljöskada som kräver sanering och anlita Städjätten. Vi har rätt
          kunskap, de tillstånd som krävs och säkerställer att bortforsling sker
          regelrätt.
        </h5>
      </SectionNoImage>
    </div>
  )
}
