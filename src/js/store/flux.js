const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			unsolopersonaje: null
		},
		actions: {
			cargameunPerrito: () => {
				const store = getStore();
				fetch(
					"https://www.potterapi.com/v1/characters?key=$2a$10$Z56rEFCxx3oDjnWSRRABwuuHtIrDBOjaK59OcVvXp878nShHvygzm"
				)
					.then(resp => resp.json())
					.then(data => setStore((store.characters = data)));
			},
			obtenunsoloPersonaje: () => {
				const store = getStore();
				fetch(
					"https://www.potterapi.com/v1/characters/5a0fa4daae5bc100213c232e?key=$2a$10$Z56rEFCxx3oDjnWSRRABwuuHtIrDBOjaK59OcVvXp878nShHvygzm"
				)
					.then(resp => resp.json())
					.then(data => setStore((store.unsolopersonaje = data)));
			}
		}
	};
};

export default getState;
