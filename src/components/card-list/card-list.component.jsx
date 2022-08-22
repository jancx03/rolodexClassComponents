import { Component } from "react";
import './card-list.syles.css'
// import './card.styles.css'
import CardComponents from '../card/card.components'
const CardList = ({ monster }) => {
  return (
    <div className='card-list'>
      {monster.map((monster) => {
        const { id, name, email } = monster
        return (
          <CardComponents id={id} name={name} email={email} />
        )
      })}
    </div>
  );
}


export default CardList;