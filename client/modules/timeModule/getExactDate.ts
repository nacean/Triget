/** 시간포멧을 넘길 시 한글로 맞는 날짜(년/월/일) 제공 */
function getExactDate(flightTime: string): string {
  const year: string = flightTime.substring(0, 4);
  const month: string = flightTime.substring(5, 7);
  const day: string = flightTime.substring(8, 10);

  return `${year}년 ${month}월 ${day}일`;
}

export default getExactDate;
