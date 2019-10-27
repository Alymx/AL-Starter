
import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyB4LamnCRSVZAowrydogcfzbEyFxheHWT8",
    authDomain: "producthuntpro.firebaseapp.com",
    databaseURL: "https://producthuntpro.firebaseio.com",
    projectId: "producthuntpro",
    storageBucket: "producthuntpro.appspot.com",
    messagingSenderId: "263826765321",
    appId: "1:263826765321:web:4266ac0256f097017d2ad8",
    measurementId: "G-P3SLZ8H0V8"
};

// const config = {
//     apiKey: process.env.REACT_APP_API_KEY,
//     authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//     databaseURL: process.env.REACT_APP_DATABASE_URL,
//     projectId: process.env.REACT_APP_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
// };

class Firebase {
    constructor() {
        /** Initialisation de la liaison au projet */
        app.initializeApp(config);
        /** Initialisation de l'API d'AUTH */
        this.auth = app.auth();
        this.db = app.database();
    }

    /** API Authentification */
    //Enregistrement Nouvel Utilisateur
    doCreateUserWithEmailAndPassword = (email, pass) =>
        this.auth.createUserWithEmailAndPassword(email, pass);
    //Connexion au site
    doSIgnInWithEmailAndPassword = (email, pass) =>
        this.auth.signInWithEmailAndPassword(email, pass);
    //Deconnexion de l'utilisateur
    doSignOut = () => this.auth.signOut();
    //Reinitialisation du Mot de Passe
    doPasswordReset = (email) => this.auth.sendPasswordResetEmail(email);
    //Modification du Mot de Passe
    doPasswordUpdate = (pass) => this.auth.currentUser.updatePassword(pass);

    /** API Realtime Database */
    user = (uid) => this.db.ref(`users/${uid}`);
    users = () => this.db.ref('users/');

}

export default Firebase;