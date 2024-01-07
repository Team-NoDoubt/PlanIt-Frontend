import { useState } from 'react';
import Sidebar from './sidebar';
import SentChangeRequest from './sentChangeRequest';
import * as S from './style';
import TakeChangeRequest from './takeChangeRequest';

const TimetableManagement = () => {
  const [selectTab, setSelectTab] = useState(true);
  return (
    <S.Container>
      <Sidebar selectTab={selectTab} setSelectTab={setSelectTab} />
      {selectTab ? <TakeChangeRequest /> : <SentChangeRequest />}
    </S.Container>
  );
};

export default TimetableManagement;
