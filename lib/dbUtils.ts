export function convertSnaps<T>(snaps) {
  return snaps.map(snap => {
    return {
      id: snap.payload.doc.id,
      ...snap.payload.doc.data()
    };
  }) as T[];
}

export function convertSnap<T>(snap) {
  return {
    id: snap.payload.id,
    ...snap.payload.data()
  } as T;
}

export function convertGetDocs<T>(payload) {
  return payload.docs.map(doc => {
    return {
      id: doc.id,
      ...doc.data()
    };
  }) as T[];
}

export function convertGetDoc<T>(payload) {
  return {
    id: payload.doc.id,
    ...payload.doc.data()
  } as T;
}