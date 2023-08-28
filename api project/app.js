
const searchMovie = () => {

	const movieName = document.getElementById('movieName').value
	
	const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e19ea78b04mshee98485f4f78b8ep1d28a6jsn38a8330135d9',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
};

fetch(`https://imdb8.p.rapidapi.com/auto-complete?q=${movieName}`, options)
	// console.log(movieName)
	
	.then(response => response.json())
	
	.then((response) => {
		document.getElementById('title').innerText= 'Title  : '+ response.d[0].l;
		
		document.getElementById('starCast').innerText= 'Star Cast : '+ response.d[0].s;
		document.getElementById('rYear').innerText= 'Realease Year : ' + response.d[0].y;

		const poster= response.d[0].i.imageUrl;
		
		document.getElementById('poster').innerHTML= ` <img src=${poster} style="height: 50vh; ">`
}).catch(err => console.error(err));

}
