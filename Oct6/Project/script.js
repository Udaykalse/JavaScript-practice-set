class VideoPlayer {
  constructor() {
    this.initializeElements();
    this.initializeEventListeners();
    this.deviceType = this.detectDeviceType();
    this.isPlaying = false;
    this.isFullscreen = false;
    this.isSettingsOpen = false;
  }

  initializeElements() {
    // Video elements
    this.videoContainer = document.querySelector(".video-container");
    this.container = document.querySelector(".container");
    this.myVideo = document.getElementById("my-video");
    this.rotateContainer = document.querySelector(".rotate-container");
    
    // Control elements
    this.videoControls = document.querySelector(".controls");
    this.playButton = document.getElementById("play-btn");
    this.pauseButton = document.getElementById("pauseButton");
    this.skipBackward = document.getElementById("skip-backward");
    this.skipForward = document.getElementById("skip-forward");
    
    // Volume elements
    this.volume = document.getElementById("volume");
    this.volumeRange = document.getElementById("volume-range");
    this.volumeNum = document.getElementById("volume-num");
    this.high = document.getElementById("high");
    this.low = document.getElementById("low");
    this.mute = document.getElementById("mute");
    
    // Screen size elements
    this.sizeScreen = document.getElementById("size-screen");
    this.screenCompress = document.getElementById("screen-compress");
    this.screenExpand = document.getElementById("screen-expand");
    
    // Progress elements
    this.currentProgress = document.getElementById("current-progress");
    this.bufferProgress = document.getElementById("buffer-progress");
    this.currentTimeRef = document.getElementById("current-time");
    this.maxDuration = document.getElementById("max-duration");
    this.progressBar = document.getElementById("progress-bar");
    
    // Playback speed elements
    this.playbackSpeedButton = document.getElementById("playback-speed-btn");
    this.playbackContainer = document.querySelector(".playback");
    this.playbackSpeedOptions = document.querySelector(".playback-options");
    
    // Quality elements
    this.qualityButton = document.getElementById("quality-btn");
    this.qualityContainer = document.querySelector(".quality-selector");
    this.qualityOptions = document.querySelector(".quality-options");
    
    // Additional features
    this.captionsButton = document.getElementById("captions-btn");
    this.pipButton = document.getElementById("pip-btn");
    this.settingsMenu = document.querySelector(".settings-menu");
    this.loadingSpinner = document.querySelector(".loading-spinner");
    this.errorMessage = document.querySelector(".error-message");
    this.retryButton = document.querySelector(".retry-btn");
    this.playlistItems = document.querySelectorAll(".playlist-item");
    
    // Events object
    this.events = {
      mouse: { click: "click" },
      touch: { click: "touchstart" }
    };
  }

  detectDeviceType() {
    try {
      document.createEvent("TouchEvent");
      return "touch";
    } catch (e) {
      return "mouse";
    }
  }

  initializeEventListeners() {
    // Play/Pause controls
    this.playButton.addEventListener("click", () => this.playVideo());
    this.pauseButton.addEventListener("click", () => this.pauseVideo());
    this.skipBackward.addEventListener("click", () => this.skip(-10));
    this.skipForward.addEventListener("click", () => this.skip(10));
    
    // Video events
    this.myVideo.addEventListener("loadedmetadata", () => this.onVideoLoaded());
    this.myVideo.addEventListener("waiting", () => this.showLoading());
    this.myVideo.addEventListener("canplay", () => this.hideLoading());
    this.myVideo.addEventListener("error", () => this.showError());
    this.myVideo.addEventListener("timeupdate", () => this.updateProgress());
    this.myVideo.addEventListener("progress", () => this.updateBuffer());
    
    // Volume controls
    this.volumeRange.addEventListener("input", () => this.handleVolumeChange());
    this.high.addEventListener("click", () => this.muteVideo());
    this.low.addEventListener("click", () => this.muteVideo());
    this.mute.addEventListener("click", () => this.unmuteVideo());
    
    // Fullscreen controls
    this.screenExpand.addEventListener("click", () => this.enterFullscreen());
    this.screenCompress.addEventListener("click", () => this.exitFullscreen());
    document.addEventListener("fullscreenchange", () => this.handleFullscreenChange());
    document.addEventListener("webkitfullscreenchange", () => this.handleFullscreenChange());
    document.addEventListener("mozfullscreenchange", () => this.handleFullscreenChange());
    document.addEventListener("MSFullscreenchange", () => this.handleFullscreenChange());
    
    // Playback speed
    this.playbackContainer.addEventListener("click", () => this.togglePlaybackOptions());
    this.playbackSpeedOptions.addEventListener("click", (e) => {
      if (e.target.dataset.speed) {
        this.setPlaybackSpeed(parseFloat(e.target.dataset.speed));
      }
    });
    
    // Quality selector
    this.qualityContainer.addEventListener("click", () => this.toggleQualityOptions());
    this.qualityOptions.addEventListener("click", (e) => {
      if (e.target.dataset.quality) {
        this.setQuality(e.target.dataset.quality);
      }
    });
    
    // Progress bar
    this.progressBar.addEventListener(this.events[this.deviceType].click, (e) => this.handleProgressClick(e));
    
    // Additional features
    this.pipButton.addEventListener("click", () => this.togglePictureInPicture());
    this.retryButton.addEventListener("click", () => this.retryLoad());
    
    // Playlist
    this.playlistItems.forEach(item => {
      item.addEventListener("click", () => this.loadVideo(item.dataset.src));
    });
    
    // Keyboard shortcuts
    document.addEventListener("keydown", (e) => this.handleKeyboard(e));
    
    // Hide menus when clicking outside
    document.addEventListener("click", (e) => this.handleClickOutside(e));
    
    // Initialize
    this.initializeVolumeSlider();
  }

  // Video control methods
  playVideo() {
    this.myVideo.play();
    this.playButton.classList.add("hide");
    this.pauseButton.classList.remove("hide");
    this.isPlaying = true;
  }

  pauseVideo() {
    this.myVideo.pause();
    this.pauseButton.classList.add("hide");
    this.playButton.classList.remove("hide");
    this.isPlaying = false;
  }

  skip(seconds) {
    this.myVideo.currentTime += seconds;
  }

  // Volume control methods
  initializeVolumeSlider() {
    this.updateVolumeSlider();
  }

  updateVolumeSlider() {
    const valPercent = (this.volumeRange.value / this.volumeRange.max) * 100;
    this.volumeRange.style.background = `linear-gradient(to right, #2887e3 ${valPercent}%, #000000 ${valPercent}%)`;
  }

  handleVolumeChange() {
    const volumeValue = this.volumeRange.value / 100;
    this.myVideo.volume = volumeValue;
    this.volumeNum.innerHTML = this.volumeRange.value;
    this.updateVolumeSlider();
    this.updateVolumeIcons();
  }

  updateVolumeIcons() {
    const volume = this.volumeRange.value;
    
    this.high.classList.add("hide");
    this.low.classList.add("hide");
    this.mute.classList.add("hide");

    if (volume == 0) {
      this.mute.classList.remove("hide");
    } else if (volume < 50) {
      this.low.classList.remove("hide");
    } else {
      this.high.classList.remove("hide");
    }
  }

  muteVideo() {
    this.myVideo.volume = 0;
    this.volumeRange.value = 0;
    this.volumeNum.innerHTML = "0";
    this.updateVolumeSlider();
    this.updateVolumeIcons();
  }

  unmuteVideo() {
    this.myVideo.volume = 0.5;
    this.volumeRange.value = 50;
    this.volumeNum.innerHTML = "50";
    this.updateVolumeSlider();
    this.updateVolumeIcons();
  }

  // Progress and time methods
  onVideoLoaded() {
    this.maxDuration.innerText = this.timeFormatter(this.myVideo.duration);
  }

  timeFormatter(timeInput) {
    const minute = Math.floor(timeInput / 60).toString().padStart(2, '0');
    const second = Math.floor(timeInput % 60).toString().padStart(2, '0');
    return `${minute}:${second}`;
  }

  updateProgress() {
    this.currentTimeRef.innerHTML = this.timeFormatter(this.myVideo.currentTime);
    const progressPercent = (this.myVideo.currentTime / this.myVideo.duration) * 100;
    this.currentProgress.style.width = `${progressPercent}%`;
  }

  updateBuffer() {
    if (this.myVideo.buffered.length > 0) {
      const bufferedEnd = this.myVideo.buffered.end(this.myVideo.buffered.length - 1);
      const duration = this.myVideo.duration;
      if (duration > 0) {
        const bufferPercent = (bufferedEnd / duration) * 100;
        this.bufferProgress.style.width = `${bufferPercent}%`;
      }
    }
  }

  handleProgressClick(event) {
    const rect = this.progressBar.getBoundingClientRect();
    const clickX = this.deviceType === "mouse" ? event.clientX : event.touches[0].clientX;
    const progress = (clickX - rect.left) / this.progressBar.offsetWidth;
    
    this.currentProgress.style.width = `${progress * 100}%`;
    this.myVideo.currentTime = progress * this.myVideo.duration;
    
    if (!this.isPlaying) {
      this.playVideo();
    }
  }

  // Playback speed methods
  togglePlaybackOptions() {
    this.playbackSpeedOptions.classList.toggle("hide");
    this.qualityOptions.classList.add("hide");
  }

  setPlaybackSpeed(speed) {
    this.myVideo.playbackRate = speed;
    this.playbackSpeedButton.innerText = speed === 1 ? "1x" : `${speed}x`;
    this.playbackSpeedOptions.classList.add("hide");
  }

  // Quality methods
  toggleQualityOptions() {
    this.qualityOptions.classList.toggle("hide");
    this.playbackSpeedOptions.classList.add("hide");
  }

  setQuality(quality) {
    // In a real application, you would switch video sources here
    console.log(`Quality set to: ${quality}p`);
    this.qualityOptions.classList.add("hide");
  }

  // Fullscreen methods
  async enterFullscreen() {
    try {
      if (this.videoContainer.requestFullscreen) {
        await this.videoContainer.requestFullscreen();
      } else if (this.videoContainer.webkitRequestFullscreen) {
        await this.videoContainer.webkitRequestFullscreen();
      } else if (this.videoContainer.mozRequestFullScreen) {
        await this.videoContainer.mozRequestFullScreen();
      } else if (this.videoContainer.msRequestFullscreen) {
        await this.videoContainer.msRequestFullscreen();
      }
    } catch (err) {
      console.error("Fullscreen API not supported:", err);
    }
  }

  exitFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  }

  handleFullscreenChange() {
    this.isFullscreen = !!(
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.mozFullScreenElement ||
      document.msFullscreenElement
    );

    if (this.isFullscreen) {
      this.screenCompress.classList.remove("hide");
      this.screenExpand.classList.add("hide");
      
      if (this.deviceType === "touch") {
        const screenOrientation = screen.orientation || screen.mozOrientation || screen.msOrientation;
        if (screenOrientation && screenOrientation.type === "portrait-primary") {
          this.showRotateMessage();
        }
      }
    } else {
      this.screenCompress.classList.add("hide");
      this.screenExpand.classList.remove("hide");
    }
  }

  showRotateMessage() {
    this.pauseVideo();
    this.rotateContainer.classList.remove("hide");
    setTimeout(() => {
      this.rotateContainer.classList.add("hide");
    }, 3000);
  }

  // Picture in Picture
  async togglePictureInPicture() {
    try {
      if (document.pictureInPictureElement) {
        await document.exitPictureInPicture();
      } else if (document.pictureInPictureEnabled) {
        await this.myVideo.requestPictureInPicture();
      }
    } catch (err) {
      console.error("Picture in Picture not supported:", err);
    }
  }

  // Loading and error handling
  showLoading() {
    this.loadingSpinner.classList.remove("hide");
  }

  hideLoading() {
    this.loadingSpinner.classList.add("hide");
  }

  showError() {
    this.errorMessage.classList.remove("hide");
    this.loadingSpinner.classList.add("hide");
  }

  retryLoad() {
    this.errorMessage.classList.add("hide");
    this.myVideo.load();
    this.playVideo();
  }

  // Playlist methods
  loadVideo(src) {
    this.myVideo.src = src;
    this.playlistItems.forEach(item => item.classList.remove("active"));
    event.currentTarget.classList.add("active");
    this.playVideo();
  }

  // Keyboard shortcuts
  handleKeyboard(event) {
    if (event.target.tagName === 'INPUT') return;

    switch (event.key.toLowerCase()) {
      case ' ':
      case 'k':
        event.preventDefault();
        this.isPlaying ? this.pauseVideo() : this.playVideo();
        break;
      case 'f':
        this.isFullscreen ? this.exitFullscreen() : this.enterFullscreen();
        break;
      case 'm':
        this.volumeRange.value == 0 ? this.unmuteVideo() : this.muteVideo();
        break;
      case 'arrowleft':
        event.preventDefault();
        this.skip(-5);
        break;
      case 'arrowright':
        event.preventDefault();
        this.skip(5);
        break;
      case 'arrowup':
        event.preventDefault();
        this.volumeRange.value = Math.min(100, parseInt(this.volumeRange.value) + 10);
        this.handleVolumeChange();
        break;
      case 'arrowdown':
        event.preventDefault();
        this.volumeRange.value = Math.max(0, parseInt(this.volumeRange.value) - 10);
        this.handleVolumeChange();
        break;
    }
  }

  // Utility methods
  handleClickOutside(event) {
    if (!this.playbackContainer.contains(event.target)) {
      this.playbackSpeedOptions.classList.add("hide");
    }
    if (!this.qualityContainer.contains(event.target)) {
      this.qualityOptions.classList.add("hide");
    }
  }
}

// Initialize the video player when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new VideoPlayer();
});