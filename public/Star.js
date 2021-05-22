export default function Star({ isFill = false }) {
  return (
    <svg
      width='34'
      height='32'
      viewBox='0 0 34 32'
      fill={isFill ? '#42B6F8' : 'none'}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M17 1.70312L21.635 11.0931L32 12.6081L24.5 19.9131L26.27 30.2331L17 25.3581L7.73 30.2331L9.5 19.9131L2 12.6081L12.365 11.0931L17 1.70312Z'
        stroke='#42B6F8'
        strokeWidth='3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
