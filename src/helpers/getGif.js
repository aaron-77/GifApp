export const getGif = async (termino) =>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=GH1prkge7ea87RmShRAcoEcGPgZ8Abva&q=${termino}&limit=10`
    console.log(termino);
    console.log(url);   
    const respuesta = await fetch(url);
    const {data} = await respuesta.json();
    const gifs = data.map(img => ({
        id:img.id,
        title:img.title,
        url:img.images.downsized_medium.url
    }));
    console.log(gifs);
    return gifs;
}