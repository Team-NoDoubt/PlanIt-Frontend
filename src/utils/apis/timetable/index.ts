import { useQuery } from "@tanstack/react-query";
import { instance } from "../index";
import { TimetableList, ChangeDetailsList, ff } from "./type";

const router = "/timetable";

export const getTimetableList = (t1: number, t2: number) => {
  const response = async () => {
    const params = {
      grade: t1,
      class: t2,
    };
    return await instance.get<ff>(`${router}`, { params });
  };
  return useQuery(["timetable"], response);
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
