export interface IUserApiResponse {
  status_code: number
  status: boolean
  message: string
  error:string
  data: IData
}

export interface IData {
  totalConsultant: string,
  offset: string
  limit: string
  list: IUser[]
}

export interface IUser {
  id: number
  name: string
  active_status: number
  phone: string
  email: string
  address: string
  code: string
  type: string
  district_id: any
  profile_image: string
  gender: string
  rates: number
  years_of_experience: string
  schedule: string
  experiance_latest: ExperianceLatest
  academic_latest: AcademicLatest
  service_latest: ServiceLatest[]
  service_list: ServiceList[]
}

export interface ExperianceLatest {
  institute_name: string
}

export interface AcademicLatest {
  education_level: string
}

export interface ServiceLatest {
  title: string
  id: number
}

export interface ServiceList {
  id: number
  title: string
  description: string
  status: number
  remark: string
  updated_at: string
}
