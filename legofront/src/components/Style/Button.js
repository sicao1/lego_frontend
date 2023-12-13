const Button = ({ children }) => {
  return (
    <button className="mr-2 inline-block bg-darkslateblue px-2 py-1 text-xs font-semibold uppercase tracking-wide text-stone-200 shadow-sm transition-colors duration-300 hover:bg-lightdarkslateblue sm:px-4 sm:py-3 sm:text-base">
      {children}
    </button>
  );
};

export default Button;
