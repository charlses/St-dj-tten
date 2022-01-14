import {
  primaryColor,
  title,
  secondaryColor,
  description,
  container,
  containerFlui
} from 'styles/jss/nextjs-material-kit-pro.js'

const sectionStyle = {
  ...title,
  ...description,

  mainDiv: {
    backgroundImage: 'linear-gradient(180deg, #E7F7FE 50%, #ffffff)',
    padding: '50px'
  },
  secondaryDiv: {
    ...container
  },
  thirdDiv: {
    ...container,
    backgroundColor: '#fefefe',
    borderRadius: '6px',
    boxShadow: '-7px 7px 10px #ededed, 7px -7px 10px #ededed;'
  },
  textContainer: {
    paddingTop: '40px'
  },
  noImage: {
    backgroundImage: 'linear-gradient(0deg, #E7F7FE 50%, #ffffff)',
    padding: '50px'
  }
}

export default sectionStyle
