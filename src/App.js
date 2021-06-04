import {useState, useEffect} from "react";
import './App.css';

function App() {

  const [songs, setSongs] = useState({});
  const [song, setSong] = useState("Every Day I Have the Blues")
  const [songIndex, setSongIndex] = useState(0);
  const [songList, setSongList] = useState([])
  const [seconds, setSeconds] = useState(20);
  const [isActive, setIsActive] = useState(true);


  const getData=()=>{
    fetch('songs.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        //console.log(myJson);

        setSongs(myJson);
        const tempSongList = [];
        for(const key in myJson) {
          tempSongList.push(key);
        }
        setSongList(tempSongList);
        //Store in state
      });
  }

  useEffect(()=>{
    getData()
  },[])

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        if (songs[song] && seconds == songs[song].length) {
          setSeconds(0);
          setSongIndex(songIndex => songIndex + 1);
          console.log(songList, songIndex);
          setSong(songList[songIndex]);
        }
        else {
          setSeconds(seconds => seconds + 1);
        }
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  // for(const song in songs) {
  //   //console.log(song);
  //   console.log(songs[song][0]);
  //   for(const index in songs[song]) {
  //     lyric = songs[song][index];
  //     //setLyric(songs[song][index]);
  //     //setTimeout(function () {}, 50000);
  //   }
  // }

  let content = null;
  if (songs && songs["Every Day I Have the Blues"]) {
  //if(songList.length == 38) {


  const naviagtionBar = (
    <div>
      <button>test</button>
    </div>

  );


  content = (
        <div className="App">
          <header className="App-header">
            {naviagtionBar}
            <h4>{songs[song][seconds]}</h4>
          </header>
        </div>
      );
  }

  return content;
}

export default App;


//onClick={() => {setStateItem(newItem)}}