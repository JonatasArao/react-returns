function Button({ children, onClick, className }) {
  return (
    <button
      className={`text-xl rounded-xl p-2 active:opacity-80 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
