import React from "react";
import { Link } from "react-router-dom";
import {Context} from "../store/appContext";

export default class AddContact extends React.Component {
	constructor() {
        super();
        this.state = {
            list: [],
            email: "",
            phone: "",
            address: "",
            name: ""
        };
    }
	render() {
		return (
			<div className="container">
				<div>
					<h1 className="text-center mt-5">Add a new contact</h1>
					<form>
						<div className="form-group">
							<label>Full Name</label>
							<input type="text" className="form-control" placeholder="Full Name" 
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
							<input type="email" className="form-control" placeholder="Enter email" 
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
							<input type="phone" className="form-control" placeholder="Enter phone"
                            value={this.state.phone}
                            onChange={event => {
                                this.setState ({
                                    phone: event.target.value
                                });
                            }} />
						</div>
						<div className="form-group">
							<label>Address</label>
							<input type="text" className="form-control" placeholder="Enter address" 
                            value={this.state.address}
                            onChange={event => {
                                this.setState ({
                                    address: event.target.value
                                });
                            }}/>
						</div>
                        <Context.Consumer>
                            {({actions}) => {
                                return (
                                    <div>
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
                                        >save
                                        </button>
                                        <Link className="mt-3 w-100 text-center" to="/">or get back to contacts</Link>
									</div>
									);
									}}
                        </Context.Consumer>
					</form>
				</div>
			</div>
		);
	}
	
}
