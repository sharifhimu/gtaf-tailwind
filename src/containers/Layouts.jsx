import React, { Suspense } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/header/header';
import Main from './main';
import Tablecomp from '../components/Tablecomp/Tablecomp';
import Downsidebar from '../components/Downsidebar/Downsidebar';


export default function Layouts(){


    return(
        <div
        className={` h-screen bg-gray-50 dark:bg-gray-900 `}
      >
        <Header />
  
        <div className="flex flex-row flex-1 w-full bg-gray-100">
        <Sidebar />
          <Main>
            <Suspense fallback={<p> loading... </p>}>
              <div className="block  " >
                  <h2 className="font-bold text-gray-600 py-4 border-gray-300 border-b-2" > <span className="pl-4" > Inventory </span> </h2>
                  <Tablecomp/>
              </div>
            </Suspense>
          </Main>
        </div>
        <Downsidebar/>
  
        </div>
    )
}