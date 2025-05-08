export interface IUpdateProfileRequest {
  first_name: string
  last_name: string
  email: string
  role: string
  contact_phone_number: string
  company_name: string
  website_url: string
  address: string
  biography: string
  awards: string
  study_field: string
  degree_id: number,
  province_id: number
  skill_ids: number[],
  expertise_ids: number[],
  service_location_ids: number[],
  avatar_attachment_id: number,
  cover_attachment_id: number
}