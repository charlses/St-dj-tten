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
import Image from 'next/image'
import LoggaOne from '../../public/img/logo.png'

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
              <Image
                src={LoggaOne}
                width={200}
                height={40}
                alt='Stadjättens Logga'
              />
            </a>
            <p>
              Probably the best UI Kit in the world! We know you{"'"}ve been
              waiting for it, so don{"'"}t be shy!
            </p>
          </GridItem>
          <GridItem xs={12} sm={2} md={2}>
            <h5>About</h5>
            <ul className={classes.linksVertical}>
              <li>
                <a href='#pablo'>Blog</a>
              </li>
              <li>
                <a href='#pablo'>About us</a>
              </li>
              <li>
                <a href='#pablo'>Presentation</a>
              </li>
              <li>
                <a href='#pablo'>Contact us</a>
              </li>
            </ul>
          </GridItem>
          <GridItem xs={12} sm={2} md={2}>
            <h5>Market</h5>
            <ul className={classes.linksVertical}>
              <li>
                <a href='#pablo'>Sales FAQ</a>
              </li>
              <li>
                <a href='#pablo'>How to register</a>
              </li>
              <li>
                <a href='#pablo'>Sell Goods</a>
              </li>
              <li>
                <a href='#pablo'>Receive Payment</a>
              </li>
              <li>
                <a href='#pablo'>Transactions Issues</a>
              </li>
            </ul>
          </GridItem>
          <GridItem xs={12} sm={2} md={2}>
            <h5>Legal</h5>
            <ul className={classes.linksVertical}>
              <li>
                <a href='#pablo'>Transactions FAQ</a>
              </li>
              <li>
                <a href='#pablo'>Terms & conditions</a>
              </li>
              <li>
                <a href='#pablo'>Licenses</a>
              </li>
            </ul>
          </GridItem>
          <GridItem xs={12} sm={3} md={3}>
            <h5>Subscribe to Newsletter</h5>
            <p>
              Join our newsletter and get news in your inbox every week! We hate
              spam too, so no worries about this.
            </p>
            <form>
              <CustomInput
                id='footeremail'
                formControlProps={{
                  fullWidth: false,
                  className: classes.customFormControl
                }}
                inputProps={{
                  placeholder: 'Your Email...'
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
