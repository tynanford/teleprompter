import {useState, useEffect} from "react";
import { Button, AppBar, Toolbar } from '@material-ui/core';
import './App.css';

function App() {
  // JSON dictionary object: songs[songTitle] = array of lyrics
  const [songs, setSongs] = useState({});
  // title of the current song
  const [song, setSong] = useState("Every Day I Have the Blues")
  // index into songs object of current song
  const [songIndex, setSongIndex] = useState(0);
  // list of titles of songs
  const [songTitleList, setSongTitleList] = useState([])
  // current lyric index of current song
  const [lyricIndex, setLyricIndex] = useState(0);
  // boolean to either play lyrics or not
  const [playLyrics, setPlayLyrics] = useState(false);

  const getData=()=>{
    fetch('songs.json', {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        }
    }
    ).then(function(response){
        return response.json();
      })
      .then(function(myJson) {
        setSongs(myJson);
        const tempSongList = [];
        for(const key in myJson) {
          tempSongList.push(key);
        }
        setSongTitleList(tempSongList);
        console.log(myJson);
      });
  }

  useEffect(()=>{
    getData()
  },[])

  const switchSong=(increment)=>{
    setLyricIndex(0);
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
      setSong(songTitleList[songIndex + increment]);
      setSongIndex(songIndex => songIndex + increment);
      console.log(songs[song].length);
    }
  };

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
      }, songs[song][lyricIndex][1]);
    } else if (!playLyrics && lyricIndex !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [playLyrics, lyricIndex]);


  let content = null;

  const topBar = (
    <div style={{background:'grey', width:'100%'}}>  
      <AppBar position="fixed">
        <Toolbar>
          <div style={{float:'left', width:'800px'}}>
            <h1>{song}</h1>
          </div>
          <div style={{float:'right', width:'800px'}}>
            <Button style={{margin: '20px', fontSize: '20px', backgroundColor: '#CDCDCD', maxWidth: '150px', maxHeight: '100px', minWidth: '150px', minHeight: '100px'}} color="secondary" onClick={() => {setPlayLyrics(playLyrics => true)}}>Start</Button>
            <Button style={{margin: '20px', fontSize: '20px', backgroundColor: '#CDCDCD', maxWidth: '150px', maxHeight: '100px', minWidth: '150px', minHeight: '100px'}} color="secondary" onClick={() => {setPlayLyrics(playLyrics => false)}}>Stop</Button>
            <Button style={{margin: '20px', fontSize: '20px', backgroundColor: '#CDCDCD', maxWidth: '150px', maxHeight: '100px', minWidth: '150px', minHeight: '100px'}} color="secondary" onClick={() => switchSong(-1)}>Back</Button>
            <Button style={{margin: '20px', fontSize: '20px', backgroundColor: '#CDCDCD', maxWidth: '150px', maxHeight: '100px', minWidth: '150px', minHeight: '100px'}} color="secondary" onClick={() => switchSong(1)}>Forward</Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );

  if (songs && songs["Every Day I Have the Blues"]) {
    content = (
      <div className="App">
        <header className="App-header">
          {topBar}
          <h1>{lyricIndex > 1 ? songs[song][lyricIndex-2][0] : ''}</h1>
          <h1>{lyricIndex > 0 ? songs[song][lyricIndex-1][0] : ''}</h1>
          <h1 style={{color: 'yellow', textDecoration: 'underline'}}>{songs[song][lyricIndex][0]}</h1>
          <h1>{lyricIndex < songs[song].length - 1 ? songs[song][lyricIndex+1][0] : ''}</h1>
          <h1>{lyricIndex < songs[song].length - 2 ? songs[song][lyricIndex+2][0] : ''}</h1>
        </header>
      </div>
    );
  }

  return content;
}

export default App;