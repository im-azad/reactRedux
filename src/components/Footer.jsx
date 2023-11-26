function Footer() {
  return (
    <div className="mt-4 flex justify-between text-xs text-gray-500">
      <p>2 tasks left</p>
      <ul className="flex space-x-1 items-center text-xs">
        <li className="cursor-pointer font-bold">All</li>
        <li>|</li>
        <li className="cursor-pointer">Incomplete</li>
        <li>|</li>
        <li className="cursor-pointer">Complete</li>
      </ul>
    </div>
  );
}

export default Footer;
