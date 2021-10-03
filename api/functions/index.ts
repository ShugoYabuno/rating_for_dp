import dayjs from "dayjs"

export const now = () => {
  return dayjs().unix() * 1000
}
