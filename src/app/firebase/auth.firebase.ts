import "./firebase.config"
import { 
    createUserWithEmailAndPassword, 
    getAuth, 
    signInWithEmailAndPassword 
} from "firebase/auth";

const auth = getAuth();

export const signIn = async (email: string, password: string) => {
    try {
        let res = await signInWithEmailAndPassword(auth, email, password)
        return res.user;
    } catch (error) {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        console.log(error);
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
        console.log(error);
        return null
    }
}