export const parseDate = date => {
  const dateObject = new Date(date);
  const year = dateObject.getFullYear();
  const month = dateObject.getMonth() + 1;
  const day = dateObject.getDate();
  return `${day.toString().padStart(2, '0')}.${month
    .toString()
    .padStart(2, '0')}.${year}`;
};
