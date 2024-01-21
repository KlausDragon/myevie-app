import "../scss/_footer.scss";

function Footer() {
  function getCurrentYear() {
    return new Date().getFullYear();
  }

  return (
    <footer className="app-footer">
      <p>© {getCurrentYear()} Evie</p>
    </footer>
  );
}

export default Footer;
