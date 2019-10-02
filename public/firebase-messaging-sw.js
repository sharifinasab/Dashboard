importScripts('https://www.gstatic.com/firebasejs/7.0.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.0.0/firebase-messaging.js');

firebase.initializeApp({
    messagingSenderId: "955657626871"
});

const messaging = firebase.messaging();