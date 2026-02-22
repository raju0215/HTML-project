// Optional: simple dynamic post example
console.log("Blog website loaded!");

// তুমি চাইলে JS দিয়ে নতুন পোস্ট dynamically যোগ করতে পারো:
const posts = [
    {
        title: "তৃতীয় পোস্ট",
        date: "22 ফেব্রুয়ারি, 2026",
        content: "এটি তৃতীয় পোস্ট। এখানে আরও নতুন তথ্য শেয়ার করা হবে।"
    }
];

const blogContainer = document.getElementById("blog-posts");

posts.forEach(post => {
    const article = document.createElement("article");
    article.classList.add("post");
    article.innerHTML = `
        <h2>${post.title}</h2>
        <p class="date">${post.date}</p>
        <p>${post.content}</p>
        <a href="#" class="read-more">Read More</a>
    `;
    blogContainer.appendChild(article);
});
