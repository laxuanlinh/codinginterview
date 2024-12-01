var search = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    while (start < end) {
        console.log("start "+start);
        console.log("end "+end);
        if (nums[parseInt((start+end)/2)] == target) {
            return parseInt((start+end)/2)
        } else if (nums[parseInt((start+end)/2)] > target) {
            end = parseInt((start+end)/2) - 1;
        } else {
            start = parseInt((start+end)/2) + 1;
        }
    }
    if (nums[start] == target) {
        return start;
    } else {
        return -1;
    }
};

search([-1,0,3,5,9,12], 9)