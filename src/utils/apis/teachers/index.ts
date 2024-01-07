import { useQuery } from '@tanstack/react-query';
import { instance } from '../index';
import { TeacherListResponse } from './type';

export const teacherListInquiry = () => {
  return useQuery(['teachers'], async () => {
    const { data } = await instance.get<TeacherListResponse>(`/teachers`);
    return data;
  });
};
