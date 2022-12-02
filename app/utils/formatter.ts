export const formatter = (value: any) =>
  `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
