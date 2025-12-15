# 온보딩 과제 주제: 짭 플러딩 만들기

온보딩 과제 형식:  **팀 프로젝트**
과제 기간: **12월 17일 ~ 12월 31일**

## 기술 스택
- Next.js
- React
- Tanstack Query
- TypeScript
- Axios
- Tailwind

# 1. 동아리(효은, 강현)
- 실제 플러딩에도 없는 기능이기에 완성도가 높다면 실제 프로덕션 코드에 반영될 수 있는 기회가 될수도..?
- 작업량이 많으므로 작업이 다 끝난 팀원이 있다면 같이 고민하면 좋을 것 같네요.

## 기능 개발
- 동아리 목록 조회
- 동아리 상세 페이지 조회
- 동아리 생성 모달 
- 멤버 초대/강퇴

## 학습 목표
- TanStack Query 데이터 갱신: 데이터 수정 후 invalidateQueries로 목록 데이터 자동 새로고침.
- 낙관적 업데이트 (Optimistic Updates): API 응답을 기다리지 않고 UI에서 즉시 삭제 처리 (실패 시 롤백).
- Dynamic Routes: /clubs/[id] 구조 이해 및 params 활용.

# 2. 기숙사(민아)
- 음악 리스트 조회 시, 미리보기 등의 시각적 요소보다 데이터 흐름에 집중해 주세요.

## 기능 개발
- 음악 리스트 조회
- 음악 좋아요

## 학습 목표
- TanStack Query: useQuery로 데이터를 가져오고 isLoading, isError 상태 처리하기.
- TypeScript Interface: 음악 데이터(Music)의 타입을 ENUM 등을 활용하여 직접 정의해보기.

# 3. 학교(한국, 지유)
- 홈베이스신청 시 불편했던 점을 떠올리며 UX 개선을 시도해봐도 좋을 것 같네요.

## 기능 개발
- 홈베이스 좌석 배치도
- 홈베이스 필터링 
- 홈베이스 신청

## 학습 목표
- Server Actions: 클라이언트의 onClick 이벤트에서 API를 호출하는 Next.js Server Action 함수 구현해보기.
- URL Search Params: 필터링 기능을 URL 쿼리 스트링으로 관리하여 새로고침 해도 유지되게 만들기. 

# 4. 공통(한국, 민아)
- 과제 수행중 사용할 Mock 데이터를 구축합니다. 
- 중요하지 않지만 과제 전반에 사용될 데이터이므로 AI를 이용해 신속하게 구현하는 것이 목표입니다.

## 기능 개발
- JSON-Server로 Mocking DB 만들기
- 예시 데이터
```json
// db.json
{
  "clubs": [
    { "id": 1, "name": "DMS", "description": "기숙사 관리 시스템 개발 동아리", "members": [] },
    { "id": 2, "name": "GRAM", "description": "전공 탐구 동아리", "members": [] }
  ],
  "musics": [
    { "id": 1, "title": "Super Shy", "artist": "NewJeans", "likes": 0 },
    { "id": 2, "title": "ETA", "artist": "NewJeans", "likes": 5 }
  ],
  "homebases": [
    { "id": 1, "floor": 2, "seatNumber": 1, "isOccupied": false, "occupiedBy": null }
  ]
}
```
