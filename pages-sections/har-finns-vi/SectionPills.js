import React from 'react'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import Tooltip from '@material-ui/core/Tooltip'
// @material-ui/icons
import FormatAlignLeft from '@material-ui/icons/FormatAlignLeft'
// core components
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
import Card from 'components/Card/Card.js'
import CardBody from 'components/Card/CardBody.js'
import Button from 'components/CustomButtons/Button.js'

import sectionPillsStyle from 'styles/jss/nextjs-material-kit-pro/pages/blogPostsSections/sectionPillsStyle.js'

const useStyles = makeStyles(sectionPillsStyle)

export default function SectionPills() {
  const classes = useStyles()
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={6} md={6}>
            <Card
              raised
              background
              style={{ backgroundImage: "url('/img/stockholm.jpg')" }}
            >
              <CardBody background>
                <a href='/stockholm'>
                  <h3 className={classes.cardTitle}>Stockholm</h3>
                </a>
                <p className={classes.category}>
                  Vi finns i hela Stockholms län. Oavsett om du bor på
                  Södermalm, Östermalm, Kungsholmen eller ute på Lidingö så
                  hjälper vi dig med din städ- och flytthjälp. Kontakta oss på
                  Städjätten idag så kommer vi till din gata!
                </p>
                <Button round href='/stockholm' color='danger'>
                  <FormatAlignLeft className={classes.icons} /> Läs mer
                </Button>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={6}>
            <Card
              raised
              background
              style={{ backgroundImage: "url('/img/goteborg.jpg')" }}
            >
              <CardBody background>
                <a href='#pablo'>
                  <h3 className={classes.cardTitle}>Göteborg</h3>
                </a>
                <p className={classes.category}>
                  Vi har hjälpt ett flertal kunder i Göteborg med deras städning
                  och flytthjälp. Är du intresserad av att veta mer om vilka
                  tjänster vi erbjuder i Göteborg? <br /> <br />
                </p>
                <Button round href='/goteborg' color='primary'>
                  <FormatAlignLeft className={classes.icons} /> Läs mer här
                </Button>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  )
}
