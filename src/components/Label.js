function Label({ children, htmlFor }) {
  return <label htmlFor={htmlFor}>{children}</label>;
}

export { Label };