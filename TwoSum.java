package com.company;

import java.util.*;
import java.util.stream.Collectors;

public class TwoSum {

    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> pos = new HashMap<>();
        List<Integer> list = Arrays.stream(nums).boxed().collect(Collectors.toList());
        for (int i=0; i<list.size(); i++){
            int current = list.get(i);
            int temp = target - current;
            //check if before this, is there any element that has the sum with the current equal to target
            if (pos.containsKey(temp)){
                return new int[] {pos.get(temp), i};
            }
            //if not then we put this to the map
            //if we put first and then check, we can run into problem when current + current = target so we return 1 index twice
            pos.put(current, i);
        }
        return null;
    }

    public static void main(String[] args) {
        TwoSum sum  =new TwoSum();
        sum.twoSum(new int[]{3 ,3}, 6);
    }

}
