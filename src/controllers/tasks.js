const tasks = [];
let counter = 1;

class Tasks {
    static getAll(req, res) {
        res.json(tasks);
    }

    static create(req, res) {
        counter++;
        tasks.push({
            id: counter,
            title: req.body.title
        });
        res.sendStatus(201);
    }

    static get(req, res) {
        const taskId = parseInt(req.params.id);
        const index = tasks.findIndex(t => t.id === id);
        if(index < 0) {
            res.sendStatus(404);
            return;
        }
        res.send(index);
    }

    static delete(req, res) {
        const taskId = parseInt(req.params.id);
        const index = tasks.findIndex(t => t.id === id);
        if(index < 0) {
            res.sendStatus(404);
            return;
        }
        tasks.splice(index, 1);
        res.sendStatus(204);
    }
}

module.exports = Tasks;