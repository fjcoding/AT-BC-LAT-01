export function idGenerator(
    idLength = 10,
    charaters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789') {

    let id = '';
    do {
        id += charaters.charAt(Math.round(Math.random() * charaters.length));
    } while (id.length < idLength);

    return id;
}