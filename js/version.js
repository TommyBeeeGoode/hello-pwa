// js/version.js
export async function checkVersion() {
    try {
        const response = await fetch('version.json?' + Date.now());
        if (!response.ok) return;
        
        const data = await response.json();
        document.getElementById('currentVersion').textContent = data.version;
        document.getElementById('lastUpdated').textContent = data.lastUpdated;
    } catch (error) {
        console.error('Version check failed:', error);
    }
}

