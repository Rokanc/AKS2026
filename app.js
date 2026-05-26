(function () {
  const TARGET_ASPECT = 2438 / 1728;

  const arShell = document.getElementById("ar-shell");
  const welcomePanel = document.getElementById("welcome-panel");
  const startBtn = document.getElementById("start-ar");
  const stopBtn = document.getElementById("stop-ar");
  const httpsHint = document.getElementById("https-hint");
  const loadingOverlay = document.getElementById("loading-overlay");
  const scanHint = document.getElementById("scan-hint");
  const foundBadge = document.getElementById("found-badge");
  const errorOverlay = document.getElementById("error-overlay");
  const errorBackBtn = document.getElementById("error-back");

  const sceneEl = document.getElementById("ar-scene");
  const targetEl = document.getElementById("image-target");
  const videoEl = document.getElementById("ar-video");
  const overlayVideoEl = document.getElementById("overlay-video");

  let arStarted = false;

  if (location.protocol === "file:") {
    httpsHint.classList.remove("hidden");
  }

  overlayVideoEl.setAttribute("height", String(TARGET_ASPECT));

  function showWelcome() {
    arShell.classList.remove("ar-active");
    welcomePanel.classList.remove("hidden");
    stopBtn.classList.add("hidden");
    errorOverlay.classList.add("hidden");
    foundBadge.classList.add("hidden");
    scanHint.classList.add("hidden");
    loadingOverlay.classList.add("hidden");
    arStarted = false;
    startBtn.disabled = false;
  }

  function showArMode() {
    arShell.classList.add("ar-active");
    welcomePanel.classList.add("hidden");
    stopBtn.classList.remove("hidden");
    loadingOverlay.classList.remove("hidden");
    scanHint.classList.remove("hidden");
  }

  async function playOverlay() {
    try {
      await videoEl.play();
    } catch (err) {
      console.warn("Video play blocked:", err);
    }
  }

  function pauseOverlay() {
    videoEl.pause();
    videoEl.currentTime = 0;
  }

  startBtn.addEventListener("click", () => {
    if (arStarted) return;
    arStarted = true;
    startBtn.disabled = true;
    showArMode();

    const mindarSystem = sceneEl.systems["mindar-image-system"];
    if (!mindarSystem) {
      console.error("MindAR system not found");
      errorOverlay.classList.remove("hidden");
      return;
    }

    mindarSystem.start();
  });

  stopBtn.addEventListener("click", () => {
    const mindarSystem = sceneEl.systems["mindar-image-system"];
    if (mindarSystem) {
      mindarSystem.stop();
    }
    pauseOverlay();
    showWelcome();
  });

  errorBackBtn.addEventListener("click", showWelcome);

  sceneEl.addEventListener("arReady", () => {
    loadingOverlay.classList.add("hidden");
  });

  sceneEl.addEventListener("arError", () => {
    loadingOverlay.classList.add("hidden");
    errorOverlay.classList.remove("hidden");
    pauseOverlay();
  });

  targetEl.addEventListener("targetFound", () => {
    foundBadge.classList.remove("hidden");
    scanHint.classList.add("hidden");
    playOverlay();
  });

  targetEl.addEventListener("targetLost", () => {
    foundBadge.classList.add("hidden");
    scanHint.classList.remove("hidden");
    pauseOverlay();
  });

  videoEl.addEventListener("loadeddata", () => {
    videoEl.muted = true;
  });
})();
