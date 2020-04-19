export default function getSchedules() {
  let schedules = [];
  for (var i = 8; i <= 21; i++) {
    schedules.push({ value: String(i + ':00') });
  }

  return schedules;
}