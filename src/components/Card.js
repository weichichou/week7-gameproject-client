import React from 'react'
import {connect} from 'react-redux'
import superagent from 'superagent'
import {url} from '../constant' 
import './CardCss.css'



class Card extends React.Component {
    
    handleClick = async() => {
        const {user} = this.props
        // const jwt = this.props.jwt
        // const match = this.props
        //const {name} = match.params
        const {jwt} = user

        // const {
        //     user: { jwt },
        //     match: { params: { name } }
        // } = this.props
        

        const response = await superagent
            .put(`${url}/card`)
            .set({
                authorization: `Bearer ${jwt}`
            })
        
        console.log('response test:', response)
    }

    render(){
        return(
            <div>
                <img className='card' onClick={this.handleClick} width='150px' src='https://www.osp.osaka-info.jp/upload/facility_shop/149/20180324_111149_481228.jpg'/>
            </div> 
        )
    }
}

const mapStateToProps = state => {
    return { user: state.user, room: state.room };
  };

export default connect(mapStateToProps)(Card)
