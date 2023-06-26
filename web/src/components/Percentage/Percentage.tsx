interface PercentageProps {
  percentage: number
}

const Percentage = ({ percentage }: PercentageProps) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/svg"
        width="230"
        height="230"
        viewBox="0 0 230 230"
      >
        <circle
          cx="115"
          cy="115"
          r="100"
          fill="black"
          strokeWidth="8"
          stroke="#393939"
        />
        <circle
          cx="115"
          cy="115"
          r="100"
          fill="none"
          strokeWidth="8"
          className="stroke-oriolesOrange"
          strokeDasharray={`calc(${Percentage} / 100) * 628.32) 628.32`}
          transform="rotate(-90) translate(-230)"
        />
      </svg>
      <div>
        <div>{percentage}</div>
        <div>%</div>
      </div>
    </div>
  )
}

export { Percentage, PercentageProps }
