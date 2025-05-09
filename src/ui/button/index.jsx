function Button({
  children,
  onClick,
  className = '',
  disabled = false,
  ariaLabel,
  size = 'medium'
}) {
  const sizeClasses = {
    small: 'text-sm px-2 py-1',
    medium: 'text-base px-4 py-2',
    large: 'text-lg px-6 py-3',
  };

  return (
    <button
      className={`
        font-medium rounded-lg transition-all duration-100
        focus:outline-none focus:ring-2
        hover:outline-none hover:ring-2
        disabled:opacity-50 disabled:cursor-not-allowed
        ${sizeClasses[size]} ${className}`}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      type='button'
    >
      {children}
    </button>
  );
}

export default Button;
