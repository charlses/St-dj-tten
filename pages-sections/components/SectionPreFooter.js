import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// core components
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
import Button from 'components/CustomButtons/Button.js'
import Card from 'components/Card/Card.js'
import CardBody from 'components/Card/CardBody.js'
import CustomInput from 'components/CustomInput/CustomInput.js'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import InputAdornment from '@material-ui/core/InputAdornment'
// @material-ui icons
import Mail from '@material-ui/icons/Mail'

import styles from 'styles/jss/nextjs-material-kit-pro/pages/componentsSections/preFooter.js'

const useStyles = makeStyles(styles)

export default function SectionPreFooter() {
  const classes = useStyles()
  return (
    <div>
      <div
        className={classNames(
          classes.subscribeLine,
          classes.subscribeLineWhite
        )}
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6}>
              <h3 className={classes.title} style={{ color: '#ffffff' }}>
                Vårt nyhetsbrev
              </h3>
              <p className={classes.description} style={{ color: '#fefefe' }}>
                Prenumerera på vårt nyhetsbrev så missar du inte framtida
                erbjudanden.
              </p>
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <Card plain>
                <CardBody>
                  <form>
                    <GridContainer>
                      <GridItem xs={12} sm={6} md={6} lg={8}>
                        <CustomInput
                          id='emailPreFooter2'
                          formControlProps={{
                            fullWidth: true,
                            className: classes.formFix
                          }}
                          inputProps={{
                            startAdornment: (
                              <InputAdornment position='start'>
                                <Mail style={{ color: '#e5e5e5' }} />
                              </InputAdornment>
                            ),
                            placeholder: 'Your Email...'
                          }}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={6} md={6} lg={4}>
                        <Button
                          color='primary'
                          round
                          block
                          className={classes.subscribeButton}
                        >
                          prennumerera
                        </Button>
                      </GridItem>
                    </GridContainer>
                  </form>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  )
}
