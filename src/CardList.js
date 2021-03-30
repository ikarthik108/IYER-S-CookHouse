import React from 'react';
import Card from './Card'


//{items} as CardList recieves robots now in "index.js" we can destructure it here

//these things are known as pure or deterministic components
const CardList=({items}) => {
	const cardArray=items.map((user,i) => {
		return (
				<Card 
				key={items[i].id} 
				id={items[i].id} 
				name={items[i].name} 
				img={items[i].img} 
				/>
			);
	})
	return (
		<div> 
		    {cardArray}
		</div>
	);
}

export default CardList;