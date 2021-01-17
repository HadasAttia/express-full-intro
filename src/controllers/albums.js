const albums = [];
let counter = 1;

class Albums {
    static create(req, res) {
        const { title, date } = req.body;
        if (!title || !date) {
            res.status(400).send('Error');
            return;
        }
        counter++;
        const newAlbum = {
            id: counter,
            title,
            date
        };
        albums.push(newAlbum);
        res.sendStatus(201);
    }

    static getAll(req, res) {
        res.send(albums);
    }

    static get(req, res) {
        const albumId = parseInt(req.params.id);
        const requstedAlbum = albums.find(album => album.id === albumId);
        if (!requstedAlbum) {
            res.status(404).send('Album not found');
            return;
        }
        res.send(requstedAlbum);
    }

    static edit(req, res) {
        const albumId = parseInt(req.params.id);
        const requstedAlbum = albums.find(album => album.id === albumId);
        if (!requstedAlbum) {
            res.status(404).send('Album not found');
            return;
        }
        requstedAlbum.title = req.body.title;
        requstedAlbum.date = req.body.date;
        res.send(`${requstedAlbum.title} has been updated`);
    }

    static delete(req, res) {
        const albumId = parseInt(albums.params.id);
        const requstedAlbum = albums.find(album => album.id === albumId);
        if (!requstedAlbum) {
            res.status(404).send('Album not found');
            return;
        }
        const albumIndex = albums.findIndex(album => album.id === albumId);
        albums.splice(albumIndex, 1);
        res.sendStatus(204);
    }
}

module.exports = Albums;