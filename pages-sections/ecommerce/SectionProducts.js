import React from 'react'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
// core components
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
import Card from 'components/Card/Card.js'
import CardBody from 'components/Card/CardBody.js'
import Button from 'components/CustomButtons/Button.js'
import classNames from 'classnames'

import CardHeader from 'components/Card/CardHeader.js'

import sectionPillsStyle from 'styles/jss/nextjs-material-kit-pro/pages/blogPostsSections/sectionPillsStyle.js'

const useStyles = makeStyles(sectionPillsStyle)

export default function SectionPills() {
  const classes = useStyles()
  return (
    <div
      className={classes.section}
      style={{
        backgroundImage: 'linear-gradient(176deg, #E7F7FE 50%, #ffffff)'
      }}
    >
      <div className={classes.container}>
        <GridContainer>
          <GridItem
            xs={12}
            sm={6}
            md={6}
            lg={6}
            className={classNames(
              classes.mrAuto,
              classes.mlAuto,
              classes.textCenter
            )}
          >
            <Card>
              <CardHeader image>
                <a href='/stadhjalp'>
                  <img
                    src='/img/hemstadning.jpg'
                    alt='Städhjälp'
                    style={{ maxHeight: '250px' }}
                  />
                </a>
              </CardHeader>
              <CardBody>
                <h3 className={classes.cardTitle}>
                  <a href='/stadhjalp'>Städhjälp</a>
                </h3>
                <Button round href='/stadhjalp' color='primary'>
                  Läs mer
                </Button>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem
            xs={12}
            sm={6}
            md={6}
            lg={6}
            className={classNames(
              classes.mrAuto,
              classes.mlAuto,
              classes.textCenter
            )}
          >
            <Card>
              <CardHeader image>
                <a href='/flytthjalp'>
                  <img
                    src='/img/flytthjalp.jpg'
                    alt='Flytthjälp'
                    style={{ maxHeight: '250px' }}
                  />
                </a>
              </CardHeader>
              <CardBody>
                <h3 className={classes.cardTitle}>
                  <a href='/flytthjalp'>Flytthjälp</a>
                </h3>
                <Button round href='/flytthjalp' color='primary'>
                  Läs mer
                </Button>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem
            xs={12}
            sm={12}
            md={12}
            lg={12}
            className={classNames(
              classes.mrAuto,
              classes.mlAuto,
              classes.textCenter
            )}
          >
            <Button round href='/vara-tjanster' color='primary'>
              Alla våra tjänster
            </Button>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  )
}
