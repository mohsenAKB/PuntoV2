export interface ILoginResponse {
  firstName: string
  lastName: string
  address: string
  national_id: string
}

export interface ILoginWithOtpResponse {
  data: {
    token: {
      access: string,
      refresh: string
    },
    user_info: {
      mobile: string,
      first_name: string,
      last_name: string,
      groups: [],
      date_joined: string

    }
  }
}