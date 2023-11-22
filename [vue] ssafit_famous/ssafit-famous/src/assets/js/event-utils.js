// 초기값 -> 현재 스터디 일정 싱테 불러와
let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: '스터디 이름',
    start: todayStr
  }
]

export function createEventId() {
  return String(eventGuid++)
}
