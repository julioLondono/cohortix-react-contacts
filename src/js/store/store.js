import { Link } from "react-router-dom";

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
                    tempStore.contacts.push(response);
                    setStore({tempStore}); 
                    console.log('Success:', JSON.stringify(response));
                })
                  .catch(error => console.error('Error:', error));
            },

      updateContact : (contact, actualPage) => {
        fetch('https://assets.breatheco.de/apis/fake/contact/' + actualPage, {
                    method: 'PUT', // or 'POST'
                    body: JSON.stringify(contact), // data can be `string` or {object}!
                    headers:{
                      'Content-Type': 'application/json'
                    }
                  })
                  .then(res => res.json())
                  .then(response => {
                    console.dir("response="+response.id);
                    if( response.id === actualPage) {
                    
                        var tempStore = getStore();
                        let mappedStore = tempStore.contacts.map( (item, index) =>{ 
                          return item;
                        });
                        
                        // let checkPosition = (pos) => {pos=mappedStore.id;};
                        let position = mappedStore.findIndex(obj => obj.id === actualPage);
                        console.log("Position= " + position);
                        
                        mappedStore[position].full_name= response.full_name;
                        mappedStore[position].email= response.email;
                        mappedStore[position].phone= response.phone;
                        mappedStore[position].address= response.address;

                        setStore({contacts:mappedStore});  
                      }     
                })
                  .catch(error => console.error('Error:', error));
        },

			deleteItem: (elem, id) => {
        console.log("Delete item with Id: " + id);
        fetch('https://assets.breatheco.de/apis/fake/contact/' + id, {
                    method: 'DELETE' // or 'POST'
                  })
                  .then(res => res.json())
                  .then(response => {
                    if( response.msg === "ok") {
                      const tempStore = getStore();
                        let filteredArray = tempStore.contacts.filter( removeId => {
                          return removeId.id !== id;
                        });
                    
                    setStore({ contacts: filteredArray });
                    }
                    console.log('Success:', JSON.stringify(response));  
                    return response;
                  });
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


