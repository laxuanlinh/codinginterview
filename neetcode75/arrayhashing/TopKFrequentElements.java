package com.company.neetcode75.arrayhashing;

import java.util.*;
import java.util.stream.Collectors;

public class TopKFrequentElements {
    public static void main(String[] args) {
        System.out.println(Arrays.toString(topKFrequent(new int[]{3,2,3,1,2,4,5,5,6,7,7,8,2,3,1,1,1,10,11,5,6,2,4,7,8,5,6}, 10)));
    }

    public static int[] topKFrequent(int[] nums, int k) {
        var freq = new HashMap<Integer, Integer>();
        for (int num : nums) {
            freq.put(num, freq.containsKey(num) ? freq.get(num) + 1 : 1);
        }
        var revertFreq = new HashMap<Integer, List<Integer>>();
        List<Integer> sortedList = new ArrayList<>();
        for (Map.Entry<Integer, Integer> entry : freq.entrySet()) {
            if (revertFreq.containsKey(entry.getValue())) {
                revertFreq.get(entry.getValue()).add(entry.getKey());
            } else {
                List<Integer> value = new ArrayList<>();
                value.add(entry.getKey());
                revertFreq.put(entry.getValue(), value);
            }
            sortedList.add(entry.getValue());
        }
        sortedList = new HashSet<>(sortedList).stream().sorted().toList();
        var result = new ArrayList<Integer>();
        for (int i = sortedList.size() - 1; i > sortedList.size() - k - 1 || k > 0; i--) {
            var array = revertFreq.get(sortedList.get(i));
            var count = 0;
            for (Integer integer : array) {
                result.add(integer);
                count++;
            }
            k-=count;
        }
        return result.stream().mapToInt(i -> i).toArray();
    }
}
