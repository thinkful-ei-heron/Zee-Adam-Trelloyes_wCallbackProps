import React from 'react';
import './Card.css';

class Card extends React.Component {
    
    render() {
        return (
            <div className='Card'>
                <button onClick={() => this.props.onDeleteItem(this.props.id)} type='button'>delete</button>
                <h3>{this.props.title}</h3>
                <p>{this.props.content}</p>
            </div>
        );
    }
}

export default Card;