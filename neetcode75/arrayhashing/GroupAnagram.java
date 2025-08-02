package com.company.neetcode75.arrayhashing;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class GroupAnagram {
    public static void main(String[] args) {
        System.out.println(groupAnagrams(new String[]{"act","pots","tops","cat","stop","hat"}));
    }
    public static List<List<String>> groupAnagrams(String[] strs) {
        var results = new ArrayList<List<String>>();
        var marks = new HashMap<>();
        for (int i = 0; i < strs.length; i++) {
            if (marks.containsKey(i)) {
                continue;
            }
            var result = new ArrayList<String>();
            result.add(strs[i]);
            for (int j = i+1; j < strs.length; j++) {
                if (marks.containsKey(j)) {
                    continue;
                }
                if (isAnagram(strs[i], strs[j])) {
                    result.add(strs[j]);
                    marks.put(j, true);
                }
            }
            marks.put(i, true);
            results.add(result);
        }
        return results;
    }

    private static boolean isAnagram(String s, String t) {
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
