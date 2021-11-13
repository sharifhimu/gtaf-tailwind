import React, { useState } from 'react';
import { RiHomeLine } from 'react-icons/ri'
import { BiHomeCircle, BiBox } from 'react-icons/bi'
import { BsFileEarmarkText } from 'react-icons/bs'
import { IoSettingsOutline } from 'react-icons/io5' 

import '../styles/Styles.css'

const Sidebar = () => {

    const [clicked, setClicked] = useState({dashboard: false, inventory: false, documents: false, settings: false })

    const onClick = (name) => {
        name == 'Dashboard' ? setClicked({dashboard: true, inventory: false, documents: false, settings: false }) :
        name == 'Inventory' ? setClicked({dashboard: false, inventory: true, documents: false, settings: false }) :
        name == 'Documents' ? setClicked({dashboard: false, inventory: false, documents: true, settings: false }) :
        setClicked({dashboard: false, inventory: false, documents: false, settings: true })
    }

    const nav = [
        {
            name: 'Dashboard',
            icon: <BiHomeCircle/>
        },
        {
            name: 'Inventory',
            icon: <BsFileEarmarkText/>
        },
        {
            name: 'Documents',
            icon: <BiBox/>
        },
        {
            name: 'Settings',
            icon: <IoSettingsOutline/>
        }
    ]


    return (
        <div className="h-screen border-r-2 bg-gray-100 lg:w-60 sm:w-16 flex justify-center sidebar" >
            <div>
                {
                    nav.map((v, i) => {
                        return(
                            <div key={i} className={`flex items-center  mr-2 my-3  py-3 lg:pr-10  cursor-pointer rounded font-medium text-gray-500 hover:text-green-600`}
                            style={v.name == 'Dashboard' ? ( clicked.dashboard ? {color: '#00C614', backgroundColor:'white', boxShadow: '0px 2px 1px 0px rgba(0,0,0,.2)' } : null ) :  
                            v.name == 'Inventory' ? ( clicked.inventory ? {color: '#00C614', backgroundColor:'white', boxShadow: '0px 2px 1px 0px rgba(0,0,0,.2)' } : null ) :
                            v.name == 'Documents' ? ( clicked.documents ? {color: '#00C614', backgroundColor:'white', boxShadow: '0px 2px 1px 0px rgba(0,0,0,.2)' } : null ) :
                            ( clicked.settings ? {color: '#00C614', backgroundColor:'white', boxShadow: '0px 2px 1px 0px rgba(0,0,0,.2)' } : null ) 
                            }
                            onClick={() => onClick(v.name) } >
                                <div className="text-xl mx-5" > {v.icon} </div>
                                <p className="lg:flex sm:hidden midscreen" >  {v.name} </p>
                            </div>
                        )
                    } )
                }
            </div>
        </div>
    );
};

export default Sidebar;