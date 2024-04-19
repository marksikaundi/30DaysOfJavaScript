var isMatch = function(s, p) {
    const m = s.length;
    const n = p.length;
    
    // Initialize the DP table
    const dp = new Array(m + 1);
    for (let i = 0; i <= m; i++) {
        dp[i] = new Array(n + 1).fill(false);
    }
    
    // Empty pattern matches empty string
    dp[0][0] = true;
    
    // Handling cases where '*' matches empty string
    for (let j = 1; j <= n; j++) {
        if (p[j - 1] === '*') {
            dp[0][j] = dp[0][j - 1];
        }
    }
    
    // Dynamic programming
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (p[j - 1] === '*' && (dp[i - 1][j] || dp[i][j - 1])) {
                dp[i][j] = true;
            } else if (p[j - 1] === '?' || s[i - 1] === p[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            }
        }
    }
    
    return dp[m][n];
};
