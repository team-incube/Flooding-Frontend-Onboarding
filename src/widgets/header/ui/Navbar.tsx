import Flooding from "@/shared/assets/icons/Flooding"
import Club from "@/shared/assets/icons/Club"
import Homebase from "@/shared/assets/icons/Hombase"
import Dormitory from "@/shared/assets/icons/Dormitory"
import Attendance from "@/shared/assets/icons/Attendance"
import Notification from "@/shared/assets/icons/Notification"

export default function Navbar(){
    return (
        <div className="fixed w-full h-[150px] bg-[#5E7EF3] flex flex-col justify-center">
        <div className="flex flex-col max-w-[1360px] mx-4 gap-7">
            <div className="flex justify-between items-center">
            <a href="/">
                <Flooding/>
            </a>
            <div className="flex gap-6 text-[#D3D3D3] text-[20px] font-semibold">
                <div className="flex gap-2 hover:text-white cursor-pointer">
                <Notification/>
                <span>공지</span>
                </div>
                <div className="flex gap-2 hover:text-white cursor-pointer">
                <span className="bg-[#D3D3D3] w-7 h-7 rounded-full"/>
                <span>이름</span>
                </div>
            </div>
            </div>
            <div className="flex text-[20px] font-semibold text-[#D3D3D3] gap-10">
            <div className="flex justify-center items-center gap-3 hover:text-white cursor-pointer">
                <Dormitory/>
                <span>기숙사</span> 
            </div>
            <div className="flex justify-center items-center gap-3 hover:text-white cursor-pointer">
                <Homebase/>
                <span>홈베이스</span> 
            </div>         
            <div className="flex justify-center items-center gap-3 hover:text-white cursor-pointer">
                <Club/>
                <span>동아리</span> 
            </div>
            <div className="flex justify-center items-center gap-3 hover:text-white cursor-pointer">
                <Attendance/>
                <span>출결</span> 
            </div>                     
            </div>
        </div>
        </div>
    )
}