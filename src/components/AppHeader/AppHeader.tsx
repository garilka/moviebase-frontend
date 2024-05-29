import { NotificationBox } from '../NotificationBox/NotificationBox';
import { SearchBar } from '../SearchBar/SearchBar';
import * as S from './AppHeaderStyles';

type AppHeaderProps = {
  message?: string;
  isLoading: boolean;
  isError: boolean;
  onSearchButtonClick: (search: string, page: number) => Promise<void>;
};

export const AppHeader: React.FC<AppHeaderProps> = ({ message, isLoading, isError, onSearchButtonClick }) => {
  return (
    <S.AppHeaderContainer>
      <SearchBar onClick={onSearchButtonClick} />
      <NotificationBox message={message} isLoading={isLoading} isError={isError} />
    </S.AppHeaderContainer>
  );
};
