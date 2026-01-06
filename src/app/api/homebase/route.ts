import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

interface SaveData {
  floor: string;
  classTime: string;
  table: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: SaveData = await req.json();

    const response = await axios.post(
      "http://localhost:3001/homebases",
      {
        floor: body.floor,
        classTime: body.classTime,
        table: body.table,
        timestamp: new Date().toISOString(),
      }
    );

    return NextResponse.json(
      {
        success: true,
        message: "테이블이 저장되었습니다.",
        data: response.data,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("테이블 저장 중 오류:", error);
    return NextResponse.json(
      {
        success: false,
        message: "테이블 저장에 실패했습니다.",
      },
      { status: 500 }
    );
  }
}
