document.addEventListener('DOMContentLoaded', () => {
    const playButton = document.querySelector('.play');
    const currentSong = document.querySelector('.current-song');

    playButton.addEventListener('click', () => {
        const isPlaying = playButton.textContent === '⏸️';
        playButton.textContent = isPlaying ? '▶️' : '⏸️';
        currentSong.textContent = isPlaying
            ? 'No song playing'
            : 'Playing: Example Song';
    });
});
