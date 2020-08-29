import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);
	console.log(store.unsolopersonaje);
	return <>{!!store.unsolopersonaje ? <h1>{store.unsolopersonaje.name}</h1> : <h1>cargando</h1>}</>;
};
