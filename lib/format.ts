// Periods are stored as 24-hour "HH:MM" strings internally (unambiguous for
// sorting/logic). This formats them for display as 12-hour with AM/PM,
// matching how the original timetable was printed (e.g. "1:25 PM").
export function formatTime(time24: string): string {
  const [hStr, mStr] = time24.split(":");
  let h = parseInt(hStr, 10);
  const period = h >= 12 ? "PM" : "AM";
  h = h % 12;
  if (h === 0) h = 12;
  return `${h}:${mStr} ${period}`;
}
