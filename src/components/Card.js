import React from 'react'
import {connect} from 'react-redux'
// import superagent from 'superagent'
// import {url} from '../constant' 
import './CardCss.css'

class Card extends React.Component {
    state = {
        chosen: []
    }
    
    // Get one point
    /* handleClick = async() => {
        const {user} = this.props
        const {jwt} = user
        const response = await superagent
            .put(`${url}/card`)
            .set({
                authorization: `Bearer ${jwt}`
            })
        console.log('response test:', response)
    } */

    handleClick = (event) => {
        console.log('img event target alt', event.target.alt)
        const chosenPic = event.target.alt.toString()
        console.log('chosenPic', chosenPic)
        
        this.setState({chosen: [...this.state.chosen, chosenPic]})

    }

    checkIfMatch = () => {
        console.log('local state', this.state)
        if (this.state.chosen[0] === this.state.chosen[1]){
            console.log('Congrats! you get one point')
        }else{
            console.log('Sorry, you did not get any point')
        }  
    }

    render(){
        return(
            <div>
                {/*Get one point*/}
                {/* <img className='card' onClick={this.handleClick} width='150px' 
                src='https://www.osp.osaka-info.jp/upload/facility_shop/149/20180324_111149_481228.jpg'/> */}

                {/*Choose from 3 cards*/}
                <img height='200px' alt='cat' onClick={this.handleClick}
                src='https://timesofindia.indiatimes.com/thumb/msid-67586673,width-800,height-600,resizemode-4/67586673.jpg'/>
                
                <img height='200px' alt='cat' onClick={this.handleClick}
                src='https://timesofindia.indiatimes.com/thumb/msid-67586673,width-800,height-600,resizemode-4/67586673.jpg'/>

                <img height='200px' alt='dog' onClick={this.handleClick}
                src='https://images4.persgroep.net/rcs/pBmmY0KtuDM_n4ub9qlMUFplAEs/diocontent/150718141/_fitwidth/694/?appId=21791a8992982cd8da851550a453bd7f&quality=0.9'/>
                
                <button onClick={this.checkIfMatch}>Check results</button>
            </div> 
        )
    }
}

const mapStateToProps = state => {
    return { user: state.user, room: state.room };
  };

export default connect(mapStateToProps)(Card)
