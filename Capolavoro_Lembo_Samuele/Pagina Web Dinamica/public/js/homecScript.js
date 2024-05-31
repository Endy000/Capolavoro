// Funzione per generare un colore casuale escludendo i colori scuri
async function getRandomColor() {
    const excludedColors = []; // Array di colori scuri esclusi
    const lightnessThreshold = 0.5; // Limite di luminosità per escludere i colori scuri (0 = nero, 1 = bianco)

    // Genera un colore casuale in modo asincrono
    function generateRandomColor() {
        return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    }

    // Controlla la luminosità del colore
    function isColorLight(color) {
        const [r, g, b] = color.match(/\w\w/g).map(x => parseInt(x, 16));
        const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
        return luminance >= lightnessThreshold;
    }

    // Genera un colore casuale e verifica se è accettabile
    let color = generateRandomColor();
    while (!isColorLight(color) || excludedColors.includes(color)) {
        color = generateRandomColor();
    }

    return color;
}

// Applica il colore casuale al background del body dopo il caricamento della pagina
window.addEventListener('DOMContentLoaded', async () => {
    const randomColor = await getRandomColor();
    document.body.style.backgroundColor = randomColor;
});



// PS Questo funzione è stata aggiunta per velocizzare l'esecuzione del codice.
//senza la pagina impiega molto più tempo a caricare, invece con l'utilizzo di questa funzione Asincrona la pagina prima carica e poi genera il colore del background color
