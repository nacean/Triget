function getExactTime(flightTime: string): string {
  const hour = Number(flightTime.substring(11, 13));
  const minute = Number(flightTime.substring(14, 16));

  const isAfternoon: boolean = hour >= 12;

  if (isAfternoon) {
    const exactHour: number = hour > 12 ? hour - 12 : hour;
    return `오후 ${exactHour}:${minute}`;
  }
  return `오전 ${hour}:${minute}`;
}

export default getExactTime;
