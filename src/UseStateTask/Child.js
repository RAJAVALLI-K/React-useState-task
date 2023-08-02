import React from 'react'
import './Parent.css'

const Child = (props) => {
    console.log(props)
    return (
        <div className='child'>
            <h1>Child</h1>
            <div>
                {props.message.map((n, index) => (
                    <div key={index}>
                        <p>Name is : {n.name}</p>
                        <p>Ram is : {n.ram}</p>
                        <p>Price is : {n.price}</p>
                        <button onClick={() => { props.func(index) }}>Delete</button>
                    </div>
                ))}
                <button onClick={() => { props.asc() }}>Sort By Asc</button>
                <button onClick={() => { props.des() }}>Sort By Des</button>
                <button onClick={() => { props.sortL() }}>LOW TO HIGH</button>
                <button onClick={() => { props.sortH() }}>HIGH TO LOW</button>
                <button onClick={() => { props.filt() }}>Filter</button>
            </div>
        </div>
    )
}

export default Child