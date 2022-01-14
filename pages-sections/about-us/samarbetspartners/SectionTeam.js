import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// core components
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'

import teamStyle from 'styles/jss/nextjs-material-kit-pro/pages/aboutUsSections/teamStyle.js'

const useStyles = makeStyles(teamStyle)

export default function SectionTeam() {
  const classes = useStyles()
  return (
    <div className={classes.team}>
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
          <h2 className={classes.title}>Våra samarbetspartners</h2>
          <h5 className={classes.description}>
            Idag har vi fantastiska samarbetspartners med mindre privata till större bolag som gör att vi kan hjälpa fler med våra tjänster runt om i Sverige. Vi arbetar bland annat med flera mäklarfirmor i Stockholm, Bjurfors Bromma, Bjurfors Södermalm, Bjurfors Liljeholmen, Svenska Mäklarhuset Bromma Essingen, ERA Vaxholm är bara några av våra samarbetspartners.ollentuna kommun är bara några av våra samarbetspartners.
            <br/>
            <br/>
            Vi arbetar även med 24Storage och City self-storage som gör att vi kan erbjuda våra kunder förmånliga priser på magasinering i samband med våra tjänster. Med hjälp av Golvexperten kan du som kund även få ihop en helhetslösning där vi kan hjälpa dig med golvtjänster som håller en hög kvalité. Kontakta oss så hjälper vi dig ta del av våra erbjudanden.
          </h5>
        </GridItem>

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
          <h2 className={classes.title}>Vill du också bli samarbetspartner med Städjätten?</h2>
          <h5 className={classes.description}>
            Med höga ambitioner är vår vision att inte bara bli störst och billigast, vi strävar också efter att vara bäst på det vi gör inom städ och flytt i hela Sverige. Tack vare kvaliteten vi håller i utförda arbeten har vi lyckats bygga upp ett starkt varumärke som vi är måna om att behålla.
            <br/>
            <br/>
            Ett annat resultat av god planering och struktur är att alla vet vad de ska göra. Då blir det enkelt att hålla hög servicenivå. Förutom att städning eller flytt ska utföras snabbt och effektivt, ska den göras fläckfritt och utifrån kundens behov och önskemål. Du som kund, oavsett privatperson eller företag, ska känna dig trygg med oss som leverantör – oavsett om du har beställt en enskild tjänst eller en helhetslösning med allt från packning till transport och flyttstädning.
          </h5>
        </GridItem>
      </GridContainer>
    </div>
  )
}
