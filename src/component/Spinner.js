import React, { Component } from 'react'
import loading from './Spinner.gif'

export class Spinner extends Component {
    render() {
        return (
            <div className='text-center'>
                <img className="my-3" src={loading} alt="Loading" height={30} width={30} />
            </div>
        )
    }
}

export default Spinner