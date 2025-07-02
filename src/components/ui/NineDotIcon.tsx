const dotProps = { r: 2.5, fill: 'currentColor' };
const NineDotIcon = ({ className = "w-7 h-7" }) => (
  <svg
    viewBox="0 0 20 20"
    className={className}
    style={{ display: "block" }}
    aria-hidden="true"
    focusable="false"
  >
    <circle cx="4"  cy="4"  {...dotProps} />
    <circle cx="10" cy="4"  {...dotProps} />
    <circle cx="16" cy="4"  {...dotProps} />
    <circle cx="4"  cy="10" {...dotProps} />
    <circle cx="10" cy="10" {...dotProps} />
    <circle cx="16" cy="10" {...dotProps} />
    <circle cx="4"  cy="16" {...dotProps} />
    <circle cx="10" cy="16" {...dotProps} />
    <circle cx="16" cy="16" {...dotProps} />
  </svg>
);
export default NineDotIcon; 