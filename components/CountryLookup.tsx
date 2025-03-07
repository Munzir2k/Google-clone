'use client';
import React, { useEffect, useState } from 'react';

function CountryLookup() {
	const [country, setCountry] = useState('United Kingdom');

	useEffect(() => {
		const getCountry = async () => {
			const response = await fetch(
				`https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_IP_API_KEY}`
			)
				.then((res) => res.json())
				.then((data) => data.country);
			if (!response) return;
			setCountry(response);
		};
		getCountry();
	}, []);

	return <div className='px-1'>{country}</div>;
}

export default CountryLookup;
