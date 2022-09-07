class MemoryContainer {
    constructor() {
        this.elements = [];
    }

    async list(id) {
        const elem = this.elements.find(elem => elem.id == id);
        if (!elem) {
            throw new Error("No such element");
        } else {
            return elem;
        };
    };

    listAll() {
        return [...this.elements]
    };

    save(elem) {
        let newId;

        if (this.elements.length == 0) {
            newId = 1;
        } else {
            newId = this.elements[this.elements.length - 1].id + 1;
        };

        const newElem = { ...elem, id: newId };
        this.elements.push(newElem);
        return newElem;
    };

    update(elem) {
        const index = this.elements.findIndex(p => p.id == elem.id);
        if (index == -1) {
            throw new Error(`Cannot update element`);
        } else {
            const updatedElement = { ...elem };
            this.elements[index] = updatedElement;
            return elem;
        };
    };

    delete(id) {
        const index = this.elements.findIndex(elem => elem.id == id);
        if (index == -1) {
            throw new Error(`Cannot delete element with id ${id}`);
        } else {
            return this.elements.splice(index, 1);
        };
    };

    deleteAll() {
        this.elements = [];
    };
};

export default MemoryContainer;