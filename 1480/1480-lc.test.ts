import { describe, expect, test } from '@jest/globals';
import runningSum from './1480-lc';

describe('1480: Running Sum of 1d Array', () => {
	test('[1, 2, 3, 4]', () => {
		expect(runningSum([1, 2, 3, 4])).toStrictEqual([1, 3, 6, 10]);
	});
	test('[1,1,1,1,1]', () => {
		expect(runningSum([1, 1, 1, 1, 1])).toStrictEqual([1, 2, 3, 4, 5]);
	});
	test('[3,1,2,10,1]', () => {
		expect(runningSum([3, 1, 2, 10, 1])).toStrictEqual([3, 4, 6, 16, 17]);
	});
});
