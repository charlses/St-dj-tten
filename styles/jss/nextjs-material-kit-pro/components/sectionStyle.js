import {
  primaryColor,
  title,
  secondaryColor,
  description,
  container,
  containerFluid
} from 'styles/jss/nextjs-material-kit-pro.js'

const sectionStyle = {
  ...title,
  ...description,

  mainDiv: {
    backgroundImage: 'linear-gradient(180deg, #E7F7FE 50%, #ffffff)'
  },
  secondaryDiv: {
    ...container
  },
  textContainer: {
    paddingTop: '40px'
  }
}

export default sectionStyle
