import React from 'react'


import './App.css';
import Header from './components/Header/Header';
import Login from './components/LoginPage/LogIn';
import SignUp from './components/LoginPage/SignUp';
import Post from './components/Post/Post'
import UploadForm from './components/UploadForm/UploadForm'


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      username: '',
      avatar: '',
      imgUrl: '',
      caption: '',
      posts: [],
      isLogged: false
    }
  }

  componentDidMount = () => {
    this.getData()
  }

  getData = () => {
    fetch('http://localhost:5000/posts')
      .then((res) => res.json())
      .then((posts) => this.setState({ posts: posts }))
  }

  handleClick = (e) => {
    e.preventDefault()
    this.postReq(this.state)
    this.setState({
      username: '',
      avatar: '',
      imgUrl: '',
      caption: '',

    })


  }

  handleSignin = (e) => {
    e.preventDefault()
    this.setState({ isLogged:!this.state.isLogged })
  }

  handleChange = (e) => {
    const { name, value } = e.target

    this.setState({ [name]: value })
    console.log(value)
  }


  postReq = (obj) => {
    // Simple POST request with a JSON body using fetch
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(obj)
    };
    fetch('http://localhost:5000/posts', requestOptions)
      .then(response => response.json())
      .then(data => this.getData())
  }


  render() {
    const { username, avatar, imgUrl, caption, posts, isLogged } = this.state
    console.log(posts)
    return (
      <div className='App'>

        <Header />
        {
          isLogged ?
            <div>
              <UploadForm handleClick={this.handleClick} handleChange={this.handleChange}
                username={username} avatar={avatar} imgUrl={imgUrl} caption={caption} />
              {
                posts.map((post, id) => {
                  return <Post post={post} key={id} />
                })
              }
            </div>
            : <Login handleSignin={this.handleSignin} />}



      </div>
    )
  }

}

export default App;
