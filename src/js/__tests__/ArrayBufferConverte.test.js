import ArrayBufferConverter, {getBuffer} from '../ArrayBufferConverter';

test('тест метод load()', () => {
    const buffer = getBuffer();
    ArrayBufferConverter.load(buffer);
    expect(ArrayBufferConverter.buffer).toEqual(buffer);
});

test("тест метод toString()", () => {
    const receivedString = ArrayBufferConverter.toString();
    const exampleString = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
    expect(receivedString).toBe(exampleString);
});