import Magician from '../Magician';

test('новый персонаж Magician', () => {
    const magician = new Magician('player');
    const result = {
        name: 'player', level: 1, health: 100, _attack: 100, defense: 40, type: 'Magician', _stoned: false,
    };
    expect(magician).toEqual(result);
});