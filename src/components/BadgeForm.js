import React from 'react';
import './styles/BadgeForm.css'

class BadgeForm extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        email:"",
        jobTitle: "",
        twitter: "",
    };

    render() { 
        return ( 
        <div>
            <form onSubmit={this.props.onSubmit} className="Badge_form">
                <div className="form-group">
                    <label>Nombre:</label>
                    <input 
                        onChange={this.props.onChange}
                        className="form-control" 
                        type="text" 
                        name="firstName"
                        value={this.props.formValues.firstName}/>
                </div>

                <div className="form-group">
                    <label>Apellido:</label>
                    <input 
                        onChange={this.props.onChange} 
                        className="form-control" 
                        type="text" 
                        name="lastName"
                        value={this.props.formValues.lastName}/>
                </div>
                
                <div className="form-group">
                    <label>Email:</label>
                    <input 
                        onChange={this.props.onChange} 
                        className="form-control" 
                        type="text" 
                        name="email"
                        value={this.props.formValues.email}/>
                </div>

                <div className="form-group">
                    <label>Profesion:</label>
                    <input 
                        onChange={this.props.onChange} 
                        className="form-control" 
                        type="text" 
                        name="jobTitle"
                        value={this.props.formValues.jobTitle}/>
                </div>

                <div className="form-group">
                    <label>Twitter:</label>
                    <input 
                        onChange={this.props.onChange} 
                        className="form-control" 
                        type="text" 
                        name="twitter"
                        value={this.props.formValues.twitter}/>
                </div>

                <div className="form-group">
                    <button onClick={this.handleClick} type="submit" className="btn btn-primary">Registrarme</button>
                </div>
            </form>
            {this.props.error && (
                <p className="text-danger">{this.props.error.message}</p>
            )}

        </div>
         );
    }
}
 
export default BadgeForm;