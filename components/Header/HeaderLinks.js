/* eslint-disable */
import React from 'react'
// nodejs library to set properties for components
import PropTypes from 'prop-types'
// react components for routing our app without refresh
import Link from 'next/link'

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Hidden from '@material-ui/core/Hidden'

// @material-ui/icons
import Phone from '@material-ui/icons/Phone'

// core components
import CustomDropdown from 'components/CustomDropdown/CustomDropdown.js'
import Button from 'components/CustomButtons/Button.js'

import styles from 'styles/jss/nextjs-material-kit-pro/components/headerLinksStyle.js'

const useStyles = makeStyles(styles)

export default function HeaderLinks(props) {
  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2
    if (t < 1) return (c / 2) * t * t + b
    t--
    return (-c / 2) * (t * (t - 2) - 1) + b
  }

  const smoothScroll = (e, target) => {
    if (window.location.pathname === '/sections') {
      var isMobile = navigator.userAgent.match(
        /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
      )
      if (isMobile) {
        // if we are on mobile device the scroll into view will be managed by the browser
      } else {
        e.preventDefault()
        var targetScroll = document.getElementById(target)
        scrollGo(document.documentElement, targetScroll.offsetTop, 1250)
      }
    }
  }
  const scrollGo = (element, to, duration) => {
    var start = element.scrollTop,
      change = to - start,
      currentTime = 0,
      increment = 20

    var animateScroll = function () {
      currentTime += increment
      var val = easeInOutQuad(currentTime, start, change, duration)
      element.scrollTop = val
      if (currentTime < duration) {
        setTimeout(animateScroll, increment)
      }
    }
    animateScroll()
  }

  const { dropdownHoverColor } = props
  const classes = useStyles()
  return (
    <List className={classes.list + ' ' + classes.mlAuto}>
      <ListItem className={classes.listItem}>
        <Link href='/' replace>
          <a className={classes.navLink}>Hem</a>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link href='/stadhjalp' replace>
          <a className={classes.navLink}>Städhjälp</a>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link href='/flytthjalp' replace>
          <a className={classes.navLink}>Flytthjälp</a>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          hoverColor={dropdownHoverColor}
          buttonText='Våra Tjänster'
          buttonProps={{
            className: classes.navLink,
            color: 'transparent'
          }}
          dropdownList={[
            <Link href={{ pathname: '/vara-tjanster/flyttstadning' }}>
              <a className={classes.dropdownLink}>Flyttstädning</a>
            </Link>,
            <Link href={{ pathname: '/vara-tjanster/hemstadning' }}>
              <a className={classes.dropdownLink}>Hemstädning</a>
            </Link>,
            <Link href={{ pathname: '/vara-tjanster/kontorsstadning' }}>
              <a className={classes.dropdownLink}>Kontorsstädning</a>
            </Link>,
            <Link href={{ pathname: '/vara-tjanster/storstadning' }}>
              <a className={classes.dropdownLink}>Storstädning</a>
            </Link>,
            <Link href={{ pathname: '/vara-tjanster/visningsstadning' }}>
              <a className={classes.dropdownLink}>Visningsstädning</a>
            </Link>,
            <Link href={{ pathname: '/vara-tjanster/byggstadning' }}>
              <a className={classes.dropdownLink}>Byggstädning</a>
            </Link>,
            <Link href={{ pathname: '/vara-tjanster/flytthjalp' }}>
              <a className={classes.dropdownLink}>Flytthjälp</a>
            </Link>,
            <Link href={{ pathname: '/vara-tjanster/packhjalp' }}>
              <a className={classes.dropdownLink}>Packhjälp</a>
            </Link>,
            <Link href={{ pathname: '/vara-tjanster/barhjalp' }}>
              <a className={classes.dropdownLink}>Bärhjälp</a>
            </Link>,

            <Link href={{ pathname: '/vara-tjanster/pianoflytt' }}>
              <a className={classes.dropdownLink}>Pianoflytt</a>
            </Link>,

            <Link href={{ pathname: '/vara-tjanster/kontorsflytt' }}>
              <a className={classes.dropdownLink}>Kontorsflytt</a>
            </Link>,
            <Link href={{ pathname: '/vara-tjanster/sanering' }}>
              <a className={classes.dropdownLink}>Snering</a>
            </Link>,
            <Link href={{ pathname: '/vara-tjanster/bortforsling' }}>
              <a className={classes.dropdownLink}>Bortforsling</a>
            </Link>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          hoverColor={dropdownHoverColor}
          buttonText='Om oss'
          buttonProps={{
            className: classes.navLink,
            color: 'transparent'
          }}
          dropdownList={[
            <Link href={{ pathname: '/om-oss/smarbetspartners' }}>
              <a className={classes.dropdownLink}>Samarbetspartners</a>
            </Link>,
            <Link href={{ pathname: '/om-oss/milljopolicy' }}>
              <a className={classes.dropdownLink}>Miljöpolicy</a>
            </Link>,
            <Link href={{ pathname: '/om-oss/nyheter' }}>
              <a className={classes.dropdownLink} replace>
                Våra Nyheter
              </a>
            </Link>,
            <Link href={{ pathname: '/om-oss/rutavdrag' }}>
              <a className={classes.dropdownLink} replace>
                Rut avdrag
              </a>
            </Link>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          hoverColor={dropdownHoverColor}
          buttonText='Här finns vi'
          buttonProps={{
            className: classes.navLink,
            color: 'transparent'
          }}
          dropdownList={[
            <Link href='stockholm'>
              <a className={classes.dropdownLink}>Stockholm</a>
            </Link>,
            <Link href='goteborg'>
              <a className={classes.dropdownLink}>Göteborg</a>
            </Link>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link href='/kontakta-oss'>
          <a className={classes.navLink}>Kontakta Oss</a>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link href='/faq'>
          <a className={classes.navLink}>FAQ</a>
        </Link>
      </ListItem>
      {/* <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          hoverColor={dropdownHoverColor}
          buttonText='Sections'
          buttonProps={{
            className: classes.navLink,
            color: 'transparent'
          }}
          buttonIcon={ViewDay}
          dropdownList={[
            <Link href='/sections#headers'>
              <a
                className={classes.dropdownLink}
                onClick={(e) => smoothScroll(e, 'headers')}
              >
                <Dns className={classes.dropdownIcons} /> Headers
              </a>
            </Link>,
            <Link href='/sections#features'>
              <a
                className={classes.dropdownLink}
                onClick={(e) => smoothScroll(e, 'features')}
              >
                <Build className={classes.dropdownIcons} /> Features
              </a>
            </Link>,
            <Link href='/sections#blogs'>
              <a
                className={classes.dropdownLink}
                onClick={(e) => smoothScroll(e, 'blogs')}
              >
                <ListIcon className={classes.dropdownIcons} /> Blogs
              </a>
            </Link>,
            <Link href='/sections#teams'>
              <a
                className={classes.dropdownLink}
                onClick={(e) => smoothScroll(e, 'teams')}
              >
                <People className={classes.dropdownIcons} /> Teams
              </a>
            </Link>,
            <Link href='/sections#projects'>
              <a
                className={classes.dropdownLink}
                onClick={(e) => smoothScroll(e, 'projects')}
              >
                <Assignment className={classes.dropdownIcons} /> Projects
              </a>
            </Link>,
            <Link href='/sections#pricing'>
              <a
                className={classes.dropdownLink}
                onClick={(e) => smoothScroll(e, 'pricing')}
              >
                <MonetizationOn className={classes.dropdownIcons} /> Pricing
              </a>
            </Link>,
            <Link href='/sections#testimonials'>
              <a
                className={classes.dropdownLink}
                onClick={(e) => smoothScroll(e, 'testimonials')}
              >
                <Chat className={classes.dropdownIcons} /> Testimonials
              </a>
            </Link>,
            <Link href='/sections#contacts'>
              <a
                className={classes.dropdownLink}
                onClick={(e) => smoothScroll(e, 'contacts')}
              >
                <Call className={classes.dropdownIcons} /> Contacts
              </a>
            </Link>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          hoverColor={dropdownHoverColor}
          buttonText='Examples'
          buttonProps={{
            className: classes.navLink,
            color: 'transparent'
          }}
          buttonIcon={ViewCarousel}
          dropdownList={[
            <Link href='/about-us'>
              <a className={classes.dropdownLink}>
                <AccountBalance className={classes.dropdownIcons} /> About Us
              </a>
            </Link>,
            <Link href='/blog-post'>
              <a className={classes.dropdownLink}>
                <ArtTrack className={classes.dropdownIcons} /> Blog Post
              </a>
            </Link>,
            <Link href='/blog-posts'>
              <a className={classes.dropdownLink}>
                <ViewQuilt className={classes.dropdownIcons} /> Blog Posts
              </a>
            </Link>,
            <Link href='/contact-us'>
              <a className={classes.dropdownLink}>
                <LocationOn className={classes.dropdownIcons} /> Contact Us
              </a>
            </Link>,
            <Link href='/landing-page'>
              <a className={classes.dropdownLink}>
                <ViewDay className={classes.dropdownIcons} /> Landing Page
              </a>
            </Link>,
            <Link href='/login'>
              <a className={classes.dropdownLink}>
                <Fingerprint className={classes.dropdownIcons} /> Login Page
              </a>
            </Link>,
            <Link href='/pricing'>
              <a className={classes.dropdownLink}>
                <AttachMoney className={classes.dropdownIcons} /> Pricing Page
              </a>
            </Link>,
            <Link href='/shopping-cart'>
              <a className={classes.dropdownLink}>
                <ShoppingBasket className={classes.dropdownIcons} /> Shopping
                Cart
              </a>
            </Link>,
            <Link href='/ecommerce'>
              <a className={classes.dropdownLink}>
                <Store className={classes.dropdownIcons} /> Ecommerce Page
              </a>
            </Link>,
            <Link href='/product'>
              <a className={classes.dropdownLink}>
                <ShoppingCart className={classes.dropdownIcons} /> Product Page
              </a>
            </Link>,
            <Link href='/profile'>
              <a className={classes.dropdownLink}>
                <AccountCircle className={classes.dropdownIcons} /> Profile Page
              </a>
            </Link>,
            <Link href='/signup'>
              <a className={classes.dropdownLink}>
                <PersonAdd className={classes.dropdownIcons} /> Signup Page
              </a>
            </Link>,
            <Link href='/error-page'>
              <a className={classes.dropdownLink}>
                <Error className={classes.dropdownIcons} /> Error Page
              </a>
            </Link>
          ]}
        />
      </ListItem> */}
      <ListItem className={classes.listItem}>
        <Hidden mdDown>
          <Button
            href='tel:+460770335051'
            color={'primary'}
            className={classes.navButton}
            round
            justIcon
          >
            <Phone className={classes.icons} />
          </Button>
        </Hidden>
        <Hidden mdUp>
          <Button
            href='tel:+460770335051'
            color={'primary'}
            className={classes.navButton}
            round
          >
            <Phone className={classes.icons} />
          </Button>
        </Hidden>
      </ListItem>
    </List>
  )
}

HeaderLinks.defaultProps = {
  hoverColor: 'primary'
}

HeaderLinks.propTypes = {
  dropdownHoverColor: PropTypes.oneOf([
    'dark',
    'primary',
    'info',
    'success',
    'warning',
    'danger',
    'rose'
  ])
}
