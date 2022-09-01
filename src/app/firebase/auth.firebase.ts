import "./firebase.config"
import { 
    createUserWithEmailAndPassword, 
    getAuth, 
    signInWithEmailAndPassword, 
    signOut
} from "firebase/auth";

const auth = getAuth();

export const signIn = async (email: string, password: string) => {
    try {
        let res = await signInWithEmailAndPassword(auth, email, password)
        return res.user;
    } catch (error) {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // console.log(error);
        alert('Credentials does not match')
        return null
    }
};


export const createUser = async (email: string, password: string) => {
    try {
        let res = await createUserWithEmailAndPassword(auth, email, password)
        return res.user;
    } catch (error) {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // console.log(error);
        alert('Unable to register user')
        return null
    }
}

export const userLogOut = async () => {
    try {
        let res = await signOut(auth)
        return true
    } catch (error) {
        return false
    }
}