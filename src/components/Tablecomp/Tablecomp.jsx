import React, { useState } from 'react';
import { BsArrowDownShort } from 'react-icons/bs'
import { CgArrowsVAlt } from 'react-icons/cg'
import { AiOutlineSearch } from 'react-icons/ai'
import { IoIosArrowDown, IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

import '../styles/Styles.css'

const Tablecomp = () => {

    const [show, setShow] = useState(false)
    const [showpagebtn, setShowpagebtn] = useState(false)

    console.log('show', show );

    const tableData = [
        {
            date : '11 Nov 2021',
            title: 'hammer',
            details: 'This is a Hammer to do work with',
            status: "Alright",
            quantity: '200/300',
            unit_price: '$10',
            amount: '$2000.00'
        },
        {
            date : '11 Nov 2021',
            title: 'hammer',
            details: 'This is a Screw to do work with',
            status: "Alright",
            quantity: '200/300',
            unit_price: '$10',
            amount: '$2000.00'
        },
        {
            date : '11 Nov 2021',
            title: 'hammer',
            details: 'Wood plan will be used to do woodworks, duh',
            status: "In progress",
            quantity: '200/300',
            unit_price: '$10',
            amount: '$2000.00'
        },
        {
            date : '11 Nov 2021',
            title: 'hammer',
            details: '-',
            status: "Out of stock",
            quantity: '200/300',
            unit_price: '$10',
            amount: '$2000.00'
        },
        {
            date : '11 Nov 2021',
            title: 'hammer',
            details: '-',
            status: "Out of stock",
            quantity: '200/300',
            unit_price: '$10',
            amount: '$2000.00'
        },
        {
            date : '11 Nov 2021',
            title: 'hammer',
            details: '-',
            status: "Out of stock",
            quantity: '200/300',
            unit_price: '$10',
            amount: '$2000.00'
        },
        {
            date : '11 Nov 2021',
            title: 'hammer',
            details: 'This is a Hammer to do work with',
            status: "Alright",
            quantity: '200/300',
            unit_price: '$10',
            amount: '$2000.00'
        },
        {
            date : '11 Nov 2021',
            title: 'hammer',
            details: 'This is a Hammer to do work with',
            status: "Alright",
            quantity: '200/300',
            unit_price: '$10',
            amount: '$2000.00'
        },
        {
            date : '11 Nov 2021',
            title: 'hammer',
            details: 'This is a Hammer to do work with',
            status: "Alright",
            quantity: '200/300',
            unit_price: '$10',
            amount: '$2000.00'
        }
    ]

    const Greendot = () => {
        return(
            <div className="h-2 w-2 bg-green-600 rounded inline-block"></div> 
        )
    }

    const Lightreddot = () => {
        return(
            <div className="h-2 w-2 bg-red-400 rounded inline-block"></div> 
        )
    }    

    const Reddot = () => {
        return(
            <div className="h-2 w-2 bg-red-600 rounded inline-block"></div> 
        )
    }

    return (
        <div className="bg-white m-4 py-4 shadow-sm">

            <div className=" m-2   flex-1   ">
            <div className="relative w-64 mr-6 text-gray-500">
                <div className="absolute inset-y-0 flex items-center pl-2">
                {/* <SearchIcon className="w-4 h-4" aria-hidden="true" /> */}
                <AiOutlineSearch className="w-4 h-4" />
                </div>
                <input
                className="pl-8 text-gray-700  bg-gray-200 w-full rounded "
                placeholder="Search"
                aria-label="Search"
                />
            </div>
            </div>

            <table className="w-full relative text-gray-600" >
                <thead>
                    <tr className="text-left bg-wheat mx-8 py-4 " style={{ backgroundColor: '#FDF4ED' }}>
                        <th className="p-4 font-thin mobilescreen" >  <input type="checkbox" /> </th>
                        <th className="font-medium  mobilescreen" > <div className="flex items-center"> Date Updated <BsArrowDownShort className="text-xl" /> </div> </th>
                        <th className="font-medium " > <div className="flex items-center xs:pl-2" > Title <CgArrowsVAlt/> </div> </th>
                        <th className="font-medium lg:table-cell   sm:hidden midscreen " > Details </th>
                        <th className="font-medium " >  Status </th>
                        <th className="font-medium " > Quantity </th>
                        <th className="font-medium lg:table-cell sm:hidden midscreen" > Unit Price </th>
                        <th className="font-medium " > <div className="flex items-center" > Amount <CgArrowsVAlt/>  </div> </th>
                    </tr>
                </thead>

                <tbody>

                {
                    tableData.map((v,i) => {
                        return(
                        <tr >
                            <td className="p-4 py-2 mobilescreen"> <input type="checkbox" /> </td>
                            <td className="mobilescreen py-2"> {v.date} </td>
                            <td className="py-2 xs:pl-2"> {v.title} </td>
                            <td className=" lg:table-cell sm:hidden py-2 midscreen" > {v.details} </td>
                            <td >  <div className="flex items-center py-2" > <span className="mr-1 mobilescreen">  {v.status} </span> {v.status == 'Alright' ? Greendot() : v.status == 'In progress' ? Lightreddot() : Reddot() }  </div> </td>
                            <td className="py-2" > {v.quantity} </td>
                            <td className="lg:table-cell sm:hidden py-2 midscreen" > {v.unit_price} </td>
                            <td className="py-2" > {v.amount} </td>
                        </tr>
                        )
                    })
                }

                </tbody>
            </table>

            <div className="flex justify-between" >
                <div className="mobilescreen">
                <div className="relative inline-block mx-4">
                <button onClick={() => setShow(!show) } className=" text-gray-500 cursor-pointer flex items-center shadow-md p-2 "> <span className="mr-4"> 10 items per page </span>  <IoIosArrowDown /> </button>
                <div  className={` absolute w-44  overflow-auto shadow-sm z-10 bg-white ${show ? `block` : `hidden` } `}>
                    <p className="text-gray-500 border-b-2" >100 items per page</p>
                    <p className="text-gray-500 border-b-2" >1000 items per page</p>
                    <p className="text-gray-500 border-b-2" >10000 items per page</p>
                </div>
                </div>
                </div>

                <div className="flex mr-2" >
                    <div>
                    <div className="relative inline-block mx-4">
                    <button onClick={() => setShowpagebtn(!showpagebtn) } className=" text-gray-500 cursor-pointer flex items-center shadow-md p-2"> <span className="mr-4"> Page 1 of 5 </span>  <IoIosArrowDown /> </button>
                    <div  className={` absolute w-32  overflow-auto shadow-sm z-10 bg-white ${showpagebtn ? `block` : `hidden` } `}>
                        <p className="text-gray-500 border-b-2" >Page 2 of 5 </p>
                        <p className="text-gray-500 border-b-2" >Page 3 of 5</p>
                        <p className="text-gray-500 border-b-2" >Page 4 of 5</p>
                    </div>
                    </div>
                    </div>

                    <div className="flex " >
                        <div className="shadow-md p-2 flex items-center" > <IoIosArrowBack/>  </div>
                        <div  className="shadow-md p-2 flex items-center" > <IoIosArrowForward/> </div> 
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Tablecomp;