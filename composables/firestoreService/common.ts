import dayjs from "dayjs"
import { firebase, firestore } from "../../plugins/firebase"
import { DocsPager } from "../../interfaces"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const doc2data = <T = any>(
  _doc: firebase.firestore.DocumentSnapshot,
) => {
  return {
    ..._doc.data(),
    document_id: _doc.id,
  } as unknown as T
}

export const docRef2data = async (
  _docRef: firebase.firestore.DocumentReference,
) => {
  const data = await _docRef.get().then((doc) => doc.data())

  return {
    document_id: _docRef.id,
    ...data,
  }
}

export const getCollection = async (
  _collectionName: string,
  _page: string | string = "1",
  _limit = 50,
) => {
  const pageSize = _limit
  let skip = (Number(_page) - 1) * pageSize || 1
  if (skip > 1) skip = skip + 1
  return await firestore
    .collection(_collectionName)
    .orderBy("created_at", "desc")
    .limit(skip)
    .get()
    .then(async (documentSnapshots): Promise<DocsPager> => {
      const lastDoc = documentSnapshots.docs[documentSnapshots.docs.length - 1]
      const res: DocsPager = await firestore
        .collection(_collectionName)
        .orderBy("created_at", "desc")
        .startAt(lastDoc)
        .limit(pageSize * 5)
        .get()
        .then((querySnapShot): DocsPager => {
          const resFirestoreDocs = querySnapShot.docs.map((_doc) =>
            doc2data(_doc),
          )
          return {
            docs: resFirestoreDocs.slice(0, pageSize),
            hasNextPage: resFirestoreDocs.length > pageSize ? true : false,
            canSkip: resFirestoreDocs.length > pageSize * 4 + 1 ? true : false,
          }
        })

      return { ...res }
    })
}

export const where = async <T = any>(
  _collectionName: string,
  _key: string,
  _value: string | number,
  _firestore: any = firestore,
): Promise<T[]> => {
  return await _firestore
    .collection(_collectionName)
    .where(_key, "==", _value)
    .get()
    .then((querySnapShot: any) => {
      const resFirestoreOrders = querySnapShot.docs.map((_doc: any) =>
        doc2data(_doc),
      )

      return resFirestoreOrders
    })
}

export const whereIn = async <T>(
  _collectionName: string,
  _key: string,
  _value: Record<string, unknown>[],
) => {
  return await firestore
    .collection(_collectionName)
    .where(_key, "in", _value)
    .get()
    .then((querySnapShot): T[] => {
      const resFirestoreOrders = querySnapShot.docs.map((_doc) =>
        doc2data(_doc),
      )

      return resFirestoreOrders
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

export const createTimestamp = (_data: Record<string, unknown>) => {
  return {
    ..._data,
    created_at: dayjs().unix(),
    created_unixtime: dayjs().unix() * 1000,
    updated_at: dayjs().unix(),
    updated_unixtime: dayjs().unix() * 1000,
  }
}

export const updateTimestamp = (_data: Record<string, unknown>) => {
  return {
    ..._data,
    updated_at: dayjs().unix(),
    updated_unixtime: dayjs().unix() * 1000,
  }
}

export const getById = <T>(
  _collectionName: string,
  _id: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _firestore: any = firestore,
): Promise<T> => {
  // Promise.all使えるようにPromise文
  return new Promise((resolve) => {
    _firestore
      .collection(_collectionName)
      .doc(_id)
      .get()
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .then((_doc: any) => {
        const data = doc2data(_doc) as unknown as T

        resolve(data)
      })
  })
}

export const getByIds = async <T>(
  _collectionName: string,
  _ids: string[],
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _firestore: any = firestore,
) => {
  const promises = _ids.map((_id) => {
    return getById<T>(_collectionName, _id, _firestore)
  })

  return (await Promise.all(promises)) as T[]
}

export const add = async (
  _collectionName: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _data: Record<string, any>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _firestore: any = firestore,
) => {
  delete _data["document_id"]
  const data = createTimestamp(_data)

  return await _firestore
    .collection(_collectionName)
    .add(data)
    .then(async (_docRef: firebase.firestore.DocumentReference) => {
      const doc = await docRef2data(_docRef)
      return { status: 200, data: doc }
    })
    .catch((err: Error) => {
      return { status: 400, data: err }
    })
}

export const update = async (
  _collectionName: string,
  _id: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _data: Record<string, any>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _firestore: any = firestore,
) => {
  delete _data["document_id"]
  const data = updateTimestamp(_data) // {  cretaed_aaa = '' }

  return await _firestore
    .collection(_collectionName)
    .doc(_id)
    .update(data)
    .then(() => {
      return { status: 200, data: { ...data, document_id: _id } }
    })
    .catch((err: Error) => {
      return { status: 400, data: err }
    })
}

export const deleteDoc = async (
  _collectionName: string,
  _id: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _firestore: any = firestore,
) => {
  return await _firestore
    .collection(_collectionName)
    .doc(_id)
    .delete()
    .then((_docRef: any) => {
      return { status: 200, data: _docRef }
    })
    .catch((err: Error) => {
      return { status: 400, data: err }
    })
}

export const deleteDocs = async (
  _collectionName: string,
  _key: string,
  _value: string | number,
  _firestore: any = firestore,
) => {
  return await _firestore
    .collection(_collectionName)
    .where(_key, "==", _value)
    .get()
    .then((querySnapShot: any) => {
      const docs = querySnapShot.docs.map((_doc: any) => _doc.ref.delete())
      return { status: 200, data: docs }
    })
    .catch((err: Error) => {
      return { status: 400, data: err }
    })
}
