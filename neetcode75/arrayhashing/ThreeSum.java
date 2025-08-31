package com.company.neetcode75.arrayhashing;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.stream.Stream;

public class ThreeSum {
    public static void main(String[] args) {
        System.out.println(threePointers(new int[]{-4, -2, -1, -1, 0, 2, 3, 4}));
    }

    public static List<List<Integer>> threeSum(int[] nums) {
        var result = new ArrayList<List<Integer>>();
        var negative = new ArrayList<Integer>();
        var positive = new ArrayList<Integer>();
        var negativeMap = new HashMap<Integer, List<List<Integer>>>();
        var positiveMap = new HashMap<Integer, List<List<Integer>>>();
        var sorted = Arrays.stream(nums).boxed().sorted().toList();
        for (var num : sorted) {
            if (num < 0) {
                negative.add(num);
            } else {
                positive.add(num);
            }
        }
        for (int i = 0; i < negative.size(); i++) {
            if (i > 0 && negative.get(i).equals(negative.get(i-1))) {
                continue;
            }
            for (int j = i+1; j < negative.size(); j++) {
                if (j > i+1 && negative.get(j).equals(negative.get(j-1))) {
                    continue;
                }
                var sum = negative.get(i) + negative.get(j);
                if (!negativeMap.containsKey(sum)) {
                    var list = new ArrayList<List<Integer>>();
                    list.add(List.of(negative.get(i), negative.get(j)));
                    negativeMap.put(sum, list);
                } else {
                    negativeMap.get(sum).add(List.of(negative.get(i), negative.get(j)));
                }
            }
        }
        for (int i = 0; i < positive.size(); i++) {
            if (i > 0 && positive.get(i).equals(positive.get(i-1))) {
                continue;
            }
            for (int j = i+1; j < positive.size(); j++) {
                if (j > i+1 && positive.get(j).equals(positive.get(j-1))) {
                    continue;
                }
                var sum = positive.get(i) + positive.get(j);
                if (!positiveMap.containsKey(sum)) {
                    var list = new ArrayList<List<Integer>>();
                    list.add(List.of(positive.get(i), positive.get(j)));
                    positiveMap.put(sum, list);
                } else {
                    positiveMap.get(sum).add(List.of(positive.get(i), positive.get(j)));
                }
            }
        }
        for (int i = 0; i < negative.size(); i++) {
            if (i > 0 && negative.get(i).equals(negative.get(i-1))) {
                continue;
            }
            if (positiveMap.containsKey(-negative.get(i))) {
                for (List<Integer> arr : positiveMap.get(-negative.get(i))) {
                    var list = new ArrayList<Integer>();
                    list.add(negative.get(i));
                    list.addAll(arr);
                    result.add(list);
                }
            }
        }

        for (int i = 0; i < positive.size(); i++) {
            if (i > 0 && positive.get(i).equals(positive.get(i-1))) {
                continue;
            }
            if (negativeMap.containsKey(-positive.get(i))) {
                for (List<Integer> arr : negativeMap.get(-positive.get(i))) {
                    var list = new ArrayList<Integer>();
                    list.add(positive.get(i));
                    list.addAll(arr);
                    result.add(list);
                }
            }
        }
        if (positive.get(0).equals(0) && positive.get(1).equals(0) && positive.get(2).equals(0)) {
            result.add(List.of(0, 0, 0));
        }
        return result;
    }

    public static List<List<Integer>> threePointers(int[] nums) {
        Arrays.sort(nums);
        List<List<Integer>> res = new ArrayList<>();

        for (int i = 0; i < nums.length; i++) {
            if (nums[i] > 0) break;
            if (i > 0 && nums[i] == nums[i - 1]) continue;

            int l = i + 1, r = nums.length - 1;
            while (l < r) {
                int sum = nums[i] + nums[l] + nums[r];
                if (sum > 0) {
                    r--;
                } else if (sum < 0) {
                    l++;
                } else {
                    res.add(Arrays.asList(nums[i], nums[l], nums[r]));
                    l++;
                    r--;
                    while (l < r && nums[l] == nums[l - 1]) {
                        l++;
                    }
                }
            }
        }
        return res;
    }
}
