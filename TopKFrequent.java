package com.company;

import java.util.*;
import java.util.stream.Collectors;

public class TopFrequent {

    public int[] topKFrequent(int[] nums, int k) {
        LinkedHashMap<Integer, Integer> freq = new LinkedHashMap<>();
        for (int i = 0; i < nums.length; i++) {
            if (freq.containsKey(nums[i])){
                freq.put(nums[i], freq.get(nums[i])+1);
            } else {
                freq.put(nums[i], 1);
            }
        }
        List<Integer> temp = freq.entrySet().stream()
                .sorted(Map.Entry.comparingByValue())
                .map(e -> e.getKey())
                .collect(Collectors.toList());
        List<Integer> res = new ArrayList<>();
        for (int i = temp.size() - 1; i >= temp.size() -k ; i--) {
            res.add(temp.get(i));
        }
        return res.stream().mapToInt(i->i).toArray();

    }

    public static void main(String[] args) {
        TopFrequent topFrequent = new TopFrequent();
        topFrequent.topKFrequent(new int[]{1,1,1,2,2,3}, 2);
    }

}