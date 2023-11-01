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

export interface ChangeClassRequest {
  grade: number;
  class: number;
}

export interface ChangeDetailsList {
  changed_subject: string;
  changed_date: Date;
  changed_period: number;
  changed_teacher: string;
  request_subject: string;
  request_date: Date;
  request_period: number;
  request_teacher: string;
}

export interface ChangeClassResponse {
  changed_timetable_list: ChangeDetailsList[];
}
