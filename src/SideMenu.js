import React, {useState} from "react";
import Logo from "./assets/logo.svg";

function SideMenu() {
    const [selected, setSelected] = useState('Inputs')
  let menuOptions = [
    { name: "Typography", link: "/" },
    { name: "Grid", link: "/" },
    { name: "Buttons", link: "/" },
    { name: "Inputs", link: "/" }
  ];
  console.log(selected)
  return (
    <div className="w-80 bg-slate-50 h-screen flex flex-col items-start pl-12">
      <img src={Logo} className="mt-8 mb-28" alt="My Website Logo"/>
      <div className="flex flex-col">
        {menuOptions.map((opn) => (
          <button className={`text-left my-3 hover:text-slate-900 hover:font-bold ${selected === opn.name ? 'text-slate-900 font-bold' : 'font-medium text-slate-600'}`} onClick={() => {
            setSelected(opn.name)
          }}>
            {opn.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SideMenu;
