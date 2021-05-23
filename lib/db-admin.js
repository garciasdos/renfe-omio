import { db } from "./firebase-admin";

export async function getAllFeedback(siteId, route) {
  // try {
  //   let ref = db
  //     .collection('feedback')
  //     .where('siteId', '==', siteId)
  //     .where('status', '==', 'active');
  //   if (route) {
  //     ref = ref.where('route', '==', route);
  //   }
  //   const snapshot = await ref.get();
  //   const feedback = [];
  //   snapshot.forEach((doc) => {
  //     feedback.push({ id: doc.id, ...doc.data() });
  //   });
  //   feedback.sort((a, b) =>
  //     compareAsc(parseISO(a.createdAt), parseISO(b.createdAt))
  //   );
  //   return { feedback };
  // } catch (error) {
  //   return { error };
  // }
}

export async function createStation(uid, data) {
  return db
    .collection("stations")
    .doc(uid)
    .set(
      {
        uid,
        ...data,
      },
      { merge: true }
    );
}

// export async function dumpStations(siteId, route) {}
