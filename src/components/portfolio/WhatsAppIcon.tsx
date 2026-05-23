type WhatsAppIconProps = {
  size?: number;
  className?: string;
};

export function WhatsAppIcon({ size = 18, className }: WhatsAppIconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 4a8 8 0 0 0-6.93 12.02L4 20l4.08-1.07A8 8 0 1 0 12 4Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.9"
      />
      <path
        d="M8.9 8.75c.15-.35.36-.43.62-.43h.48c.18 0 .36.05.47.33l.67 1.6c.08.2.04.37-.1.54l-.3.36c-.12.14-.13.3-.03.46.42.7.95 1.24 1.64 1.65.16.1.32.09.46-.03l.37-.31c.16-.14.34-.17.53-.09l1.61.66c.27.12.33.3.33.48v.47c0 .27-.08.48-.43.63-.46.2-1.05.28-1.72.1-2.1-.57-3.98-2.45-4.55-4.55-.18-.67-.1-1.26.1-1.72Z"
        fill="currentColor"
      />
    </svg>
  );
}
