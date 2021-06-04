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

  const [speedAdjustment, setSpeedAdjustment] = useState(0);

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
      });
  }

  useEffect(()=>{
    getData()
  },[])

  const switchSong=(increment)=>{
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
      setSong(songTitleList[songIndex + increment]);
      setSongIndex(songIndex => songIndex + increment);
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
      }, songs[song][lyricIndex][1] + speedAdjustment);
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
          <div style={{float:'right', width:'1100px'}}>
            <Button style={{margin: '15px', fontSize: '20px', backgroundColor: '#CDCDCD', maxWidth: '130px', maxHeight: '100px', minWidth: '130px', minHeight: '100px'}} color="secondary" onClick={() => {setPlayLyrics(playLyrics => true)}}>Start</Button>
            <Button style={{margin: '15px', fontSize: '20px', backgroundColor: '#CDCDCD', maxWidth: '130px', maxHeight: '100px', minWidth: '130px', minHeight: '100px'}} color="secondary" onClick={() => {setPlayLyrics(playLyrics => false)}}>Stop</Button>
            <Button style={{margin: '15px', fontSize: '20px', backgroundColor: '#CDCDCD', maxWidth: '130px', maxHeight: '100px', minWidth: '130px', minHeight: '100px'}} color="secondary" onClick={() => switchSong(-1)}>Back</Button>
            <Button style={{margin: '15px', fontSize: '20px', backgroundColor: '#CDCDCD', maxWidth: '130px', maxHeight: '100px', minWidth: '130px', minHeight: '100px'}} color="secondary" onClick={() => switchSong(1)}>Forward</Button>
            <Button style={{margin: '10px', fontSize: '20px', backgroundColor: '#CDCDCD', maxWidth: '80px', maxHeight: '80px', minWidth: '80px', minHeight: '80px'}} color="secondary" onClick={() => {setSpeedAdjustment(speedAdjustment => speedAdjustment + 500)}}>Slow Down</Button>
            <p style={{margin: '5px', fontSize: '20px', display: 'inline'}}>{speedAdjustment == 0 ? '' : speedAdjustment > 0 ? 'Slow ' : 'Speed '}{speedAdjustment > 0 ? speedAdjustment : -1*speedAdjustment}</p>
            <Button style={{margin: '10px', fontSize: '20px', backgroundColor: '#CDCDCD', maxWidth: '80px', maxHeight: '80px', minWidth: '80px', minHeight: '80px'}} color="secondary" onClick={() => {setSpeedAdjustment(speedAdjustment => speedAdjustment - 500)}}>Speed Up</Button>
            <Button style={{margin: '10px', fontSize: '20px', backgroundColor: '#CDCDCD', maxWidth: '80px', maxHeight: '80px', minWidth: '80px', minHeight: '80px'}} color="secondary" onClick={() => {setSpeedAdjustment(speedAdjustment => 0)}}>Reset</Button>
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