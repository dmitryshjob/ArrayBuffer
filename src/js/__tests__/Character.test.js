import Character from '../Character';

test('новый персонаж Character', () => {
	const character = new Character('player');
	const result = {
		name: 'player', level: 1, health: 100,
	};
	expect(character).toEqual(result);
});