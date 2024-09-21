const formatDate = (timestamp: Date, withoutTime?: boolean) => {
  const date = new Date(timestamp);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-based
  const year = date.getFullYear();
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');

  const time = `${hours}:${minutes}`;
  return `${day}/${month}/${year}${withoutTime ? '' : ` ${time}`}`;
};

export default formatDate;
