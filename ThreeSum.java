package com.company;

import java.util.*;
import java.util.stream.Collectors;

public class ThreeSum {
    public List<List<Integer>> threeSum(int[] nums){
        List<Integer> list = Arrays.stream(nums).boxed().sorted().collect(Collectors.toList());
        Set<List<Integer>> res = new HashSet<>();
        for (int i = 0; i < list.size() - 1; i++) {
            int a = list.get(i);
            int bIndex = i+1;
            int cIndex = list.size() - 1;
            while (bIndex < cIndex){
                int b = list.get(bIndex);
                int c = list.get(cIndex);
                if (a+b+c==0){
                    res.add(List.of(a, b, c));
                    bIndex++;
                    cIndex--;
                } else if (a+b+c > 0){
                    cIndex--;
                } else {
                    bIndex++;
                }
            }
        }
        return new ArrayList<>(res);
    }
    public static void main(String[] args) {
        ThreeSum sum = new ThreeSum();
        sum.threeSum(new int[]{-1,0,1,2,-1,-4});
    }
}
