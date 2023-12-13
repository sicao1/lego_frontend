import FooterLinks from "./Style/FooterLinks";

const Footer = () => {
  return (
    <>
      <div className="from-footergreen to-footerlitegreen flex gap-4 bg-gradient-to-r">
        <img
          className="max-h-48 brightness-75"
          src="https://i.imgur.com/yw9p95G.jpg"
          alt="lego stormtrooper in the forest"
        />
        <div className="ml-12 mt-14 leading-10">
          <p className="text-lg text-stone-200">Explore More:</p>
          <FooterLinks href="https://www.lego.com/en-us">
            Visit Lego.com
          </FooterLinks>
          <FooterLinks href="https://www.facebook.com/LegoLostAtSea">
            Lost At Sea
          </FooterLinks>
          <FooterLinks href="https://www.pinterest.com/brickuniverse/?eq=lego%20conv&etslf=8586">
            Pinterest
          </FooterLinks>
          <FooterLinks href="https://www.instagram.com/legoinspire/">
            Instagram
          </FooterLinks>
          <FooterLinks href="https://www.amazon.com/stores/LEGO/LEGO/page/017EF856-965D-4B56-A171-EA61CAFF45DD">
            Buy on Amazon
          </FooterLinks>
          <div>
            <p className="mt-4 text-sm text-stone-200 ">
              &copy;2024 All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
