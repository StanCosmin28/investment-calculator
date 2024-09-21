import logo from "../assets/stanc-dev-nogb.png";
export default function Header() {
  return (
    <header id="header">
      <a target="_blank" href="https://www.instagram.com/stanc.dev/">
        <img src={logo} alt="Logo showing a money bag" />
      </a>
      <h1>Investment Calculator</h1>
    </header>
  );
}
