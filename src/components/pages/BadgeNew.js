import React, {Fragment} from "react";
/* import header from "../../images/platziconf-logo.svg" */
import Badge from "../Badge";
import BadgeForm from "../BadgeForm"
import api from '../../api'
import PageLoading from '../PageLoading'
import "./styles/BadgeNew.css"

class BadgeNew extends React.Component {
    state = { 
        loading:false,
        error:null,
        form: {
        primerNombre:"",
        segundoNombre:"",
        email:"",
        profesion:"",
        twitter:"",
        evento:""
    } }

    handleChange = e => {
        /* const nextForm = this.state.form
        nextForm[e.target.name] = e.target.value */
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name] : e.target.value
            }
        })
    }

    handleSubmit = async e =>{
        e.preventDefault();
        console.log("Enviaste el Formulario")
        this.setState({
            loading:true, 
            error:null
        })
        
        try{
            await api.badges.create(this.state.form)
            this.setState({ loading:false })
            this.props.history.push("/badges")
        }catch(error){
             this.setState({
                 loading: false,
                 error: error
             })
        }
    }

    render() { 
        if(this.state.loading){
            return <PageLoading/>
        }
        return ( 
            <Fragment>
                <div className="BadgeNew__hero">
                    {/* <img 
                        className="BadgeNew__hero-image img-fluid" 
                        src={header}  
                        alt="Logo"/> */}
                </div>

                <div className="container">
                        <div className="container-Badge">
                            <Badge
                                firstName={this.state.form.firstName || 'Nombre'}
                                lastName={this.state.form.lastName || 'Apellido'}
                                email={this.state.form.email || 'Email'}
                                jobTitle={this.state.form.jobTitle || 'Profesion'}
                                twitter={this.state.form.twitter || 'twitter'}
                                /* evento={this.state.form.evento || 'Platzi Conf'} */
                                />
                        </div>
                        <div className="container-BadgeForm">
                            <h1>Registrate al evento ! </h1>
                            <BadgeForm 
                                onChange={this.handleChange} 
                                onSubmit={this.handleSubmit}
                                formValues={this.state.form}
                                error={this.state.error}
                            />
                        </div>
                </div>
            </Fragment>
         );
    }
}
 
export default BadgeNew;