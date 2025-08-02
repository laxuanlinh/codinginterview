package com.company.neetcode75.arrayhashing;

import java.util.ArrayList;
import java.util.Arrays;

public class ProductArrayExceptSelf {

    public static void main(String[] args) {
        System.out.println(Arrays.toString(prefixSuffix(new int[]{1,2,4,6})));
    }

    public static int[] productExceptSelf(int[] nums) {
        var total = 1;
        var zero = 0;
        for (int num : nums) {
            if (num == 0) {
                zero++;
                continue;
            }
            total *= num;
        }
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] == 0 && zero == 1) {
                nums[i] = total;
            } else if (zero > 0){
                nums[i] = 0;
            } else {
                nums[i] = total / nums[i];
            }

        }
        return nums;
    }

    public static int[] prefixSuffix(int[] nums){
        var prefix = new int[nums.length];
        prefix[0] = 1;
        var suffix = new int[nums.length];
        suffix[nums.length - 1] = 1;
        for (int i = 1; i < nums.length; i++) {
            prefix[i] = prefix[i-1]*nums[i-1];
        }
        for (int i = nums.length - 2; i >= 0; i--) {
            suffix[i] = suffix[i+1]*nums[i+1];
        }
        for (int i = 0; i < nums.length; i++) {
            nums[i] = prefix[i] * suffix[i];
        }
        return nums;
    }
}
