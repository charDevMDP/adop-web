import firebase from "./index.js";
import { 
    getAuth, signOut, onAuthStateChanged,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword
} from 'firebase/auth'

const registerWithEmail = async  (email, password) => {
    const auth = getAuth();
    return createUserWithEmailAndPassword(auth,email,password)
        .then( (userCredential) => {
            const user = userCredential.user;
            return { user }
        })
        .catch((err) => {
            const errorCode = err.code;
            const errMessage = err.errMessage
            return {
                error: errorCode + ': ' + errMessage
            }
        })
}

const signWithEmail = async (email, password) => {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth,email,password)
        .then( (userCredential) => {
            const user = userCredential.user;
            return { user }
        })
        .catch((err) => {
            const errorCode = err.code;
            const errMessage = err.errMessage
            return {
                error: errorCode + ': ' + errMessage
            }
        })
}

const signOutUser = async () => {
    const auth = getAuth();
    return signOut(auth).then(()=> { return { success: true }}).catch(err => { return err });
}

const authState = async (user) => {
    const auth = getAuth;
    const user = auth.currentUser;
    return user;
}