import React, { Component } from 'react'

class Food extends Component {
    state = {
        count: 0,
    };

    // handleAdd = (event) => {
    //     console.log(event);
    // };

    handleAdd = () => {
        this.setState( {count: this.state.count + 1 })
    }

    handleDecrease = () => {
        // if count is less than 0 => return 0 oherwise return count
        const count = this.state.count - 1
        this.setState( {count: count < 0 ? 0 : count} )
    }

    render () {
        return (

            <li className='food'>
                <div>MY favorite food is</div>
                <span className='food-name'>Texas BBQ</span>
                <span className='food-num'>{this.state.count}</span>
                <button 
                    className='food-button food-add'
                    onClick={this.handleAdd}
                >
                    <i class="fa-solid fa-circle-plus"></i>
                </button>
                <button className='food-button food-decrease'
                onClick={this.handleDecrease}>
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