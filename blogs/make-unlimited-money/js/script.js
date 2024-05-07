const url = new URL(location.href);
const redirect_url = url.searchParams.get('redirect_url');

if (redirect_url) {
	const scrollInfo = document.getElementById('scroll-info');
	scrollInfo.style.visibility = 'visible';

	const redirectContainer = document.getElementById('redirect');
	redirectContainer.style.visibility = 'visible';

	let timer = 15;

	const interval = setInterval(function () {
		document.getElementById('counter').innerHTML = `Wait for ${timer}s`;
		timer -= 1;
	}, 1000);

	setTimeout(function () {
		clearInterval(interval);
		document.getElementById('loader').remove();
		document.getElementById('redirect-btn').disabled = false;
		document.getElementById('counter').innerHTML = 'Continue';
	}, 16000);
	function handleRedirectClick() {
		location.href = redirect_url
	}
	
	document.getElementById('redirect-btn').onclick = handleRedirectClick;
}

