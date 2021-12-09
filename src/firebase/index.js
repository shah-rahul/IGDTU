import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyB5ZU6lo4vQzWQflxtsQGyhB2appX95Xi0",
  authDomain: "smartbrain-3e37f.firebaseapp.com",
  projectId: "smartbrain-3e37f",
  storageBucket: "smartbrain-3e37f.appspot.com",
  messagingSenderId: "446341396304",
  appId: "1:446341396304:web:3b247f0d84bf0a37055e55",
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
