const Button = ({ children }) => {
  return (
    <button className="bg-darkslateblue hover:bg-lightdarkslateblue mr-2 inline-block px-4 py-3 font-semibold uppercase tracking-wide text-stone-200 transition-colors duration-300">
      {children}
    </button>
  );
};

export default Button;
