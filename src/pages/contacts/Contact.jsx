import React from 'react'

const Contact = (props) => {
    const {_id, owner, fname, lname, email, phone, mobile , title, image} = props.contact;

    return (
        <div className='d-flex gap-2'>
            <img src={image} alt={fname + lname} title={fname + lname} width="120"/>
            <div>
                <h2>{fname} {lname} <small className='text-muted'>({owner})</small></h2>
                <div className="d-flex gap-2">
                    <span className='text-muted'>Phone:</span> <span className='font-weight-bold'>{phone}</span>
                    <span className='text-muted'>Email:</span> <span>{email}</span>
                    <span className='text-muted'>Mobile:</span> <span>{mobile}</span>
                    <span className='text-muted'>Account Name:</span> <span>{mobile}</span>
                    <span className='text-muted'>Title:</span> <span>{title}</span>
                    <span className='text-muted'>Lead Source:</span> <span>{mobile}</span>
                </div>
            </div>
        </div>
    )
}

export default Contact