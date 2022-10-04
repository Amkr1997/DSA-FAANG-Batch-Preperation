
/* 1st QUESTION
   1. Given an integer array nums of length n and an integer target, find three integers in nums
such that the sum is closest to the target. You need to return the sum of three integers.
 */

import java.util.*;
public class Main
{
	public static void main(String[] args) {
		
		int[] nums = {-1,2,1,-4};
		int target = 1;
		int findSum = findThreeIntegersSum(nums,target);
		System.out.print(findSum);
	}
	
	public static int findThreeIntegersSum(int[] nums, int target) {
        
        Arrays.sort(nums);
        int closeSum = nums[0] + nums[1] + nums[nums.length-1];
        
        for(int i=0; i<nums.length-2; i++) {
            
            int start = i+1;
            int end = nums.length-1;
            
            while(start < end) {
             
            int currSum = nums[i] + nums[start] + nums[end];
             
            if(currSum > target) {
                 end--;
             }else {
                 start++;
             }
            if(Math.abs(currSum-target) < Math.abs(closeSum-target)) {
                closeSum = currSum;
             } 
           }
        }
      return closeSum;
    }
}
