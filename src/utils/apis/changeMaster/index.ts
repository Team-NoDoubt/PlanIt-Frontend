import { useQuery } from "@tanstack/react-query";
import { instance } from "..";
import { replacementClassResponse } from "./type";

const router = "/change-master";

export const getReplacementClassList = (status: string) => {
  return useQuery(["replacementClassList", status], async () => {
    const { data } = await instance.get<replacementClassResponse>(
      `${router}/replacement-class?status=${status}`
    );
    return data;
  });
};
