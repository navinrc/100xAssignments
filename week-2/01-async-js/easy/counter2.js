// Function to create a counter
function startCounter(count) {
    // Print the current count
    if (count > 0) {
    console.log(count);
  
    // Check if count is less than or equal to 0, stop recursion
      // Schedule the next call to startCounter after 1 second
      setTimeout(function() {
        startCounter(count - 1); // Decrease count by 1
      }, 1000); // 1000 milliseconds = 1 second
    }
  }
  
  // Starting the counter from 10
  startCounter(10);