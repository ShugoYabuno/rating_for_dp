import dayjs from "dayjs"
import { firebase, firestore } from "../../plugins/firebase"
import * as adminFirebase from "firebase-admin"
import { Model, ModelData, CollectionName } from "../../interfaces"

type Firestore =
  | firebase.firestore.Firestore
  | adminFirebase.firestore.Firestore

type FirestoreDocumentSnapshot =
  | firebase.firestore.DocumentSnapshot
  | adminFirebase.firestore.DocumentSnapshot

type FirestoreDocumentReference =
  | firebase.firestore.DocumentReference
  | adminFirebase.firestore.DocumentReference

type FirestoreServiceResponse =
  | {
      status: 200
    }
  | {
      status: 400
      error: Error
    }

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type FirestoreServiceDocResponse<I extends Model = any> =
  | {
      status: 200
      data: I
    }
  | {
      status: 400
      error: Error
    }

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type FirestoreServiceDocsResponse<I extends Model = any> =
  | {
      status: 200
      data: I[]
    }
  | {
      status: 400
      error: Error
    }

export const doc2data = <T extends Model>(_doc: FirestoreDocumentSnapshot) => {
  return {
    ..._doc.data(),
    document_id: _doc.id
  } as unknown as T
}

export const docRef2data = async <T extends Model>(
  _docRef: FirestoreDocumentReference
) => {
  const data = await _docRef.get().then((doc: any) => doc.data())

  return {
    document_id: _docRef.id,
    ...data
  } as unknown as T
}

// export const getCollection = async (
//   _collectionName: CollectionName,
//   _page = "1",
//   _limit = 50
// ) => {
//   const pageSize = _limit
//   let skip = (Number(_page) - 1) * pageSize || 1
//   if (skip > 1) skip = skip + 1
//   return await firestore
//     .collection(_collectionName)
//     .orderBy("created_at", "desc")
//     .limit(skip)
//     .get()
//     .then(async (documentSnapshots): Promise<DocsPager> => {
//       const lastDoc = documentSnapshots.docs[documentSnapshots.docs.length - 1]
//       const res: DocsPager = await firestore
//         .collection(_collectionName)
//         .orderBy("created_at", "desc")
//         .startAt(lastDoc)
//         .limit(pageSize * 5)
//         .get()
//         .then((querySnapShot): DocsPager => {
//           const resFirestoreDocs = querySnapShot.docs.map((_doc) =>
//             doc2data(_doc)
//           )
//           return {
//             docs: resFirestoreDocs.slice(0, pageSize),
//             hasNextPage: resFirestoreDocs.length > pageSize ? true : false,
//             canSkip: resFirestoreDocs.length > pageSize * 4 + 1 ? true : false
//           }
//         })

//       return { ...res }
//     })
// }

export const where = async <T extends Model>(
  _collectionName: CollectionName,
  _key: string,
  _value: string | number,
  _firestore: Firestore = firestore
): Promise<FirestoreServiceDocsResponse<T>> => {
  return await _firestore
    .collection(_collectionName)
    .where(_key, "==", _value)
    .get()
    .then((querySnapShot: any) => {
      const data = querySnapShot.docs.map((_doc: any) => doc2data<T>(_doc))

      return { status: 200 as const, data }
    })
    .catch((error: Error) => {
      return { status: 400, error }
    })
}

export const whereIn = async <T extends Model>(
  _collectionName: CollectionName,
  _key: string,
  _value: Model[]
): Promise<FirestoreServiceDocsResponse<T>> => {
  return await firestore
    .collection(_collectionName)
    .where(_key, "in", _value)
    .get()
    .then((querySnapShot) => {
      const data = querySnapShot.docs.map((_doc) => doc2data<T>(_doc))

      return { status: 200 as const, data }
    })
    .catch((error: Error) => {
      return { status: 400, error }
    })
}

export const spliceTo10lengthArrays = <T>(_array: T[]) => {
  const splicedArray: T[][] = []
  while (_array.length > 0) {
    const splicedItem = _array.splice(0, 10)
    splicedArray.push(splicedItem)
  }

  return splicedArray
}

export const createTimestamp = (_data: ModelData) => {
  return {
    ..._data,
    created_at: dayjs().unix(),
    created_unixtime: dayjs().unix() * 1000,
    updated_at: dayjs().unix(),
    updated_unixtime: dayjs().unix() * 1000
  }
}

export const updateTimestamp = (_data: Record<string, unknown>) => {
  return {
    ..._data,
    updated_at: dayjs().unix(),
    updated_unixtime: dayjs().unix() * 1000
  }
}

export const getById = async <T extends Model>(
  _collectionName: CollectionName,
  _id: string,
  _firestore: Firestore = firestore
): Promise<FirestoreServiceDocResponse<T>> => {
  return await _firestore
    .collection(_collectionName)
    .doc(_id)
    .get()
    .then((_doc: FirestoreDocumentSnapshot) => {
      const data = doc2data<T>(_doc)

      return { status: 200 as const, data }
    })
    .catch((error: Error) => {
      return { status: 400, error }
    })
}

export const getByIds = async <T extends Model>(
  _collectionName: CollectionName,
  _ids: string[],
  _firestore: Firestore = firestore
): Promise<FirestoreServiceDocsResponse> => {
  const promises = _ids.map((_id) => {
    return getById<T>(_collectionName, _id, _firestore)
  })

  return await Promise.all(promises)
    .then((docs) => {
      return { status: 200 as const, data: docs }
    })
    .catch((error: Error) => {
      return { status: 400, error }
    })
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const add = async <T extends Model = any>(
  _collectionName: CollectionName,
  _data: ModelData,
  _firestore: Firestore = firestore
): Promise<FirestoreServiceDocResponse<T>> => {
  const data = createTimestamp(_data)

  return await _firestore
    .collection(_collectionName)
    .add(data)
    .then(async (_docRef: FirestoreDocumentReference) => {
      const data = await docRef2data<T>(_docRef)
      return { status: 200 as const, data }
    })
    .catch((error: Error) => {
      return { status: 400, error }
    })
}

export const update = async (
  _collectionName: CollectionName,
  _id: string,
  _data: Record<string, unknown>,
  _firestore: Firestore = firestore
): Promise<FirestoreServiceResponse> => {
  const data = updateTimestamp(_data)

  return await _firestore
    .collection(_collectionName)
    .doc(_id)
    .update(data)
    .then(() => {
      return { status: 200 as const }
    })
    .catch((error: Error) => {
      return { status: 400, error }
    })
}

export const deleteDoc = async (
  _collectionName: CollectionName,
  _id: string,
  _firestore: Firestore = firestore
): Promise<FirestoreServiceResponse> => {
  return await _firestore
    .collection(_collectionName)
    .doc(_id)
    .delete()
    .then(() => {
      return { status: 200 as const }
    })
    .catch((error: Error) => {
      return { status: 400, error }
    })
}

export const deleteDocs = async (
  _collectionName: CollectionName,
  _key: string,
  _value: string | number,
  _firestore: Firestore = firestore
): Promise<FirestoreServiceResponse> => {
  return await _firestore
    .collection(_collectionName)
    .where(_key, "==", _value)
    .get()
    .then((querySnapShot: any) => {
      querySnapShot.docs.map((_doc: any) => _doc.ref.delete())
      return { status: 200 as const }
    })
    .catch((error: Error) => {
      return { status: 400, error }
    })
}
