import React, { useState, useEffect } from 'react';
import axiosInstance from '../axios';
import { useNavigate, useParams } from 'react-router-dom';
//MaterialUI
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

export default function Create() {
	const history = useNavigate();
	const { id } = useParams();
	const initialFormData = Object.freeze({
		id: '',
		album: '',
		artist: '',
		genre: '',
		average_rating: '',
		ranking: '',
		release_date:''
	});

	const [formData, updateFormData] = useState(initialFormData);

	useEffect(() => {
		axiosInstance.get('admin/edit/albumdetail/' + id).then((res) => {
			updateFormData({
				...formData,
				['album']: res.data.album,
				['artist']: res.data.artist,
				['genre']: res.data.genre,
				['average_rating']: res.data.average_rating,
				['ranking']: res.data.ranking,
				['release_date']: res.data.release_date,
			});
			console.log(res.data);
		});
	}, [updateFormData]);

	const handleChange = (e) => {
		updateFormData({
			...formData,
			// Trimming any whitespace
			[e.target.name]: e.target.value.trim(),
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		
		axiosInstance.put(`admin/edit/` + id + '/', {
			['album']: formData.album,
			artist: formData.artist,
			genre: formData.genre,
			average_rating: formData.average_rating,
			['ranking']: formData.ranking,
		});
		history('/');
		
	};

	const classes = useStyles();

	return (
		<Container component="main" maxWidth="sm">
			<CssBaseline />
			<div className={classes.paper}>
				<Typography component="h1" variant="h5">
					Edit Album
				</Typography>
				<form className={classes.form} noValidate>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="album"
								label="Album Title"
								name="album"
								autoComplete="album"
								value={formData.album}
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="artist"
								label="Artist"
								name="artist"
								autoComplete="artist"
								value={formData.artist}
								onChange={handleChange}
								
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="genre"
								label="Genre"
								name="genre"
								autoComplete="genre"
								value={formData.genre}
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="average_rating"
								label="Average Rating"
								name="average_rating"
								autoComplete="average_rating"
								value={formData.average_rating}
								onChange={handleChange}
								type="number"
								error
								
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="ranking"
								label="Ranking"
								error
								name="ranking"
								autoComplete="ranking"
								value={formData.ranking}
								onChange={handleChange}
								type="number"
								
							/>
						</Grid>

						

					</Grid>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
						onClick={handleSubmit}
					>
						Update Album
					</Button>
				</form>
			</div>
		</Container>
	);
}