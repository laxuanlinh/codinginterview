package com.company.neetcode75.arrayhashing;

import java.util.HashMap;
import java.util.Map;

public class ValidAnagram {
    public static void main(String[] args) {
        System.out.println(isAnagram("aa", "aa"));
    }

    public static boolean isAnagram(String s, String t) {
        if (s.length() != t.length()) {
            return false;
        }
        var map = new HashMap<Character, Integer>();
        var map2 = new HashMap<Character, Integer>();
        for (char character : s.toCharArray()) {
            map.put(character, map.containsKey(character) ? map.get(character)+1 : 1);
        }
        for (char character : t.toCharArray()) {
            map2.put(character, map2.containsKey(character) ? map2.get(character)+1 : 1);
        }
        for (Map.Entry<Character, Integer> entry : map.entrySet()) {
            if (!map2.containsKey(entry.getKey()) || !map2.get(entry.getKey()).equals(entry.getValue())) {
                return false;
            }
        }
        return true;
    }
}
