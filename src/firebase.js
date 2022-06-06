// npm i firebase
// src ->  create firebase.js

import {initializeApp} from "firebase/app";
import secret from "./secrets";
import { getAuth } from "firebase/auth";

let app = initializeApp(secret);
// from these three you are able to include firebase in your react app

export let auth = getAuth(app);
