import React, {Fragment} from "react";
/* import header from "../../images/platziconf-logo.svg" */
import Badge from "../Badge";
import BadgeForm from "../BadgeForm"
import api from '../../api'
import PageLoading from '../PageLoading'
import "./styles/BadgeEdit.css"

class BadgeEdit extends React.Component {
    state = { 
        loading: true,
        error: null,
        form: {
        primerNombre:"",
        segundoNombre:"",
        email:"",
        profesion:"",
        twitter:"",
        evento:""
    } }

    componentDidMount(){
        this.fetchData()
    }

    fetchData = async e => {
        this.setState({
            loading: true, 
            error: null,
        })

        try{
            const data = await api.badges.read(this.props.match.params.badgeId)
            this.setState({loading: false, form: data })
        
        }catch(error){
            this.setState({loading: false, error: error})
        }
    }

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
            await api.badges.update(this.props.match.params.badgeId, this.state.form )
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
                <div className="BadgeEdit__hero">
                    <img 
                        className="BadgeEdit__hero-image img-fluid" 
                        /* src={header} */ 
                        alt="Logo"/>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge
                                primerNombre={this.state.form.primerNombre || 'Primer Nombre'}
                                segundoNombre={this.state.form.segundoNombre || 'Segundo Nombre'}
                                profesion={this.state.form.profesion || 'Profesion'}
                                email={this.state.form.email || 'Email'}
                                twitter={this.state.form.twitter || 'platzi'}
                                evento={this.state.form.evento || 'Platzi Conf'}
                                />
                        </div>
                        <div className="col-6">
                            <h1>Edit Attendant</h1>
                            <BadgeForm 
                                onChange={this.handleChange} 
                                onSubmit={this.handleSubmit}
                                formValues={this.state.form}
                                error={this.state.error}
                            />
                        </div>
                    </div>
                </div>
            </Fragment>
         );
    }
}
 
export default BadgeEdit;