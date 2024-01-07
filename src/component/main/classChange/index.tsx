import { ChangeIcon } from '../../../assets/icons';
import { SubjectMap } from '../../../constants/type';
import { ChangeClassResponse } from '../../../utils/apis/timetables/type';
import * as S from './style';

interface PropsType {
  data: ChangeClassResponse;
}

const ClassChange = ({ data }: PropsType) => {
  return (
    <S.Container>
      <p>변경된 시간표</p>
      {data?.changed_timetable_list?.map((item, index) => (
        <>
          <S.ClassChangeBox>
            <S.Wrapper key={index}>
              <S.Schedule>
                {item.request_date} {item.request_period}교시
              </S.Schedule>
              <S.Subject>{SubjectMap.get(item.request_subject)}</S.Subject>
              <S.Teacher>{item.request_teacher}</S.Teacher>
            </S.Wrapper>
            <img src={ChangeIcon} />
            <S.Wrapper>
              <S.Schedule>
                {item.changed_date} {item.changed_period}교시
              </S.Schedule>
              <S.Subject>{SubjectMap.get(item.changed_subject)}</S.Subject>
              <S.Teacher>{item.changed_teacher}</S.Teacher>
            </S.Wrapper>
          </S.ClassChangeBox>
        </>
      ))}
    </S.Container>
  );
};

export default ClassChange;
