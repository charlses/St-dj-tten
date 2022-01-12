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
import Card from 'components/Card/Card.js'
import CardBody from 'components/Card/CardBody.js'
import { ChatTwoTone } from '@material-ui/icons'
import { PhoneTwoTone } from '@material-ui/icons'
import { EmailTwoTone } from '@material-ui/icons'
import CustomInput from 'components/CustomInput/CustomInput.js'

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
              <h2 className={classes.title}>Kom i kontakt med oss</h2>
            </GridItem>
          </Grow>
        </GridContainer>
        <div>
          <Card raised className={classes.card}>
            <CardBody formHorizontal>
              <GridContainer>
                <Grow
                  in={true}
                  style={{ transformOrigin: '0 0 0' }}
                  timeout={1000}
                >
                  <GridItem xs={12} sm={4} md={4}>
                    <InfoArea
                      title='Chatta med oss'
                      description=' '
                      icon={ChatTwoTone}
                      iconColor='primary'
                      vertical
                    />
                  </GridItem>
                </Grow>
                <Grow
                  in={true}
                  style={{ transformOrigin: '0 0 0' }}
                  timeout={2000}
                >
                  <GridItem xs={12} sm={4} md={4}>
                    <InfoArea
                      title='Ring oss'
                      description=' '
                      icon={PhoneTwoTone}
                      iconColor='success'
                      vertical
                    />
                  </GridItem>
                </Grow>
                <Grow
                  in={true}
                  style={{ transformOrigin: '0 0 0' }}
                  timeout={3000}
                >
                  <GridItem xs={12} sm={4} md={4}>
                    <InfoArea
                      title='Mejla oss'
                      description=' '
                      icon={EmailTwoTone}
                      iconColor='danger'
                      vertical
                    />
                  </GridItem>
                </Grow>
              </GridContainer>
              <GridContainer justifyContent='center'>
                <Grow
                  in={true}
                  style={{ transformOrigin: '0 0 0' }}
                  timeout={150}
                >
                  <GridItem xs={12} sm={8} md={8}>
                    <h5 className={classes.title}>Eller bli uppringd av oss</h5>
                    <CustomInput
                      id='float phone'
                      labelText='Telefonnummer'
                      required
                      formControlProps={{
                        fullWidth: true,
                        className: classes.formControl
                      }}
                    />
                  </GridItem>
                </Grow>
              </GridContainer>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  )
}
