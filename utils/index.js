export function calculateDifferenceTimeInPersian(date) {
  let d1 = new Date(date);
  let d2 = new Date();
  let diff = d2.getTime() - d1.getTime();

  let daydiff = diff / (1000 * 60 * 60 * 24);

  const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

  return Math.round(daydiff)
    .toString()
    .replace(/\d/g, (x) => farsiDigits[x]);
}

export function convertToPersian(number) {
  const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

  if (number !== undefined && number !== null) {
    return number.toString().replace(/\d/g, (x) => farsiDigits[x]);
  } else {
    return "";
  }
}

export function convertToEnglish(number) {
  const persianNumbers = [
    /۰/g,
    /۱/g,
    /۲/g,
    /۳/g,
    /۴/g,
    /۵/g,
    /۶/g,
    /۷/g,
    /۸/g,
    /۹/g,
  ];
  const arabicNumbers = [
    /٠/g,
    /١/g,
    /٢/g,
    /٣/g,
    /٤/g,
    /٥/g,
    /٦/g,
    /٧/g,
    /٨/g,
    /٩/g,
  ];

  if (number !== undefined) {
    if (typeof number === "string") {
      for (var i = 0; i < 10; i++) {
        number = number
          .replace(persianNumbers[i], i)
          .replace(arabicNumbers[i], i);
      }
    }
    return number;
  } else {
    return "";
  }
}

export function calculateDifferenceTime(date) {
  let d1 = new Date(date);
  let d2 = new Date();
  let diff = d2.getTime() - d1.getTime();

  let daydiff = diff / (1000 * 60 * 60 * 24);

  return Math.floor(daydiff);
}

export function ChangeToPersianDate(dateStr) {
  const date = new Date(dateStr);
  const persianDate = date.toLocaleDateString("fa-IR", {
    year: "numeric",
    month: "numeric",
  });

  return persianDate;
}

export function getDateTimeFormatted(date) {
  const now = new Date(date);

  // Extract date components
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");

  // Extract time components
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");

  // Format the date and time
  const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}`;

  return formattedDateTime;
}
