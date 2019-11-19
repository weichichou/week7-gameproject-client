import React from 'react'
import superagent from 'superagent'
import {connect} from 'react-redux'
import {url} from '../constant'

class DetailPage extends React.Component{

    /* handleClick = () => {
        console.log('Got Clicked?')
        console.log('this.props.user.id', this.props.user.id)
        superagent
            .put(`${url}/join/${this.props.match.params.id}`)
            .send({userId: this.props.user.id})
            .then(res => console.log(res.body))
    } */

    handleClick = async() => {
        const {user, match} = this.props
        // const jwt = this.props.jwt
        // const match = this.props
        const {name} = match.params
        const {jwt} = user

        // const {
        //     user: { jwt },
        //     match: { params: { name } }
        // } = this.props
        

        const response = await superagent
            .put(`${url}/join/${name}`)
            .set({
                authorization: `Bearer ${jwt}`
            })
        
        console.log('response test:', response)
    }

    render(){
        console.log("is this showing?")
        return(
            <button onClick={this.handleClick}>Join</button>
        )
    }
}

const mapStateToProps = state => {
    return { user: state.user };
  };
  
  export default connect(mapStateToProps)(DetailPage);