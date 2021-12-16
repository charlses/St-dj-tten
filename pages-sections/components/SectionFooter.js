/*eslint-disable*/
import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
// @material-ui/icons
import Mail from '@material-ui/icons/Mail'
// core components
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
import Button from 'components/CustomButtons/Button.js'
import Footer from 'components/Footer/Footer.js'
import { useState } from 'react'
import axios from 'axios'
import SectionPreFooter from 'pages-sections/components/SectionPreFooter.js'

import styles from 'styles/jss/nextjs-material-kit-pro/pages/componentsSections/footerStyle.js'

const useStyles = makeStyles(styles)

export default function SectionFooter() {
  const classes = useStyles()
  const [newEmail, setNewEmail] = useState('')

  const headers = () => {
    return {
      'Accept': 'application/hal+json',
      'x-api-key': process.env.limeApiKey
    }
  }

  const handleSubmit = async (e) => {
    try {
      e.preventDefault()
      const response = await axios({
        method: 'post',
        url: process.env.limeApiUrlPerson,
        data: {
          firstname: 'NewsLetter',
          email: newEmail
        },
        headers: headers()
      })
      console.log(newEmail)
      return response.status === 200
      setNewEmail('')
    } catch (err) {
      console.log(err.message)
      console.log(err.request)
      console.log(err.response)
    }
  }

  return (
    <Footer
      theme='white'
      content={
        <div>
          <ul className={classes.socialButtons}>
            <li>
              <Button
                justIcon
                simple
                href='https://instagram.com/stadjatten'
                target='_blank'
                color='white'
              >
                <i className='fab fa-instagram' />
              </Button>
            </li>
            <li>
              <Button
                justIcon
                simple
                href='https://www.facebook.com/StadjattenAB/'
                target='_blank'
                color='white'
              >
                <i className='fab fa-facebook' />
              </Button>
            </li>
            <li>
              <Button
                justIcon
                simple
                href='https://www.linkedin.com/company/st%C3%A4dj%C3%A4tten/'
                target='_blank'
                color='white'
              >
                <i className='fab fa-linkedin' />
              </Button>
            </li>
            <li>
              <Button
                justIcon
                simple
                href='https://www.youtube.com/channel/UC0aLPknU8viqEaqmVvu-LDw/'
                target='_blank'
                color='white'
              >
                <i className='fab fa-youtube' />
              </Button>
            </li>
            <li>
              <Button
                justIcon
                simple
                href='https://www.tiktok.com/@stadjatten?'
                target='_blank'
                color='white'
              >
                <i className='fab fa-tiktok'></i>
              </Button>
            </li>
          </ul>
          <div className={classNames(classes.pullCenter, classes.copyRight)}>
            Copyright &copy; {1900 + new Date().getYear()}{' '}
            <a href='https://www.workperformance.se' target='_blank'>
              Work Performance
            </a>{' '}
            All Rights Reserved.
          </div>
        </div>
      }
    >
      <div className={classes.footer}>
        <GridContainer>
          <GridItem xs={12} sm={6} md={4}>
            <a href='#pablo'>
              <img
                src='/img/logo-white.png'
                width={200}
                height={40}
                alt='Stadjättens Logga'
                style={{ marginBottom: '20px' }}
              />
            </a>
            <p>
              Vi strävar alltid efter att förbättra och utveckla oss så att du
              som kund ska få det bästa alternativet och den mest prisvärda
              städ- och flytthjälpen.
            </p>
          </GridItem>
          <GridItem xs={12} sm={6} md={2}>
            <h5>Om Oss</h5>
            <ul className={classes.linksVertical}>
              <li>
                <a href='/om-oss/nyheter'>Våra nyheter</a>
              </li>
              <li>
                <a href='/om-oss'>Om oss</a>
              </li>
              <li>
                <a href='/offert'>Kostnadsfri offert</a>
              </li>
              <li>
                <a href='/kontakta-oss'>Kontakta oss</a>
              </li>
              <li>
                <a href='https://careers.workperformance.se/' target='_blank'>
                  Jobba hos oss
                </a>
              </li>
              <li>
                <a href='/faq'>FAQ</a>
              </li>
            </ul>
          </GridItem>
          <GridItem xs={12} sm={6} md={2}>
            <h5>Våra tjänster</h5>
            <ul className={classes.linksVertical}>
              <li>
                <a href='/stadhjalp'>Städhjälp</a>
              </li>
              <li>
                <a href='/flytthjalp'>Flytthjälp</a>
              </li>
              <li>
                <a href='/vara-tjanster'>Alla våra tjänster</a>
              </li>
              <li>
                <a href='/kontakta-oss#kundtjanst'>Kundtjänst</a>
              </li>
            </ul>
          </GridItem>
          <GridItem xs={12} sm={6} md={2}>
            <h5>Legalt</h5>
            <ul className={classes.linksVertical}>
              <li>
                <a href='/transactions-faq'>Transaktions FAQ</a>
              </li>
              <li>
                <a href='/integritetspolicy'>Integritetspolicyn</a>
              </li>
              <li>
                <a href='/foretagsinformation'>Företagsinformation</a>
              </li>
            </ul>
          </GridItem>
        </GridContainer>
      </div>
    </Footer>
  )
}
