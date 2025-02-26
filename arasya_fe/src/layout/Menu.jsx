import React, { useEffect, useState } from 'react'
import Dashboard from '../template/Dashboard'
import { FaTrash } from "react-icons/fa6";
import { FaPen } from "react-icons/fa6";
import axios from 'axios';
import { convertToRp } from '../currency';
import ModalMenu from '../components/ModalMenu';
const Menu = () => {
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
    const [modalAdd, setModalAdd] = useState()
    // console.log(dataMenu)
    
    const [data, setData] = useState({
        nama: '',
        harga: 0,
        deskripsi: '',
        gambar: '',

    })
    const handleAddMenu = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post('http://localhost:3100/menu/create', data);
            console.log('Login berhasil:', response.data.data);
            window.location.href = '/menu'
        } catch (error) {
            console.error('Login gagal:' + error.response.data.msg);
        }
    };
    

    const [modalAddUp, setModalAddUp] = useState()
    const [id, setId] = useState()
    const [dataUp, setDataUp] = useState()
    const getDataById = async () => {

        return await axios.get('http://localhost:3100/menu/find/' + id)
            .then((response) => response.data.data)
            .catch((error) => {
                return error;
            })
    }

    //update
    const updateUser = async (e) => {
        console.log('ss')
        try {
          const response = await axios.put('http://localhost:3100/menu/update/'+id, 
           dataUp,
          );
          window.location.href = '/menu'
          
          console.log('Response:', response.data);
        } catch (error) {
          console.error('Error:', error.response ? error.response.data : error.message);
        }
      };
    useEffect(() => {
        id ?
            getDataById().then((result) => setDataUp((result)))
            : <></>
    }, [id])

    function handleDelete(id){
        try {
            axios.delete(`http://localhost:3100/menu/delete/${id}`);
            console.log(`User ${id} deleted`);
            window.location.href = '/menu'
          } catch (error) {
            console.error('Delete failed:', error.response ? error.response.data : error.message);
          }
    }
    return (
        <>
            <Dashboard page='/menu'>
                <ModalMenu judul='Tambah data Menu' data={data} onSub={handleAddMenu} setData={setData} state={{ modalAdd, setModalAdd }}></ModalMenu>
                {dataUp?
                <ModalMenu judul='Edit data Menu' data={dataUp} onSub={updateUser} setData={setDataUp} state={{ modalAdd:modalAddUp, setModalAdd:setModalAddUp }}></ModalMenu>
                :''
            }
                <div className='w-full flex justify-end'>

                    <button onClick={() => setModalAdd(true)} className='rounded-md bg-orange-500 px-3 py-1 text-white cursor-pointer'>Add Menu</button>
                </div>
                <div className=' flex w-[100%] gap-12 flex-wrap '>

                    {
                        dataMenu.map((e, i) => (

                            <div key={i} className="relative flex flex-col  bg-white shadow-sm border border-slate-200 rounded-lg w-65">
                                <div className="  m-2.5 overflow-hidden text-white rounded-md">
                                    <img
                                        src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                                        alt="card-image"
                                    />
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

                                        <button className='px-2 cursor-pointer text-red-500' onClick={() => {
                                            setModalAddUp(true)
                                            setId(e.id)}
                                        }
                                            ><FaPen /></button>
                                        <button className='px-2 rounded-md py-2 cursor-pointer bg-orange-500 text-white'
                                        onClick={(()=>handleDelete(e.id))}><FaTrash /></button>
                                    </div>
                                </div>
                            </div>

                        ))
                    }
                </div>

            </Dashboard>
        </>
    )
}

export default Menu
