package com.company.neetcode75.arrayhashing;

import java.util.HashMap;

public class ContainDuplicate {
    public static void main(String[] args) {
        System.out.println(hasDuplicate(new int[]{}));
    }

    public static boolean hasDuplicate(int[] nums) {
        var map = new HashMap<>();
        for (int num : nums) {
            if (map.containsKey(num)) {
                return true;
            }
            map.put(num, true);
        }
        return false;
    }

}
