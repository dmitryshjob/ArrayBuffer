import Daemon from '../Daemon';

test('новый персонаж Daemon', () => {
    const daemon = new Daemon('player');
    const result = {
        name: 'player', level: 1, health: 100, _attack: 10, defense: 40, type: 'Daemon', _stoned: false,
    };
    expect(daemon).toEqual(result);
});