function Slider({ id, min, max, step, value, onValueChange }) {
  return (
    <input
      type="range"
      id={id}
      min={min}
      max={max}
      step={step}
      value={value[0]}
      onChange={(e) => onValueChange([parseFloat(e.target.value)])}
    />
  );
}

export { Slider };