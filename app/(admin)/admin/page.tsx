"use client"

import PropertySubmi from "@/src/component/(admin)/SubmitProperty";
import { useState } from "react";
import { IoPerson } from "react-icons/io5";

export default function Listing (){

    const [activeComponent, setActiveComponent] = useState(null);

    const settings =[
        {name:"Start Verification" , component:""},
        {name:"Submit Property" , component:< PropertySubmi />},
        {name:"My Properties" , component:""},
        {name:"My Reservations" , component:""},
        {name:"Subscriptions" , component:""},
        {name:"Agent Settings" , component:""},
        {name:"Support Hub" , component:""},
        {name:"Submit Blog Post" , component:""},
    ]


    return(
        <main className="p-4 mt-5 w-full ">
            <section className="shadow-xl bg-blue-300 rounded-[25px] w-full text-black flex flex-col md:flex-row ">
                <aside className="w-full md:w-2/6  p-5  space-y-5 bg-slate-300 ">
                <h1 className="font-bold text-3xl">Broker panel</h1>

                <p  className="text-sm text-gray-900 leading-relaxed" >This is a panel for managing your properties. It is available to verified users and for managing business accounts.</p>

                <div className="bg-white shadow-2xl rounded-[15px] flex  flex-col items-center justify-center space-y-3 p-5 px-3">
                    <div className="rounded-full p-5 bg-gray-400 w-fit">
                        <IoPerson className="text-white" size={80} />
                    </div>
                     <h1>Dummy Name</h1>
                        <p>codytester@templines.com</p>
                </div>


                {/* Settings */}

                <div className="bg-white shadow-2xl border-b-black   ">
                    {
                        settings.map((setting, index)=> (
                            <div className="hover:bg-orange-500 text-black hover:text-white border-b border-gray-400 p-4" onClick={()=> setActiveComponent(setting.component)}>
                                {setting.name}
                                </div>
                        ))
                    }
                </div>
                </aside>
                <aside className="md:w-4/6 w-full bg-white min-h-[500px]">
                  {activeComponent ? activeComponent : <p>Select an option</p>}
                </aside>
            </section>

        </main>
    )
}