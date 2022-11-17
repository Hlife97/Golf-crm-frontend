import React from 'react'

const Contact = (props) => {
    const {_id, owner, fname, lname, email, phone, mobile , title, image} = props.contact;

    return (
        <div className='flex gap-2'>
            <img src={image} alt={fname + lname} title={fname + lname} width="120"/>
            <div>
                <h2>{fname} {lname} <small className='text-gray-500'>({owner})</small></h2>
                <div className="flex gap-2">
                    <span className='text-gray-500'>Phone:</span> <span className='font-bold'>{phone}</span>
                    <span className='text-gray-500'>Email:</span> <span>{email}</span>
                    <span className='text-gray-500'>Mobile:</span> <span>{mobile}</span>
                    <span className='text-gray-500'>Account Name:</span> <span>{mobile}</span>
                    <span className='text-gray-500'>Title:</span> <span>{title}</span>
                    <span className='text-gray-500'>Lead Source:</span> <span>{mobile}</span>
                </div>
            </div>
        </div>
    )
}

export default Contact