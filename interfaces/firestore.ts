/* eslint-disable camelcase */
interface Timestamp {
  created_at: number
  created_unixtime: number
  updated_at: number
  updated_unixtime: number
}

interface DocumentId {
  document_id: string
}

// export interface UserData {
//   tel: string
//   name: string
//   email: string
//   zip_code: string
//   name_kana: string
//   prefecture: string
//   address_line1: string
//   address_line2: string
//   hashed_password: string
//   stripe_customer_id: string
//   receive_mail: "all" | "denied"
//   shipped_addresses: {
//     tel: string
//     name: string
//     zip_code: string
//     prefecture: string
//     address_line1: string
//     address_line2?: string
//   }[]
// }
// export interface User extends UserData, DocumentId, Timestamp {}

// export interface TestData {
//   [key: string]: unknown
// }
// export interface Test extends TestData, DocumentId, Timestamp {}

export interface RatingMatchWaitingData {
  userId: string
  rating: number
  status: "waiting"
}
export interface RatingMatchWaiting
  extends RatingMatchWaitingData,
    DocumentId,
    Timestamp {}

export interface UserData {
  name: string
  email: string
  hashedPassword: string
  rating: number
}
export interface User extends UserData, DocumentId, Timestamp {}

export type CollectionName = "ratingMatchWaitings" | "users"

export type ModelData = RatingMatchWaitingData | UserData

export type Model = RatingMatchWaiting | User
