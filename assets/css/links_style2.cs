.static-page {
  max-width: 800px;
  margin: 60px auto;
  padding: 20px;
  box-sizing: border-box;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.static-page h1 {
  font-size: 2.2rem;
  margin-bottom: 1rem;
}

.static-page h2 {
  margin-top: 1.8rem;
  font-size: 1.5rem;
  color: #333;
}

.static-page p,
.static-page li {
  font-size: 1.1rem;
  margin-bottom: 1rem;
  color: #444;
  text-align: center;
}

.static-page ul {
  padding-left: 0;
  list-style-type: none;
}

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

  .static-page p,
  .static-page li {
    font-size: 1rem;
  }
}
