<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <title>gitmum</title>

  <!-- PWA & Mobile Meta Tags -->
  <link rel="manifest" href="./manifest.json">
  <meta name="theme-color" content="#ff0055">
  <meta name="mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
  <meta name="apple-mobile-web-app-title" content="gitmum">

  <!-- SVG Favicon -->
  <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>⚡</text></svg>">
  
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap" rel="stylesheet">

  <style>
    :root {
      --bg-dark: #0a0a0c;
      --bg-card: rgba(22, 22, 29, 0.75);
      --accent: #ff0055;
      --accent-glow: rgba(255, 0, 85, 0.4);
      --accent-alt: #7928ca;
      --text-main: #f8f9fa;
      --text-muted: #a1a1aa;
      --glass-border: rgba(255, 255, 255, 0.08);
      --radius-lg: 20px;
      --radius-md: 14px;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      user-select: none;
      -webkit-user-select: none;
      -webkit-tap-highlight-color: transparent;
    }

    body {
      font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
      background-color: var(--bg-dark);
      background-image: 
        radial-gradient(at 0% 0%, rgba(255, 0, 85, 0.12) 0px, transparent 50%),
        radial-gradient(at 100% 100%, rgba(121, 40, 202, 0.12) 0px, transparent 50%);
      background-attachment: fixed;
      color: var(--text-main);
      min-height: 100vh;
      padding: 20px;
      padding-bottom: 120px;
    }

    header {
      position: sticky;
      top: 15px;
      z-index: 100;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 14px 24px;
      background: rgba(15, 15, 20, 0.75);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border: 1px solid var(--glass-border);
      border-radius: var(--radius-lg);
      margin-bottom: 30px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    }

    .logo {
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 1.4rem;
      font-weight: 800;
      letter-spacing: -0.5px;
      cursor: pointer;
    }

    .logo-badge {
      background: linear-gradient(135deg, var(--accent), var(--accent-alt));
      color: #fff;
      width: 38px;
      height: 38px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
      font-size: 1rem;
      box-shadow: 0 0 15px var(--accent-glow);
    }

    .install-btn {
      background: linear-gradient(135deg, var(--accent), var(--accent-alt));
      color: #fff;
      border: none;
      padding: 10px 20px;
      border-radius: 30px;
      font-weight: 700;
      font-size: 0.88rem;
      cursor: pointer;
      display: none;
      box-shadow: 0 4px 20px var(--accent-glow);
      transition: transform 0.2s;
    }

    .install-btn:active {
      transform: scale(0.95);
    }

    #offlineNotice {
      display: none;
      background: rgba(255, 0, 85, 0.1);
      border: 1px solid var(--accent);
      color: #ff80a5;
      padding: 16px;
      border-radius: var(--radius-md);
      text-align: center;
      margin-bottom: 25px;
      backdrop-filter: blur(10px);
    }

    .player-section {
      display: none;
      grid-template-columns: 1fr 380px;
      gap: 28px;
      max-width: 1400px;
      margin: 0 auto 40px auto;
      animation: fadeIn 0.4s ease-out;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(15px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @media (max-width: 1024px) {
      .player-section {
        grid-template-columns: 1fr;
      }
    }

    .player-card {
      background: var(--bg-card);
      border: 1px solid var(--glass-border);
      border-radius: var(--radius-lg);
      padding: 20px;
      backdrop-filter: blur(16px);
      box-shadow: 0 20px 40px rgba(0,0,0,0.4);
    }

    .main-video-box {
      background: #000;
      border-radius: var(--radius-md);
      overflow: hidden;
      position: relative;
      box-shadow: 0 10px 30px rgba(0,0,0,0.8);
    }

    video#mainPlayer {
      width: 100%;
      aspect-ratio: 16 / 9;
      display: block;
    }

    .main-details {
      margin-top: 20px;
    }

    .main-title {
      font-size: 1.4rem;
      font-weight: 700;
      margin-bottom: 16px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .player-controls {
      display: flex;
      align-items: center;
      gap: 16px;
      background: rgba(255, 255, 255, 0.04);
      padding: 12px 18px;
      border-radius: var(--radius-md);
      border: 1px solid var(--glass-border);
    }

    .btn-circle {
      background: linear-gradient(135deg, var(--accent), var(--accent-alt));
      border: none;
      color: #fff;
      width: 44px;
      height: 44px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.1rem;
      cursor: pointer;
      box-shadow: 0 4px 15px var(--accent-glow);
      transition: transform 0.2s;
    }

    .btn-circle:active {
      transform: scale(0.9);
    }

    .btn-icon {
      background: none;
      border: none;
      color: var(--text-main);
      font-size: 1.2rem;
      cursor: pointer;
      padding: 8px;
    }

    .progress-bar {
      flex: 1;
      -webkit-appearance: none;
      appearance: none;
      height: 6px;
      border-radius: 3px;
      background: rgba(255, 255, 255, 0.15);
      outline: none;
      cursor: pointer;
    }

    .progress-bar::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background: var(--accent);
      box-shadow: 0 0 10px var(--accent);
      cursor: pointer;
    }

    .save-offline-btn {
      background: rgba(255, 255, 255, 0.08);
      border: 1px solid var(--glass-border);
      color: var(--text-main);
      padding: 8px 16px;
      border-radius: 20px;
      font-weight: 600;
      font-size: 0.85rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 22px;
      max-width: 1400px;
      margin: 0 auto;
    }

    .card {
      background: var(--bg-card);
      border: 1px solid var(--glass-border);
      border-radius: var(--radius-md);
      overflow: hidden;
      cursor: pointer;
      transition: transform 0.25s, border-color 0.25s;
      backdrop-filter: blur(10px);
    }

    .card:hover {
      transform: translateY(-6px);
      border-color: rgba(255, 0, 85, 0.4);
    }

    .card-thumb {
      position: relative;
      width: 100%;
      aspect-ratio: 16 / 9;
      background: linear-gradient(135deg, #181824, #101018);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2.2rem;
      color: var(--accent);
    }

    .play-overlay {
      position: relative;
      z-index: 2;
      width: 50px;
      height: 50px;
      background: rgba(255, 0, 85, 0.85);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      box-shadow: 0 0 20px var(--accent-glow);
    }

    .card-info {
      padding: 16px;
    }

    .card-title {
      font-size: 1rem;
      font-weight: 700;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-bottom: 4px;
    }

    .card-meta {
      font-size: 0.82rem;
      color: var(--text-muted);
    }

    .badge-offline {
      color: #00ffaa;
      font-size: 0.78rem;
      font-weight: 600;
    }

    #status {
      text-align: center;
      grid-column: 1 / -1;
      color: var(--text-muted);
      font-size: 1.1rem;
      padding: 60px 0;
    }
  </style>
</head>
<body oncontextmenu="return false;">

  <header>
    <div class="logo" onclick="closePlayer()">
      <div class="logo-badge">⚡</div>
      <span>gitmum</span>
    </div>
    <button class="install-btn" id="installBtn">⚡ Install App</button>
  </header>

  <div id="offlineNotice">
    <h3>📡 Offline Mode Active</h3>
    <p>Showing local tracks saved on your device.</p>
  </div>

  <div class="player-section" id="playerSection">
    <div class="player-card">
      <div class="main-video-box">
        <video id="mainPlayer" controlsList="nodownload noremoteplayback"></video>
      </div>
      <div class="main-details">
        <h2 class="main-title" id="mainTitle">Track Title</h2>
        <div class="player-controls">
          <button class="btn-circle" id="playBtn" onclick="togglePlay()">▶</button>
          <input type="range" class="progress-bar" id="seekBar" value="0" min="0" max="100" oninput="seekVideo(this.value)">
          <button class="btn-icon" id="muteBtn" onclick="toggleMute()">🔊</button>
          <button class="save-offline-btn" id="downloadAppBtn" onclick="downloadTrackLocally()">💾 Save Offline</button>
        </div>
      </div>
    </div>
    
    <div class="player-card" id="sidebarList">
      <h3 style="margin-bottom: 18px; font-size: 1.1rem; font-weight: 700;">Up Next</h3>
      <div id="nextContainer" style="display: flex; flex-direction: column; gap: 14px;"></div>
    </div>
  </div>

  <main class="grid" id="songContainer">
    <p id="status">Syncing library...</p>
  </main>

  <script>
    // Service Worker Registration
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js', { scope: './' })
          .then(reg => console.log('SW Registered:', reg.scope))
          .catch(err => console.error('SW Error:', err));
      });
    }

    let deferredPrompt;
    const installBtn = document.getElementById('installBtn');

    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      deferredPrompt = e;
      installBtn.style.display = 'block';
    });

    installBtn.addEventListener('click', () => {
      if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((result) => {
          if (result.outcome === 'accepted') {
            installBtn.style.display = 'none';
          }
          deferredPrompt = null;
        });
      }
    });

    const username = 'huzaifafaraz67-sketch';
    const repoName = 'gitmum';
    const apiUrl = `https://api.github.com/repos/${username}/${repoName}/contents/`;

    const container = document.getElementById('songContainer');
    const playerSection = document.getElementById('playerSection');
    const mainPlayer = document.getElementById('mainPlayer');
    const mainTitle = document.getElementById('mainTitle');
    const playBtn = document.getElementById('playBtn');
    const muteBtn = document.getElementById('muteBtn');
    const seekBar = document.getElementById('seekBar');
    const offlineNotice = document.getElementById('offlineNotice');
    const downloadAppBtn = document.getElementById('downloadAppBtn');

    let currentFileUrl = '';
    let currentTitleClean = '';
    let allFiles = [];

    function updateNetworkStatus() {
      if (!navigator.onLine) {
        offlineNotice.style.display = 'block';
        loadOfflineTracks();
      } else {
        offlineNotice.style.display = 'none';
        fetchOnlineTracks();
      }
    }

    window.addEventListener('online', updateNetworkStatus);
    window.addEventListener('offline', updateNetworkStatus);

    function fetchOnlineTracks() {
      fetch(apiUrl)
        .then(res => {
          if (!res.ok) throw new Error("API Limit or Network Issue");
          return res.json();
        })
        .then(data => {
          if (!Array.isArray(data)) {
            container.innerHTML = '<p id="status">Could not load repository content.</p>';
            return;
          }
          // Match mp4, mov, mkv, webm (case-insensitive)
          allFiles = data.filter(item => item.type === 'file' && /\.(mp4|mov|mkv|webm)$/i.test(item.name));
          renderGrid(allFiles);
        })
        .catch(() => loadOfflineTracks());
    }

    async function loadOfflineTracks() {
      const cache = await caches.open('gitmum-media');
      const keys = await cache.keys();
      
      if (keys.length === 0) {
        container.innerHTML = '<p id="status">No saved offline tracks found.</p>';
        return;
      }

      container.innerHTML = '';
      keys.forEach(request => {
        const url = request.url;
        const filename = url.substring(url.lastIndexOf('/') + 1);
        const cleanTitle = decodeURIComponent(filename).replace(/\.(mp4|mov|mkv|webm)$/i, '');

        const card = document.createElement('div');
        card.className = 'card';
        card.onclick = () => openVideo(url, cleanTitle);

        card.innerHTML = `
          <div class="card-thumb">
            <div class="play-overlay">▶</div>
          </div>
          <div class="card-info">
            <div class="card-title">${cleanTitle}</div>
            <div class="card-meta"><span class="badge-offline">⚡ Saved Offline</span></div>
          </div>
        `;
        container.appendChild(card);
      });
    }

    function renderGrid(files) {
      if (files.length === 0) {
        container.innerHTML = '<p id="status">No video tracks found in repository.</p>';
        return;
      }
      container.innerHTML = '';
      files.forEach(file => {
        const cleanTitle = file.name.replace(/\.(mp4|mov|mkv|webm)$/i, '');
        const card = document.createElement('div');
        card.className = 'card';
        card.onclick = () => openVideo(file.download_url, cleanTitle);

        card.innerHTML = `
          <div class="card-thumb">
            <div class="play-overlay">▶</div>
          </div>
          <div class="card-info">
            <div class="card-title">${cleanTitle}</div>
            <div class="card-meta">gitmum • Media</div>
          </div>
        `;
        container.appendChild(card);
      });
    }

    async function downloadTrackLocally() {
      if (!currentFileUrl) return;
      downloadAppBtn.innerText = '⏳ Saving...';
      try {
        const cache = await caches.open('gitmum-media');
        await cache.add(currentFileUrl);
        downloadAppBtn.innerText = '✓ Saved Offline';
      } catch (err) {
        downloadAppBtn.innerText = '❌ Failed';
      }
    }

    async function checkSavedState(url) {
      const cache = await caches.open('gitmum-media');
      const match = await cache.match(url);
      downloadAppBtn.innerText = match ? '✓ Saved Offline' : '💾 Save Offline';
    }

    function openVideo(url, title) {
      currentTitleClean = title;
      currentFileUrl = url;
      mainTitle.innerText = title;
      playerSection.style.display = 'grid';
      window.scrollTo({ top: 0, behavior: 'smooth' });

      // Stream directly from raw URL to allow fast playback
      mainPlayer.src = url;
      
      checkSavedState(url);
      safePlay();
    }

    function closePlayer() {
      mainPlayer.pause();
      playerSection.style.display = 'none';
    }

    function safePlay() {
      const playPromise = mainPlayer.play();
      if (playPromise !== undefined) {
        playPromise.then(() => playBtn.innerText = '❚❚').catch(() => playBtn.innerText = '▶');
      }
    }

    function togglePlay() {
      if (mainPlayer.paused) { safePlay(); } else { mainPlayer.pause(); playBtn.innerText = '▶'; }
    }

    function toggleMute() {
      mainPlayer.muted = !mainPlayer.muted;
      muteBtn.innerText = mainPlayer.muted ? '🔇' : '🔊';
    }

    function seekVideo(val) {
      if (mainPlayer.duration) mainPlayer.currentTime = (val / 100) * mainPlayer.duration;
    }

    mainPlayer.addEventListener('timeupdate', () => {
      if (mainPlayer.duration) seekBar.value = (mainPlayer.currentTime / mainPlayer.duration) * 100;
    });

    updateNetworkStatus();
  </script>
</body>
</html>
