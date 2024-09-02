function Card({ children, className }) {
  return <div className={`card ${className}`}>{children}</div>;
}

function CardHeader({ children }) {
  return <div className="card-header">{children}</div>;
}

function CardContent({ children }) {
  return <div className="card-content">{children}</div>;
}

function CardTitle({ children }) {
  return <h2 className="card-title">{children}</h2>;
}

export { Card, CardHeader, CardContent, CardTitle };