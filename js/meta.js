meta = () => {
	let theme = document.createElement('meta');
	let watch = document.createElement('meta');

	theme.setAttribute('name', 'theme-color');
	theme.content = getComputedStyle(document.documentElement).getPropertyValue('--main-blue-color');
	document.getElementsByTagName('head')[0].appendChild(theme);

	watch.setAttribute('name', 'disabled-adaptations');
	watch.content = 'watch';
	document.getElementsByTagName('head')[0].appendChild(watch);
}
meta();
metaOG = () => {
	let title = document.createElement('meta');
	let desc = document.createElement('meta');
	let url = document.createElement('meta');
	let img = document.createElement('meta');
	let name = document.createElement('meta');
	let locale = document.createElement('meta');
	let type = document.createElement('meta');

	title.setAttribute('property', 'og:title');
	title.content = document.title;
	document.getElementsByTagName('head')[0].appendChild(title);

	desc.setAttribute('property', 'og:description');
	desc.content = 'test';
	document.getElementsByTagName('head')[0].appendChild(desc);

	url.setAttribute('property', 'og:url');
	url.content = window.location.href;
	document.getElementsByTagName('head')[0].appendChild(url);

	img.setAttribute('property', 'og:image');
	img.content = 'egilswenningleyser.se/img/social.png';
	document.getElementsByTagName('head')[0].appendChild(img);

	name.setAttribute('property', 'og:name');
	name.content = 'appapp';
	document.getElementsByTagName('head')[0].appendChild(name);

	locale.setAttribute('property', 'og:locale');
	locale.content = 'en_US';
	document.getElementsByTagName('head')[0].appendChild(locale);

	type.setAttribute('property', 'og:type');
	type.content = 'product';
	document.getElementsByTagName('head')[0].appendChild(type);
}
metaOG();
metaTwitter = () => {
	
	let card = document.createElement('meta');
	let title = document.createElement('meta');
	let desc = document.createElement('meta');
	let site = document.createElement('meta');
	let img = document.createElement('meta');
	let crea = document.createElement('meta');


	card.setAttribute('name', 'twitter:card');
	card.content = 'summary_large_image';
	document.getElementsByTagName('head')[0].appendChild(card);

	title.setAttribute('name', 'twitter:title');
	title.content = document.title;
	document.getElementsByTagName('head')[0].appendChild(title);

	desc.setAttribute('name', 'twitter:description');
	desc.content = 'test';
	document.getElementsByTagName('head')[0].appendChild(desc);

	site.setAttribute('name', 'twitter:site');
	site.content = '@appapp';
	document.getElementsByTagName('head')[0].appendChild(site);

	img.setAttribute('name', 'twitter:image');
	img.content = 'egilswenningleyser.se/img/social.png';
	document.getElementsByTagName('head')[0].appendChild(img);

	crea.setAttribute('name', 'twitter:creator');
	crea.content = '@appapp';
	document.getElementsByTagName('head')[0].appendChild(crea);
}


metaTwitter();