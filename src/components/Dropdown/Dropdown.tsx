import { useEffect, useRef, useState } from "react";
import "./dropdown.scss";

const Dropdown = () => {
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
          <li>Редактировать</li>
          <li>Архивировать</li>
          <li>Скрыть</li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
