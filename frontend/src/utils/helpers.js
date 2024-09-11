function convertInputDateToJalali(date) {
  let isoFormat = new Date(date);
  let faFormat = new Date(isoFormat).toLocaleDateString("fa-IR");
  let faYear = faFormat.slice(0, 4);
  let monthFormat = new Intl.DateTimeFormat("fa", { month: "long" });
  let faMonth = monthFormat.format(new Date(date));
  let faDay = faFormat.slice(-2);
  if (faDay.includes("/")) {
    faDay = faFormat.slice(-1);
  }
  return { year: faYear, month: faMonth, day: faDay };
}

function getTextFromHtml(htmlString) {
  const tempElement = document.createElement("div");
  tempElement.innerHTML = htmlString;
  return tempElement.innerText || tempElement.textContent;
}

export { convertInputDateToJalali, getTextFromHtml };
