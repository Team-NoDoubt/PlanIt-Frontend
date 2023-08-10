import ChangeClass from "./classChange";
import TimeTable from "./timeTable";
import * as S from "./style";

const Main = () => {
  return (
    <>
      <S.Container>
        <TimeTable />
        <ChangeClass />
      </S.Container>
    </>
  );
};

export default Main;
