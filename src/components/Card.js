import React from 'react';

function Card({ children }) {
  return <div>{children}</div>;
}

function CardHeader({ children }) {
  return <div>{children}</div>;
}

function CardContent({ children }) {
  return <div>{children}</div>;
}

function CardTitle({ children }) {
  return <h2>{children}</h2>;
}

export { Card, CardHeader, CardContent, CardTitle };