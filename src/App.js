import {useState, useEffect} from "react";
import './App.css';
import Header from './components/Header';
import Lyrics from './components/Lyrics';
import KeyDown from './components/Keydown';

function App() {
  // JSON dictionary object: songs[songTitle] = array of lyrics
  const [songs, setSongs] = useState({}); 
  // title of the current song
  const [song, setSong] = useState("Everyday")
  // index into songs object of current song
  const [songIndex, setSongIndex] = useState(0);
  // list of titles of songs
  const [songTitleList, setSongTitleList] = useState([])
  // current lyric index of current song
  const [lyricIndex, setLyricIndex] = useState(0);
  // boolean to either play lyrics or not
  const [playLyrics, setPlayLyrics] = useState(false);
  const [speedAdjustment, setSpeedAdjustment] = useState(0);

  const getData=()=>{
    fetch('songs.json', {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        }
    }).then(function(response){
        return response.json();
    }).then(function(myJson) {
        setSongs(myJson);
        const tempSongList = [];
        for(const key in myJson) {
          tempSongList.push(key);
        }
        setSongTitleList(tempSongList);
      });
  }

  useEffect(()=>{
    getData()
  },[]);

  function switchSong(increment){
    setLyricIndex(0);
    setSpeedAdjustment(0);
    setPlayLyrics(playLyrics => false);
    if(songIndex === 0 && increment < 0) {
      setSongIndex(songIndex => songTitleList.length - 1);
      setSong(songTitleList[songTitleList.length - 1]);
    }
    else if(songIndex === songTitleList.length - 1 && increment > 0) {
      setSongIndex(songIndex => 0);
      setSong(songTitleList[0]);
    }
    else {
      console.log('hello');
      console.log(songTitleList);
      console.log(songs);
      setSong(songTitleList[songIndex + increment]);
      setSongIndex(songIndex => songIndex + increment);
      console.log(song);
      console.log(songIndex);
    }
  }


  useEffect(() => {
    let interval = null;
    if (playLyrics) {
      interval = setInterval(() => {
        if (songs[song] && lyricIndex === songs[song].length - 1) {
          switchSong(1);
        }
        else {
          setLyricIndex(lyricIndex => lyricIndex + 1);
        }
      }, songs[song][lyricIndex].time + speedAdjustment);
    } else if (!playLyrics && lyricIndex !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [playLyrics, lyricIndex]);

  
  //KeyDown("e", () => {switchSong(1)});
  //KeyDown("e", () => {switchSong(1)});
  KeyDown("p", () => {setPlayLyrics(true)});
  KeyDown("s", () => {setPlayLyrics(false)});
  KeyDown("f", () => {setSpeedAdjustment(speedAdjustment - 500)});
  KeyDown("r", () => {setSpeedAdjustment(speedAdjustment + 500)});



  let content = null;

  if (songs && songs["Everyday"]) {
    content = (
      <div className="App">
        <Header speedAdjustment={speedAdjustment} changeSpeed={setSpeedAdjustment} song={song} switchSong={switchSong} play={setPlayLyrics} isPlaying={playLyrics}/>
        <Lyrics lyricIndex={lyricIndex} songs={songs} song={song}/>
      </div>
    );
  }

  return content;
}

export default App;