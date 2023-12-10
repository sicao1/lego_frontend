const Header = () => {
  return (
    <div className="relative">
      <h1 className="absolute inset-0 z-10 flex items-center justify-center text-7xl text-slate-300">
        The Lego Terrarium
      </h1>
      <img
        className="brightness-50"
        src="https://i.imgur.com/StDAHzU.jpg?1"
        alt="lego set in a glass plant terrarium"
      />
    </div>
  );
};

export default Header;
