import firebase from "firebase";

export const initializeFirebase = () => {
    firebase.initializeApp({
        apiKey: "AIzaSyCK_O1657ACngz557gi5DJK1Z2CFvZYlSw",
        authDomain: "dashboard-e05bf.firebaseapp.com",
        databaseURL: "https://dashboard-e05bf.firebaseio.com",
        projectId: "dashboard-e05bf",
        storageBucket: "",
        messagingSenderId: "955657626871",
        appId: "1:955657626871:web:9a4205c9d654c89b1e5ff2"
    });
}

export const askForPermissionToReceiveNotifications = async () => {
    try {
        const messaging = firebase.messaging();
        messaging.requestPermission();
        const token = await messaging.getToken();

        console.log(token);

    } catch (error) {
        console.error(error);
    }
}