import { expect, test } from 'vitest';
import { main } from '@src/main';

test('test No.1', () => {
    expect(main()).toBe("Hello, TypeScript!")
})
