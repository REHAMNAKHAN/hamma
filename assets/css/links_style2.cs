/* Global Styles */
body {
  font-family: 'Outfit', sans-serif;
  margin: 0;
  padding: 0;
  background: #fff;
  color: #222;
  line-height: 1.6;
}

/* Container for static pages */
.static-page {
  max-width: 900px;
  margin: 60px auto;
  padding: 20px;
  box-sizing: border-box;
}

.static-page h1 {
  font-size: 2.2rem;
  margin-bottom: 1rem;
  text-align: center;
}

.static-page h2 {
  margin-top: 1.8rem;
  font-size: 1.5rem;
  color: #333;
}

.static-page p, .static-page li {
  font-size: 1.1rem;
  margin-bottom: 1rem;
  color: #444;
}

.static-page ul {
  padding-left: 20px;
  list-style-type: disc;
}

/* Links */
.static-page a {
  color: #007bff;
  text-decoration: none;
}
.static-page a:hover {
  text-decoration: underline;
}

/* Responsive Styling */
@media (max-width: 768px) {
  .static-page {
    padding: 15px;
    margin: 40px 10px;
  }

  .static-page h1 {
    font-size: 1.8rem;
  }

  .static-page h2 {
    font-size: 1.3rem;
  }

  .static-page p, .static-page li {
    font-size: 1rem;
  }
}
