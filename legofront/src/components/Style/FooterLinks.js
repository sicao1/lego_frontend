const FooterLinks = ({ href, children }) => {
  return (
    <a
      href={href}
      className="text-md mr-4 text-stone-300 transition-all duration-300 hover:text-stone-100"
    >
      {children}
    </a>
  );
};
export default FooterLinks;
