import React, {useState} from 'react';
import { BiHomeCircle, BiBox } from 'react-icons/bi'
import { BsFileEarmarkText } from 'react-icons/bs'
import { IoSettingsOutline } from 'react-icons/io5' 
import '../styles/Styles.css'

const Downsidebar = () => {
    
    const [clicked, setClicked] = useState({dashboard: false, inventory: false, documents: false, settings: false })
    
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


    const onClick = (name) => {
        name == 'Dashboard' ? setClicked({dashboard: true, inventory: false, documents: false, settings: false }) :
        name == 'Inventory' ? setClicked({dashboard: false, inventory: true, documents: false, settings: false }) :
        name == 'Documents' ? setClicked({dashboard: false, inventory: false, documents: true, settings: false }) :
        setClicked({dashboard: false, inventory: false, documents: false, settings: true })
    }

    return (
        <div className="flex justify-evenly py-6 downsidebar" >
        {
          nav.map((v,i) => {
            return(
              <div
              style={v.name == 'Dashboard' ? ( clicked.dashboard ? {color: '#00C614', } : null ) :  
                    v.name == 'Inventory' ? ( clicked.inventory ? {color: '#00C614', } : null ) :
                    v.name == 'Documents' ? ( clicked.documents ? {color: '#00C614',  } : null ) :
                    ( clicked.settings ? {color: '#00C614',  } : null ) 
                    }
                    onClick={() => onClick(v.name) }
              > 
              {v.icon} 
              </div>
            )
          })
        }
      </div> 
    );
};

export default Downsidebar;