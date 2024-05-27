import { NotificationBox } from '../NotificationBox/NotificationBox';
import { SearchBar } from '../SearchBar/SearchBar';
import * as S from './AppHeaderStyles';

type AppHeaderProps = {
  notification?: string;
  onSearchButtonClick: (search: string, page: number) => Promise<void>;
};

export const AppHeader: React.FC<AppHeaderProps> = ({ notification, onSearchButtonClick }) => {
  return (
    <S.AppHeaderContainer>
      <SearchBar onClick={onSearchButtonClick} />
      {notification && <NotificationBox info={notification} />}
    </S.AppHeaderContainer>
  );
};
