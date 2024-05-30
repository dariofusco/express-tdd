const { test, expect } = require("@jest/globals");

const fakeData = [
    {
        title: "Nuovo Post",
        slug: "nuovo-post"
    }
]

const createSlug = (title, posts) => {
    
    if(!title) {
        throw new Error("Il Titolo è obbligatorio!");
    }
    if(typeof title !== 'string') {
        throw new Error("Il Titolo deve essere una stringa!");
    }
    if(!posts) {
        throw new Error("L'array dei Posts è obbligatorio!");
    }
    
    const baseSlug = title.replaceAll(' ', '-').toLowerCase();

    let slug = baseSlug;

    const slugs = posts.map(post => post.slug);
    
    let counter = 1;

    while(slugs.includes(slug)) {
        slug = `${baseSlug}-${counter}`;
        counter++;
    }

    return slug;
}

//createSlug dovrebbe ritornare una stringa
test('createSlug dovrebbe ritornare una stringa', () => {
    expect(typeof createSlug("Nuovo Post", fakeData)).toBe('string');
});

//createSlug dovrebbe ritornare una stringa in lowercase
test('createSlug dovrebbe ritornare una stringa in lowercase', () => {
    expect(createSlug("TESTO MAIUSCOLO", fakeData)).toBe('testo-maiuscolo');
});

//createSlug dovrebbe ritornare una stringa con gli spazi sostituiti da -
test('createSlug dovrebbe ritornare una stringa con gli spazi sostituiti da -', () => {
    expect(createSlug("Nuovo Post Con Spazi", fakeData)).toBe('nuovo-post-con-spazi');
});

//createSlug dovrebbe incrementare di 1 lo slug quando esiste già
test('createSlug dovrebbe incrementare di 1 lo slug quando esiste già', () => {
    expect(createSlug('Nuovo Post', fakeData)).toBe("nuovo-post-1")
});

//createSlug dovrebbe lanciare un errore in caso di titolo non presente o formato errato
test('createSlug dovrebbe lanciare un errore in caso di titolo non presente o formato errato', () => {
    expect(createSlug(null, fakeData)).toThrow();
    expect(createSlug(45, fakeData)).toThrow();
});

//createSlug dovrebbe lanciare un errore se manca l'array dei post
test('createSlug dovrebbe lanciare un errore se manca l array dei post', () => {
    expect(createSlug('Nuovo Post')).toThrow();
});