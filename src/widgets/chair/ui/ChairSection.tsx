import Chairicon from "@/shared/assets/icons/Chair"
import Warning from "@/shared/assets/icons/Warning"

export default function Chair(){
    return (
        <div className="flex flex-col gap-6">
            <header>
                <div className="flex items-center gap-4">
                <Chairicon/>
                <span className="font-semibold text-[24px] text-black mobile:text-body2B">안마의자 신청</span>              
                </div>
            </header>
            <div className="flex justify-center items-center bg-white h-[182px] rounded-lg py-7 px-6">
                <div className="flex items-center gap-3">
                <Warning />
                <span className="text-[28px] text-[#A7A7A7]">신청자가 없습니다</span>
                </div>
            </div>
            <footer className="flex justify-end gap-10">
                <div className="flex items-center text-[24px] font-semibold gap-6">
                <Chairicon/>
                <p>0/5</p>
                </div>
                <button className="bg-[#A7A7A7] text-white text-[20px] font-semibold rounded-lg p-4 w-[422px]">
                20시 00분 시작
                </button>
            </footer>
        </div>
    )
}