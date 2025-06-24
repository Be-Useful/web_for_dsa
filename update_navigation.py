import os
import re

def update_navigation(html_file):
    # Read the file
    with open(html_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Find the nav element
    nav_pattern = r'<nav class="navbar">.*?</nav>'
    new_nav = '''<nav class="navbar">
        <!-- Navigation links will be inserted here by update_nav.js -->
    </nav>
    
    <!-- Include the navigation update script -->
    <script src="update_nav.js"></script>'''
    
    # Replace the nav element
    new_content = re.sub(nav_pattern, new_nav, content, flags=re.DOTALL)
    
    # Write the updated content back to the file
    with open(html_file, 'w', encoding='utf-8') as f:
        f.write(new_content)

def main():
    # Get all HTML files in the current directory
    html_files = [f for f in os.listdir() if f.endswith('.html')]
    
    # Update each HTML file
    for html_file in html_files:
        print(f"Updating {html_file}...")
        update_navigation(html_file)
    
    print("Navigation update complete!")

if __name__ == "__main__":
    main()
