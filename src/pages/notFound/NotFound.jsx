// src/pages/notFound/NotFound.jsx

import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | KZN Machine Tool Solutions</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <main
        style={{
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "40px 20px",
        }}
      >
        <div>
          <h1>404</h1>
          <h2>Page Not Found</h2>
          <p>The page you're looking for doesn't exist.</p>

          <Link to="/">Back to Home</Link>
        </div>
      </main>
    </>
  );
}