
self.addEventListener('install', event => {
    console.log('Service Worker installing.');
});

self.addEventListener('activate', event => {
    console.log('Service Worker activating.');
});

self.addEventListener('message', event => {
    if (event.data && event.data.type === 'notification') {
        const options = {
            body: event.data.message,
            icon: 'https://res.cloudinary.com/dnpmv0lyk/image/upload/v1741624989/IITDHLOGO_lxqysu.jpg' // Replace with your icon URL
        };
        self.registration.showNotification('Bus Alert', options);
    }
});

self.addEventListener('push', function(event) {
    const options = {
        body: event.data.text(),
        icon: 'https://res.cloudinary.com/dnpmv0lyk/image/upload/v1741624989/IITDHLOGO_lxqysu.jpg'
    };

    event.waitUntil(
        self.registration.showNotification('Bus Alert', options)
    );
});
