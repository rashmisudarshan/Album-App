import React, { useState } from 'react';
import axiosInstance from '../axios';
import { useNavigate } from 'react-router-dom';
//MaterialUI
import Avatar from '@material-ui/core/Avatar';
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
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
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
	const initialFormData = Object.freeze({
		'album': '',
		'artist': '',
		'genre': '',
		'ranking': '',
		'release_date': '',
		'average_rating':''
	});

	const [formData, updateFormData] = useState(initialFormData);

	const handleChange = (e) => {
		
			updateFormData({
				...formData,
				// Trimming any whitespace
				[e.target.name]: e.target.value.trim(),
			});
		
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		axiosInstance
			.post(`admin/create/`, {
				"album": formData.album+"",
				"artist": formData.artist+"",
				"genre": formData.genre+"",
				
				"average_rating": parseFloat(formData.average_rating),
				"ranking": parseInt(formData.ranking),

			})
			.then((res) => {
				history('/');
				
			});
			
	};

	const classes = useStyles();

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}></Avatar>
				<Typography component="h1" variant="h5">
					Create New Album
				</Typography>
				<form className={classes.form} noValidate>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="album"
								label="Album"
								name="album"
								autoComplete="album"
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
								onChange={handleChange}
								
								rows={4}
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
								id="ranking"
								label="Rank"
								name="ranking"
								autoComplete="ranking"
								onChange={handleChange}
								type="number"
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
						Create Album
					</Button>
				</form>
			</div>
		</Container>
	);
}