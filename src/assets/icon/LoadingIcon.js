function LoadingIcon({ size = "animate-spin h-14 w-14 mr-3" }) {
  return (
    <svg
      className={size}
      version="1.1"
      id="L2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      enableBackground="new 0 0 100 100"
    >
      <circle
        fill="#F05830"
        stroke="#fff"
        strokeWidth="4"
        strokeMiterlimit="10"
        cx="50"
        cy="50"
        r="48"
      />
      <line
        fill=""
        strokeLinecap="round"
        stroke="#fff"
        strokeWidth="4"
        strokeMiterlimit="10"
        x1="50"
        y1="50"
        x2="85"
        y2="50.5"
      >
        <animateTransform
          attributeName="transform"
          dur="2s"
          type="rotate"
          from="0 50 50"
          to="360 50 50"
          repeatCount="indefinite"
        />
      </line>
      <line
        fill=""
        strokeLinecap="round"
        stroke="#fff"
        strokeWidth="4"
        strokeMiterlimit="10"
        x1="50"
        y1="50"
        x2="49.5"
        y2="74"
      >
        <animateTransform
          attributeName="transform"
          dur="15s"
          type="rotate"
          from="0 50 50"
          to="360 50 50"
          repeatCount="indefinite"
        />
      </line>
    </svg>
  );
}

export default LoadingIcon;
