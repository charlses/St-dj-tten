import React from 'react'
// nodejs library that concatenates classes

import { makeStyles } from '@material-ui/core/styles'

import teamStyle from 'styles/jss/nextjs-material-kit-pro/pages/aboutUsSections/teamStyle.js'
import Button from 'components/CustomButtons/Button.js'

import SectionImageLeftAbout from 'components/SectionComponent/SectionImageLeftAbout'

const useStyles = makeStyles(teamStyle)

export default function SectionTeam() {
  const classes = useStyles()
  return (
    <div className={classes.team}>
      <SectionImageLeftAbout image='/img/tjejen.png' alt='Lokalv[rdare'>
        <h2 className={classes.title + ' ' + classes.tectCenter}>
          Om oss & vårt arbetssätt
        </h2>
        <h5 className={classes.description}>
          <ul
            style={{
              listStyleImage: "url('/img/bullet.png')"
            }}
          >
            <li>
              Vårt fokus är effektivitet och service. Vi använder sedan flera år
              tillbaka tekniska verktyg som ger oss möjlighet att utnyttja våra
              resurser optimalt. Det som skiljer oss från många andra är vår
              välstrukturerade planering och flexibla arbetssätt. Det gör att vi
              kan hålla mycket konkurrenskraftiga priser på både städ- och
              flytthjälp.
            </li>
            <li>
              Vi har en familjär företagskultur där personalen är vald med
              omsorg. Dessa är skickliga yrkesmänniskor, med både lång
              erfarenhet och hög servicekänsla. Självklart är vi
              ansvarsförsäkrade för att du som kund ska känna dig trygg med att
              anlita oss.
            </li>
            <li>
              Vi strävar alltid efter att förbättra och utveckla oss så att du
              som kund ska få det bästa alternativet och den mest prisvärda
              städ- och flytthjälpen.
            </li>
            <li>
              Ett annat resultat av god planering och struktur är att alla vet
              vad de ska göra. Då blir det enkelt att hålla hög servicenivå.
              Förutom att städning eller flytt ska utföras snabbt och effektivt,
              ska den göras fläckfritt och utifrån kundens behov och önskemål.
              Du som kund, oavsett privatperson eller företag, ska känna dig
              trygg med oss som leverantör – oavsett om du har beställt en
              enskild tjänst eller en helhetslösning med allt ifrån packning
              till transport och flyttstädning.
            </li>
          </ul>
        </h5>
      </SectionImageLeftAbout>
    </div>
  )
}
