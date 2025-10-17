import { AiOutlineLoading3Quarters } from "react-icons/ai";

const TailwindButton = ({ children, className = "", loading = false, ...props }) => {
  return (
    <button
      disabled={loading}
      className={`bg-[color:var(--color-accent)] text-background hover:bg-primary rounded-full px-8 py-3 font-runde text-sm tracking-widest font-normal uppercase flex items-center justify-center gap-2 transition-all disabled:opacity-70 disabled:cursor-not-allowed ${className}`}
      {...props}
    >
      {loading ? (
        <>
          <AiOutlineLoading3Quarters className="animate-spin text-lg" />
          Loading...
        </>
      ) : (
        children
      )}
    </button>
  );
};

export default TailwindButton;
