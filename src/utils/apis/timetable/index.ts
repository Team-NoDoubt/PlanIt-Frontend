import { useMutation, useQuery, useQueryClient } from "react-query";
import { instance } from "../index";
import { TimetableListResponse } from "./type";

const router = "/timetable";

// export const getTimetableList = (t1: number, t2: number) => {
//   const queryClient = useQueryClient();
//   const response = async () => {
//     const params = {
//       grade: t1,
//       class: t2,
//     };
//     return await instance.get<TimetableListResponse>(`${router}`, { params });
//   };
//   return useQuery(["timetable"], response, {
//     onSuccess: () => console.log(1234),
//   });
// };

export const getTimetableList = (t1: number, t2: number) => {
  return useQuery(
    ["timetable", t1, t2],
    async () => {
      const { data } = await instance.get<Promise<TimetableListResponse>>(
        `${router}?grade=${t1}&class=${t2}`
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
