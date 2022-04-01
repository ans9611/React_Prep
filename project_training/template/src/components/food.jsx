import React, { Component } from 'react'

class Food extends Component {
    render () {
        return (

            <>
                <div>MY favorite food is</div>
                <span className='food-name'>Texas BBQ</span>
                <button>
                    <i class="fa-solid fa-circle-plus"></i>
                </button>
                <button>
                    <i class="fa-solid fa-circle-minus"></i>
                </button>
                <button>
                    <i class="fa-solid fa-delete-left"></i>
                </button>
                <span className='food-name'>Texas BBQ</span>
            </>
        )
    }
}

export default Food