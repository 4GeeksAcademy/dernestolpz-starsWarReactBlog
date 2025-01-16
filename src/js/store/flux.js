
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			starships: [],
			properties: [],
			gender:[],
			character:{},
			planet:{},
			starship:{},

			favorite:[],
		},
		actions: {
			
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},


			getPeople: () => {
				fetch("https://www.swapi.tech/api/people/")
				.then(res => res.json())
				.then(data => {
					console.log(data);
					setStore({people:data.results})})
				.catch(err => console.error(err))
			},
			getPlanets: () => {
				fetch("https://www.swapi.tech/api/planets/")
				.then(res => res.json())
				.then(data => {
					console.log(data);
					setStore({planets:data.results})})
				.catch(err => console.error(err))
			},
			getVehicles: () => {
				fetch("https://www.swapi.tech/api/starships/")
				.then(res => res.json())
				.then(data => {
					console.log(data);
					setStore({starships:data.results})})
				.catch(err => console.error(err))
			},
			getProperties: () => {
				fetch("https://www.swapi.tech/api/people/1")
				.then(res => res.json())
				.then(data => {
					console.log(data);
					setStore({properties:data.results})})
				.catch(err => console.error(err))
			},
			getGender: () => {
				fetch("https://www.swapi.tech/api/people/")
				.then(res => res.json())
				.then(data => {
					console.log(data);
					setStore({people:data.results})})
				.catch(err => console.error(err))
			},
			
			addFavorite: (name) => {
				
				let listFav = getStore().favorite
				let newFav = name
				if (!listFav.includes(name) ) {
					let newListFav = listFav.concat(newFav) 
				setStore({favorite : newListFav})
				}
				
			},
			deleteFavorite: (name) => {
				console.log(name);
				
				let listFav = getStore().favorite
				let delFav = name
				let delListFav = listFav.filter((e)=> {return e != delFav} ) 
				setStore({favorite : delListFav})
			},
			getCharacter: (uid) => {
				fetch(`https://www.swapi.tech/api/people/${uid}`)
				.then(res => res.json())
				.then(data => {
					console.log(data);
					setStore({character:data.result})})
				.catch(err => console.error(err))
			},
			getPlanet: (uid) => {
				fetch(`https://www.swapi.tech/api/planets/${uid}`)
				.then(res => res.json())
				.then(data => {
					console.log(data);
					setStore({planet:data.result})})
				.catch(err => console.error(err))
			},
			getStarship: (uid) => {
				fetch(`https://www.swapi.tech/api/starships/${uid}`)
				.then(res => res.json())
				.then(data => {
					console.log(data);
					setStore({starship:data.result})})
				.catch(err => console.error(err))
			},
			

			changeColor: (index, color) => {
			
				const store = getStore();

				
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
