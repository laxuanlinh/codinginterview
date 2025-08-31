package com.company.neetcode75.arrayhashing;

import java.util.ArrayList;

public class ValidPalindrome {
    public static void main(String[] args) {
        System.out.println(isPalindrome("0P"));
    }

    public static boolean isPalindrome(String s) {
        s = s.toLowerCase();
        var arr = new ArrayList<Character>();
        for (int i = 0; i<s.length(); i++) {
            char character = s.charAt(i);
            if (Character.isAlphabetic(character) || Character.isDigit(character)) {
                arr.add(character);
            }
        }
        for (int i = 0; i < arr.size() / 2; i++) {
            if (arr.get(i) != arr.get(arr.size()-i-1)) {
                return false;
            }
        }
        return true;
    }
}
