const CERTIFIED_CODE = "CERTIFIED123";

document.getElementById("verify-btn").addEventListener("click", function() {
    const code = document.getElementById("certification-code").value;

    if (code === CERTIFIED_CODE) {
        document.getElementById("blog-form").classList.remove("hidden");
        document.getElementById("user-verification").classList.add("hidden");
    } else {
        alert("Invalid certification code. Please try again.");
    }
});

document.getElementById("post-blog-form").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;

    if (title && content) {
        document.getElementById("message").classList.remove("hidden");
        document.getElementById("message").innerHTML = "Blog posted successfully!";
        
        document.getElementById("title").value = "";
        document.getElementById("content").value = "";
    } else {
        alert("Please fill out all fields.");
    }
});
