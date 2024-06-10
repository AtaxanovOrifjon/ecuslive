import { Link } from "react-router-dom";
// import { Icons } from "../Icons";
import { dataLink } from "../data/dataLink";


export function Category() {
  return (
    <div className="items-center p-2">
        <div className="flex flex-col gap-y-5 py-8">
             <div className="flex  items-center gap-x-2 ">
                <div className="w-5 h-[40px] bg-red-500"></div>
                <div className=" text-base font-semibold leading-5 text-red-500">Categories</div>
             </div>
             <p className=" text-4xl font-semibold leading-10">Browse By Category</p>
        </div>

        <div className="flex items-center justify-between gap-x-3 p-5">
            {dataLink.map(({id,link,title,image})=>(
                  <button    className="w-[170px] h-[145px] rounded-sm border border-black hover:bg-red-700">
                  <div className="flex flex-col gap-y-2 items-center">
                      <img src={image} className=" items-center " alt="" />
                      <p className=" text-base font-normal leading-6 text-center">{title}</p>
                  </div>
                 </button>
            ))}
           
           {/* <button className="w-[170px] h-[145px] rounded-sm border border-black">
            <div className="flex flex-col gap-y-2 items-center">
                <img src="../../public/Category-CellPhone.png" alt="" />
                <p className=" text-base font-normal leading-6">Phone</p>
            </div>
           </button>
           <button className="w-[170px] h-[145px] rounded-sm">
            <div className="flex flex-col gap-y-2 items-center">
                <img src="../../public/Category-CellPhone.png" alt="" />
                <p className=" text-base font-normal leading-6">Phone</p>
            </div>
           </button>
           <button className="w-[170px] h-[145px] rounded-sm">
            <div className="flex flex-col gap-y-2 items-center">
                <img src="../../public/Category-CellPhone.png" alt="" />
                <p className=" text-base font-normal leading-6">Phone</p>
            </div>
           </button>
           <button className="w-[170px] h-[145px] rounded-sm">
            <div className="flex flex-col gap-y-2 items-center">
                <img src="../../public/Category-CellPhone.png" alt="" />
                <p className=" text-base font-normal leading-6">Phone</p>
            </div>
           </button>  */}
          
        </div>

    </div>
  )
}

