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
			contacts: [
                {
                    full_name: "Julio",
                    e_mail: "julio@getMaxListeners.com",
                    address: "2334rtyu hjj",
                    phone: " 3456789",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Um3jwtoAXI0J_vraw8ezD3xdjhEQMJY04cprRuUCJ3_LomR9"

                }

            ]   
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
												e_mail={elem.e_mail}
												image={elem.image}
												key={index}
												theId={index}
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
