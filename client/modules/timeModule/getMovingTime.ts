function getMovingTime(durationTime: number): string {
  const hour: string = (durationTime / 60).toFixed();
  let minute: string = (durationTime % 60).toFixed();

  if (minute.length === 1) minute += "0";

  if (Number(hour) === 0) return `${minute}분`;

  return `${hour}시간 ${minute}분`;
}

export default getMovingTime;
