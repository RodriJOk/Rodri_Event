import React from 'react';
import './styles/BadgeForm.css'

class BadgeForm extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        email:"",
        jobTitle: "",
        twitter: "",
        /* evento: "" */
    };
     
    /* handleChange = e =>{ */
        /* console.log({
            name: e.target.name,
            value: e.target.value
        }) */
        /* this.setState({
            [e.target.name]: e.target.value,
        })
    } */

    handleClick = e =>{
        /* e.preventDefault(); */
        console.log("Boton fue clickeado")
    }

    /* handleSubmit = e =>{
        e.preventDefault(); 
        console.log("Formulario enviado")
        console.log(this.state)
    } */

    render() { 
        return ( 
        <div>
            <form onSubmit={this.props.onSubmit} className="Badge_form">
                <div className="form-group">
                    <label>Nombre</label>
                    <input 
                        onChange={this.props.onChange}
                        className="form-control" 
                        type="text" 
                        name="firstName"
                        value={this.props.formValues.firstName}/>
                </div>

                <div className="form-group">
                    <label>Apellido</label>
                    <input 
                        onChange={this.props.onChange} 
                        className="form-control" 
                        type="text" 
                        name="lastName"
                        value={this.props.formValues.lastName}/>
                </div>
                
                <div className="form-group">
                    <label>Email</label>
                    <input 
                        onChange={this.props.onChange} 
                        className="form-control" 
                        type="text" 
                        name="email"
                        value={this.props.formValues.email}/>
                </div>

                <div className="form-group">
                    <label>Profesion</label>
                    <input 
                        onChange={this.props.onChange} 
                        className="form-control" 
                        type="text" 
                        name="jobTitle"
                        value={this.props.formValues.jobTitle}/>
                </div>


                <div className="form-group">
                    <label>Twitter</label>
                    <input 
                        onChange={this.props.onChange} 
                        className="form-control" 
                        type="text" 
                        name="twitter"
                        value={this.props.formValues.twitter}/>
                </div>
                
                {/* <div className="form-group">
                    <label>Evento</label>
                    <input 
                        onChange={this.props.onChange} 
                        className="form-control" 
                        type="text" 
                        name="evento"
                        value={this.props.formValues.evento}/>
                </div> */}

                <button onClick={this.handleClick} type="submit" className="btn btn-primary">Save</button>
            </form>
            {this.props.error && (
                <p className="text-danger">{this.props.error.message}</p>
            )}

        </div>
         );
    }
}
 
export default BadgeForm;