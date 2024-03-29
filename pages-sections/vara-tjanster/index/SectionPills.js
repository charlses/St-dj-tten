import React from 'react'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import Tooltip from '@material-ui/core/Tooltip'
// @material-ui/icons
import FormatAlignLeft from '@material-ui/icons/FormatAlignLeft'
// core components
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
import NavPills from 'components/NavPills/NavPills.js'
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
          <GridItem xs={12} sm={6} md={4}>
            <Card
              raised
              background
              style={{ backgroundImage: "url('/img/flyttstadning.jpg')" }}
            >
              <CardBody background>
                <a href='/vara-tjanster/flyttstadning'>
                  <h3 className={classes.cardTitle}>Flyttstädning</h3>
                </a>
                <p className={classes.category}>fr.20kr/km</p>
                <Button
                  round
                  href='/vara-tjanster/flyttstadning'
                  color='primary'
                >
                  <FormatAlignLeft className={classes.icons} /> Läs mer
                </Button>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={4}>
            <Card
              raised
              background
              style={{ backgroundImage: "url('/img/hemstadning.jpg')" }}
            >
              <CardBody background>
                <a href='#pablo'>
                  <h3 className={classes.cardTitle}>Hemstädning</h3>
                </a>
                <p className={classes.category}>179kr/h</p>
                <Button round href='/vara-tjanster/hemstadning' color='primary'>
                  <FormatAlignLeft className={classes.icons} /> Läs mer
                </Button>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={4}>
            <Card
              raised
              background
              style={{
                backgroundImage: "url('/img/visningsstadning.jpg')"
              }}
            >
              <CardBody background>
                <a href='#pablo'>
                  <h3 className={classes.cardTitle}>Visningsstädning</h3>
                </a>
                <p className={classes.category}>fr.20kr/kvm</p>
                <Button
                  round
                  href='/vara-tjanster/visningsstadning'
                  color='primary'
                >
                  <FormatAlignLeft className={classes.icons} /> Läs mer
                </Button>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={4}>
            <Card
              raised
              background
              style={{ backgroundImage: "url('/img/kontorsstadning.jpg')" }}
            >
              <CardBody background>
                <a href='#pablo'>
                  <h3 className={classes.cardTitle}>Kontorsstädning</h3>
                </a>
                <p className={classes.category}>fr.320kr/h</p>
                <Button
                  round
                  href='/vara-tjanster/kontorsstadning'
                  color='primary'
                >
                  <FormatAlignLeft className={classes.icons} /> Läs mer
                </Button>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={4}>
            <Card
              raised
              background
              style={{ backgroundImage: "url('/img/byggstadning.jpg')" }}
            >
              <CardBody background>
                <a href='#pablo'>
                  <h3 className={classes.cardTitle}>Byggstädning</h3>
                </a>
                <p className={classes.category}>fr.250kr/h</p>
                <Button
                  round
                  href='/vara-tjanster/byggstadning'
                  color='primary'
                >
                  <FormatAlignLeft className={classes.icons} /> Läs mer
                </Button>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={4}>
            <Card
              raised
              background
              style={{
                backgroundImage: "url('/img/packhjalp.jpg')"
              }}
            >
              <CardBody background>
                <a href='#pablo'>
                  <h3 className={classes.cardTitle}>Packhjälp</h3>
                </a>
                <p className={classes.category}>ffr.495kr/h</p>
                <Button round href='/vara-tjanster/packhjalp' color='primary'>
                  <FormatAlignLeft className={classes.icons} />
                  Läs mer
                </Button>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={4}>
            <Card
              raised
              background
              style={{ backgroundImage: "url('/img/barhjalp.jpg')" }}
            >
              <CardBody background>
                <a href='#pablo'>
                  <h3 className={classes.cardTitle}>Bärhjälp</h3>
                </a>
                <p className={classes.category}>fr.495kr/h</p>
                <Button round href='/vara-tjanster/barhjalp' color='primary'>
                  <FormatAlignLeft className={classes.icons} /> Läs mer
                </Button>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={4}>
            <Card
              raised
              background
              style={{ backgroundImage: "url('/img/flytthjalp.jpg')" }}
            >
              <CardBody background>
                <a href='#pablo'>
                  <h3 className={classes.cardTitle}>Flytthjälp</h3>
                </a>
                <p className={classes.category}>fr.495kr/h</p>
                <Button round href='/flytthjalp' color='primary'>
                  <FormatAlignLeft className={classes.icons} />
                  Läs mer
                </Button>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={4}>
            <Card
              raised
              background
              style={{
                backgroundImage: "url('/img/kontorsflytt.jpg')"
              }}
            >
              <CardBody background>
                <a href='#pablo'>
                  <h3 className={classes.cardTitle}>Kontorsflytt</h3>
                </a>
                <p className={classes.category}>fr.990kr/h</p>
                <Button
                  round
                  href='/vara-tjanster/kontorsflytt'
                  color='primary'
                >
                  <FormatAlignLeft className={classes.icons} /> Läs mer
                </Button>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  )
}
