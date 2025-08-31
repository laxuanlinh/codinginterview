package com.company.neetcode75.twopointers;

public class BestTimeToBuyAndSellStock {

    public static void main(String[] args) {
        System.out.println(maxProfit(new int[]{7,1,5,3,6,4}));
    }

    public static int maxProfit(int[] prices) {
        var profit = 0;
        var bestBuy = prices[0];
        var bestSell = prices[0];
        // use profit to record profile in the process
        // if find better buy, promote to best buy and best sell (because sell always > buy)
        // if find better sell, promote to buy sell, no need to promote best sell because sell is already low
        // continue til the end, buy is always < sell
        for (int price : prices) {
            if (price < bestBuy) {
                bestBuy = price;
                bestSell = price;
            } else if (price >= bestSell) {
                bestSell = price;
            }
            var temp = bestSell - bestBuy;
            if (temp > profit) {
                profit = temp;
            }
        }
        return profit;
    }

}
