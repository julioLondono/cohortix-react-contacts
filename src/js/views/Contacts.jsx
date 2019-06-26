import React from "react";
import { Link } from "react-router-dom";
import {Context} from "../store/appContext.jsx";
import ContactCard from '../components/ContactCard';
import Modal from '../components/Modal';

export default class Contacts extends React.Component {
	constructor(){
		super();
		this.state = {
			showModal: false, 
			contacts: []   
		};
	}

	render() {
		return (
			<div className="container">
				<div>
					<p className="text-right my-3">
						<Link className="btn btn-success" to="/add">Add new contact</Link>
					</p>
					<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
						<ul className="list-group pull-down" id="contact-list">
							<Context.Consumer>
								{({store, actions}) => {
									return store.contacts.map((elem, index) => {
										return (
											<ContactCard 
												onDelete={() => actions.deleteItem(index)} 
												full_name={elem.full_name}
												address={elem.address}
												phone={elem.phone}
												email={elem.email}
												image={elem.image}
												key={index}
												theId={elem.id}
											/>
										);
									});
								}}
							</Context.Consumer>   
						</ul>
					</div>
				</div>
				{/* <Modal show={this.state.showModal} onClose={() => this.setState({showModal: false})} /> */}
			</div>
			);
		}
}
