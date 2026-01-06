"use server";

import axios from "axios";

const API_BASE_URL = process.env.API_BASE_URL || "http://localhost:3001";

interface FloorData {
  floor: string;
  classTime: string;
  table: string;
  timestamp: string;
}

interface ApiResponse {
  success: boolean;
  message: string;
  data?: FloorData;
}

export async function saveFloorSelection(
  floor: string,
  classTime: string,
  table: string
): Promise<ApiResponse> {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/homebases`,
      {
        floor,
        classTime,
        table,
        timestamp: new Date().toISOString(),
      }
    );

    return {
      success: true,
      message: "층 선택이 저장되었습니다.",
      data: response.data,
    };
  } catch (error) {
    console.error("층 선택 저장 중 오류:", error);
    return {
      success: false,
      message: "층 선택 저장에 실패했습니다.",
    };
  }
}

export async function fetchFloorTableData(floor: string): Promise<ApiResponse> {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/floors/${floor}/tables`
    );

    return {
      success: true,
      message: "테이블 데이터를 조회했습니다.",
      data: response.data,
    };
  } catch (error) {
    console.error("테이블 데이터 조회 중 오류:", error);
    return {
      success: false,
      message: "테이블 데이터 조회에 실패했습니다.",
    };
  }
}
