const ButtonEnter = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute inset-x-80 top-2/3 z-20 mr-2 bg-darkslateblue px-2 py-1 text-xs font-semibold uppercase tracking-wide text-stone-200 shadow-sm transition-colors duration-300 hover:bg-lightdarkslateblue motion-safe:animate-bounce sm:px-4 sm:py-3 sm:text-base"
    >
      {children}
    </button>
  );
};

export default ButtonEnter;
