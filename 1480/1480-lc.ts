/*
Given an array nums. We define a running sum of an array as 
runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.
*/

function runningSum(nums: number[]): number[] {
	const runningSum: number[] = [];
	for (let i = 0; i < nums.length; i++) {
		let sum = 0;
		for (let j = 0; j <= i; j++) {
			sum += nums[j];
		}
		runningSum.push(sum);
	}
	return runningSum;
}
export default runningSum;
