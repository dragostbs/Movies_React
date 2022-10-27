const Footer = () => {
  return (
    <footer className="page-footer blue-grey lighten-2">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Copyright
          <a className="grey-text text-lighten-4 right" href="#!">
            Watcher App
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
