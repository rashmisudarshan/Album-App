import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
//MaterialUI
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Link from '@material-ui/core/Link';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
}));

export default function Album() {
	
    const { id } = useParams();
	const classes = useStyles();

	const [data, setData] = useState({ albums: [] });	
	const [apiData, setApiData] = useState({ albumData: [] });
	

    useEffect(() => {
   	 
   	 const apiUrl = `http://127.0.0.1:8000/api/albums/`;
	 const test = apiUrl.concat(id);
	 
   	 fetch(test)
   		 .then((data) => data.json())
   		 .then((albums) => {setData({ albums: albums});})
		 
    }, [setData]);

	/*Code for album cover
	const baseURL = 'https://theaudiodb.p.rapidapi.com/searchalbum.php';
.then(()=> 
		{axios.create({
			baseURL: baseURL,
			method: 'GET',
			timeout: 5000,
			headers: {
				'X-RapidAPI-Key': '585af3375cmshc7af5f88b91e1afp16979fjsn63290063f4e6',
				'X-RapidAPI-Host': 'theaudiodb.p.rapidapi.com',
				'Content-Type': 'application/json',
				accept: 'application/json',
			}, 
			params: {
				s: data.albums.artist,
				a: data.albums.album
	  		},
		})}
		 
		 )
		 .then((resp)=>{resp.get()})
		 .then((final)=>{setApiData({apiData:final})}) 
		 
		 
		 
		 

<CardMedia
								
								style={{ height: "250px", paddingTop: "2%"}}
								image= "https://source.unsplash.com/random"
								title="Image title"
							/>


		 */

	

	return (
		<Container component="main" maxWidth="md">
			<CssBaseline />
			<div className={classes.paper}></div>
			<div className={classes.heroContent}>
				<Container maxWidth="xl">
						<Card>
                                    
							
							<CardContent>
							<Typography
						component="h5"
						variant="h2"
						align="center"
						color="textPrimary"
						gutterBottom
					>
						Album Title: {data.albums.album}
					</Typography>
					<Typography
						variant="h5"
						align="center"
						color="textSecondary"
						paragraph
					>
						Artist: {data.albums.artist}
						
					</Typography>


					<Typography
						variant="h6"
						align="center"
						color="textSecondary"
						paragraph
					>
						Genre: {data.albums.genre}
						</Typography>

						<Typography
						variant="h6"
						align="center"
						color="textSecondary"
						paragraph
					>
						Average Rating: {data.albums.average_rating}
						</Typography>

						<Typography
						variant="h6"
						align="center"
						color="textSecondary"
						paragraph
					>
						Ranking: {data.albums.ranking}
						</Typography>


     						 </CardContent>
                                    
						</Card>


				</Container>
			</div>
		</Container>
	);
}