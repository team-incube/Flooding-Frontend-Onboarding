import Header from "@/widgets/header/ui/index";
import ChairSection from "@/widgets/chair/ui/ChairSection";
import StudySection from "@/widgets/study/ui/StudySection";
import DormitoryMusicSection from "@/features/dormitoryMusic/ui/DormitoryMusicSection";

export default function DormitoryPage() {
    return (
        <div className="min-h-screen bg-[#F4F4F4]">
            <Header/>
            <div className="flex flex-col w-full pt-[30px] pb-[92px] px-4 gap-10">
                <StudySection/>
                <ChairSection/>
                <DormitoryMusicSection/>
            </div>
        </div>
    );
}