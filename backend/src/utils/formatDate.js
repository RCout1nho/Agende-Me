function formatDate(date) {
  let day = "";
  const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
  let month = "";
  let bar = date.length;
  for (var i = 0; i < date.length; i++) {
    if (date[i] === '/') {
      bar = i;
    }
    if (i < bar) {
      day += date[i];
    } else {
      if (i > bar) {
        month += date[i];
        ;
      }
    }
  }

  const Date = {
    day,
    month: String(months[Number(month) - 1])
  }

  return Date;
}

module.exports = formatDate;