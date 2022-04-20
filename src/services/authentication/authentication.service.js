import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase.config";
// import { auth } from "../../../App";

export const loginRequest = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

export const RegisterRequest = (email, password, repeatedPassword) =>
  createUserWithEmailAndPassword(auth, email, password, repeatedPassword);

export const SignoutRequest =()=> signOut(auth);