const Details = ({ children }) => {
  return (
    <p className="hover:bg-lightdarkslategrey mr-2 inline-block bg-darkslategrey px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-100 transition-colors duration-300 sm:text-base">
      {children}
    </p>
  );
};

export default Details;
