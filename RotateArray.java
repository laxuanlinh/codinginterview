import java.util.Arrays;

public class RotateArray {

    public static void main(String[] args) {
        var nums = new int[]{1,2,3,4,5,6,7};
        new RotateArray().optimalRotate(nums, 3);
        System.out.println(Arrays.toString(nums));
    }

    public void rotate(int[] nums, int k) {
        if (k > nums.length) {
            k = k%nums.length;
        }
        int[] rotated = new int[nums.length];
        for (int i = 0; i < nums.length-k; i++) {
            rotated[i+k] = nums[i];
        }
        for (int i = 0; i < k; i++) {
            rotated[i] = nums[nums.length - k + i];
        }
        for (int i = 0; i < nums.length; i++) {
            nums[i] = rotated[i];
        }
    }
    public void alternativeRotate(int[] nums, int k){
        if (k > nums.length) {
            k = k%nums.length;
        }
        int[] temp = new int[k];
        for (int i = 0; i < k; i++) {
            temp[i] = nums[nums.length-k+i];
        }
        for (int i = nums.length-1; i >= k; i--) {
            nums[i] = nums[i-k];
        }
        for (int i = 0; i < k; i++) {
            nums[i] = temp[i];
        }
    }

    //no idea how I came up with this, just playing around with the array
    //1,2,3,4,5,6,7
    //1,2,3,7,5,6,4
    //1,2,6,7,5,3,4
    //1,5,6,7,2,3,4
    //7,5,6,1,2,3,4
    //6,5,7,1,2,3,4
    //5,6,7,1,2,3,4
    public void optimalRotate(int[] nums, int k){
        reverse(nums, 0, nums.length-1);
        reverse(nums, 0, k-1);
        reverse(nums, k, nums.length-1);
    }



    private void reverse(int[] nums, int start, int end){
        var begin = 0;
        if ((end - start+1)%2==0) {
            begin = 1;
        }
        while 
    }

}
