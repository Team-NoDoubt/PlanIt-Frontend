import { useQuery } from "react-query";
import { instance } from "../index";
import { TimetableListResponse } from "./type";

const router = "/timetable";

export const getTimetableList = (
  timetableGrade: number,
  timetableClass: number
) => {
  return useQuery(
    ["timetable", timetableGrade, timetableClass],
    async () => {
      const { data } = await instance.get<Promise<TimetableListResponse>>(
        `${router}?grade=${timetableGrade}&class=${timetableClass}`
      );
      return data;
    },
    { refetchOnWindowFocus: true }
  );
};

// export const getChangeDetailsList = async (t1: number, t2: number) => {
//   const params = {
//     grade: t1,
//     class: t2,
//   };
//   return await instance.get<Promise<ChangeDetailsList>>(
//     `${router}/changeDetails`,
//     { params }
//   );
// }; api 나온 후 기능 구현
