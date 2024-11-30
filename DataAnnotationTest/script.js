// JavaScript can be used for dynamic features like:
// - Fetching posts from an API
// - Handling user interactions (upvotes, downvotes, comments)
// - Implementing real-time features (e.g., chat)

// Example: Fetching posts from a mock API
fetch('https://api.example.com/posts')
  .then(response => response.json())
  .then(data => {
    // Populate the DOM with the fetched posts
  })
  .catch(error => {
    console.error('Error fetching posts:', error);
  });