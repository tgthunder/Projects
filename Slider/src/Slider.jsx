import React, { useEffect, useRef, useState } from "react";
import buttabomma from "/src/assets/buttabomma.mp3";
function Slider() {
  const [currentTime, setCurrentTime] = useState(0); // Current song time in seconds
  const [volume, setVolume] = useState(50); // Volume percentage
  const [isPlaying, setIsPlaying] = useState(false); // Track if the song is playing
  const [duration, setDuration] = useState(0); // Total duration of the song in seconds
  const audioRef = useRef(null); // Reference to the audio element

  const defaultLogo = "https://cdn-icons-png.freepik.com/512/2/2337.png";
  const muteLogo =
    "https://media.istockphoto.com/id/1305893663/vector/silent-sound-off-icon-vector-for-your-web-design-logo-ui-illustration.jpg?s=612x612&w=0&k=20&c=czrINWt2weKC3fLHU3KqI2eZBFdwhOuuCZxS5JNGpSU=";
  const playIcon = "https://cdn-icons-png.flaticon.com/512/4029/4029084.png";
  const pauseIcon = "https://static.vecteezy.com/system/resources/previews/001/505/065/non_2x/pause-video-icon-free-vector.jpg";
  const [playbackIcon, setPlaybackIcon] = useState(playIcon);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
    setPlaybackIcon(isPlaying ? playIcon : pauseIcon);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleVolumeChange = (newVolume) => {
    setVolume(newVolume);
    audioRef.current.volume = newVolume / 100;
  };

  const increaseVolume = () => {
    if (volume < 100) handleVolumeChange(volume + 10);
  };

  const decreaseVolume = () => {
    if (volume > 0) handleVolumeChange(volume - 10);
  };

  useEffect(() => {
    const audio = audioRef.current;
    const updateDuration = () => setDuration(audio.duration);

    audio.addEventListener("loadedmetadata", updateDuration);
    return () => audio.removeEventListener("loadedmetadata", updateDuration);
  }, []);

  return (
    <div className="flex flex-col bg-white p-4 my-4 rounded-lg shadow-md">
      <audio
        ref={audioRef}
        src= {buttabomma}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => {
          setIsPlaying(false);
          setPlaybackIcon(playIcon);
        }}
      ></audio>

      <div className="flex justify-between items-center gap-8">
        {/* Song Playing Slider */}
        <div className="flex-1">
          <div className="flex items-center gap-4">
            <span>{formatTime(currentTime)}</span>
            <input
              type="range"
              min="0"
              max={duration}
              value={currentTime}
              className="flex-1 cursor-pointer appearance-none h-2 bg-gray-700 rounded-lg accent-blue-700"
              onChange={(e) => {
                const newTime = Number(e.target.value);
                setCurrentTime(newTime);
                audioRef.current.currentTime = newTime;
              }}
            />
            <span>{formatTime(duration)}</span>
          </div>

          {/* Playback Controls */}
          <div className="flex justify-center gap-4 mt-4">
            <button className="bg-white w-10 h-10 p-2 rounded-lg active:bg-slate-300">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2VeIjfOnnq2urLXuSoW5wbvy8CmejApCSiw&s"
                alt="Backward"
              />
            </button>
            <button
              className="bg-white text-white border w-10 h-10 p-2 rounded-lg flex justify-center items-center"
              onClick={togglePlayPause}
            >
              <img src={playbackIcon} alt="Playback Control" className="w-8 h-8" />
            </button>
            <button className="text-white w-10 h-10 p-2 rounded-lg active:bg-slate-300">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiDo6-ooHnwMmmabroCgo8i0iX2SJw-IZ4_w&s"
                alt="Forward Button"
              />
            </button>
          </div>
        </div>

        {/* Volume Control */}
        <div className="flex items-center gap-4">
          <button
            onClick={decreaseVolume}
            className="bg-red-500 text-white px-2 py-1 rounded-lg hover:bg-red-600"
          >
            -
          </button>
          <div className="text-gray-700 w-10 h-10 p-1">
            <img
              src={volume === 0 ? muteLogo : defaultLogo}
              alt="Volume"
            />
          </div>
          <button
            onClick={increaseVolume}
            className="bg-green-500 text-white px-2 py-1 rounded-lg hover:bg-green-600"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default Slider;
