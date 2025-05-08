export interface IRegisterSendOtpResponse {
  success: boolean;
  message: string;
  data: {
    expires_in: number;
  };
}

interface IRegisterOtpOldUserResponse {

  mobile: string,
  first_name: string,
  last_name: string,
  groups: [],
  date_joined: string

}

export interface IRegisterOtpCodeSubmittedResponse {
  success: boolean,
  data: {
    token: {
      access: string
      refresh: string
    },
    new_user: boolean,
    user_info: IRegisterOtpOldUserResponse | null
  },
  message: string
  dev_message: string
}