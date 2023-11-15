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

export interface SubjectInquiryRequest {
  week_of_date: number;
  grade: number;
  class_num: number;
  period: number;
}

export interface SubjectInquiryResponse {
  timetable_id: number;
  subject: string;
}

export interface ChangeDetailList {
  request_subject: string;
  request_date: string;
  request_period: number;
  request_teacher_name: string;
  replace_subject: string;
  replace_date: string;
  replace_period: number;
  replace_teacher_name: string;
}

export interface ReinforcementList {
  reinforcement_class_id: number;
  reinforcement_plan: string;
  reinforcement_teacher_id: string;
}

export interface ReplacementList {
  request_timetable_id: number;
  change_timetable_id: number;
  replacement_teacher_id: string;
}

export interface PlanWriteType {
  reason: string;
  reinforcement_list: ReinforcementList[];
  replacement_list: ReplacementList[];
}