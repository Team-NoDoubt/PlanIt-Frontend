import * as S from "./style";
import { FC, useEffect } from "react";
import { Grade, Class, Date, Period } from "../../../constants/main";
import { AxiosResponse } from "axios";
import { TimetableListResponse } from "../../../utils/apis/timetable/type";
import { SubjectMap } from "../../../constants/type";
import { UseQueryResult } from "react-query";

interface PropsType {
  data: TimetableListResponse;
}

const TimeTable: FC<PropsType> = ({ data: data }: PropsType) => {
  return (
    <S.Container>
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
    </S.Container>
  );
};

export default TimeTable;
