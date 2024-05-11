// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAe-4KQwBspcmt0jdz_hYjVho8YXHajgC4",
  authDomain: "burger-store-45a3d.firebaseapp.com",
  projectId: "burger-store-45a3d",
  storageBucket: "burger-store-45a3d.appspot.com",
  messagingSenderId: "106748928742",
  appId: "1:106748928742:web:5bc2b6f7bc57119512d127"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;