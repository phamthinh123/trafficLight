import React, { Component } from 'react';
import "./TrafficLight.css"
const classNames = require('classnames');
const RED = 0;
const GREEN = 1;
const YELLOW = 2;
class TrafficLight extends Component{
	render(){

		const { currentColor }=this.props;

		return(
<div className="TrafficLight">
	<div className={classNames("light","red",{
		active: currentColor === RED
	})} />
	<div className={classNames("light","green",{
		active: currentColor === GREEN
	})} />
	<div className={classNames("light","yellow",{
		active: currentColor === YELLOW
	})} /> 
</div>
			)
	}
}
export default TrafficLight