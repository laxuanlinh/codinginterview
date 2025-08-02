package com.company.neetcode75.arrayhashing;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class EncodeDecodeString {

    public static void main(String[] args) {
        var encoded = encode(Arrays.asList());
        var decoded = decode(encoded);
        System.out.println(encoded);
        System.out.println(decoded);
    }

    public static String encode(List<String> strs) {
        var result = new StringBuilder();
        var separator = "&24";
        for (String str : strs) {
            if (str.isEmpty()) {
                str = "&25";
            }
            result.append(str);
            result.append(separator);
        }
        return result.toString();
    }

    public static List<String> decode(String str) {

        var result = new ArrayList<String>();
        var arr = str.split("&24");
        for (String string : arr) {
            if (string.isEmpty()) {
                continue;
            }
            if (string.equals("&25")) {
                result.add("");
                continue;
            }
            result.add(string);
        }
        return result;
    }

}
