interface IProps {
  gap: number;
}

export default function NavMenu(prop: IProps) {
  return (
    <ul
      className={`flex flex-col items-center pb-4 gap-${prop.gap} justify-center lg:flex-row lg:gap-14 text-2xl`}
    >
      <li className=" cursor-pointer">Home</li>
      <li className=" cursor-pointer">About</li>
      <li className=" cursor-pointer">Services</li>
      <li className=" cursor-pointer">Pages</li>
      <li className=" cursor-pointer">Contacts</li>
    </ul>
  );
}
