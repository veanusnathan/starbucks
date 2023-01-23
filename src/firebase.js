import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
	apiKey: "AIzaSyDd8QnbreBfzFP1vdPfTQWxCoc11kmzy1o",
	authDomain: "jcwd2302.firebaseapp.com",
	projectId: "jcwd2302",
	storageBucket: "jcwd2302.appspot.com",
	messagingSenderId: "1049713437403",
	appId: "1:1049713437403:web:3b4edb5188f6a2d48dfafe",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
