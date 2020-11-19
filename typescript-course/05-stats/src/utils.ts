export const dateStringToDate = (dateString: string): Date => {
  const [day, month, year] = dateString
    .split('/')
    .map((el: string): number => parseInt(el));

  return new Date(day, month - 1, year);
};
