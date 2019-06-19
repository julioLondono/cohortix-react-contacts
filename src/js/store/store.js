const getState = ({ getStore, setStore }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			contacts: [
                {
                    full_name: "Julio",
                    e_mail: "julio@getMaxListeners.com",
                    address: "2334rtyu hjj",
                    phone: " 3456789",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Um3jwtoAXI0J_vraw8ezD3xdjhEQMJY04cprRuUCJ3_LomR9"

                },
                {
                    full_name: "Cesar",
                    e_mail: "julio@getMaxListeners.com",
                    address: "2334rtyu hjj",
                    phone: " 3456789",
                    image: "https://www.blogcdn.com/www.tuaw.com/media/2013/05/bill-gates-shot.jpg"

                },
                {
                    full_name: "Alberto",
                    e_mail: "julio@getMaxListeners.com",
                    address: "2334rtyu hjj",
                    phone: " 3456789",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqu6FSILayreQKsuBNX3Rd4FIJHOTM0L-ZldFTJqIHWKYPcWM1"

                }

            ]
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			addContact : item => {
                var tempStore = getStore();
                tempStore.contacts.push(item);
                setStore({tempStore});
			},
			deleteItem: id => {
				// alert("This action will remove this item");
				const store = getStore();

				const mappedArray = store.contacts.map((item, index) => {
					return item;
				});

				mappedArray.splice(id, 1);

				// console.log("mappedDemo=" + mappedDemo);
				setStore({ contacts: mappedArray });
			}
		}
	};
};

export default getState;


