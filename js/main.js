import { checkVersion } from './version.js';

// Register Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', async () => {
        try {
            // First unregister any existing service workers
            const registrations = await navigator.serviceWorker.getRegistrations();
            for (const registration of registrations) {
                await registration.unregister();
                console.log('ServiceWorker unregistered');
            }
            
            // Then register the new one
            const registration = await navigator.serviceWorker.register('/hello-world-pwa-sw.js');
            console.log('ServiceWorker registration successful');
        } catch (error) {
            console.error('ServiceWorker registration failed:', error);
        }
    });
}

// Check version when page loads
checkVersion();

