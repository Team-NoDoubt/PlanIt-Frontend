export interface TeacherListResponse {
  teacher_id_list: TeacherList[];
}

export interface TeacherList {
  teacher_id: number;
  teacher_name: string;
}
