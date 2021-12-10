import React from 'react'
import { useState } from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// react component for creating beautiful carousel
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
// core components
import Button from 'components/CustomButtons/Button.js'
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
import Card from 'components/Card/Card.js'
import CardBody from 'components/Card/CardBody.js'
import CustomInput from 'components/CustomInput/CustomInputWhite.js'
import axios from 'axios'
import headersStyle from 'styles/jss/nextjs-material-kit-pro/pages/sectionsSections/headersStyle.js'

const useStyles = makeStyles(headersStyle)

export default function SectionForm() {
  const classes = useStyles()
  const [newName, setNewName] = useState('')
  const [newEmail, setNewEmail] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [newStatus, setNewStatus] = useState('')

  const sendGetRequest = async () => {
    try {
      const res = await axios({
        method: 'get',
        url: process.env.limeApiUrl,
        headers: {
          'Accept': 'application/hal+json',
          'x-api-key': process.env.limeApiKey
        }
      })
    } catch (err) {
      console.error(err)
    }
  }

  sendGetRequest()

  return (
    // we've set the className to cd-section so we can make smooth scroll to it

    <GridContainer>
      <GridItem
        xs={12}
        sm={10}
        md={10}
        className={classNames(classes.mlAuto, classes.mrAuto)}
      >
        <Card raised className={classes.card}>
          <CardBody formHorizontal>
            <h5 className={(classes.title, classes.textCenter)}>
              Skicka en offerförfråga så kontaktar vi dig inom 1 timme
            </h5>
            <form>
              <GridContainer>
                <GridItem xs={12} sm={6} md={2}>
                  <CustomInput
                    id='name'
                    required
                    inputProps={{
                      placeholder: 'Ditt namn'
                    }}
                    formControlProps={{
                      fullWidth: true,
                      className: classes.formControl
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={6} md={2}>
                  <CustomInput
                    id='email'
                    required
                    inputProps={{
                      placeholder: 'E-post'
                    }}
                    formControlProps={{
                      fullWidth: true,
                      className: classes.formControl
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={6} md={2}>
                  <CustomInput
                    id='phone'
                    required
                    inputProps={{
                      placeholder: 'Telefonnummer'
                    }}
                    formControlProps={{
                      fullWidth: true,
                      className: classes.formControl
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={6} md={2}>
                  <CustomInput
                    id='phone'
                    required
                    inputProps={{
                      placeholder: 'Välj en tjänst'
                    }}
                    formControlProps={{
                      fullWidth: true,
                      className: classes.formControl
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={6} md={2}>
                  <CustomInput
                    id='phone'
                    required
                    inputProps={{
                      placeholder: 'Datum'
                    }}
                    formControlProps={{
                      fullWidth: true,
                      className: classes.formControl
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={6} md={2}>
                  <Button block color='primary' className={classes.button}>
                    Skicka
                  </Button>
                </GridItem>
              </GridContainer>
            </form>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  )
}
