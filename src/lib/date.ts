export const formatDate = (dateStr: string) => {
  return new Intl.DateTimeFormat("en-GB").format(new Date(dateStr));
};
