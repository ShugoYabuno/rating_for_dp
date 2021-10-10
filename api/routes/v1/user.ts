import { Router } from "express"
import { firestoreService } from "../../../composables/firestoreService"
import bcrypt from "bcrypt"
import { UserData, User } from "../../../interfaces"
// import { firestore } from "../../lib/firebase"
import * as jwtToken from "../../functions/jwtToken"
// import { passwordResetMail } from "../../mailer"
// import { createRamdomString } from "../../../composables/functions"
// import { errorMessage } from "../../../utils/functions/api"

// interface ResetPassword {
//   email: string
//   pass: string
// }

const router = Router()

const hashPassword = (_password: string) => {
  return bcrypt.hashSync(_password, bcrypt.genSaltSync(8))
}

router.post("/sign_up", async (req, res) => {
  try {
    const { email, password, data } = req.body.params
    const { name = "" } = data

    const hashedPassword = hashPassword(password)
    const userData: UserData = {
      name,
      email,
      hashedPassword,
      rating: 1500
    }

    const resUser = await firestoreService.add<User>("users", userData)

    if (resUser.status !== 200) throw resUser.error

    const user = resUser.data
    if (!user) throw new Error("user is null")

    const userId = user.document_id
    const deviceToken = jwtToken.signDeviceToken(userId)
    const accessToken = jwtToken.signAccessToken(userId)
    const refreshToken = jwtToken.signRefreshToken(userId)

    res.cookie("deviceToken", deviceToken, { httpOnly: true })
    res.cookie("accessToken", accessToken)
    res.cookie("refreshToken", refreshToken, { httpOnly: true })
    res.status(200)
    return res.json({
      message: "success",
      user: {
        document_id: userId
      }
    })
  } catch (e) {
    console.log(e)
    res.status(400)
    return res.json({
      // message: errorMessage(e),
      message: "error"
    })
  }
})

router.post("/sign_in", async (req, res) => {
  try {
    const { email, password } = req.body.params

    const resUsers = await firestoreService.where<User>("users", "email", email)
    if (resUsers.status !== 200) throw resUsers.error

    const users = resUsers.data

    if (!users[0]) {
      res.status(200)
      return res.json({
        status: 200,
        canSignIn: false,
        message: "該当するユーザーは存在しません"
      })
    }

    const isMatchPassword = bcrypt.compareSync(
      password,
      users[0].hashedPassword || ""
    )
    if (!isMatchPassword) {
      res.status(200)
      return res.json({
        status: 200,
        canSignIn: false,
        message: "パスワードが間違っています"
      })
    }

    const userId = users[0].document_id
    const deviceToken = jwtToken.signDeviceToken(userId)
    const accessToken = jwtToken.signAccessToken(userId)
    const refreshToken = jwtToken.signRefreshToken(userId)

    res.cookie("deviceToken", deviceToken, { httpOnly: true })
    res.cookie("accessToken", accessToken)
    res.cookie("refreshToken", refreshToken, { httpOnly: true })
    res.status(200)
    return res.json({
      canSignIn: true,
      message: "success",
      user: {
        document_id: userId
      }
    })
  } catch (e) {
    console.log(e)
    res.status(400)
    return res.json({
      canSignIn: false,
      // message: errorMessage(e),
      message: "error"
    })
  }
})

// router.post("/sign_out", async (req, res) => {
//   try {
//     res.clearCookie("deviceToken")
//     res.clearCookie("accessToken")
//     res.clearCookie("refreshToken")
//     res.status(200)
//     return res.json({
//       message: "success"
//     })
//   } catch (e) {
//     console.log(e)
//     res.status(400)
//     return res.json({
//       // message: errorMessage(e),
//       message: "error"
//     })
//   }
// })

// router.post("/reset_password", async (req, res) => {
//   try {
//     const { email } = req.body.params

//     const pass = createRamdomString()

//     const mailAuth = {
//       email,
//       pass
//     }

//     const resUsers = await firestoreService.where("users", "email", email)
//     if (resUsers.status !== 200) throw resUsers.error

//     const users = resUsers.data
//     if (!users[0]) {
//       res.status(200)
//       return res.json({
//         status: 400,
//         hasSent: false,
//         message: "該当するユーザーは存在しません"
//       })
//     }

//     await firestoreService.deleteDocs(
//       "reset_passwords",
//       "email",
//       email,
//       firestore
//     )
//     const resAddResetPassword = await firestoreService.add(
//       "reset_passwords",
//       mailAuth,
//       firestore
//     )
//     if (resAddResetPassword.status !== 200) throw resAddResetPassword.error

//     passwordResetMail(email, pass)

//     return res.json({
//       hasSent: true,
//       status: "success"
//     })
//   } catch (e) {
//     console.log(e)
//     res.status(400)
//     return res.json({
//       canSignIn: false,
//       // message: errorMessage(e),
//       message: "error"
//     })
//   }
// })

// router.post("/compare_token", async (req, res) => {
//   try {
//     const { email, token } = req.body.params

//     const resWhere = await firestoreService.where(
//       "reset_passwords",
//       "email",
//       email,
//       firestore
//     )
//     if (resWhere.status !== 200) throw resWhere.error

//     const resetPassword = resWhere.data[0]
//     // 通常処理
//     if (resetPassword) {
//       const emailAuth = resetPassword as ResetPassword

//       res.status(200)
//       return res.json({
//         isCorrect: emailAuth.pass === token
//       })
//       // 異常処理
//     } else {
//       res.status(200)
//       return res.json({
//         isCorrect: false
//       })
//     }
//   } catch (e) {
//     console.log(e)
//   }
// })

// router.post("/update_password", async (req, res) => {
//   try {
//     const { email, password } = req.body.params

//     const resWhere = await firestoreService.where<User>("users", "email", email)
//     if (resWhere.status !== 200) throw resWhere.error

//     const user = resWhere.data[0]
//     if (!user) {
//       res.status(200)
//       return res.json({
//         hasUpdated: false,
//         message: "ユーザーが見つかりません"
//       })
//     }

//     const hashed_password = hashPassword(password)
//     await firestoreService.update("users", user.document_id, {
//       hashed_password
//     })

//     res.status(200)
//     return res.json({
//       hasUpdated: true
//     })
//   } catch (e) {
//     console.log(e)
//   }
// })

router.use(jwtToken.jwtMiddleware())

// 以下ログイン必須処理
router.get("/", async (req, res) => {
  try {
    const { userId = "" } = res.locals

    const resUsers = await firestoreService.getById<User>("users", userId)
    if (resUsers.status !== 200) throw resUsers.error

    const user = resUsers.data
    if (!user) throw new Error("user is not found")

    res.status(200)
    return res.json({
      message: "success",
      user: {
        id: user.document_id,
        name: user.name
      }
    })
  } catch (e) {
    console.log(e)
    res.status(400)
    return res.json({
      // message: errorMessage(e),
      message: "error"
    })
  }
})

router.post("/auth", async (req, res) => {
  try {
    res.status(200)
    return res.json({
      message: "success"
    })
  } catch (e) {
    console.log(e)
    res.status(400)
    return res.json({
      // message: errorMessage(e),
      message: "error"
    })
  }
})

// router.post("/update", async (req, res) => {
//   try {
//     const { userId = "" } = res.locals
//     const { data } = req.body.params as {
//       data: Record<string, unknown>
//     }

//     await firestoreService.update("users", userId, data, firestore)

//     res.status(200)
//     return res.json({
//       message: "success"
//     })
//   } catch (e) {
//     console.log(e)
//     res.status(400)
//     return res.json({
//       // message: errorMessage(e),
//       message: "error"
//     })
//   }
// })

export default router
