import { useEffect, useRef, useState } from "react";
import "./dropdown.scss";

interface DropdownProps {
  actions: { label: string; action: () => void }[];
}

const Dropdown = ({ actions }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        closeDropdown();
      }
    };

    const handleGlobalKeydown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeDropdown();
    };

    if (isOpen) {
      document.addEventListener("click", handleDocumentClick);
      document.addEventListener("keydown", handleGlobalKeydown);
    } else {
      document.removeEventListener("click", handleDocumentClick);
      document.removeEventListener("keydown", handleGlobalKeydown);
    }

    return () => {
      document.removeEventListener("click", handleDocumentClick);
      document.removeEventListener("keydown", handleGlobalKeydown);
    };
  }, [isOpen, ref]);

  return (
    <div className="dropdown">
      <div ref={ref} className="dropdown-button" onClick={toggleDropdown} />
      {isOpen && (
        <ul className="dropdown-menu">
          {actions.map((v) => (
            <li key={v.label} onClick={() => v.action()}>
              {v.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
