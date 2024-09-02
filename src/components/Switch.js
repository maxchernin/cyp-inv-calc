import React from 'react';

const Switch = React.forwardRef(({ checked, onCheckedChange, ...props }, ref) => (
  <button
    ref={ref}
    role="switch"
    aria-checked={checked}
    onClick={() => onCheckedChange(!checked)}
    {...props}
  >
    <span />
  </button>
));

Switch.displayName = 'Switch';

export { Switch };