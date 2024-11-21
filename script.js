/ Fetch a random quote
async function fetchQuote() {
  const response = await fetch("https://api.quotable.io/random");
  const data = await response.json();
  console.log("Fetched quote:", data);  // Debug: Check the fetched data
  document.getElementById("quote").innerText = "${data.content}";
  document.getElementById("author").innerText = - ${data.author};
}

// Share quote on Twitter
function shareOnTwitter() {
  const quote = document.getElementById("quote").innerText;
  const author = document.getElementById("author").innerText;
  const tweetUrl = https://twitter.com/intent/tweet?text=${encodeURIComponent(quote + " " + author)};
  window.open(tweetUrl, "_blank");
}

// Event Listeners
document.getElementById("new-quote").addEventListener("click", function() {
  console.log("Button clicked!");  // Debug: Check if button click is detected
  fetchQuote();
});

document.getElementById("share-twitter").addEventListener("click", shareOnTwitter);

// Load a quote on page load
fetchQuote();

