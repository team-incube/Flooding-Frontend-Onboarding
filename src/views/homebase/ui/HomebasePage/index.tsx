import Header from "@/widgets/header/ui";

export default function HomebasePage() {
  return (
    <div className="min-h-screen bg-[#F8F9FB]">
      <Header />
      <div className="max-w-[1500px] mx-auto px-9 py-9 flex gap-9">
        <div className="w-64 bg-white rounded-lg p-6 h-fit">
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-[#333D48] mb-4">층수</h3>
            <div className="space-y-2">
              <div className="px-3 py-2 border border-[#E0E4E9] rounded text-sm text-[#666666]">
                2층
              </div>
              <div className="px-3 py-2 border border-[#E0E4E9] rounded text-sm text-[#666666] flex justify-between items-center">
                <span>3층</span>
                <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">Full</span>
              </div>
              <div className="px-3 py-2 border border-[#E0E4E9] rounded text-sm text-[#666666]">
                4층
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[#333D48] mb-4">교시</h3>
            <div className="grid grid-cols-2 gap-2">
              <button className="px-3 py-2 border border-[#E0E4E9] rounded text-sm text-[#666666] hover:bg-gray-50">
                8교시
              </button>
              <button className="px-3 py-2 border border-[#E0E4E9] rounded text-sm text-[#666666] hover:bg-gray-50">
                9교시
              </button>
              <button className="px-3 py-2 border border-[#E0E4E9] rounded text-sm text-[#666666] hover:bg-gray-50">
                10교시
              </button>
              <button className="px-3 py-2 border border-[#E0E4E9] rounded text-sm text-[#666666] hover:bg-gray-50">
                11교시
              </button>
            </div>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center bg-white rounded-lg">
          <div className="text-center">
            <p className="text-[#999999] text-sm">층수와 교시를 선택해주세요.</p>
          </div>
        </div>

        <div className="w-64 flex items-center justify-center bg-white rounded-lg">
          <div className="text-center">
            <p className="text-[#999999] text-sm">테이블을 선택해주세요.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
