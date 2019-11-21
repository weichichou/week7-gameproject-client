import React from 'react'
import {connect} from 'react-redux'
import superagent from 'superagent'
import {url} from '../constant' 
import './CardCss.css'

class Card extends React.Component {
    state = {
        chosen: [],
        message: ''
    }

    
    handleClick = (event) => {
        const chosenPic = event.target.alt.toString()

        const newChosen = [...this.state.chosen, chosenPic]
        
        this.setState({ chosen: newChosen })

        if(newChosen[1] && newChosen[1]===newChosen[0]){
            this.isMatch()
        }else if(newChosen[1] && newChosen[1]!==newChosen[0]){
            this.setState({message:'Sorry, you did not get any point', chosen:[]})   
        }
    }



    isMatch = async() => {
        this.setState({message: 'Congrats! you get one point'})
            const {user} = this.props
            const {jwt} = user
            await superagent
            .put(`${url}/card`)
            .set({
                authorization: `Bearer ${jwt}`
            })
        this.setState({
            chosen: []
        })
    }

    render(){
        return(
            <div>
                <h3>{this.state.message}</h3>
                
                <img height='200px' alt='cat' onClick={this.handleClick}
                src='https://timesofindia.indiatimes.com/thumb/msid-67586673,width-800,height-600,resizemode-4/67586673.jpg'/>
                
                <img height='200px' alt='cat' onClick={this.handleClick}
                src='https://timesofindia.indiatimes.com/thumb/msid-67586673,width-800,height-600,resizemode-4/67586673.jpg'/>

                <img height='200px' alt='dog' onClick={this.handleClick}
                src='https://images4.persgroep.net/rcs/pBmmY0KtuDM_n4ub9qlMUFplAEs/diocontent/150718141/_fitwidth/694/?appId=21791a8992982cd8da851550a453bd7f&quality=0.9'/>
                
            </div> 
        )
    }
}

const mapStateToProps = state => {
    return { user: state.user, room: state.room };
  };

export default connect(mapStateToProps)(Card)
