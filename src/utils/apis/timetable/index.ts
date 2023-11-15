import { useQuery, useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { instance } from "../index";
import { Cookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

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
    const date = new Date(weekOfDate).getDay();
    const { data } = await instance.get<SubjectInquiryResponse>(
      `${router}/semester?week-of-date=${date}&period=${period}&grade=${grade}&class=${classes}`
    );
    return data;
  });
};

export const postPlanWrite = (data: PlanWriteType) => {
  const navigator = useNavigate();
  const cookies = new Cookies();
  const accessToken = cookies.get("access_token");
  return useMutation(
    async () =>
      await instance.post(`${router}/timetables`, data, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }),
    {
      onSuccess: () => {
        toast.success("계획서 작성이 완료되었습니다.");
        navigator("/SentChangeRequest");
      },
      onError: (err: AxiosError<AxiosError>) => {
        if (err.response) {
          switch (err.response.status) {
            case 400:
              toast.error("잘못된 요청입니다. 입력란을 확인해 주세요.");
              break;
            case 404:
              toast.error("찾을 수 없습니다.");
              break;
            case 409:
              toast.error("이미 작성하신 계획서입니다.");
              break;
            case 429:
              toast.error("요청을 너무 많이 보냈습니다.");
              break;
            case 500:
              toast.error("개발자에게 문의해 주세요.");
              break;
          }
        } else {
          toast.error("개발자에게 문의해 주세요.");
        }
      },
    }
  );
};
