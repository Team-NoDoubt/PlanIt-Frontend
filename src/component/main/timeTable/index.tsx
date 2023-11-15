import * as S from "./style";
import { Date, Period } from "../../../constants/main";
import { TimetableListResponse } from "../../../utils/apis/timetables/type";
import { SubjectMap } from "../../../constants/type";

interface PropsType {
  data: TimetableListResponse;
}

const TimeTable = ({ data }: PropsType) => {
  return (
    <>
      <S.Day>
        {Date.map((item, index) => {
          return <span key={index}>{item.value}</span>;
        })}
      </S.Day>
      <S.Table>
        <tbody>
          <tr>
            {Period.map((item, index) => {
              return <td key={index}>{item.value}</td>;
            })}
          </tr>
          {Date.map((item, index) => {
            const day = item.key;
            return (
              <tr key={index}>
                {data?.timetable_list.map((item, index) => {
                  if (day === item.week_of_date) {
                    return <td key={index}>{SubjectMap.get(item.subject)}</td>;
                  }
                })}
              </tr>
            );
          })}
        </tbody>
      </S.Table>
    </>
  );
};

export default TimeTable;
