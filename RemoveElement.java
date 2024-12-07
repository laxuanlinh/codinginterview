import java.util.Arrays;

public class RemoveElement {
    public static void main(String[] args) {
        var nums = new int[] {1, 1, 3, 5, 1, 3, 3, 2, 4, 2};
        var k = new RemoveElement().optimalRemoveElement(nums, 3);
        System.out.println(Arrays.toString(nums));
        System.out.println(k);
    }

    public int removeElement(int[] nums, int val) {
        int i = 0;
        int j = nums.length - 1;
        while (i < j) {
            if (nums[j] == val) {
                j--;
                continue;
            }
            if (nums[i] != val) {
                i++;
                continue;
            }
            var temp = nums[j];
            nums[j] = nums[i];
            nums[i] = temp;
            j--;
            i++;
        }
        var k = 0;
        for (int num : nums) {
            if (num == val) {
                break;
            }
            k++;
        }
        return k;
    }

    public int optimalRemoveElement(int[] nums, int val){
        int k = 0;
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] != val) {
                nums[k] = nums[i];
                k++;
            }
        }
        return k;
    }
}
