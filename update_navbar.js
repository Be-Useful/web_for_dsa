const fs = require('fs');
const path = require('path');

const navbarHTML = `    <nav class="navbar">
        <a href="index.html">Intro to CP</a>
        <a href="java_basics.html">Java Basics</a>
        <a href="java_basic_2.html">Java Basics II</a>
        <a href="Basic_practice_problems.html">Basic Practice Problems</a>
        <a href="time_complexity.html">Time Complexity</a>
        <a href="basic_sorting.html">Basic Sorting</a>
        <a href="array_algo.html">Array Algorithms</a>
        <a href="Greedy_with_sorting.html">Greedy with Sorting</a>
        <a href="java_collections_subarrays.html">Java Collections</a>
    </nav>`;

const files = [
    'index.html',
    'java_basics.html',
    'java_basic_2.html',
    'Basic_practice_problems.html',
    'time_complexity.html',
    'basic_sorting.html',
    'array_algo.html',
    'Greedy_with_sorting.html',
    'java_collections_subarrays.html'
];

files.forEach(file => {
    const filePath = path.join(__dirname, file);
    
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Remove any existing active-nav class first
        content = content.replace(/<a href=[^>]*?class=["']active-nav["'][^>]*?>/g, (match) => {
            return match.replace(/class=["']active-nav["']/, '').trim() + '>';
        });
        
        // Add active-nav class to current page
        const currentPage = file === 'index.html' ? 'index.html' : file;
        const activeLink = new RegExp(`<a href=["']${currentPage.replace(/([.*+?^${}()|\[\]\/\\])/g, '\\$1')}["']`);
        
        // Replace the navbar
        content = content.replace(/<nav class=["']navbar["'][\s\S]*?<\/nav>/, (match) => {
            // Add active-nav class to the current page link
            return navbarHTML.replace(activeLink, (link) => {
                return link.replace('>', ' class="active-nav">');
            });
        });
        
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated navbar in ${file}`);
    } catch (err) {
        console.error(`Error processing ${file}:`, err);
    }
});

console.log('Navbar update complete!');
