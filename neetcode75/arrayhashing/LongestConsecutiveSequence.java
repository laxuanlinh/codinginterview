package com.company.neetcode75.arrayhashing;

import java.util.HashMap;

public class LongestConsecutiveSequence {

    public static void main(String[] args) {
        System.out.println(longestConsecutive(new int[]{2,20,4,10,3,4,5}));
    }

    public static int longestConsecutive(int[] nums) {
        if (nums.length == 0) {
            return 0;
        }
        var map = new HashMap<Integer, Boolean>();
        for (int num : nums) {
            map.put(num, true);
        }
        var max = 1;
        for (int num : nums) {
            if (!map.get(num)) {
                continue;
            }
            var over = false;
            var count = 1;
            var currentNumber = num;
            while (!over) {
                if (map.containsKey(currentNumber + 1)) {
                    count++;
                    currentNumber++;
                    map.put(num, false);
                } else {
                    if (count > max) {
                        max = count;
                    }
                    over = true;
                }
            }
        }
        return max;
    }
}
