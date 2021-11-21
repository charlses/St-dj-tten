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
          md={12}
          sm={12}
          className={classNames(
            classes.mrAuto,
            classes.mlAuto,
            classes.textCenter
          )}
        >
          <h2 className={classes.title}>Om oss & vårt arbetssätt</h2>
          <h5 className={classes.description}>
            Vårt fokus är effektivitet och service, därför använder vi sedan
            flera år tillbaka tekniska verktyg som ger oss möjlighet att
            utnyttja våra resurser optimalt. Det som skiljer oss från många
            andra är vår välstrukturerade planering och flexibla arbetssätt som
            gör att vi kan hålla mycket konkurrenskraftiga priser på både städ-
            och flytthjälp.
          </h5>
          <h5 className={classes.description}>
            Vi har en familjär företagskultur där personalen är vald med omsorg.
            Dessa är skickliga yrkesmänniskor, med både lång erfarenhet och hög
            servicekänsla. Vi har certifierad personal & SRY-yrkesbevis.
            Självklart är vi ansvarsförsäkrade för att du som kund ska känna dig
            trygg med att anlita oss.
          </h5>
          <h5 className={classes.description}>
            Vi strävar alltid efter att förbättra och utveckla oss så att du som
            kund ska få det bästa alternativet och den mest prisvärda städ- och
            flytthjälpen.
          </h5>
          <h5 className={classes.description}>
            Ett annat resultat av god planering och struktur är att alla vet vad
            de ska göra. Då blir det enkelt att hålla hög servicenivå. Förutom
            att städning eller flytt ska utföras snabbt och effektivt, ska den
            göras fläckfritt och utifrån kundens behov och önskemål. Du som
            kund, oavsett privatperson eller företag, ska känna dig trygg med
            oss som leverantör – oavsett om du har beställt en enskild tjänst
            eller en helhetslösning med allt från packning till transport och
            flyttstädning.
          </h5>
        </GridItem>
      </GridContainer>
    </div>
  )
}
