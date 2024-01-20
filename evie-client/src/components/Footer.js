function getCurrentYear() {
  return new Date().getFullYear();
}

function Footer() {
  return (
    <footer>
      <p>© {getCurrentYear()} Evie</p>
    </footer>
  );
}

export default Footer;
