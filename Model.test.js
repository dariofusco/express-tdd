const { test, expect } = require("@jest/globals");


class Model {
    constructor (json) {
        this.json = json;
    }
    read() {
        return this.json;
    }
    add() {
        return this.json;
    }
}

//Model dovrebbe essere una classe (crea un'istanza della classe Model)
test('Model dovrebbe essere una classe crea un istanza della classe Model', () => {
    const model = new Model();
    expect(model).toBeInstanceOf(Model);
});

//L'istanza di model dovrebbe richiedere il nome del file json da usare in fase di creazione dell'istanza
test('L istanza di model dovrebbe richiedere il nome del file json da usare in fase di creazione dell istanza', () => {
    const model = new Model('nomedelfile');
    expect(model.json).toBe('nomedelfile');
});

//L'istanza di model dovrebbe avere il metodo read
test('L istanza di model dovrebbe avere il metodo read', () => {
    const model = new Model('nomedelfile');
    expect(model.read()).toBe('nomedelfile');
})

//L'istanza di model dovrebbe avere il metodo add
test('L istanza di model dovrebbe avere il metodo add', () => {
    const model = new Model('nomedelfile');
    expect(model.add()).toBe('nomedelfile');
});

//read dovrebbe ritornare un array
test('read dovrebbe ritornare un array', () => {
});

//add dovrebbe aggiungere un elemento all’array dei dati e ritornare tutta la lista
test('add dovrebbe aggiungere un elemento all’array dei dati e ritornare tutta la lista', () => {
});