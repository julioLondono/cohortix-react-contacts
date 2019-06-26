const getState = ({ getStore, setStore }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			contacts: []
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			addContact : item => {
                fetch('https://assets.breatheco.de/apis/fake/contact/', {
                    method: 'POST', // or 'POST'
                    body: JSON.stringify(item), // data can be `string` or {object}!
                    headers:{
                      'Content-Type': 'application/json'
                    }
                  }).then(res => res.json())
                  .then(response => {
                    var tempStore = getStore();
                    tempStore.contacts.push(item);
                    setStore({tempStore}); 
                    console.log('Success:', JSON.stringify(response));
                })
                  .catch(error => console.error('Error:', error));
            },

            updateContact : (contact, actualPage) => {
                const tempStore = getStore();
                
                contact.full_name === "" ? tempStore.contacts[actualPage].full_name = tempStore.contacts[actualPage].full_name : tempStore.contacts[actualPage].full_name = contact.full_name;
                contact.email === "" ? tempStore.contacts[actualPage].email = tempStore.contacts[actualPage].email : tempStore.contacts[actualPage].e_mail = contact.email;
                contact.address === "" ? tempStore.contacts[actualPage].address = tempStore.contacts[actualPage].address : tempStore.contacts[actualPage].address = contact.address;
                contact.phone === "" ? tempStore.contacts[actualPage].phone = tempStore.contacts[actualPage].phone : tempStore.contacts[actualPage].phone = contact.phone;
                                
                setStore({ tempStore });

            },
			deleteItem: id => {
				alert("This action will remove this item");
				const store = getStore();
                const mappedArray = store.contacts.map((item, index) => {
					return item;
				});

				mappedArray.splice(id, 1);

				setStore({ contacts: mappedArray });
            },
            fetchAll: () => {
            fetch('https://assets.breatheco.de/apis/fake/contact/agenda/alejo')
            .then(function(response) {
              return response.json();
            })
            .then(function(myJson) {
              console.log(myJson);
              const store = getStore();
              setStore ({contacts: myJson });
            });
            }
		}
	};
};

export default getState;


