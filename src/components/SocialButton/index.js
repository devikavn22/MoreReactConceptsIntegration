import './index.css'

const SocialButton = props => {
  console.log(props) //children prop will be logged in the console
  return <button className="social-button">{props.children}</button>
}

export default SocialButton
