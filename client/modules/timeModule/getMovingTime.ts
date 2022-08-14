function getMovingTime(durationTime: number): string {
  const hour: string = (durationTime / 60).toFixed();
  const minute: string = (durationTime % 60).toFixed();

  if (Number(hour) === 0) return `${minute}분`;

  return `${hour}시간 ${minute}분`;
}

export default getMovingTime;
