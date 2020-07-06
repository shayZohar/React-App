// write function to retrieve a blob of json
// make an ajax request ! use the 'fetch' function
// https://rallycoding.herokuapp.com/api/music_albums

// promise
// function fetchAlbums() {
//     fetch('https://rallycoding.herokuapp.com/api/music_albums').then(res => res.json()).then(json => console.log(json));
// }

// async/await
/*async function fetchAlbums() {
    const res = await fetch('https://rallycoding.herokuapp.com/api/music_albums');
    const json = await res.json();

    console.log(json);
}*/

// make it arrow function
const fetchAlbums = async () => {
    const res = await fetch('https://rallycoding.herokuapp.com/api/music_albums');
    const json = await res.json();

    console.log(json);
}



// fetchAlbums();