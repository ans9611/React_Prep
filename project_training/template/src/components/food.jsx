import React, { Component } from 'react'

class Food extends Component {
    state = {
        count: 0,
    };

    handleAdd = (event) => {
        console.log(event);
    };

    render () {
        return (

            <li className='food'>
                <div>MY favorite food is</div>
                <span className='food-name'>Texas BBQ</span>
                <span className='food-num'>200</span>
                <button 
                    className='food-button food-add'
                    onClick={this.handleAdd}
                >
                    <i class="fa-solid fa-circle-plus"></i>
                </button>
                <button className='food-button food-decrease'>
                    <i class="fa-solid fa-circle-minus"></i>
                </button>
                <button className='food-button food-remove'>
                    <i class="fa-solid fa-delete-left"></i>
                </button>
                <span className='food-name'></span>
            </li>
        )
    }
}

export default Food