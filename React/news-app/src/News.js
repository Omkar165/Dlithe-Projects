
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const News = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=apple&from=2025-03-09&to=2025-03-09&sortBy=popularity&apiKey=67d4189a7bfd4f06b22d7740e8cafad0`
        );
        setArticles(response.data.articles);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching news:', error);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div>
      <h1>Latest News</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {articles.map((article, index) => (
            <div key={index} style={{ marginBottom: '20px' }}>
              <h2>{article.title}</h2>
              <p>{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                Read more
              </a>
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default News;
