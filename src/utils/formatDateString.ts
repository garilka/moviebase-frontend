import { format, parseISO } from 'date-fns';
import { isNil } from 'lodash';

export const formatDateString = (dateString: string): string => {
  if (isNil(dateString)) return '';

  const parsedDate = parseISO(dateString);
  const formattedDate = format(parsedDate, 'yyyy.MM.dd.');

  return formattedDate;
};
