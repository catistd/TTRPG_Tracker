const { getVersion } = window.__TAURI__.app;
const appVersion = await getVersion();

document.getElementById("ver").textContent = "ver: " + String(appVersion);