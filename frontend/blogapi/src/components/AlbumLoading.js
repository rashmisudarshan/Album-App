import React from 'react';

function AlbumLoading(Component) {
	return function AlbumLoadingComponent({ isLoading, ...props }) {
		if (!isLoading) return <Component {...props} />;
		return (
			<p style={{ fontSize: '25px' }}>
				Waiting for the data to load...
			</p>
		);
	};
}
export default AlbumLoading;