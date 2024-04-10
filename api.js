import { initializeApp } from "firebase/app";
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore/lite";
const firebaseConfig = {
  apiKey: "AIzaSyB85pI-S4PjWKeVp9gyhb3C-g8O2Fnxvt8",
  authDomain: "vanlife-6fe0a.firebaseapp.com",
  projectId: "vanlife-6fe0a",
  storageBucket: "vanlife-6fe0a.appspot.com",
  messagingSenderId: "610163557147",
  appId: "1:610163557147:web:73a4a447c013485e9549be"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const vansCollection = collection(db,"vans")


export async function getVans(){
    const snapshot = await getDocs(vansCollection)
    const vans = snapshot.docs.map(doc => ({
        ...doc.data(),
        id:doc.id
    }))
    return vans
}

export async function getVan(id){
   const docRef =  doc(db,"vans",id)
   const snapshot = await getDoc(docRef)
   return {
    ...snapshot.data(),
    id:snapshot.id
   }
}
export async function getHostVans(){
    const q = query(vansCollection,where("hostId","==","123"))
    const snapshot = await getDocs(q)
    const vans = snapshot.docs.map(doc => ({
        ...doc.data(),
        id:doc.id
    }))
    return vans
}
// export async function getHostVans(id) {
//     const url = id ? `/api/host/vans/${id}` : "/api/host/vans"
//     const res = await fetch(url)
//     if (!res.ok) {
//         throw {
//             message: "Failed to fetch vans",
//             statusText: res.statusText,
//             status: res.status
//         }
//     }
//     const data = await res.json()
//     return data.vans
// }

export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}