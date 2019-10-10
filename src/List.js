import React from 'react';

import Card from './Card';
import './List.css';


class List extends React.Component {
    static defaultProps = {
        cards: []
    }
    render() {
        console.log(this.props.cardsId)
        return (
            <section className='List'>
                <header className='List-cards'>
                    <h2>{this.props.header}</h2>
                    <button onClick={() => this.props.onRandomItem(this.props.id, this.props.cardsId)} type='button'>Add Random Card</button>
                </header>
                <div className='List-cards'>
                    {this.props.cards.map(card => {
                        return (
                        <Card
                        key= {card.id}
                        id= {card.id}
                        listId={this.props.id}
                        title= {card.title}
                        content={card.content}
                        onDeleteItem={this.props.onDeleteItem}
                        />
                    )})}
                </div>
            </section>
        );
    }                    
}

export default List;