import React from 'react'; // Add this line

function Select({ value, onValueChange, children }) {
  return (
    <div className="relative">
      <select 
        value={value} 
        onChange={(e) => onValueChange(e.target.value)}
        className="w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
      >
        {children}
      </select>
    </div>
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