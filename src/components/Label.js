import React from 'react'; // Add this line

function Label({ children, htmlFor }) {
  return <label htmlFor={htmlFor}>{children}</label>;
}

export { Label };