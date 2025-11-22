import { FaSearch } from "react-icons/fa";

export default function SearchBar (){


    return(
        <main>
            <section className="bg-white p-2 px-2 rounded-[50px] text-black  w-fit flex  gap-8 items-center justify-center  " >
                <select name="title" id="" className="px-4 py-2 outline-none ">
                    <option value="title" className="hover:bg-blue-600 rounded-2xl transform duration-150 ">Types</option>
                    <option value="title" className="hover:bg-blue-600 rounded-2xl transform duration-150 ">Sale</option>
                    <option value="title" className="hover:bg-blue-600 rounded-2xl transform duration-150 ">Rent</option>
                </select>
                <select name="title" id="" className="px-4 py-2 outline-none">
                    <option value="title">Bedroom</option>
                    <option value="title">1Br</option>
                    <option value="title">2Br</option>
                    <option value="title">3Br</option>
                </select>
                  <select name="title" id="" className="px-4 py-2 outline-none ">
                    <option value="title">Category</option>
                    <option value="title">House</option>
                    <option value="title" >Appartment</option>
                    <option value="title">Office</option>
                </select>

                <input type="text" placeholder="Search Your Home" className="p-2 focus:outline-none" />
            <FaSearch className="bg-blue-500 p-2 rounded-full text-white" size={43} />


            </section>

        </main>
    )

}