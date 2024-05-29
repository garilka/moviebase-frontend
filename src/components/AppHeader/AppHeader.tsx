import { useMemo } from 'react';
import { NotificationBox } from '../NotificationBox/NotificationBox';
import { SearchBar } from '../SearchBar/SearchBar';
import * as S from './AppHeaderStyles';

type AppHeaderProps = {
  message?: string;
  isLoading: boolean;
  isError: boolean;
};

export const AppHeader: React.FC<AppHeaderProps> = ({ message, isLoading, isError }) => {
  const hasNotification = useMemo(() => {
    return message || isLoading || isError;
  }, [message, isLoading, isError]);

  return (
    <S.AppHeaderContainer>
      <SearchBar />
      {hasNotification && <NotificationBox message={message} isLoading={isLoading} isError={isError} />}
    </S.AppHeaderContainer>
  );
};
