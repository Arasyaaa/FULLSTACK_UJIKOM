import React, { useEffect, useState } from 'react'
import Dashboard from '../template/Dashboard'
import axios from 'axios'
import ModalPembeli from '../components/ModalPembeli'

const Pembeli = () => {
  const [data, setData] = useState([])
  const getAllData = async () => {

    return await axios.get('http://localhost:3100/pembeli/')
      .then((response) => response.data.data)
      .catch((error) => {
        return error;
      })
  }

  useEffect(() => {
    getAllData().then((result) => setData(result))
  }, [])

  //? edit
  const [id, setId] = useState()
  const [dataUp, setDataUp] = useState()
  const getDataById = async () => {

    return await axios.get('http://localhost:3100/pembeli/find/' + id)
      .then((response) => response.data.data)
      .catch((error) => {
        return error;
      })
  }
  useEffect(() => {
    id ?
      getDataById().then((result) => setDataUp((result)))
      : <></>
  }, [id])

  const updateUser = async (e) => {
    console.log('ss')
    try {
      const response = await axios.put('http://localhost:3100/pembeli/update/' + id,
        dataUp,
      );
      window.location.href = '/pembeli'

      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
    }
  };
  const [modalAdd, setModalAdd] = useState(false)
  function handleUpdatePembeli() { }
  // console.log(dataUp)
  return (
    <Dashboard page='/pembeli'>
      {data ?
        <ModalPembeli judul='Edit data Pembeli' data={dataUp} onSub={updateUser} setData={setDataUp} state={{ modalAdd, setModalAdd }}></ModalPembeli>
        : <></>
      }
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
          <thead className="text-xs text-white uppercase bg-orange-500 ">
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
                    <a
                      href="#"
                      className="font-medium ms-5 text-red-600  hover:underline"
                    >
                      Delete
                    </a>
                  </td>
                </tr>
              ))
            }

          </tbody>
        </table>
      </div>

    </Dashboard>
  )
}

export default Pembeli
