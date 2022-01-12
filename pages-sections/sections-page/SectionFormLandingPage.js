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
import headersStyle from 'styles/jss/nextjs-material-kit-pro/pages/sectionsSections/headersStyleLandingPage.js'

const useStyles = makeStyles(headersStyle)

export default function SectionForm() {
  const classes = useStyles()
  const [newName, setNewName] = useState('')
  const [newEmail, setNewEmail] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [newStatus, setNewStatus] = useState('')
  const [newService, setNewService] = useState('')
  const [newDate, setNewDate] = useState('')

  const headers = () => {
    return {
      'Accept': 'application/hal+json',
      'x-api-key': process.env.limeApiKey
    }
  }

  const sendPostRequest = async (e) => {
    try {
      e.preventDefault()
      // const res1 = await axios({
      //   method: 'post',
      //   url: process.env.limeApiUrlCompany,
      //   headers: headers(),
      //   data: {}
      // })
      const res3 = await axios({
        method: 'post',
        url: process.env.limeApiUrlPerson,
        headers: headers(),
        data: {
          firstname: newName,
          email: newEmail,
          phone: newPhone
        }
      })
      const res3Data = res3.data
      console.log(res3Data._id)
      return res3.status === '200'
    } catch (err) {
      console.log(err.message)
    }
  }

  return (
    // <form onSubmit={sendPostRequest}>
    //   <input
    //     type='text'
    //     onChange={(e) => setNewName(e.target.value)}
    //     value={newName}
    //     placeholder='namn'
    //   />
    //   <input
    //     type='text'
    //     onChange={(e) => setNewEmail(e.target.value)}
    //     value={newEmail}
    //     placeholder='e-post'
    //   />
    //   <input
    //     type='text'
    //     onChange={(e) => setNewPhone(e.target.value)}
    //     value={newPhone}
    //     placeholder='telefonnummer'
    //   />
    //   <button> Skicka </button>
    // </form>

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
              Skicka en offertförfrågan så kontaktar vi dig inom 1 timme
            </h5>
            <form>
              <GridContainer>
                <GridItem xs={12} sm={6} md={2}>
                  <CustomInput
                    id='float'
                    required
                    onChange={(e) => setNewName(e.target.value)}
                    value={newName}
                    labelText='Ditt namn'
                    formControlProps={{
                      fullWidth: true,
                      className: classes.formControl
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={6} md={2}>
                  <CustomInput
                    id='float'
                    required
                    onChange={(e) => setNewEmail(e.target.value)}
                    labelText='E-post'
                    value={newEmail}
                    formControlProps={{
                      fullWidth: true,
                      className: classes.formControl
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={6} md={2}>
                  <CustomInput
                    id='float'
                    labelText='Telefonnummer'
                    onChange={(e) => setNewPhone(e.target.value)}
                    value={newPhone}
                    required
                    formControlProps={{
                      fullWidth: true,
                      className: classes.formControl
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={6} md={2}>
                  <CustomInput
                    id='float'
                    required
                    onChange={(e) => setNewService(e.target.value)}
                    value={newService}
                    labelText='Välj en tjänst'
                    formControlProps={{
                      fullWidth: true,
                      className: classes.formControl
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={6} md={2}>
                  <CustomInput
                    id='float'
                    required
                    onChange={(e) => setNewDate(e.target.value)}
                    value={newDate}
                    labelText='Datumn'
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
