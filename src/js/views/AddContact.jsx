import React from "react";
import { Link } from "react-router-dom";
import {Context} from "../store/appContext";
import PropTypes from "prop-types";

export default class AddContact extends React.Component {
	constructor() {
        super();
        this.state = {
            list: [],
            email: "",
            phone: "",
            address: "",
            name: "",
            theId: ""
        };
    }
	render() {
        let actualPage = this.props.match.params.theId;
        // console.log("actualPage= " + actualPage);
		return (
			<div className="container">
                <Context.Consumer>
                    {({store, actions}) => {
                        return (
                            <div>
                                <h1 className="text-center mt-5"> {actualPage >= 0 ? "Edit Contact" :"Add a new contact " }</h1>
                                <form>
                                    <div className="form-group">
                                        <label>Full Name</label>
                                        <input type="text" className="form-control nombre" placeholder= {actualPage >= 0 ? store.contacts[actualPage].full_name : "Full Name" } 
                                        value={this.state.name}
                                        onChange={event => {
                                            this.setState ({
                                                name: event.target.value
                                            });
                                        }}
                                        
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="email" className="form-control correo" placeholder= {actualPage >= 0 ? store.contacts[actualPage].e_mail : "Enter email" } 
                                        value={this.state.email}
                                        onChange={event => {
                                            this.setState ({
                                                email: event.target.value
                                            });
                                        }}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Phone</label>
                                        <input type="phone" className="form-control telefono" placeholder= {actualPage >= 0 ? store.contacts[actualPage].phone : "Enter phone" }
                                        value={this.state.phone}
                                        onChange={event => {
                                            this.setState ({
                                                phone: event.target.value
                                            });
                                        }} />
                                    </div>
                                    <div className="form-group">
                                        <label>Address</label>
                                        <input type="text" className="form-control direccion" placeholder= {actualPage >= 0 ? store.contacts[actualPage].address : "Enter address" }  
                                        value={this.state.address}
                                        onChange={event => {
                                            this.setState ({
                                                address: event.target.value
                                            });
                                        }}/>
                                    </div>
                                    
                                    <div>
                                    { actualPage >= 0 ?    
                                        <button type="button" className="btn btn-primary form-control"
                                                onClick= {() => {
                                                    const contact = {
                                                        full_name: this.state.name, 
                                                        e_mail: this.state.email,
                                                        phone: this.state.phone,
                                                        address: this.state.address
                                                        };
                                                        // console.log("action theID= " + actualPage);
                                                        // console.log("contact.full_name= " + contact.full_name);
                                                actions.updateContact(contact, actualPage);
                                            }
                                            }
                                            >Update Contact
                                        </button> :
                                        <button type="button" className="btn btn-primary form-control"
                                                onClick= {() => {
                                                    const contact = {
                                                        full_name: this.state.name, 
                                                        e_mail: this.state.email,
                                                        phone: this.state.phone,
                                                        address: this.state.address
                                                        };
                                                        actions.addContact(contact);
                                                    }
                                            }
                                            >Add New Contact
                                        </button>
                                    }
                                        <Link className="mt-3 w-100 text-center" to="/">or get back to contacts</Link>
                                    </div>
                                </form>
                            </div>
                        );
                    }}                
                </Context.Consumer>                    
			</div>
		);
	}
	
}
AddContact.propTypes = {
	match: PropTypes.object
};