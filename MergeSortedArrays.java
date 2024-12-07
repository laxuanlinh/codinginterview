import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class MergeSortedArrays {

    public static void main(String[] args) {
        var nums1 = new int[] {1, 2, 5, 0, 0, 0};
        var nums2 = new int[] {2, 4, 7};
        new MergeSortedArrays().merge(nums1, 3, nums2, 3);
        System.out.println(Arrays.toString(nums1));
    }

    public void merge(int[] nums1, int m, int[] nums2, int n) {
        List<Integer> result = new ArrayList<>();
        int i = 0;
        int j = 0;
        var point = 0;
        if (n == 0) {
            return;
        }
        if (m == 0) {
            for (int k = 0; k < nums1.length; k++) {
                nums1[k] = nums2[k];
            }
            return;
        }

        while (i < m && j < n) {
            if (nums1[i] <= nums2[j]) {
                result.add(nums1[i]);
                if (i < m - 1) {
                    i++;
                } else {
                    for (int k = j; k < n; k++) {
                        result.add(nums2[k]);
                    }
                    break;
                }
                continue;
            }
            if (nums1[i] > nums2[j]){
                result.add(nums2[j]);
                if (j < n - 1) {
                    j++;
                } else {
                    for (int k = i; k < m; k++) {
                        result.add(nums1[k]);
                    }
                    break;
                }
            }
        }
        for (int k = 0; k < result.size(); k++) {
            nums1[k] = result.get(k);
        }
    }

    public void optimalMerge(int[] nums1, int m, int[] nums2, int n) {
        int pointer = nums1.length - 1;
        int i = m - 1;
        int j = n - 1;
        while (j >= 0) {
            if (nums1[i] > nums2[j]) {
                var temp = nums1[i];
                nums1[i] = 0;
                nums1[pointer] = temp;
                i--;
            } else {
                var temp = nums2[j];
                nums2[j] = 0;
                nums1[pointer] = temp;
                j--;
            }
            pointer--;
        }
    }

}
