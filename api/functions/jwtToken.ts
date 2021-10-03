import jwt from "jsonwebtoken"
// import { errorMessage } from "../../utils/functions/api"
const deviceTokenKey = "vZOdiayDgG"
const accessTokenKey = "0MyEvG2ejm"
const refreshTokenKey = "0QCGMbGSUJ"

type SignPayload = {
  userId: string
}

type VerifiedPayload = SignPayload & jwt.JwtPayload

type ResponseVerifyString = {
  decoded?: string
  error?: {
    message: string
  }
}

type ResponseVerifyPayload = {
  decoded?: VerifiedPayload
  error?: {
    message: string
  }
}

export const signDeviceToken = (_documentId: string) => {
  return jwt.sign(_documentId, deviceTokenKey)
}

export const signAccessToken = (_documentId: string) => {
  const payload = {
    userId: _documentId
  }

  return jwt.sign(payload, accessTokenKey, {
    expiresIn: "1days"
  })
}
export const signRefreshToken = (_documentId: string) => {
  const payload = {
    userId: _documentId
  }

  return jwt.sign(payload, refreshTokenKey, {
    expiresIn: "7days"
  })
}

export const verifyDeviceToken = (
  _deviceToken: string
): Promise<ResponseVerifyString> => {
  return new Promise((resolve) => {
    jwt.verify(_deviceToken, deviceTokenKey, (err, decoded) => {
      if (decoded) {
        resolve({
          decoded: decoded as unknown as string
        })
      }
      if (err) {
        resolve({
          error: {
            message: err.message || ""
          }
        })
      }
    })
  })
}

export const verifyAccessToken = (
  _accessToken: string
): Promise<ResponseVerifyPayload> => {
  return new Promise((resolve) => {
    jwt.verify(_accessToken, accessTokenKey, (err, decoded) => {
      if (decoded) {
        resolve({
          decoded: decoded as unknown as VerifiedPayload
        })
      }
      if (err) {
        resolve({
          error: {
            message: err.message || "something error"
          }
        })
      }
    })
  })
}

export const verifyRefreshToken = (
  _refreshToken: string
): Promise<ResponseVerifyPayload> => {
  return new Promise((resolve) => {
    jwt.verify(_refreshToken, refreshTokenKey, (err, decoded) => {
      if (decoded) {
        resolve({
          decoded: decoded as unknown as VerifiedPayload
        })
      }
      if (err) {
        resolve({
          error: {
            message: err.message || "something error"
          }
        })
      }
    })
  })
}

export const jwtMiddleware = () => {
  return function (req: any, res: any, next: any) {
    try {
      const { deviceToken, accessToken, refreshToken } = req.cookies

      Promise.all([
        verifyDeviceToken(deviceToken),
        verifyAccessToken(accessToken),
        verifyRefreshToken(refreshToken)
      ]).then((value) => {
        const [
          resVerifyDeviceToken,
          resVerifyAccessToken,
          resVerifyRefreshToken
        ] = value

        const userId = resVerifyDeviceToken.decoded || ""

        // エラーがない場合の正常処理
        if (value.every((_verify) => !_verify.error)) {
          const isSameId =
            userId === resVerifyAccessToken.decoded?.userId &&
            userId === resVerifyRefreshToken.decoded?.userId

          if (!isSameId) {
            res.status(401)
            return res.json({
              message: "invalid token"
            })
          }

          res.locals.userId = userId
          return next()
        }

        // 例外処理
        const hasExpiredAccessToken =
          resVerifyAccessToken.error?.message === "jwt expired"
        const hasExpiredRefreshToken =
          resVerifyRefreshToken.error?.message === "jwt expired"

        // アクセストークンの期限切れ&&リフレッシュトークンは有効
        if (hasExpiredAccessToken && !hasExpiredRefreshToken) {
          const accessToken = signAccessToken(userId)
          const refreshToken = signRefreshToken(userId)

          res.cookie("accessToken", accessToken)
          res.cookie("refreshToken", refreshToken, { httpOnly: true })
          next()
          // その他のエラーは401エラー
        } else {
          res.status(401)
          return res.json({
            message: "authentication error"
          })
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
  }
}
