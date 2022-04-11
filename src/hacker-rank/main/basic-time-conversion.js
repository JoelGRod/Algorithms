/**
 * Time Conversion
 * Given a time in 12-hour AM/PM format, convert it
 * to military (24-hour) time.
 * Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
 * - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
 *
 * Sample Input
 * 07:05:45PM
 * Sample Output
 * 19:05:45
 */

function timeConversion(s) {
  // Write your code here
  const formatted = s.includes("AM")
    ? s.replace(/AM/, " AM")
    : s.replace(/PM/, " PM");

  let [hours, minutes, secondsAndModifier] = formatted.split(":");
  const [seconds, modifier] = secondsAndModifier.split(" ");

  if (hours === "12") hours = "00";
  if (modifier === "PM") hours = parseInt(hours) + 12;

  return `${hours}:${minutes}:${seconds}`;
}
