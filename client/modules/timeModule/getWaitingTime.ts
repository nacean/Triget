import getMovingTime from "./getMovingTime";

function getWaitingTime(startTime: string, endTime: string) {
  const startDate = new Date(startTime);
  const endDate = new Date(endTime);

  const diffTime: number =
    (endDate.getTime() - startDate.getTime()) / 1000 / 60;

  const durationTime: string = getMovingTime(diffTime);

  return durationTime;
}

export default getWaitingTime;
