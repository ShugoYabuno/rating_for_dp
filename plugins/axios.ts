import axios from "axios"

const options: {
  baseURL?: string
} = {}
// The server-side needs a full url to works
if (process.server) {
  options.baseURL = `http://${process.env.HOST || "0.0.0.0"}:${
    process.env.PORT || 3000
  }`
}

export default axios.create(options)
