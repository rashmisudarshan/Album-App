import React, { useEffect, useState } from 'react';
import './App.css';
import AdminAlbums from './components/AdminAlbums';
import AlbumLoadingComponent from './components/AlbumLoading';
import axiosInstance from './axios';


function Admin() {
	const AlbumLoading = AlbumLoadingComponent(AdminAlbums);
	const [appState, setAppState] = useState({
		loading: true,
		albums: null,
	});

	useEffect(() => {
		axiosInstance.get().then((res) => {
			const allAlbums = res.data;
			setAppState({ loading: false, albums: allAlbums });
			console.log(res.data);
		});
	}, [setAppState]);

	return (
		<div className="App">
			<h1>Albums</h1>
			<AlbumLoading isLoading={appState.loading} albums={appState.albums} />
		</div>
	);
}
export default Admin;