var lengthOfLongestSubstring = function (s) {
  if (!s) return 0;
  let p1 = 0;
  let p2 = 0;
  let max = 0;
  const set = new Set();
  for (; p2 < s.length; p2++) {
    const v = s[p2];
    while (set.has(v)) {
      set.delete(s[p1]);
      p1++;
    }
    set.add(v);
    max = Math.max(max, set.size);
  }
  return max;
};

lengthOfLongestSubstring('pwwkew');