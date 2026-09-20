import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "authexamnotes-62742.firebaseapp.com",
  projectId: "authexamnotes-62742",
  storageBucket: "authexamnotes-62742.firebasestorage.app",
  messagingSenderId: "137402011758",
  appId: "1:137402011758:web:3f56f749eb537213af967f"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider };
