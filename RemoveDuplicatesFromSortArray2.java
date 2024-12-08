import java.util.Arrays;

public class RemoveDuplicatesFromSortArray2 {
    public static void main(String[] args) {
        var nums = new int[] {1,1,1,2,2,3,3,3,3,4,5,5,5};
        var k = new RemoveDuplicatesFromSortArray2().removeDuplicates(nums);
        System.out.println(Arrays.toString(nums));
        System.out.println(k);
    }

    //https://www.youtube.com/watch?v=ycAq8iqh0TI&ab_channel=NeetCodeIO
    public int removeDuplicates(int[] nums) {
        int i = 0;
        int k = 0;
        while (k<nums.length) {
            var count = 0;
            //count how many element of the next streak
            for (int j = k; j < nums.length; j++) {
                if (nums[j] != nums[k]) {
                    break;
                }
                count++;
            }
            //shift at most 2 elements of the next streak to current index
            for (int j = 0; j < Math.min(2, count); j++) {
                nums[i] = nums[k];
                i++;
            }
            //move k to the next streak
            k+=count;
        }
        return i;
    }
}
