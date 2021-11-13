import React from 'react';
import profile_pic from '../assests/images/profile_pic.png';
import { AiOutlineSearch } from 'react-icons/ai'
import { IoMdArrowDropdown } from 'react-icons/io'
import { IoIosNotificationsOutline } from 'react-icons/io'

const header = () => {
    return (
        <div>
           <header className="z-40 py-3 bg-white shadow-bottom  ">
            <div className="container flex items-center justify-between h-full px-6 mx-auto  ">

            <div className="flex justify-between w-1/2" >
            <div className="flex mr-40 items-center" >
            <p className=" "  > Starbucks </p>
            <IoMdArrowDropdown/>
            </div>

            <div className="lg:flex  mobilescreen  justify-center flex-1   ">
            <div className="relative w-full mr-6 text-gray-500">
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
            </div>

            <div className="flex items-center " >
                <IoIosNotificationsOutline className="text-lg " />
                <img src={profile_pic} alt="profile pic" className="mx-3" />
                <p className="text-sm" > John Doe </p>
                <IoMdArrowDropdown/>
            </div>

            </div>
            </header>
        </div>
    );
};

export default header;