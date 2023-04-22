document.getElementById("link-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const linkInput = document.getElementById("link-input");
    const link = linkInput.value;
  
    if (link) {
      // Perform actions with the link, e.g. sending it to your server
      console.log("Submitted link:", link);
  
      // Clear the input
      linkInput.value = "";
    }
  });
  