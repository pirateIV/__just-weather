const date = new Date();
const day = date.getDate();

const monthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec',
];
const month = monthNames[date.getMonth()];
const weekday = new Intl.DateTimeFormat('en-US', { weekday: 'short' }).format(date);

function getOrdinalSuffix(day) {
  if (day >= 11 && day <= 13) {
    return 'th';
  }
  switch (day % 10) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
}

const currentDate = `${day}${getOrdinalSuffix(day)} ${month}, ${weekday}`;
export default currentDate;
