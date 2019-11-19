import React from 'react'
import superagent from 'superagent'
import {connect} from 'react-redux'
import {url} from '../constant'

class DetailPage extends React.Component{

    handleClick = () => {
        console.log('Got Clicked?')
        console.log('this.props.user.id', this.props.user.id)
        superagent
            .put(`${url}/join/${this.props.match.params.id}`)
            .send({userId: this.props.user.id})
            .then(res => console.log(res.body))
    }
    
    render(){
        return(
            <button onClick={this.handleClick}>Join</button>
        )
    }
}

const mapStateToProps = state => {
    return { user: state.user };
  };
  
  export default connect(mapStateToProps)(DetailPage);