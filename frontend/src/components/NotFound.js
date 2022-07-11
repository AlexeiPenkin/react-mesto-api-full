import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../image/404_PageNotFound.jpg';

export default function NotFound() {
	return (
		<div className="notfound">
			<img className="notfound__image" src={notFound} alt="404" />
			<Link to="/signin" className="notfound__link">
				На главную
			</Link>
		</div>
	);
}