export interface ViewTimeTableRequest {
  grade: number;
  class: number;
}

interface TimetableList {
  grade: number;
  class_num: number;
  period: number;
  week_of_date: number;
  subject: string;
}

export interface TimetableListResponse {
  timetable_list: TimetableList[];
}

export interface ChangeDetailsList {
  request_subject: string;
  request_date: string;
  request_period: number;
  request_teacher_name: string;
  replace_subject: string;
  replace_date: string;
  replace_period: number;
  replace_teacher_name: string;
}
