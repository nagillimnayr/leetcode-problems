import { describe, expect, test } from '@jest/globals';
import { once } from './2666';

describe('2666: Allow One Function Call', () => {
	describe('Test Suite 1:', () => {
		// Array of tuples
		const calls: [number, number, number][] = [
			[1, 2, 3],
			[2, 3, 6],
		];
		function testFn(a: number, b: number, c: number) {
			return a + b + c;
		}
		test('Test 1-1: ', () => {
			const onceFn = once(testFn);

			expect(onceFn(1, 2, 3)).toBe(6);
		});
		test('Test 1-2: ', () => {
			const onceFn = once(testFn);
			console.log(onceFn(...calls[0]));
			expect(onceFn(...calls[1])).toBeUndefined();
		});
		test('Test 1-3: ', () => {
			const onceFn = once(testFn);

			console.log(onceFn(...calls[1]));
			expect(onceFn(...calls[0])).toBeUndefined();
		});
	});
});
