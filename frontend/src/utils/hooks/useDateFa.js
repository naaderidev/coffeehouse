export default function useDateFa(customDate) {
  const todayFa = {
    day: getDateFormat(customDate, { day: "2-digit" }),
    month: getDateFormat(customDate, { month: "numeric" }),
    monthTitle: getDateFormat(customDate, { month: "long" }),
    year: getDateFormat(customDate, { year: "numeric" }),
    dayWeek: getDateFormat(customDate, { weekday: "long" }),
  };

  function getDateFormat(uDate, option) {
    let date = new Intl.DateTimeFormat("fa-IR", option).format(uDate);
    return date;
  }
  return todayFa;
}
