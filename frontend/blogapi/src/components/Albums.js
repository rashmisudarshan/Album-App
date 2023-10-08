import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
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

const Albums = (props) => {
	const { albums } = props;
	const classes = useStyles();
	if (!albums || albums.length === 0) return <p>Can not find any music, sorry</p>;
	let sorted = albums.sort((a, b) => parseInt(a.id) - parseInt(b.id));

	return (
		<React.Fragment>
			<Container maxWidth="md" component="main">
			<Button
											href={'/admin/create'}
											variant="contained"
											color="primary"
										>
											New Album
										</Button>
				<Grid container spacing={5} alignItems="flex-end">
					{sorted.map((album) => {
						return (
							// Enterprise card is full width at sm breakpoint
							<Grid item key={album.id} xs={12} md={4}>
								<Card className={classes.card}>
                                    <Link 
                                    color="textPrimary"
                                    href={'/album/' + album.id}
                                    className={classes.link}
                                    >
									
                                    
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
											<Typography
												component="p"
												color="textPrimary"
											></Typography>
											<Typography variant="p" color="textSecondary">
												{album.artist.substr(0, 60)}
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
									</Link>
								</Card>
							</Grid>
						);
					})}
				</Grid>
			</Container>
		</React.Fragment>
	);
};
export default Albums;