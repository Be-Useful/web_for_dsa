function updateNavigation() {
    const navLinks = [
        { href: 'index.html', text: 'Intro to CP' },
        { href: 'java_basics.html', text: 'Java Basics' },
        { href: 'java_basic_2.html', text: 'Java Basics II' },
        { href: 'Basic_practice_problems.html', text: 'Basic Practice Problems' },
        { href: 'time_complexity.html', text: 'Time Complexity' },
        { href: 'basic_sorting.html', text: 'Basic Sorting' },
        { href: 'array_algo.html', text: 'Array Algorithms' },
        { href: 'Greedy_with_sorting.html', text: 'Greedy with Sorting' },
        { href: 'java_collections_subarrays.html', text: 'Java Collections' },
        { href: 'sliding_window_two_pointer.html', text: 'Sliding Window' },
        { href: 'prefix_sum.html', text: 'Prefix Sum' },
        { href: 'linkedList.html', text: 'Linked List' },
        { href: 'LinkedList_problems.html', text: 'Linked List Problems' },
        { href: 'binary_search.html', text: 'Binary Search' },
        { href: 'stack.html', text: 'Stacks' },
        { href: 'recursion.html', text: 'Recursion' },
        { href: 'recursion2.html', text: 'Recursion II' }
    ];

    const nav = document.querySelector('nav.navbar');
    if (nav) {
        nav.innerHTML = navLinks.map(link => 
            `<a href="${link.href}" ${window.location.pathname.endsWith(link.href) ? 'class="active"' : ''}>${link.text}</a>`
        ).join('\n');
    }
}

// Run the function when the page loads
document.addEventListener('DOMContentLoaded', updateNavigation);