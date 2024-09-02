// import './Toggle.css';

const Toggle = ({ id, checked, onChange }) => {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="toggle-checkbox"
      />
      <label htmlFor={id} className="toggle-label">
        <span className="toggle-button" />
      </label>
    </div>
  );
};

export {Toggle};