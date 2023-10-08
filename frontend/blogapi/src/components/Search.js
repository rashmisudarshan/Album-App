import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { useLocation } from 'react-router-dom';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
	cardMedia: {
		paddingTop: '56.25%', // 16:9
	},
	link: {
		margin: theme.spacing(1, 1.5),
	},
	cardHeader: {
		backgroundColor:
			theme.palette.type === 'light'
				? theme.palette.grey[200]
				: theme.palette.grey[700],
	},
	albumTitle: {
		fontSize: '16px',
		textAlign: 'left',
	},
	albumText: {
		display: 'flex',
		justifyContent: 'left',
		alignItems: 'baseline',
		fontSize: '12px',
		textAlign: 'left',
		marginBottom: theme.spacing(2),
	},
}));

const Search = () => {
	const classes = useStyles();
	const search = 'search';
	const [appState, setAppState] = useState({
		search: '',
		albums: [],
	});

	useEffect(() => {
        const apiUrl = `http://127.0.0.1:8000/api/`;
        const test = apiUrl.concat(search,'/',window.location.search);
		fetch(test)
        .then(response => response.json())
        .then((albums) => {
			setAppState({ albums: albums});
   		 });
	}, [setAppState]);

	return (
		<React.Fragment>
			<Container maxWidth="md" component="main">
				
				<Grid container spacing={5} alignItems="flex-end">
					{appState.albums.map((album) => {
						return (
							// Enterprise card is full width at sm breakpoint
							<Grid item key={album.id} xs={12} md={4}>
								<Card className={classes.card}>
									
									<CardContent className={classes.cardContent}>
										<Typography
											gutterBottom
											variant="h6"
											component="h2"
											className={classes.albumTitle}
										>
											{album.album.substr(0, 50)}
										</Typography>
										<div className={classes.albumText}>
											<Typography color="textSecondary">
												{album.artist.substr(0, 40)}
											</Typography>

											<Link
													color="textPrimary"
													href={'/admin/edit/' + album.id}
													className={classes.link}
												>
													<EditIcon></EditIcon>
												</Link>
												<Link
													color="textPrimary"
													href={'/admin/delete/' + album.id}
													className={classes.link}
												>
													<DeleteForeverIcon></DeleteForeverIcon>
												</Link>
										</div>
									</CardContent>
								</Card>
							</Grid>
						);
					})}
				</Grid>
			</Container>
		</React.Fragment>
	);
};
export default Search;