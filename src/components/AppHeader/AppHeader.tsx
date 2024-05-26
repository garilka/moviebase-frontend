import { NotificationBox } from '../NotificationBox/NotificationBox';
import { SearchBar } from '../SearchBar/SearchBar';
import * as S from './AppHeaderStyles';

type AppHeaderProps = {
  notification?: string;
};

export const AppHeader: React.FC<AppHeaderProps> = ({ notification }) => {
  return (
    <S.AppHeaderContainer>
      <SearchBar />
      {notification && <NotificationBox info={notification} />}
    </S.AppHeaderContainer>
  );
};
