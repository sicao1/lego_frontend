import ButtonEnter from "./Style/ButtonEnter";

const Header = (props) => {
  return (
    <div className="relative">
      <h1 className="absolute inset-0 z-10 flex items-center justify-center text-4xl text-slate-200 sm:text-7xl">
        The Lego Terrarium
      </h1>
      <ButtonEnter onClick={props.handleEnterClick}>Enter Here</ButtonEnter>
      {/* TODO - create and add a slogan */}
      <img
        className="brightness-50"
        src="https://i.imgur.com/StDAHzU.jpg?1"
        alt="lego set in a glass plant terrarium"
      />
    </div>
  );
};

export default Header;
