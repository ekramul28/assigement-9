// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBZdjd2IcGNCUSceOjzzbtMawJBxStiymc",
    authDomain: "assignment9-ed659.firebaseapp.com",
    projectId: "assignment9-ed659",
    storageBucket: "assignment9-ed659.appspot.com",
    messagingSenderId: "857866694145",
    appId: "1:857866694145:web:98ee4a7a5dfc84db6d1a00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
