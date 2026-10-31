importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js');
firebase.initializeApp({apiKey:'AIzaSyA3ny0kw_Ejyjbbw6Rm63RCoZmT5h0dpaU',authDomain:'examwarriors-89447.firebaseapp.com',projectId:'examwarriors-89447',storageBucket:'examwarriors-89447.firebasestorage.app',messagingSenderId:'759292058436',appId:'1:759292058436:web:4b09da2acedbe3779d5511'});
const messaging=firebase.messaging();
messaging.onBackgroundMessage(function(payload){
  self.registration.showNotification(payload.notification.title,{body:payload.notification.body,icon:'https://examwarriors.online/favicon.ico'});
});
