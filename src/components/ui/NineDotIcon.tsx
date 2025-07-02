const dotProps = { r: 45, fill: '#fff' };

const NineDotIcon = ({ className = "w-full h-full" }) => (
  <svg
    viewBox="0 0 315 315"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ display: "block" }}
    aria-hidden="true"
    focusable="false"
    preserveAspectRatio="xMidYMid meet"
  >
    {[0, 1, 2].flatMap(i =>
      [0, 1, 2].map(j => (
        <circle
          key={`${i}-${j}`}
          cx={45 + i * 112.5}
          cy={45 + j * 112.5}
          {...dotProps}
        />
      ))
    )}
  </svg>
);
export default NineDotIcon;
