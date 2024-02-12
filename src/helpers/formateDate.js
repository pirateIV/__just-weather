const date = new Date();
const day = date.getDay();

const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
const month = monthNames[date.getMonth()];
const weekday = new Intl.DateTimeFormat('en-US', { weekday: 'short' }).format(date);
