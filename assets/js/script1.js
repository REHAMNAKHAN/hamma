

// Generate 25 page links
const pagination = document.getElementById("pagination");
for (let i = 1; i <= 25; i++) {
  const link = document.createElement("a");
  link.href = `https://hamma2.netlify.app/page${i}.html`;
  link.textContent = i;
  link.className = "page";
  pagination.appendChild(link);
}
