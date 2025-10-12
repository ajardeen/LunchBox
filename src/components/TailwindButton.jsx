function TailwindButton({ children, className }) {
  return (
    <button
      className={`bg-[color:var(--color-accent)] text-background hover:bg-primary rounded-full px-8 py-3 font-runde text-sm tracking-widest  font-normal uppercase ${className}`}
    >
      {children}
    </button>
  );
}

export default TailwindButton;