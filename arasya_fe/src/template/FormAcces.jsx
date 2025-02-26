import React from 'react'
import { Link } from 'react-router-dom'
// import logoB from '../images/logongopi.png'
// import logo from '../images/logoPanjang.png'
const FormAcces = ({ children, tipe, sub, err }) => {
    return (
        <div className="bg-gray-50 font-[sans-serif]">
            <div className="min-h-screen flex max-w-6xl  mx-auto justify-between  items-center py-6 px-4">
                <div className="max-w-md w-full">
                    {/* <a href="javascript:void(0)">
                        <img
                            src={logo}
                            alt="logo"
                            className="w-40 mb-8 mx-auto block"
                        />
                    </a> */}
                    <div className="p-8 rounded-2xl bg-white shadow">
                        <h2 className="text-amber-900 text-center text-2xl font-bold">
                            {tipe == 'login' ? 'Sign In' : 'Register'}
                        </h2>
                        <form className="mt-8 space-y-4">

                            {children}
                            <div className="!mt-8">


                                <button
                                    onClick={sub}
                                    type="button"
                                    className="w-full cursor-pointer py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-amber-700 hover:bg-amber-900 focus:outline-none"
                                >  {tipe === 'login' ? 'Sign In' : 'Register'}</button>


                            </div>
                            {err ?
                                <p className='w-full text-center text-red-500'>
                                    try again!
                                </p>
                                : <></>}
                            <p className="text-gray-800 text-sm mt-8 text-center">
                                Don't have an account?{" "}
                                {tipe === 'login' ?
                                    <Link to='/register'
                                        href="javascript:void(0);"
                                        className="text-amber-900 hover:underline ml-1 whitespace-nowrap font-semibold"
                                    >Register Here</Link> :
                                    <Link
                                        to='/login'
                                        href="javascript:void(0);"
                                        className="text-amber-900 hover:underline ml-1 whitespace-nowrap font-semibold"
                                    >Sign In Here</Link>
                                }
                            </p>
                        </form>
                    </div>
                </div>
                <div>
                {/* <img src={logoB} alt="" /> */}
            </div>
            </div>
          
        </div>
    )
}

export default FormAcces
