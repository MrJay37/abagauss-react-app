import React, { useState } from 'react';
import axios from 'axios';

const Shazam = () => {
  const [songs, setSongs] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    const url = 'https://shazam-core7.p.rapidapi.com/charts/get-top-songs-in-world?limit=10';

    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '60213c7527msh77afe0ae5c562f6p161139jsnb97fd88efd04',
        'x-rapidapi-host': 'shazam-core7.p.rapidapi.com'
      }
    };

    try {
      // APIにリクエストを送る
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      // 返ってきたデータをJSON形式に変換する
      const data = await response.json();
      // データの中のトラック情報をチェックしながらsongsに保存する
      if (data && data.tracks) {
        setSongs(data.tracks);
        setError(null); // エラーをリセット
      } else {
        setError('No tracks found.');
        setSongs([]); // 空にリセット
      }
    } catch (error) {
      console.error(error);
      setError('Failed to fetch data.');
    }
  };

  return (
    <div>
      <h1>Shazam Top Songs</h1>
      <button onClick={fetchData}>Get Data</button>
      
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* エラーメッセージを表示 */}

      <table>
        <thead>
          <tr>
            <th>Artist Name</th>
            <th>Song Name</th>
            <th>Release Date</th>
            <th>Album Name</th>
          </tr>
        </thead>
        <tbody>
          {songs.length > 0 ? (
            songs.map((song, index) => (
              <tr key={index}>
                <td>{song.subtitle}</td>
                <td>{song.title}</td>
                <td>{song.hub?.actions?.[0]?.metadata?.release_date || 'N/A'}</td>
                <td>{song.sections?.[0]?.metadata?.albumname || 'N/A'}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No songs available</td> {/* データがない場合のメッセージ */}
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Shazam;
