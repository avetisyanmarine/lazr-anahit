import { MusicPagePart } from "./styled";
import Pause from "../../assets/vectors/pause.svg";
import Play from "../../assets/vectors/play.svg";
import Song from "../../assets/audio/song.mp3";
import { useEffect, useRef, useState } from "react";

export const MusicPage = ({ isPlaying }) => {
  const audioRef = useRef(null);
  const [manualPlay, setManualPlay] = useState(false);

  useEffect(() => {
    if (isPlaying && audioRef.current) {
      // Սահմանում ենք 20-րդ վայրկյանը
      audioRef.current.currentTime = 20;

      audioRef.current
        .play()
        .catch((err) => console.log("Playback error:", err));
      setManualPlay(true);
    }
  }, [isPlaying]);

  const handleClick = () => {
    if (!audioRef.current) return;

    if (manualPlay) {
      audioRef.current.pause();
    } else {
      // Եթե երգը կանգնեցրել էին և նորից ենք միացնում,
      // այն կշարունակի այնտեղից, որտեղ կանգնել էր
      audioRef.current
        .play()
        .catch((err) => console.log("Playback error:", err));
    }
    setManualPlay(!manualPlay);
  };

  return (
    <MusicPagePart>
      <div>
        <h4 className="text-[16px]">Erb Sirum es Indz</h4>
      </div>
      <div onClick={handleClick} style={{ cursor: "pointer" }}>
        <img src={manualPlay ? Pause : Play} alt="music-control" />
      </div>
      <audio ref={audioRef} src={Song} loop />
    </MusicPagePart>
  );
};
