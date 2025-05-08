export interface SendOtpSchemaResponse<D = any> {
  success: boolean;
  messages: string[];
  data: D;
}
