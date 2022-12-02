export const localeString = (number: number, type: string) => {
  return number?.toLocaleString("en-AU") + ` ${type}`;
};
