import { useQuery } from "@tanstack/react-query";
import { instance } from "../index";
import { TimetableListResponse, ChangeClassResponse } from "./type";

const router = "/timetables";

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

export const getChangeDetailsList = (grade: number, classNum: number) => {
  return useQuery(["ChangeDetailsList", grade, classNum], async () => {
    const { data } = await instance.get<ChangeClassResponse>(
      `${router}/changed?grade=${grade}&class=${classNum}`
    );
    return data;
  });
};
