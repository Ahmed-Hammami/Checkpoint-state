import React, { Component } from 'react'
import Profile from './Component/Profile/Profile'
export default class App extends Component {
  state={
    name:'ahmed hammami',
    bio:'I am a hard working, honest individual. I am a good timekeeper, always willing to learn new skills. I am friendly, helpful and polite, have a good sense of humour. I am able to work independently in busy environments and also within a team setting. I am outgoing and tactful, and able to listen effectively when solving problems',
    profession:'Web developer',
    img:'/lion.jpg',
    }
  render() {
    return (

      <div>
<Profile name={this.state.name} profession={this.state.profession} img={this.state.img} bio={this.state.bio}/>

      </div>
    )
  }
}
