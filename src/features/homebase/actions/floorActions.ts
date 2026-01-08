"use server";

import axios from "axios";

const API_BASE_URL = process.env.API_BASE_URL || "http://localhost:3001";

export interface FloorData {
  id?: string;
  floor: string;
  classTime: string;
  table: string;
  timestamp: string;
  members?: string[];
  reason?: string;
}

interface ApiResponse {
  success: boolean;
  message: string;
  data?: FloorData;
}

interface ApplyPayload {
  floor: string;
  classTime: string;
  table: string;
  members: string[];
  reason: string;
}

export async function saveFloorSelection(
  floor: string,
  classTime: string,
  table: string
): Promise<ApiResponse> {
  try {
    const response = await axios.post<FloorData>(`${API_BASE_URL}/homebases`, {
      floor,
      classTime,
      table,
      timestamp: new Date().toISOString(),
    });

    return {
      success: true,
      message: "층 선택이 저장되었습니다.",
      data: response.data,
    };
  } catch {
    return {
      success: false,
      message: "층 선택 저장에 실패했습니다.",
    };
  }
}

export async function fetchFloorTableData(floor: string): Promise<ApiResponse> {
  try {
    const response = await axios.get<FloorData[]>(
      `${API_BASE_URL}/floors/${floor}/tables`
    );

    return {
      success: true,
      message: "테이블 데이터를 조회했습니다.",
      data: response.data[0],
    };
  } catch {
    return {
      success: false,
      message: "테이블 데이터 조회에 실패했습니다.",
    };
  }
}

export async function applyHomebase(payload: ApplyPayload) {
  try {
    const response = await axios.post<FloorData>(`${API_BASE_URL}/homebases`, {
      floor: payload.floor,
      classTime: payload.classTime,
      table: payload.table,
      members: payload.members,
      reason: payload.reason,
      timestamp: new Date().toISOString(),
    });

    return {
      success: true,
      data: response.data,
    };
  } catch {
    return {
      success: false,
      message: "홈베이스 신청에 실패했습니다.",
    };
  }
}

export async function fetchAppliedTables(
  floor: string,
  classTime: string
): Promise<string[]> {
  try {
    const res = await axios.get<FloorData[]>(`${API_BASE_URL}/homebases`);

    return res.data
      .filter(
        (item) =>
          item.floor === floor &&
          item.classTime === classTime &&
          Array.isArray(item.members) &&
          item.members.length > 0 &&
          item.reason
      )
      .map((item) => item.table);
  } catch {
    return [];
  }
}

export interface Student {
  id: string;
  name: string;
}

export async function fetchStudents(): Promise<Student[]> {
  try {
    const response = await axios.get<Student[]>(`${API_BASE_URL}/students`);
    return response.data;
  } catch {
    return [];
  }
}

export async function saveTableSelection(
  floor: string,
  classTime: string,
  table: string
) {
  try {
    await axios.post(`${API_BASE_URL}/homebases`, {
      floor,
      classTime,
      table,
      timestamp: new Date().toISOString(),
    });

    return { success: true };
  } catch {
    return { success: false };
  }
}

export interface Seat {
  id: number;
  floor: number;
  seatNumber: number;
  isOccupied: boolean;
  occupiedBy: string | null;
  reason: string | null;
}

export async function applySeat(
  floor: number,
  seatNumber: number,
  occupiedBy: string,
  reason: string
): Promise<{ success: boolean; data?: Seat }> {
  try {
    const response = await axios.post<Seat>(`${API_BASE_URL}/seats`, {
      floor,
      seatNumber,
      isOccupied: true,
      occupiedBy,
      reason,
    });

    return {
      success: true,
      data: response.data,
    };
  } catch {
    return {
      success: false,
    };
  }
}

export async function fetchSeats(floor: number): Promise<Seat[]> {
  try {
    const response = await axios.get<Seat[]>(
      `${API_BASE_URL}/seats?floor=${floor}`
    );
    return response.data;
  } catch {
    return [];
  }
}

export async function releaseSeat(id: number): Promise<{ success: boolean }> {
  try {
    await axios.patch(`${API_BASE_URL}/seats/${id}`, {
      isOccupied: false,
      occupiedBy: null,
      reason: null,
    });
    return { success: true };
  } catch {
    return { success: false };
  }
}