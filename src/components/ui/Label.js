
export function Card({ children, className }) {
  return <div className={`card ${className}`}>{children}</div>;
}

export function CardHeader({ children }) {
  return <div className="card-header">{children}</div>;
}

export function CardContent({ children }) {
  return <div className="card-content">{children}</div>;
}

export function CardTitle({ children }) {
  return <h2 className="card-title">{children}</h2>;
}