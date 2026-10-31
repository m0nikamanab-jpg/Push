importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: 'AIzaSyA3ny0kw_Ejyjbbw6Rm63RCoZmT5h0dpaU',
  authDomain: 'examwarriors-89447.firebaseapp.com',
  projectId: 'examwarriors-89447',
  storageBucket: 'examwarriors-89447.firebasestorage.app',
  messagingSenderId: '759292058436',
  appId: '1:759292058436:web:4b09da2acedbe3779d5511'
});

const messaging = firebase.messaging();

// data-only মেসেজ: নোটিফিকেশন আমরা নিজে দেখাব, তাই ক্লিক নিয়ন্ত্রণ আমাদের হাতে
messaging.onBackgroundMessage(function (payload) {
  var d = payload.data || {};
  return self.registration.showNotification(d.title || 'Exam Warriors', {
    body: d.body || '',
    icon: 'https://www.examwarriors.online/favicon.ico',
    data: { link: d.link || 'https://www.examwarriors.online/' }
  });
});

self.addEventListener('notificationclick', function (event) {
  event.notification.close();
  var link = (event.notification.data && event.notification.data.link) || 'https://www.examwarriors.online/';
  event.waitUntil(clients.openWindow(link));
});
