export interface LoginType {
  account_id: string;
  password: string;
}

export interface AuthorizationResponse {
  access_token: string;
  access_token_exp: Date;
  refresh_token: string;
}
