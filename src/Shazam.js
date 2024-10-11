import React, { useState } from "react";
const apiKey =process.env.SHZAM_API_KEY;

const Shazam = () => {
  const [songs, setSongs] = useState([]);

  const fetchData = async () => {
    const url =
      "https://shazam.p.rapidapi.com/charts/track?locale=en-US&pageSize=20&startFrom=0";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key":apiKey, 
        "x-rapidapi-host": "shazam.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options); // APIにリクエストを送る(曲の情報をもらう)

      const data = await response.json(); // 返ってきたデータをJSON形式に変換する
      // データの中のトラック情報をsongsに保存する(もらった情報をわかりやすい形にする)

      if (data) {
        setSongs(data.tracks);
      }else{
        console.log("NO tracks are found in the response.")
      }
    } catch (error) {
      console.error("catch error", error);
    }
  };

  return (
    <div>
      <h1>Shazam Top Songs</h1>
      <button onClick={fetchData}>Get Data</button>
      <table>
        <thead>
          <tr>
            <th>Artist Name</th>
            <th>Song Name</th>
            {/* <th>Release Date</th>
            <th>Album Name</th> */}
          </tr>
        </thead>
        <tbody>
          {songs.length > 0 ? (
          songs.map((song, index) => (
            <tr key={index}>
              <td>{song.subtitle}</td>
              <td>{song.title}</td>
           
            </tr>
          ))
        ) : (
          <tr>
            <td>could not find the songs.</td>
          </tr>
        )}
        </tbody>
      </table>
    </div>
  );
};

export default Shazam;
