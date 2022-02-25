import SocialButton from '../SocialButton'
import {RiShareForwardFill} from 'react-icons/ri'
import './index.css'

const Post = () => (
  <div className="post-container">
    <h1 className="heading">React Hooks</h1>
    <p className="paragraph">
      Hooks are a new addition in React 16.8. They let you use state and other
      React features without writing a class.
    </p>
    <div className="social-button-wrapper">
      <SocialButton>Link</SocialButton>{' '}
      {/*JSX/Text included between opening&closing tags are considered as children*/}
      <SocialButton>
        <RiShareForwardFill className="share-icon" />{' '}
        {/*here both share and shareicon are passed as children prop automatically*/}
        share
      </SocialButton>
    </div>
  </div>
)

export default Post
