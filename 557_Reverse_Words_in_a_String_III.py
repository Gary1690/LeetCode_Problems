# 557. Reverse Words in a String III
# Easy

# 1338

# 100

# Add to List

# Share
# Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

# Example 1:
# Input: "Let's take LeetCode contest"
# Output: "s'teL ekat edoCteeL tsetnoc"
# Note: In the string, each word is separated by single space and there will not be any extra space in the string.

class Solution:
    def reverseWords(self, s: str) -> str:
        words = s.split()
        words = list(map(lambda x : x[len(x)::-1],words))
        return " ".join(words)


        