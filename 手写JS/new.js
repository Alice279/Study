var searchRange = function(nums, target) {
    const lower = find(nums, target, true);
    const upper = find(nums, target, false);
    lower = lower === undefined ? -1 : lower;
    upper = upper === undefined ? -1 : upper;
    return [lower, upper];
};

var find = function(nums, target, lower) {
    let ans
    let left = 0;
    let right = nums.length - 1;
    while(left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        if (nums[mid] > target) {
            right = mid - 1;
        } else if (nums[mid] < target) {
            left = mid;
        } else {
            if (lower) {
                right = mid;
                ans = right;
            } else {
                left = mid;
                ans = left;
            }
        }
    }
    return ans;
}

const nums = [5,6,6,6,6,7,8,9];
const result = searchRange(nums, 6);
console.log(result);