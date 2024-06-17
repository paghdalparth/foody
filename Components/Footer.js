// Footer component for footer section
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      Created By
      <i className="fa-solid fa-heart"></i>
      <a
        href="https://www.linkedin.com/in/parth-paghdal-b673a5234/"
        target="_blank"
        title="Linkedin Profile"
      >
        Parth Paghdal
      </a>
      <i className="fa-solid fa-copyright"></i>
      {year}
      <a
        href="https://github.com/paghdalparth/Swiggy"
        target="_blank"
        title="Github Repository"
      >
        <strong>
          foo<span>dy</span>
        </strong>
      </a>
    </div>
  );
};

export default Footer;
