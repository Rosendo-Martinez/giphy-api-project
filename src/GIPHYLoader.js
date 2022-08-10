const GIPHYLoader = (function() {
    function getCatGIPHYURL() {
        return fetch('https://api.giphy.com/v1/gifs/translate?api_key=F0F0dcG0782cQaoWsDZQk17Mll30BWuK&s=cats', {mode: 'cors'})
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw 'Error: ' + response.status;
                }
            })
            .then(response => {
                return response.data.images.original.url;
            });
    }

    return {getCatGIPHYURL};
})();

export {GIPHYLoader};