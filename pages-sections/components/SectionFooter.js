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
import CustomInput from 'components/CustomInput/CustomInput.js'
import Footer from 'components/Footer/Footer.js'

import styles from 'styles/jss/nextjs-material-kit-pro/pages/componentsSections/footerStyle.js'

const useStyles = makeStyles(styles)

export default function SectionFooter() {
  const classes = useStyles()
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
                color='twitter'
              >
                <i className='fab fa-instagram' />
              </Button>
            </li>
            <li>
              <Button
                justIcon
                simple
                href='https://www.facebook.com/StadjattenAB/'
                color='facebook'
              >
                <i className='fab fa-facebook' />
              </Button>
            </li>
            <li>
              <Button justIcon simple href='' color='google'>
                <i className='fab fa-linkedin' />
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
          <GridItem xs={12} sm={3} md={3}>
            <a href='#pablo'>
              <img
                src='/img/logo.png'
                width={200}
                height={40}
                alt='Stadjättens Logga'
              />
            </a>
            <p>
              Vi strävar alltid efter att förbättra och utveckla oss så att du
              som kund ska få det bästa alternativet och den mest prisvärda
              städ- och flytthjälpen.
            </p>
          </GridItem>
          <GridItem xs={12} sm={2} md={2}>
            <h5>Om Oss</h5>
            <ul className={classes.linksVertical}>
              <li>
                <a href='/om-oss/nyheter'>Våra nyheter</a>
              </li>
              <li>
                <a href='/om-oss'>Om oss</a>
              </li>
              <li>
                <a href='/offert'>Kostnadsfritt offert</a>
              </li>
              <li>
                <a href='/kontakta-oss'>Kontakta oss</a>
              </li>
              <li>
                <a href='/karriar'>Jobba hos oss</a>
              </li>
              <li>
                <a href='/faq'>FAQ</a>
              </li>
            </ul>
          </GridItem>
          <GridItem xs={12} sm={2} md={2}>
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
          <GridItem xs={12} sm={2} md={2}>
            <h5>Legalt</h5>
            <ul className={classes.linksVertical}>
              <li>
                <a href='/transactions-faq'>Transactions FAQ</a>
              </li>
              <li>
                <a href='/integritetspolicy'>Integritetspolicyn</a>
              </li>
              <li>
                <a href='/foretagsinformation'>Företagsinformation</a>
              </li>
            </ul>
          </GridItem>
          <GridItem xs={12} sm={3} md={3}>
            <h5>Vårt nyhetsbrev</h5>
            <p>
              Prenumerera på vårt nyhetsbrev så missar du inte framtida
              erbjudanden.
            </p>
            <form>
              <CustomInput
                id='footeremail'
                formControlProps={{
                  fullWidth: false,
                  className: classes.customFormControl
                }}
                inputProps={{
                  placeholder: 'Ditt e-post'
                }}
              />
              <Button color='primary' justIcon>
                <Mail />
              </Button>
            </form>
          </GridItem>
        </GridContainer>
      </div>
    </Footer>
  )
}
