// Simple Code Analyzer
class CodeAnalyzer {
    analyze(code, language) {
        let score = 100;
        const issues = [];
        const recommendations = [];
        
        // Basic security checks
        if (code.includes('eval(')) {
            score -= 20;
            issues.push({
                type: 'security',
                message: 'eval() function detected - security risk',
                severity: 'high'
            });
            recommendations.push('Replace eval() with JSON.parse() or Function()');
        }
        
        if (code.includes('.innerHTML') && code.includes('=')) {
            score -= 15;
            issues.push({
                type: 'security',
                message: 'innerHTML assignment without sanitization',
                severity: 'medium'
            });
            recommendations.push('Use textContent or sanitize HTML with DOMPurify');
        }
        
        // Performance checks
        const lines = code.split('\n');
        if (lines.length > 200) {
            score -= 10;
            issues.push({
                type: 'performance',
                message: `File is ${lines.length} lines long`,
                severity: 'medium'
            });
            recommendations.push('Consider breaking into smaller modules');
        }
        
        // Quality checks
        if (!code.includes('//') && lines.length > 20) {
            score -= 5;
            issues.push({
                type: 'quality',
                message: 'No comments found in code',
                severity: 'low'
            });
            recommendations.push('Add comments to explain complex logic');
        }
        
        // Ensure score doesn't go below 0
        score = Math.max(0, score);
        
        return {
            score: score,
            issues: issues,
            recommendations: recommendations,
            language: language
        };
    }
}

// Global analyzer instance
const analyzer = new CodeAnalyzer();

// Function called from HTML
function analyzeCode() {
    const code = document.getElementById('code-editor').value;
    const language = document.getElementById('language').value;
    
    if (!code.trim()) {
        alert('Please enter some code to analyze');
        return;
    }
    
    const result = analyzer.analyze(code, language);
    
    // Display results
    document.getElementById('score').textContent = result.score;
    
    const issuesElement = document.getElementById('issues');
    const recElement = document.getElementById('recommendations');
    
    issuesElement.innerHTML = '<h4>Issues Found:</h4>';
    if (result.issues.length === 0) {
        issuesElement.innerHTML += '<p>No issues found! Great job!</p>';
    } else {
        result.issues.forEach(issue => {
            const div = document.createElement('div');
            div.className = `issue ${issue.severity}`;
            div.innerHTML = `
                <strong>${issue.type.toUpperCase()}</strong>: ${issue.message}
                <span class="severity">${issue.severity}</span>
            `;
            issuesElement.appendChild(div);
        });
    }
    
    recElement.innerHTML = '<h4>Recommendations:</h4>';
    if (result.recommendations.length === 0) {
        recElement.innerHTML += '<p>No recommendations needed.</p>';
    } else {
        result.recommendations.forEach(rec => {
            const div = document.createElement('div');
            div.className = 'recommendation';
            div.textContent = '✓ ' + rec;
            recElement.appendChild(div);
        });
    }
    
    // Add some CSS for issues display
    if (!document.getElementById('analyzer-styles')) {
        const style = document.createElement('style');
        style.id = 'analyzer-styles';
        style.textContent = `
            .issue {
                padding: 10px;
                margin: 5px 0;
                border-radius: 4px;
                border-left: 4px solid #666;
            }
            .issue.high {
                border-left-color: #ff0033;
                background: rgba(255, 0, 51, 0.1);
            }
            .issue.medium {
                border-left-color: #ffcc00;
                background: rgba(255, 204, 0, 0.1);
            }
            .issue.low {
                border-left-color: #0099ff;
                background: rgba(0, 153, 255, 0.1);
            }
            .severity {
                float: right;
                font-size: 0.8rem;
                padding: 2px 8px;
                border-radius: 10px;
                background: #333;
            }
            .recommendation {
                padding: 10px;
                margin: 5px 0;
                background: rgba(0, 255, 0, 0.1);
                border-radius: 4px;
                border-left: 4px solid #00ff00;
            }
        `;
        document.head.appendChild(style);
    }
}