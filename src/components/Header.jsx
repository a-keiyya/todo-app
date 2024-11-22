import Moon from "../assets/images/icon-moon.svg";

function Header() {
  return (
    <header className="text-white w-full flex items-center justify-between">
      <h1 className="uppercase text-4xl tracking-[0.5rem] font-bold">Todo</h1>
      <img src={Moon} alt="Moon" />
    </header>
  );
}

export default Header;
