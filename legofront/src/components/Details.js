const Details = ({ children }) => {
  return (
    <p className="hover:bg-lightdarkslategrey mr-2 inline-block bg-darkslategrey px-4 py-3 font-semibold uppercase tracking-wide text-stone-200 transition-colors duration-300">
      {children}
    </p>
  );
};

export default Details;
