const NavigationLinks = ({ links, mobile, onClick }) => {
  return (
    <ul
      className={`${
        mobile ? "flex flex-col items-center space-y-6" : "flex space-x-6"
      }`}
    >
      {links.map((link) => (
        <li key={link.id}>
          <a
            href={`#${link.id}`}
            onClick={onClick}
            className={`hover:text-[var(--primary)] transition-colors duration-300 ${
              mobile ? "text-2xl" : "text-base"
            }`}
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavigationLinks;
