import java.util.Arrays;

public class RemoveDuplicatesFromSortArray2 {
    public static void main(String[] args) {
        var nums = new int[] {1,2, 2};
        var k = new RemoveDuplicatesFromSortArray2().removeDuplicates(nums);
        System.out.println(Arrays.toString(nums));
        System.out.println(k);
    }
    public int removeDuplicates(int[] nums) {
        if (nums.length < 3) {
            return nums.length;
        }
        int i = 1;
        int k = 1;
        while (k < nums.length+1 && i < nums.length) {
            int numsk = 0;
            if (k==nums.length) {
                numsk = Integer.MAX_VALUE;
            } else {
                numsk = nums[k];
            }
            if (i == k || nums[i] == numsk) {
                k++;
                continue;
            }
            if (numsk == nums[i-1] && numsk == nums[i-2]) {
                k++;
                continue;
            }
            if (i >= 2 && nums[i] != numsk && nums[i]<=nums[i-1] && nums[i]<=nums[i-2]) {
                nums[i] = numsk;
                i++;
                k++;
                continue;
            }
            if (i < 2 || numsk != nums[i] && (nums[i] != nums[i-1] || nums[i] != nums[i-2])) {
                i++;
            }
        }
        return i;
    }
}
