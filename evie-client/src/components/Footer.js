import "../scss/_footer.scss";

function Footer() {
  function getCurrentYear() {
    return new Date().getFullYear();
  }

  return (
    <footer>
      <p>© {getCurrentYear()} Evie</p>
    </footer>
  );
}

export default Footer;
