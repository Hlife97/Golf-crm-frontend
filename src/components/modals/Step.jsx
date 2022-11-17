import { Dialog } from '@headlessui/react'
import React, { useState } from 'react'
import {GrNext} from 'react-icons/gr'
import {FiSearch} from 'react-icons/fi';

const Step = (props) => {
    const industry = props.industry;

    const [currentStep, setcurrentStep] = useState(1)
    const [filteredData, setFilteredData] = useState([]);
    const [selectedVal, setselectedVal] = useState("");

    function selectVal(value){
        console.log(value)
    }

    function updateStep(step){
        setcurrentStep(step);
    }

    const handleSearch = (e) => {
        const searchWord = e.target.value;
        const newFilter = industry.filter((value) => {
            return value.name.toLowerCase().includes(searchWord.toLowerCase())
        })
        if(searchWord === ""){
            setFilteredData([])
        }else{
            setFilteredData(newFilter)
        }
    }

  return (
    <div>
        {currentStep === 1 &&
        <div>
            <div className="bg-white px-4 pt-2 pb-4">
                <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 ">
                        <Dialog.Title className="text-center text-2xl leading-6 text-indigo-700 font-bold mb-4">
                            First Step Title
                        </Dialog.Title>
                        <div className="mt-2">
                            <form className='flex flex-col gap-4'>
                                <div className="flex flex-col md:flex-row gap-4">
                                    <input type="text" placeholder='First name' className='bg-white border-b-2 border-indigo-500 p-2'/>
                                    <input type="text" placeholder='Last name' className='bg-white border-b-2 border-indigo-500 p-2'/>
                                </div>
                                <input type="text" placeholder='Email address' className='bg-white border-b-2 border-indigo-500 p-2'/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:px-6">
                <button
                type="button"
                className="mt-3 inline-flex w-full justify-center items-center rounded-md border border-indigo-500 bg-indigo-500 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:w-full sm:text-sm"
                onClick={()=> updateStep(currentStep+1)}
                >
                Next
                </button>
            </div>
        </div>
        }

        {currentStep === 2 &&
        <div>
            <div className="bg-white px-4 pt-5 pb-4 sm:pb-4">
                <Dialog.Title className="text-center text-2xl leading-6 text-indigo-700 font-bold mb-4">
                    What industry are you in?
                </Dialog.Title>
                <form className='relative'>
                    <input type="search" className='bg-white border-b-2 border-indigo-500 p-2' placeholder='Search industries' onChange={handleSearch}/>
                    <FiSearch className='absolute top-4 right-1 text-indigo-700 text-lg'/>
                    {filteredData.length !== 0 &&
                    <div className='bg-gray-200 p-2 max-h-40 overflow-auto'>
                        {filteredData.map((data, value) => {
                            return <div key={data.id} className='bg-indigo-200 mb-2 p-2 hover:bg-indigo-300 cursor-pointer' onChange={selectVal(data.id)}>{data.name}</div>
                        })}
                    </div>
                    }
                </form>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:px-6">
                <button
                type="button"
                className="mt-3 inline-flex w-full justify-center rounded-md border border-indigo-500 bg-indigo-500 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:w-full sm:text-sm"
                onClick={()=> updateStep(currentStep+1)}
                >
                Next
                </button>
            </div>
        </div>
        }

        {currentStep === 3 &&
        <div>
            <div className="bg-white px-4 pt-5 pb-4 sm:pb-4">
                <Dialog.Title className="text-center text-2xl leading-6 text-indigo-700 font-bold mb-4">
                    What is your company's name?
                </Dialog.Title>
                <form>
                    <input type="text" placeholder='Company name' className='bg-white border-b-2 border-indigo-500 p-2'/>
                </form>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:px-6">
                <button
                type="button"
                className="mt-3 inline-flex w-full justify-center rounded-md border border-indigo-500 bg-indigo-500 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:w-full sm:text-sm"
                onClick={()=> updateStep(currentStep+1)}
                >
                Next
                </button>
            </div>
        </div>
        }

        {currentStep === 4 &&
        <div>
            <div className="bg-white px-4 pt-5 pb-4 sm:pb-4">
                <Dialog.Title className="text-center text-2xl leading-6 text-indigo-700 font-bold mb-4">
                    What is your job role?
                </Dialog.Title>
                <form>
                    <input type="text" className='bg-white border-b-2 border-indigo-500 p-2' placeholder='Job role'/>
                </form>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:px-6">
                <button
                type="button"
                className="mt-3 inline-flex w-full justify-center rounded-md border border-indigo-500 bg-indigo-500 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:w-full sm:text-sm"
                onClick={()=> updateStep(currentStep+1)}
                >
                Next
                </button>
            </div>
        </div>
        }

        {currentStep === 5 &&
        <div>
            <div className="bg-white px-4 pt-5 pb-4 sm:pb-4">
                <Dialog.Title className="text-center text-2xl leading-6 text-indigo-700 font-bold mb-4">
                    How many people work at your company?
                </Dialog.Title>
                <form>
                    <ul className="grid gap-6 w-full md:grid-cols-3">
                        <li>
                            <input type="radio" id="people-1" name="hosting" value="people-1" className="hidden peer" required />
                            <label htmlFor="people-1" className="inline-flex justify-center 
                            items-center py-5 px-2 w-full text-gray-500 bg-white rounded-lg border 
                            border-gray-200 cursor-pointer peer-checked:!border-blue-600 peer-checked:!bg-blue-200 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100">                           
                                <div className="block">
                                    <div className="w-full text-lg font-semibold">1</div>
                                </div>
                            </label>
                        </li>
                        <li>
                            <input type="radio" id="people-5" name="hosting" value="people-5" className="hidden peer" />
                            <label htmlFor="people-5" className="inline-flex justify-center 
                            items-center py-5 px-2 w-full text-gray-500 
                            bg-white rounded-lg border border-gray-200 cursor-pointer
                            peer-checked:!border-blue-600 peer-checked:!bg-blue-200 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100">
                                <div className="block">
                                    <div className="w-full text-lg font-semibold">2 to 5</div>
                                </div>
                            </label>
                        </li>
                        <li>
                            <input type="radio" id="people-6-10" name="hosting" value="people-6-10" className="hidden peer" />
                            <label htmlFor="people-6-10" className="inline-flex justify-center items-center 
                            py-5 px-2 w-full text-gray-500 bg-white rounded-lg border 
                            border-gray-200 cursor-pointer peer-checked:!border-blue-600 
                            peer-checked:!bg-blue-200 peer-checked:text-blue-600 
                            hover:text-gray-600 hover:bg-gray-100">
                                <div className="block">
                                    <div className="w-full text-lg font-semibold">6 to 10</div>
                                </div>
                            </label>
                        </li>
                        <li>
                            <input type="radio" id="people-11-25" name="hosting" value="people-11-25" className="hidden peer" />
                            <label htmlFor="people-11-25" className="inline-flex justify-center items-center 
                            py-5 px-2 w-full text-gray-500 bg-white rounded-lg border border-gray-200  peer-checked:!border-blue-600 
                            peer-checked:!bg-blue-200 cursor-pointer  peer-checked:text-blue-600
                            hover:text-gray-600 hover:bg-gray-100">
                                <div className="block">
                                    <div className="w-full text-lg font-semibold">11 to 25</div>
                                </div>
                            </label>
                        </li>
                        <li>
                            <input type="radio" id="people-26-50" name="hosting" value="people-26-50" className="hidden peer" />
                            <label htmlFor="people-26-50" className="inline-flex justify-center items-center 
                            py-5 px-2 w-full text-gray-500 bg-white rounded-lg border border-gray-200  peer-checked:!border-blue-600 
                            peer-checked:!bg-blue-200 cursor-pointer  peer-checked:text-blue-600
                            hover:text-gray-600 hover:bg-gray-100">
                                <div className="block">
                                    <div className="w-full text-lg font-semibold">26 to 50</div>
                                </div>
                            </label>
                        </li>
                        <li>
                            <input type="radio" id="people-50-more" name="hosting" value="people-50-more" className="hidden peer" />
                            <label htmlFor="people-50-more" className="inline-flex justify-center items-center 
                            py-5 px-2 w-full text-gray-500 bg-white rounded-lg border border-gray-200  peer-checked:!border-blue-600 
                            peer-checked:!bg-blue-200 cursor-pointer  peer-checked:text-blue-600
                            hover:text-gray-600 hover:bg-gray-100">
                                <div className="block">
                                    <div className="w-full text-lg font-semibold">50 or more</div>
                                </div>
                            </label>
                        </li>
                    </ul>
                </form>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:px-6">
                <button
                type="button"
                className="mt-3 inline-flex w-full justify-center rounded-md border border-indigo-500 bg-indigo-500 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:w-full sm:text-sm"
                onClick={()=> updateStep(currentStep+1)}
                >
                Next
                </button>
            </div>
        </div>
        }
        {currentStep === 6 &&
        <div>
            <div className="bg-white px-4 pt-5 pb-4 sm:pb-4">
                <Dialog.Title className="text-center text-2xl leading-6 text-indigo-700 font-bold mb-4">
                    What is your company's website?
                </Dialog.Title>
                <form>
                    <input type="text" className='bg-white border-b-2 border-indigo-500 p-2' placeholder='Website url'/>
                </form>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:px-6">
                <button
                type="button"
                className="mt-3 inline-flex w-full justify-center rounded-md border border-indigo-500 bg-indigo-500 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:w-full sm:text-sm"
                onClick={()=> updateStep(currentStep+1)}
                >
                Next
                </button>
            </div>
        </div>
        }

        {currentStep === 7 &&
        <div>
            <div className="bg-white px-4 pt-5 pb-4 sm:pb-4">
                <Dialog.Title className="text-center text-2xl leading-6 text-indigo-700 font-bold mb-4">
                    Where you like yor data to be hosted?
                </Dialog.Title>
                <form>
                    <ul className="grid gap-6 w-full md:grid-cols-1 ml-0">
                        <li>
                            <input type="radio" id="us" name="hosting" value="us" className="hidden peer" required />
                            <label htmlFor="us" className="inline-flex justify-center 
                            items-center p-3 w-full text-gray-500 bg-white rounded-lg border 
                            border-gray-200 cursor-pointer peer-checked:!border-blue-600 peer-checked:!bg-blue-200 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100">                           
                                <div className="block">
                                    <div className="w-full text-lg font-semibold">US</div>
                                </div>
                            </label>
                        </li>
                        <li>
                            <input type="radio" id="eu" name="hosting" value="eu" className="hidden peer" />
                            <label htmlFor="eu" className="inline-flex justify-center 
                            items-center p-3 w-full text-gray-500 
                            bg-white rounded-lg border border-gray-200 cursor-pointer
                            peer-checked:!border-blue-600 peer-checked:!bg-blue-200 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100">
                                <div className="block">
                                    <div className="w-full text-lg font-semibold">EU</div>
                                </div>
                            </label>
                        </li>
                    </ul>
                </form>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:px-6">
                <button
                type="button"
                className="mt-3 inline-flex w-full justify-center rounded-md border border-indigo-500 bg-indigo-500 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:w-full sm:text-sm"
                onClick={()=> updateStep(currentStep+1)}
                >
                Next
                </button>
            </div>
        </div>
        }

        {currentStep === 8 &&
        <div>
            <div className="bg-white px-4 pt-5 pb-4 sm:pb-4">
                <Dialog.Title className="text-center text-2xl leading-6 text-indigo-700 font-bold mb-4">
                    Check your email 
                </Dialog.Title>
                <small className='text-gray-500 mb-2 text-center border-l-2 pl-2 border-indigo-500'>Please enter the verification code we sent to: </small>
                <form>
                    <input type="text" className='bg-white border-b-2 border-indigo-500 p-2 mt-4' placeholder='Verification code'/>
                </form>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:px-6">
                <button
                type="button"
                className="mt-3 inline-flex w-full justify-center rounded-md border border-indigo-500 bg-indigo-500 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:w-full sm:text-sm"
                onClick={()=> updateStep(currentStep+1)}
                >
                Next
                </button>
            </div>
        </div>
        }
    </div>
  )
}

export default Step;