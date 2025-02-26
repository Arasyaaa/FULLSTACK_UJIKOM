import React from 'react'
import { FaX } from 'react-icons/fa6'
import profilee from '../images/profilekopih.png'
const ModalProfile = ({ profile, setProfile, decode }) => {
    return (
        <div className={`${profile ? 'flex' : 'hidden'} w-full `}>
            {/* component */}
            <div className="overflow-y-auto sm:p-0 pt-4 pr-4 pb-20 pl-4 w-full top-0 z-99 absolute bg-gray-800/50">
                <div className="flex justify-center items-end text-center min-h-screen sm:block">
                    <div className="bg-gray-500 transition-opacity bg-opacity-75" />
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen">

                    </span>
                    <div
                        className="inline-block text-left bg-white rounded-lg overflow-hidden align-bottom transition-all transform
    shadow-2xl sm:my-8 sm:align-middle sm:max-w-sm sm:w-full"
                    >
                        <button className='ps-3 pt-3 cursor-pointer' onClick={() => setProfile(false)}
                        ><FaX /></button>

                        <div className="items-center w-full mr-auto ml-auto relative max-w-7xl md:px-12 lg:px-24">
                            <div className="grid grid-cols-1">
                                <div className="mt-4 mr-auto mb-4 ml-auto bg-white max-w-lg">
                                    <div className="flex  items-center pt-6 pr-6 pb-6 pl-6">
                                        <div  className='flex flex-col items-center'>
<p>

                                            <img
                                                src={profilee}
                                                className="flex-shrink-0 object-cover object-center btn- flex w-16 h-16 mr-auto -mb-8 ml-auto rounded-full shadow-xl"
                                                />
                                                </p>
                                            <p className="mt-8 text-2xl font-semibold leading-none  tracking-tighter lg:text-3xl">
                                                {decode.nama}
                                            </p>
                                        <p className="mt-1 text-lg font-semibold ">
                                            {decode.email}
                                        </p>
                                        <div className="w-full mt-6">

                                            <a
                                                onClick={() => localStorage.removeItem('token')}
                                                className="flex text-center items-center justify-center w-full pt-4 pr-10 pb-4 pl-10 text-base text-white cursor-pointer
                font-medium  bg-orange-600 rounded-xl transition duration-500 ease-in-out transform
                hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                            >
                                                close
                                            </a>
                                        </div>
                                        </div>
                                        <p className="mt-3 text-base leading-relaxed text-center text-gray-700">

                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ModalProfile
