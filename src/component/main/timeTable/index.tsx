import * as S from "./style";
import { FC, useEffect } from "react";
import { Grade, Class, Date, Period } from "../../../constants/main";
import { getTimetableList } from "../../../utils/apis/timetable";
import { useQueryClient, UseQueryResult } from "react-query";
import { AxiosResponse } from "axios";
import { ff } from "../../../utils/apis/timetable/type";

interface PropsType {
  data: any;
}

const TimeTable: FC<PropsType> = ({ data: queryData }) => {
  const { data } = queryData;
  console.log(data?.data.timetable_list);
  const queryClient = useQueryClient();

  useEffect(() => {
    // queryClient.invalidateQueries(["timetable"]);
    // onSuccess(data) {
    //   queryClient.invalidateQueries({ queryKey: [DIARY_KEY] });
    // },
    console.log(1);
  }, []);

  return (
    <S.Container>
      <S.Day>
        {Date.map((item, index) => {
          return <span key={index}>{item.value}</span>;
        })}
      </S.Day>
      <S.Table>
        <table>
          <tbody>
            <tr>
              {Period.map((item, index) => {
                return <td key={index}>{item.value}</td>;
              })}
            </tr>
            <tr>
              <td>창체</td>
              <td>운건</td>
              <td>영어</td>
              <td>성직</td>
              <td>운체</td>
              <td>운건</td>
              <td>데베</td>
            </tr>
            <tr>
              <td>수학</td>
              <td>성직</td>
              <td>한국사</td>
              <td>데베</td>
              <td>영어</td>
              <td>한국사</td>
              <td>운체</td>
            </tr>
            <tr>
              <td>문학</td>
              <td>운체</td>
              <td>데베</td>
              <td>한국사</td>
              <td>수학</td>
              <td>자바</td>
              <td>자바</td>
            </tr>
            <tr>
              <td>자바</td>
              <td>자바</td>
              <td>수학</td>
              <td>문학</td>
              <td>운체</td>
              <td>창체</td>
              <td>창체</td>
            </tr>
            <tr>
              <td>영어</td>
              <td>빅분</td>
              <td>빅분</td>
              <td>빅분</td>
              <td>데베</td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </S.Table>
    </S.Container>
  );
};

export default TimeTable;
