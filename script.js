
function toggleMusic() {
    const audio = document.getElementById('bgMusic');
    const btn = document.getElementById('playPause');
    if (audio.paused) {
        audio.play();
        btn.textContent = '⏸';
    } else {
        audio.pause();
        btn.textContent = '▶️';
    }
}
function copyDiscord() {
    navigator.clipboard.writeText('ok.1.1').then(() => {
        alert('Discord copied');
    });
}
