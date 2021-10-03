import * as admin from "firebase-admin"

const projectId: string = process.env.FIREBASE_PROJECT_ID || ""
if (!projectId) {
  console.error("env FIREBASE_PROJECT_ID is undefined")
}

// let serviceAccount
// if (process.env.FIREBASE_PROJECT_ID === "sposhiru-mall") {
//   serviceAccount = require("./credentials/sposhiru-mall-firebase-adminsdk-4ikyo-9698e8eb18.json")
// } else if (process.env.FIREBASE_PROJECT_ID === "sposhiru-mall-pro") {
//   serviceAccount = require("./credentials/sposhiru-mall-pro-firebase-adminsdk-14oen-2e3e1d3ceb.json")
// } else {
//   console.error(".env FIREBASE_PROJECT_ID is not undefined")
// }

// eslint-disable-next-line @typescript-eslint/no-var-requires
const serviceAccount = require("./credentials/rating-for-dp-firebase-adminsdk-5dpzm-229722acd7.json")

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: `https://${projectId}.firebaseio.com`
  })
}

export const doc2data = (_doc: admin.firestore.DocumentSnapshot) => {
  return {
    document_id: _doc.id,
    ..._doc.data()
  }
}

const firestore = admin.firestore()

export { admin, firestore }
