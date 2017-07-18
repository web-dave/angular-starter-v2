import { PagesPipe } from './pages.pipe';

describe('PagesPipe', () => {
  it('create an instance', () => {
    const pipe = new PagesPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return `Seitenzahl: 1000`', () => {
    const pipe = new PagesPipe();
    expect(pipe.transform(1000, 'Seitenzahl')).toBe('Seitenzahl: 1000');
  });
});
