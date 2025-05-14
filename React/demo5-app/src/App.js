import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [playlist, setPlaylist] = useState([
    { id: 1, name: "Song 1", url: "" },
    { id: 2, name: "Song 2", url: "" },
    { id: 3, name: "Song 3", url: "" },
  ]);

  const [currentSong, setCurrentSong] = useState(null);
  const [todoList, setTodoList] = useState([]);
  const [task, setTask] = useState("");

  const playSong = (song) => {
    setCurrentSong(song);
  };

  const addTask = () => {
    if (task) {
      setTodoList([...todoList, task]);
      setTask("");
    }
  };

  return (
    <div className="app">
      <h1>Simple Spotify App</h1>
      
      <div className="section">
        <h2>Playlist</h2>
        <ul>
          {playlist.map((song) => (
            <li key={song.id}>
              {song.name} <button onClick={() => playSong(song)}>Play</button>
            </li>
          ))}
        </ul>
      </div>

      <div className="section">
        <h2>Music Player</h2>
        {currentSong ? (
          <p>Now Playing: {currentSong.name}</p>
        ) : (
          <p>No song playing</p>
        )}
      </div>

      <div className="section">
        <h2>To-Do List</h2>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a task"
        />
        <button onClick={addTask}>Add</button>
        <ul>
          {todoList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;