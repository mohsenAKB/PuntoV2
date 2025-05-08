import { IInitializeResponse } from "./initialize";

export interface ILoginResponse extends IInitializeResponse {

}

export interface ILoginSendOtpResponse {
  access_token: null,
  token_type: string,
  expires_in: number
}