export interface replaceClassRequest {
  status: string;
}

export interface replacementClassResponse {
  replacement_class_list: replaceClassList[];
}

export interface replaceClassList {
  id: number;
  status: string;
  teacher_name: string;
  request_date: string;
}
