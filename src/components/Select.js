import React from 'react'; // Add this line

function Select({ value, onValueChange, children }) {
  return (
    <select value={value} onChange={(e) => onValueChange(e.target.value)}>
      {children}
    </select>
  );
}

function SelectTrigger({ children, className }) {
  return <div className={`select-trigger ${className}`}>{children}</div>;
}

function SelectContent({ children }) {
  return <div className="select-content">{children}</div>;
}

function SelectItem({ value, children }) {
  return <option value={value}>{children}</option>;
}

function SelectValue({ placeholder }) {
  return <span>{placeholder}</span>;
}

export { Select, SelectTrigger, SelectContent, SelectItem, SelectValue };