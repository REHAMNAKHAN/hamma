

const pagination = document.getElementById("pagination");
  const totalPages = 6;
  const pagesPerSet = 2;
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
      link.href = `https://hintsnap.in/page${i}.html`;
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
  fetch('https://docs.google.com/spreadsheets/d/1km3SdNZgy-4X2gc-xaPwzLLwebsN643U--tq4tx8BOw/gviz/tq?tqx=out:json')
      .then(res => res.text())
      .then(text => {
        const json = JSON.parse(text.substr(47).slice(0, -2));
        const offerText = json.table.rows[0].c[0].v;  // Cell A1
        document.getElementById('offer-banner').textContent = offerText;
      })
      .catch(err => {
        document.getElementById('offer-banner').textContent = "Unable to load offer.";
        console.error("Fetch error:", err);
      });