import java.util.*;

public class MajorityElement {

    public static void main(String[] args) {
        System.out.println(new MajorityElement().majorityElement(new int[] {1,1,2,2,1,1,2,2,2,3}));
    }

    //it's guaranteed that there is always a number that has frequency > all other frequencies combine
    public int majorityElement(int[] nums) {
        int res = 0;
        int majority = 0;
        for (int num : nums) {
            //if majority == 0 means the current number cannot be the majority
            //assign to the next number
            if (majority == 0) {
                res = num;
            }
            if (num == res) {
                majority ++;
            } else {
                majority --;
            }
        }
        return res;
    }
}
