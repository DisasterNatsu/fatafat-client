export const DateFormatter = ({ current, date }: DateFormatterProps) => {
  let currentDate = new Date();

  // Extract day, month, and year
  let day: string | number = currentDate.getDate();
  let month: string | number = currentDate.getMonth(); // Note: January is 0!
  let year = currentDate.getFullYear();

  const monthAbbreviations: string[] = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const bengaliNumerals: string[] = [
    "০",
    "১",
    "২",
    "৩",
    "৪",
    "৫",
    "৬",
    "৭",
    "৮",
    "৯",
  ];

  const bengaliMonthNames: string[] = [
    "জানুয়ারী",
    "ফেব্রুয়ারী",
    "মার্চ",
    "এপ্রিল",
    "মে",
    "জুন",
    "জুলাই",
    "অগাস্ট",
    "সেপ্টেম্বর",
    "অক্টোবর",
    "নভেম্বর",
    "ডিসেম্বর",
  ];

  if (day < 10) {
    day = "0" + day;
  }

  // english

  const monthAbbreviation: string = monthAbbreviations[month];

  const formattedDate = `${day}-${monthAbbreviation}-${year}`;

  // bengali
  // day

  let bengaliDay: string = day
    .toString()
    .split("")
    .map((digit: string) => bengaliNumerals[parseInt(digit)])
    .join("");

  // month

  let bengaliMonthName = bengaliMonthNames[month];

  // year

  let bengaliYear: string = year
    .toString()
    .split("")
    .map((digit: string) => bengaliNumerals[parseInt(digit)])
    .join("");

  const formattedDateBengali: string = `${bengaliDay}-${bengaliMonthName}-${bengaliYear}`;

  return { formattedDate, formattedDateBengali };
};
