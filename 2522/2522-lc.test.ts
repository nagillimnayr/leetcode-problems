import { describe, expect, test } from '@jest/globals';
import minimumPartition from './2522-lc';

describe('2522: Minimum Partition', () => {
	test('test 1: 165462', () => {
		expect(minimumPartition('165462', 60)).toBe(4);
	});
	test('test 2: 238182', () => {
		expect(minimumPartition('238182', 5)).toBe(-1);
	});
});
