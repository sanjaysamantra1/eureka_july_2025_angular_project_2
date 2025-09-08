import { OrdinalPipe } from './ordinal-pipe';

describe('OrdinalPipe', () => {
  it('create an instance', () => {
    const pipe = new OrdinalPipe();
    expect(pipe).toBeTruthy();
    expect(pipe.transform(null)).toBe('');
    expect(pipe.transform(undefined)).toBe('');
    expect(pipe.transform(11)).toBe('11th');
    expect(pipe.transform(12)).toBe('12th');
    expect(pipe.transform(21)).toBe('21st');
    expect(pipe.transform(22)).toBe('22nd');
    expect(pipe.transform(23)).toBe('23rd');
  });
});
