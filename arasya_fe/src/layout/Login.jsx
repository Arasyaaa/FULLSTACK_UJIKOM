import React, { useState } from 'react'
import FormAcces from '../template/FormAcces'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: '',
    password: '',
  })
  const [err,setErr]=useState('')

  const Auth = async (e) => {
    try {
      await axios.post('http://localhost:3100/admin/login', data, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then((response) => {
          localStorage.setItem("token", response.data.accessToken);
          console.log(response.data.accessToken)

          navigate('/menu')
        })
        .catch((error) => {
          setErr(error.response.data.msg)
        });
    } catch (err) {
      console.log(err)
    }
  }

  function handleChange(e) {
    const newData = { ...data }
    newData[e.target.name] = e.target.value
    setData(newData)

  }
  return (
    <FormAcces tipe={'login'} sub={Auth} err={err}>
      <div className='space-y-4'>
        <div>
          <label className="text-gray-800 text-sm mb-2 block">
            Email
          </label>
          <div className="relative flex items-center">
            <input
              name="email"
              type="text"
              required=""
              onChange={(e) => handleChange(e)}
              className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-amber-900"
              placeholder="Enter email"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#bbb"
              stroke="#bbb"
              className="w-4 h-4 absolute right-4"
              viewBox="0 0 24 24"
            >
              <circle cx={10} cy={7} r={6} data-original="#000000" />
              <path
                d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                data-original="#000000"
              />
            </svg>
          </div>
        </div>
        <div>
          <label className="text-gray-800 text-sm mb-2 block">Password</label>
          <div className="relative flex items-center">
            <input
              name="password"
              type="password"
              onChange={(e) => handleChange(e)}
              required=""
              className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-amber-900"
              placeholder="Enter password"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#bbb"
              stroke="#bbb"
              className="w-4 h-4 absolute right-4 cursor-pointer"
              viewBox="0 0 128 128"
            >
              <path
                d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                data-original="#000000"
              />
            </svg>
          </div>
        </div>


      </div>
    </FormAcces>

  )
}

export default Login
