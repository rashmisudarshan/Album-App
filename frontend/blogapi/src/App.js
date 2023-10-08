import React, { useEffect, useState } from 'react';
import './App.css';
import Albums from './components/Albums';
import AlbumLoadingComponent from './components/AlbumLoading';

function App() {
    const AlbumLoading = AlbumLoadingComponent(Albums);
    const [appState, setAppState] = useState({
   	 loading: false,
   	 albums: null,
    });

    useEffect(() => {
   	 setAppState({ loading: true });
   	 const apiUrl = `http://127.0.0.1:8000/api/`;
   	 fetch(apiUrl)
   		 .then((data) => data.json())
   		 .then((albums) => {
   			 setAppState({ loading: false, albums: albums});
   		 });
    }, [setAppState]);
    return (
   	 <div className="App">
   		 <h1>Albums</h1>
   		 <AlbumLoading isLoading={appState.loading} albums={appState.albums} />
   	 </div>
    );
}
export default App;