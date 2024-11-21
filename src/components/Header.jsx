import Moon from "../assets/images/icon-moon.svg";

export default function Header() {
  return (
    <header>
      <div className="container mx-auto flex items-center justify-between w-2/5 py-10 px-6">
        <h1 className="uppercase text-4xl font-bold text-white tracking-[0.4rem]">
          Todo
        </h1>
        <img src={Moon} alt="" className="cursor-pointer" />
      </div>
    </header>
  );
}
