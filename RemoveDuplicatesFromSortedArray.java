import java.util.Arrays;

public class RemoveDuplicatesFromSortedArray {
    public static void main(String[] args) {
        var nums = new int[] {0,0,1,1,1,2,2,3,3,4};
        var k = new RemoveDuplicatesFromSortedArray().optimalRemoveDuplicates(nums);
        System.out.println(Arrays.toString(nums));
        System.out.println(k);
    }

    //when encounter a unique, shift to the left
    public int removeDuplicates(int[] nums) {
        int k = 0;
        int i = 0;
        while (i < nums.length && k < nums.length) {
            if (i == k || nums[i] == nums[k]) {
                k++;
                continue;
            }
            i++;
            nums[i] = nums[k];
            k++;
        }
        return i+1;
    }

    public int optimalRemoveDuplicates(int[] nums){
        int k = 1;
        for (int i = 1; i < nums.length; i++) {
            if (nums[i]!=nums[k-1]) {
                nums[k] = nums[i];
                k++;
            }
        }
        return k;
    }
}
