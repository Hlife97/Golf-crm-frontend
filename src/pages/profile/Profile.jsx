import React from 'react'
import '../../styles/Form-element.css'

const Profile = () => {
  return (
    <div className='container min-h-screen'>
        <div className="flex items-center justify-center">
            <form className='flex flex-col gap-4'>
                <div className="form_group">
                    <label htmlFor="profilePicture">Profile image</label>
                    <input type="file" className='cursor-pointer'/>
                </div>
                <div className="form_group">
                    <label htmlFor="firstName">First name</label>
                    <input type="text" value="Emre" />
                </div>
                <div className="form_group">
                    <label htmlFor="lastName">Last name</label>
                    <input type="text" value="Onki" />
                </div>
                <div className="form_group">
                    <label htmlFor="Language">Language</label>
                    <select name="" id="">
                        <option value="en">English</option>
                        <option value="gr">German</option>
                    </select>
                </div>
                <div className="form_group">
                    <label htmlFor="Language">Data, time, number format</label>
                    <select name="" id="">
                        <option value="us">United State</option>
                        <option value="grm">Germany</option>
                    </select>
                </div>
                <div className="form_group">
                    <label htmlFor="Language">Data, time, number format</label>
                    <small className='text-sm text-gray-400 mb-2'>We may use this phone number to contact you about security events, sending workflow SMS.</small>
                    <div className='flex gap-1'>
                        <select className='w-24'>
                            <option value="us">Uni</option>
                            <option value="grm">Germany</option>
                        </select>
                        <input type="text" className='flex-1'/>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Profile