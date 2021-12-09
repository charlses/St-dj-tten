import React from 'react'
// nodejs library that concatenates classes

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
// core components
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
import Card from 'components/Card/Card.js'
import CardBody from 'components/Card/CardBody.js'
import Button from 'components/CustomButtons/Button.js'

import styles from 'styles/jss/nextjs-material-kit-pro/pages/ecommerceSections/productsStyle.js'

const useStyles = makeStyles(styles)

export default function SectionProducts() {
  const classes = useStyles()
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <h2 className={classes.title}>Våra Tjänster</h2>
        <GridContainer>
          <GridItem md={6} sm={6}>
            <Card
              background
              style={{ backgroundImage: "url('/img/hemstadning.jpg')" }}
            >
              <CardBody background>
                <a href='#pablo'>
                  <h3 className={classes.cardTitle}>Städhjälp</h3>
                </a>
                <p className={classes.description}>
                  Förenkla din vardag genom att boka Städjätten som din
                  städfirma. Vi hjälper dig med bland annat hemstädning,
                  storstädning och flyttstädning. I vår städning arbetar vi med
                  miljövänliga städprodukter samt väljer miljövänliga resor till
                  våra kunder.
                </p>
                <Button href='/stadhjalp' round color='primary'>
                  Se mer
                </Button>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem md={6} sm={6}>
            <Card
              background
              style={{ backgroundImage: "url('/img/flytt.jpg')" }}
            >
              <CardBody background>
                <a href='#pablo'>
                  <h3 className={classes.cardTitle}>Flytthjälp</h3>
                </a>
                <p className={classes.description}>
                  Vi hjälper dig när det är det dags för flytt. Med Städjätten
                  som flyttfirma sker din flytt på ett snabbt, prisvärt och
                  effektivt sätt. Städjätten är ansvarsförsäkrade via Trygg
                  Hansa. Detta gör att du som kund kan känna dig trygg när du
                  anlitar oss för flytthjälp.
                </p>
                <Button href='/flytthjalp' round color='primary'>
                  Se mer
                </Button>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem md={12} sm={12}>
            <Card
              background
              style={{ backgroundImage: "url('/img/flytthjalp.jpg')" }}
            >
              <CardBody background>
                <a href='#pablo'>
                  <h3 className={classes.cardTitle}>Allla våra tjänster</h3>
                </a>
                <p className={classes.description}>
                  Vi erbjuder tilläggstjänster till din hemstädning för att du
                  ska kunna få en komplett lösning. Vi hjälper dig med
                  vardagssysslor som kan ta mycket tid och energi och som man
                  annars inte hinner med i en hektisk vardag.
                </p>
                <Button href='/vara-tjanster' round color='primary'>
                  Se alla våra tjänster
                </Button>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  )
}
