import React from 'react'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'

// @material-ui/icons
import { Public, Security, Payment } from '@material-ui/icons'
// core components
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
import InfoArea from 'components/InfoArea/InfoArea.js'
import Button from 'components/CustomButtons/Button.js'
import { Grow } from '@material-ui/core'

import productStyle from 'styles/jss/nextjs-material-kit-pro/pages/landingPageSections/productStyle.js'

const useStyles = makeStyles(productStyle)

export default function SectionProduct() {
  const classes = useStyles()
  return (
    <div className={classes.section}>
      <div className={classes.container}>

        <GridContainer justifyContent='center'>
          <Grow in={true} style={{ transformOrigin: '0 0 0' }} timeout={150}>
            <GridItem xs={12} sm={8} md={8}>
              <h2 className={classes.title}>
                Städtjänster med fokus på dig som kund
              </h2>
              <h5 className={classes.description}>
                Städjätten erbjuder städ- och flytthjälp som är skräddarsydda
                efter just dina behov och önskemål. Med oss kan du boka
                helhetslösningar och vi finns i både Stockholm och Göteborg. Vi
                hjälper dig med flyttstädning, hemstädning, storstädning,
                byggstädning, visningsstädning, kontorsstädning, sanering,
                trädgårdsskötsel, flytthjälp, bortforsling, packhjälp eller
                bärhjälp. Städjätten finns här för att hjälpa dig och underlätta
                din vardag – när du behöver det.
              </h5>
            </GridItem>
          </Grow>
        </GridContainer>

        <div>
          <GridContainer style={{margin: '30px 0', userSelect: 'none'}}>
            <Grow in={true} style={{ transformOrigin: '0 0 0' }} timeout={1000}>
              <GridItem xs={12} sm={4} md={4}>
                <InfoArea
                  title='Nöjd-kund-garanti'
                  description='Vi har genom åren lärt oss att den viktigaste marknadsföringen är nöjda kunder. Vi lämnar därför 7 dagars nöjd kundgaranti för vår flyttstädning, så att du som kund alltid ska ha möjlighet att vara 100% nöjd. '
                  icon={Security}
                  iconColor='primary'
                  vertical
                />
              </GridItem>
            </Grow>
            <Grow in={true} style={{ transformOrigin: '0 0 0' }} timeout={2000}>
              <GridItem xs={12} sm={4} md={4}>
                <InfoArea
                  title='Vår miljöpolicy'
                  description='Städjätten lägger stor vikt vid miljöaspekter när vi arbetar med städ- och flytthjälp. Vi väljer alltid i första hand städprodukter och annat material som är miljömärkt. Våra transporter är alltid optimerade och planerade för att minska våra körsträckor och'
                  icon={Public}
                  iconColor='success'
                  vertical
                />
              </GridItem>
            </Grow>
            <Grow in={true} style={{ transformOrigin: '0 0 0' }} timeout={3000}>
              <GridItem xs={12} sm={4} md={4}>
                <InfoArea
                  title='50% RUT-avdrag'
                  description='När du anlitar oss kan du som privatperson använda dig av RUT-avdraget. Vi gör det enkelt för dig och sköter all administration. Genom RUT- avdraget har du möjlighet att dra av arbetskostnader upp till 75 000 kr per år efter nya regler 2021.'
                  icon={Payment}
                  iconColor='danger'
                  vertical
                />
              </GridItem>
            </Grow>
          </GridContainer>
          <Button color='primary' round href='/om-oss'>
            Läs mer om oss
          </Button>
        </div>
      </div>
    </div>
  )
}
