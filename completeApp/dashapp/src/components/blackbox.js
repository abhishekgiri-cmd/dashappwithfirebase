// how to convert date formate from yyyy-mm-dd to dd-mm-yyyy in react?
function formatDate(date) {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
}

console.log(formatDate("Sun May 11,2014"));

console.log(formatDate("Sun May 11,2014"));

2014 - 05 - 11;
