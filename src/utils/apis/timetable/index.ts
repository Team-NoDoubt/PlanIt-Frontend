import { useQuery, useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { instance } from "../index";
import {
  TimetableListResponse,
  PlanWriteType,
  SubjectInquiryResponse,
} from "./type";

const router = "/timetables";

export const getTimetableList = (
  timetableGrade: number,
  timetableClass: number
) => {
  return useQuery(
    ["timetable", timetableGrade, timetableClass],
    async () => {
      const { data } = await instance.get<TimetableListResponse>(
        `${router}?grade=${timetableGrade}&class=${timetableClass}`
      );
      return data;
    },
    { refetchOnWindowFocus: true }
  );
};

export const subjectInquiry = (
  weekOfDate: string,
  period: string,
  gradeClass: string
) => {
  return useQuery(["subject", weekOfDate, period, gradeClass], async () => {
    const [grade, classes] = gradeClass.split("-");
    console.log(gradeClass);
    const date = new Date(weekOfDate).getDay();
    const { data } = await instance.get<SubjectInquiryResponse>(
      `${router}/semester?week-of-date=${date}&period=${period}&grade=${grade}&class=${classes}`
    );
    return data;
  });
};

export const postPlanWrite = (data: PlanWriteType) => {
  return useMutation(async () => instance.post(`${router}/timetables`, data), {
    onSuccess: () => {
      toast.success("계획서 작성이 완료되었습니다.");
    },
    onError: (err: AxiosError<AxiosError>) => {
      if (err.response) {
        switch (err.response.status) {
        }
      }
    },
  });
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
