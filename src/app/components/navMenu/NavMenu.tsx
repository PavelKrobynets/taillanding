export default function NavMenu() {
  return (
    <ul className="flex flex-col items-center justify-center lg:flex-row lg:gap-14 text-2xl">
      <li className="my-4 cursor-pointer">Home</li>
      <li className="my-4 cursor-pointer">About</li>
      <li className="my-4 cursor-pointer">Services</li>
      <li className="my-4 cursor-pointer">Pages</li>
      <li className="my-4 cursor-pointer">Contacts</li>
    </ul>
  );
}
