import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { convertToRp } from '../currency';
import ModalPembeli from '../components/ModalPembeli';

const MenuList = () => {
    const [dataMenu, setDataMenu] = useState([])

    const getAllData = async () => {

        return await axios.get('http://localhost:3100/menu/')
            .then((response) => response.data.data)
            .catch((error) => {
                return error;
            })
    }

    useEffect(() => {
        getAllData().then((result) => setDataMenu(result))
    }, [])
    const dataku = localStorage.getItem('dataku')
    function handleBeli(e) {
        if (!dataku) {
            alert('silahkan login atau daftar')
        }

    }
    const [dataAdd,setDataAdd]=useState(
        {
            nama:'',
            email:''
        }
    )
    const [modalAdd,setModalAdd]=useState()
    console.log(dataAdd)
    return (
        <div className='max-w-6xl mx-auto mt-30 '>
            <ModalPembeli judul='Edit data Pembeli' data={dataAdd} onSub={''} setData={setDataAdd} state={{ modalAdd, setModalAdd }}></ModalPembeli>

            <div className='w-full flex flex-wrap gap-8'>

                {
                    dataMenu.map((e, i) => (

                        <div key={i} className="relative flex flex-col  bg-white shadow-sm border border-slate-200 rounded-lg w-65">
                            <div className="  m-2.5 overflow-hidden text-white rounded-md">
                                {/* <img
                                    src="https://images.unsplash.com/"
                                    alt="card-image"
                                /> */}
                            </div>
                            <div className="p-4">
                                <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                                    {e.nama}
                                </h6>
                                <p className="text-slate-600 leading-normal font-light">
                                    {e.deskripsi}

                                </p>
                            </div>
                            <div className="px-4 pb-4 w-full flex items-end justify-between  gap-2">
                                <p className='font-semibold'>
                                    {convertToRp(e.harga)}
                                </p>
                                <div className='flex w-fit gap-2'>

                                    <button
                                        onClick={(e) => handleBeli(e)}
                                        className='px-2 cursor-pointer text-red-500'
                                    >Beli</button>
                                </div>
                            </div>
                        </div>

                    ))
                }
            </div>

        </div>
    )
}

export default MenuList
