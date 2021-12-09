import React from 'react'
import Dropdown from 'react-dropdown';
const Navbar = () => {
    return (
        <div>
            <div className="flex bg-white h-18">
                <div>
                    <img className="mx-28 h-16" src="assests/logo.png" alt="logo" />
                </div>

                <div className="flex  gap-14 items-center mx-44">
                    <div className="flex">
                        {/* Courses<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg> */}
                 <select>
                <option>Courses</option>
                <option>AWS</option>
                <option>Full Stack</option>
            </select> </div>
                    <div className="flex">
                        Programs<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                    <div>
                        Projects
                    </div>
                    <div className="flex">
                        careerSupport
                    </div>
                    <div>
                        signin
                    </div>
                    
                    <div>
                        <button className=" bg-green-500 w-40 rounded-full py-3 px-6 text-white float-left">GetSkilled</button>
                    </div>
                </div>
            </div>
            <div style={{ height: 500 }} className="">
                <div style={{ color: "#0D3900" }} className="text-4xl font-semibold p-10">
                    Better, Faster and Stronger with the<br /> Futuristic DevOps Careers
                </div>
                <div style={{ color: "#0D3900" }}>
                    Get hold of the modern software development and operations approach which <br />allows faster build of products and smarter maintenance of deployments.<br/>
                </div>
                <div>
                    <button  className="bg-green-500 w-56 rounded-full text-white mt-6 ">which career is right for me</button>
                </div>
                <div style={{borderwidth:3} } className=""></div>
                <img className="-mt-56" src="assests/logo3.png" alt="logo" />
            </div>
            <div className="-mt-8">
<img className="w-screen" style={{height:500}} src="assests/logo2.png" alt="logo" />
</div>
<div>
            <div><img className="ml-12 w-1/2" src="assests/logo1.png" alt="logo" /></div>
            <div className="flex justify-center gap-5 float-right mr-96 -mt-80">
                <div class="border-r-4 h-16 border-green-600  "></div>
                <div className="font-bold text-2xl">
                    DevOps skills lead to<br /> Competitive Salaries
                </div>
            </div>
            <div style={{color:"#515151"}} className="text-lg font-lg -mt-64 -mr-96 mx-44 p-4">
            On average, jobs with Salesforce skills<br/> pay around INR 36 LPA per year
            </div>

        </div>
           
                   </div>
    )
}

export default Navbar;