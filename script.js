// Datos para las carpetas y canciones
const musicFolders = [
    {
        id: 1,
        name: "Vallenatos",
        songs: [
            { title: "Mi primera cana", artist: "Diomedes díaz", year: 1957 },
            { title: "Olvidala", artist: "Rafael Orozco", year: 1954 },
            { title: "Poncho Zuleta", artist: "Mañanita de invierno", year: 1949 }
        ]
    },
    {
        id: 2,
        name: "Pop",
        songs: [
            { title: "Billie Jean", artist: "Michael Jackson", year: 1982 },
            { title: "Chihiro", artist: "Billie Eilish", year: 2001 },
            { title: "Blinding Lights", artist: "The Weeknd", year: 1999 }
        ]
    },
    {
        id: 3,
        name: "Champeta",
        songs: [
            { title: "La comprometida", artist: "Papo Man", year: 1980},
            { title: "Te va a doler", artist: "Zaider", year: 1998},
            { title: "El tambor", artist: "Mr. Black", year: 1979 }
        ]
    }
];

// Función para cargar las carpetas en el menú
function loadFolders() {
    const foldersList = document.getElementById('foldersList');

    musicFolders.forEach(folder => {
        const li = document.createElement('li');
        li.textContent = folder.name;
        li.addEventListener('click', () => loadSongs(folder));
        foldersList.appendChild(li);
    });
}

// Función para cargar las canciones de una carpeta
function loadSongs(folder) {
    const folderTitle = document.getElementById('folderTitle');
    const songsList = document.getElementById('songsList');

    // Cambiar el título de la carpeta
    folderTitle.textContent = folder.name;

    // Limpiar la lista de canciones
    songsList.innerHTML = '';

    // Agregar canciones a la lista
    folder.songs.forEach(song => {
        const songElement = document.createElement('div');
        songElement.classList.add('song');
        songElement.innerHTML = `
            <h3>${song.title}</h3>
            <p><strong>Artista:</strong> ${song.artist}</p>
            <p><strong>Año:</strong> ${song.year}</p>
        `;
        songsList.appendChild(songElement);
    });
}

// Cargar las carpetas al iniciar la página
loadFolders();
