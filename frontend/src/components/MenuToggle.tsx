import Image from "next/image";

export const MenuToggle = ({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}) => (
  <button onClick={toggle} className="p-2">
    {isOpen ? (
      <Image src="/icons/close.svg" alt="close" height={40} width={40} />
    ) : (
      <Image src="/icons/menu.svg" alt="menu" height={40} width={40} />
    )}
  </button>
);
