import React, { useEffect, useState } from 'react'
import Dashboard from '../template/Dashboard'
import axios from 'axios'
import { jwtDecode } from 'jwt-decode'
import ModalPembeli from '../components/ModalPembeli'
const Admin = () => {
  const [data,setData]=useState()
  const [idLogin,setIdlogin]=useState()

  const token = localStorage.getItem("token"); // Ambil token dari localStorage
  const getAllData = async () => {
    try {
      const response = await axios.get("http://localhost:3100/admin/", {
        headers: {
          Authorization: `Bearer ${token}`, // Tambahkan token di header
        },
      });
      return response.data.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return error;
    }
  }
  
  useEffect(() => {
    setIdlogin(jwtDecode(token))
    getAllData().then((result) => setData(result))
  }, [])

  const [id, setId] = useState()
  const [dataUp, setDataUp] = useState()
  console.log(token)
  const getDataById = async () => {

    try {
      const response = await axios.get(`http://localhost:3100/admin/find/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Tambahkan token di header
        },
      });
      setDataUp(response.data.data)
      return response.data.data;
    } catch (error) {
      console.error("Error fetching data by ID:", error);
      return error;
    }
  }
  useEffect(() => {
    id ?
      getDataById().then((result) => setDataUp((result)))
      : <></>
  }, [id])
  const updateUser = async (e) => {
    console.log('ss')
    try {
      const response = await axios.put('http://localhost:3100/admin/update/' + id,
        dataUp,
         {
          headers: {
            Authorization: `Bearer ${token}`, // Tambahkan token di header
          },
        }
      );
      window.location.href = '/admin'

      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
    }
  };
  console.log(dataUp)
  console.log(id)
  const [modalAdd, setModalAdd] = useState(false)

  return (
    <Dashboard page='/admin'>
       {data ?
        <ModalPembeli judul='Edit data Pribadi' data={dataUp} onSub={updateUser} setData={setDataUp} state={{ modalAdd, setModalAdd }}></ModalPembeli>
        : <></>
      }
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-amber-50 ">
        <thead className="text-xs text-white uppercase bg-amber-900 ">
          <tr>
            <th scope="col" className="px-6 py-3">
              Nomor
            </th>
            <th scope="col" className="px-6 py-3">
              Nama
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>

            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>

          {
            data?
            data.map((e, i) => (

              <tr key={i}>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  {i + 1}
                </th>
                <td className="px-6 py-4">{e.nama}</td>
                <td className="px-6 py-4">{e.email}</td>
                <td className="px-6 py-4 flex gap-2">
                  {e.id === idLogin.adminId
                  ?
                 
                  <a
                    href="#"
                    onClick={() => {
                      setModalAdd(true)
                      setId(e.id)
                    }}
                    className="font-medium text-blue-600  hover:underline"
                  >
                    Edit
                  </a>

                  :<></>
                }
              
                </td>
              </tr>
            ))
            :<></>
          }

        </tbody>
      </table>
    </div>

  </Dashboard>
  )
}

export default Admin
