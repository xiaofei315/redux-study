import React, { Component } from 'react';
import {store} from "../../models/store";
import {sendAction} from "../../models/actions";

export default class Home extends Component {
	handleClick = () => {
		const action = sendAction()
		store.dispatch(action)
	}
	componentDidMount() {
		store.subscribe(()=>{
			console.log("subscribe", store.getState())
			this.setState({});
		})
	}

	render() {
		return (
			<>
				<button onClick={this.handleClick}>点击发送action</button>
				<div>{store.getState().value}</div>
			</>
		);

	}
}
