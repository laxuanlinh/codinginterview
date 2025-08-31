package com.company.neetcode75.twopointers;

public class MaxArea {
    public static void main(String[] args) {
        System.out.println(maxArea(new int[]{1,7,1,1,1,1,2,5,12,3,500,50,7,8,4,7,38,9,10,12,6}));
    }

    public static int maxArea(int[] heights) {
        var left = 0;
        var right = heights.length - 1;
        var area = Math.min(heights[left], heights[right]) * (right - left);
        // the area depends on the lower height, so we replace the lower height with the next height in the hope that the area will be larger
        // meanwhile we record the max area in the process

        // we can either move higher or lower but if we move higher, we just end up with the same lower or even lower lower, so it makes sense to move the lower hoping that there will be a higher down the road
        while (left < right) {
            if (heights[left] < heights[right]) {
                left++;
            } else {
                right--;
            }
            var temp = Math.min(heights[left], heights[right]) * (right - left);
            if (temp > area) {
                area = temp;
            }
        }
        return area;
    }

}
