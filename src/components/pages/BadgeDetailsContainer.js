import React from 'react';
import api from '../../api';
import PageError from '../PageError';
import PageLoading from '../PageLoading';

import BadgeDetails from './BadgeDetails';

class BadgeDetailsContainer extends React.Component {
    state = { 
        loading: true,
        error: null, 
        data: undefined,
        modalOpen: false,
    }

    componentDidMount(){
        this.fechtData()
    }

    fechtData = async () =>{
        this.setState({ loading: true, error: null })
        
        try{
            const data = await api.badges.read(this.props.match.params.badgeId);
            this.setState({ loading:false, data:data })
        }catch(error){
            this.setState({ loading:false, error:error })
        }
    }
    
    handleCloseModal = () =>{
        console.log("Esta cerrado, handleCloseModal")
        this.setState({
            modalOpen: false
        })
    }

    handleOpenModal = () => {
        console.log("Esta abierto, handleOpenModal")
        this.setState({
            modalOpen: true
        })
    }

    handleDeleteBadge = async (e) => {
        this.setState({
            loading:true,
            error:null
        })

        try{
            await api.badges.remove(
                this.props.match.params.badgeId
            )

            this.setState({
                loading:false
            })

            this.props.history.push('/badges')
        }catch(error){
            this.setState({
                loading:false,
                error:error
            })
        }
    }

    render() { 
        if(this.state.loading){
            return <PageLoading/>
        }
        if(this.state.error){
            return <PageError error={this.state.error}/>
        }

        return ( 
            <BadgeDetails 
                onCloseModal={this.handleCloseModal} 
                onOpenModal={this.handleOpenModal}
                onDeleteBadge={this.handleDeleteBadge}
                modalOpen={this.state.modalOpen}
                badge={this.state.data}/>
         );
    }
}
 
export default BadgeDetailsContainer;