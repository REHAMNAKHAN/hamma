

const pagination = document.getElementById("pagination");
  const totalPages = 25;
  const pagesPerSet = 5;
  let currentStart = 1;

  function renderPagination(start) {
    pagination.innerHTML = ""; // clear existing

    // LESS button
    if (start > 1) {
      const less = document.createElement("a");
      less.textContent = "« Less";
      less.href = "#";
      less.onclick = () => {
        currentStart = Math.max(1, currentStart - pagesPerSet);
        renderPagination(currentStart);
        return false;
      };
      pagination.appendChild(less);
    }

    // Page links
    for (let i = start; i < start + pagesPerSet && i <= totalPages; i++) {
      const link = document.createElement("a");
      link.href = `https://hamma2.netlify.app/page${i}.html`;
      link.textContent = i;
      link.className = "page";
      pagination.appendChild(link);
    }

    // MORE button
    if (start + pagesPerSet <= totalPages) {
      const more = document.createElement("a");
      more.textContent = "More »";
      more.href = "#";
      more.onclick = () => {
        currentStart = currentStart + pagesPerSet;
        renderPagination(currentStart);
        return false;
      };
      pagination.appendChild(more);
    }
  }

  renderPagination(currentStart);