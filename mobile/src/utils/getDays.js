export default function getDays() {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth();
  let days = [];
  let QntDaysMonth = [31, month % 4 == 0 ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31, 30, 31];

  let CurDay = day;
  let CurMonth = month;

  for (var i = 0; i < 7; i++) {
    days.push({ value: String(CurDay + '/' + String(CurMonth + 1)) });

    CurDay++;

    if (CurDay > QntDaysMonth[month]) {
      CurDay = 1;
      CurMonth++;
    }
  }

  return days;
}