import React,{Component} from 'react';

// import './Card.css';

class Card extends Component {
	render() {
		return (
				<div className=' tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
					<img src={`${this.props.img}`} alt={`${this.props.name}`} width="300" height="200"/>
					<div>
						<h2>{this.props.name}</h2>
						<p>{this.props.email}</p>
					</div>
				</div>
			)
	}
}

export default Card;