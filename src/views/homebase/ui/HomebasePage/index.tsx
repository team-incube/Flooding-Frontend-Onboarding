import Header from "@/widgets/header/ui";

export default function HomebasePage() {
  return (
    <div className="min-h-screen bg-[#F8F9FB]">
      <Header />
      <div className="max-w-[1500px] mx-auto px-10 py-8 flex gap-8">
        <div className="w-80 bg-white rounded-2xl p-7 h-fit">
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-[#333D48] mb-6">층수</h3>
            <div className="space-y-5">
              <div className="px-5 py-4 border border-[#D1D8DE] rounded-lg text-md text-[#333D48]">
                2층
              </div>
              <div className="px-5 py-4 border border-[#D1D8DE] rounded-lg text-md text-[#333D48] flex justify-between items-center">
                <span>3층</span>
                <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">Full</span>
              </div>
              <div className="px-5 py-4 border border-[#D1D8DE] rounded-lg text-md text-[#333D48]">
                4층
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#333D48] mb-6">교시</h3>
            <div className="grid grid-cols-2 gap-2">
              <button className="px-5 py-4 border border-[#D1D8DE] rounded-lg text-md text-[#333D48] hover:bg-gray-50">
                8교시
              </button>
              <button className="px-5 py-4 border border-[#D1D8DE] rounded-lg text-md text-[#333D48] hover:bg-gray-50">
                9교시
              </button>
              <button className="px-5 py-4 border border-[#D1D8DE] rounded-lg text-md text-[#333D48] hover:bg-gray-50">
                10교시
              </button>
              <button className="px-5 py-4 border border-[#D1D8DE] rounded-lg text-md text-[#333D48] hover:bg-gray-50">
                11교시
              </button>
            </div>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center bg-white rounded-2xl">
          <div className="text-center">
            <p className="text-[#999999] text-sm">층수와 교시를 선택해주세요.</p>
          </div>
        </div>

        <div className="w-80 flex items-center justify-center bg-white rounded-2xl">
          <div className="text-center">
            <p className="text-[#999999] text-sm">테이블을 선택해주세요.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
