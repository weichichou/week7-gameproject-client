import React, { Component } from 'react'
//import superagent from 'superagent'
//import { Link } from 'react-router-dom'
//import { url } from '../constant'

export default class Room extends Component {
    state = {
        rooms: [],
        value: ''
      }
    
    stream = new EventSource(
        //`${url}/stream`
        'http://localhost:4000/stream'
    )

    componentDidMount = () => {
        this.stream.onmessage =(event) => {
            const {data} = event
            const parsed = JSON.parse(data)
            if (Array.isArray(parsed)) {
                this.setState({
                  rooms: parsed
                })
                console.log("this.state.room", this.state.rooms)
              } else {
                const rooms = [
                  ...this.state.rooms,
                  parsed
                ]
                this.setState({
                    rooms: rooms
                })
                console.log('this.state.rooms',this.state.rooms)
            }  
        }
    }


    render(){
        const list = this.state.rooms.map((room, index)=>{
            return <p key={index}>{room.name}</p>
        })
        return(
            <div>
                <h1>Room List</h1>
                {list}
            </div>
            
        )
    }
}