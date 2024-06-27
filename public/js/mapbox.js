/* eslint-disable*/

export const displayMap = locations => {
	mapboxgl.accessToken = 'pk.eyJ1IjoiamluZGFsMTIwMyIsImEiOiJjbHh0dnpidXMwYXR4MnFzY256dnNlOXh0In0.VSEzyzeJhOJsA5JPE3-u6g';
	const map = new mapboxgl.Map({
		container: 'map', // container ID
		style: 'mapbox://styles/jindal1203/clxvbqo3y00bj01paejcy8g2w', // style URL
		scrollZoom: false
		// center: [-118.113491,34.111745], // starting position [lng, lat]
		// zoom: 5, // starting zoom
		// interactive: false
	});

	const bounds = new mapboxgl.LngLatBounds();

	locations.forEach(loc => {
		// Create marker
		const el = document.createElement('div');
		el.className = 'marker';

		// Add marker
		new mapboxgl.Marker({
			element: el,
			anchor: 'bottom'
		})
			.setLngLat(loc.coordinates)
			.addTo(map);

		// Add popup
		new mapboxgl.Popup({
			offset: 30,
		})
			.setLngLat(loc.coordinates)
			.setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
			.addTo(map);

		// Extrme map bounds to include current location
		bounds.extend(loc.coordinates);
	});

	map.fitBounds(bounds, {
		padding: {
			top: 200,
			bottom: 150,
			left: 100,
			right: 100
		}
	});
};

// module.exports = displayMap;