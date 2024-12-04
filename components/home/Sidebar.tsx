"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useResponsiveSidebar } from "@/hooks/useResponsiveSidebar";
import { MenuItem } from "@/types/transaction";
import { MENU_ITEMS } from "@/constants/dashboard";

// Style constants
const SIDEBAR_STYLES = {
  active: "bg-[#6759FF]",
  inactive: "hover:bg-violet-50",
  activeText: "text-white",
  inactiveText: "text-gray-600 group-hover:text-violet-600",
  inactiveLabel: "text-gray-700 group-hover:text-violet-600",
};

interface MenuItemProps {
  item: MenuItem;
  isActive: boolean;
  isSidebarOpen: boolean;
  isMobile: boolean;
  onClick: () => void;
}

const SidebarMenuItem = ({
  item,
  isActive,
  isSidebarOpen,
  isMobile,
  onClick,
}: MenuItemProps) => (
  <div
    onClick={onClick}
    className={`group relative flex items-center px-5 py-3 cursor-pointer transition-colors duration-100 select-none
      ${isActive ? SIDEBAR_STYLES.active : SIDEBAR_STYLES.inactive}`}
  >
    <item.icon
      className={`w-5 h-5 ${
        isActive ? SIDEBAR_STYLES.activeText : SIDEBAR_STYLES.inactiveText
      }`}
      aria-hidden="true"
    />
    {isSidebarOpen && !isMobile && (
      <>
        <span
          className={`ml-3 ${
            isActive ? SIDEBAR_STYLES.activeText : SIDEBAR_STYLES.inactiveLabel
          }`}
        >
          {item.label}
        </span>
        {item.badge && (
          <span className="ml-auto bg-violet-100 text-violet-600 px-2 rounded-full text-xs">
            {item.badge}
          </span>
        )}
      </>
    )}
  </div>
);

export default function Sidebar() {
  const { isSidebarOpen, isMobile } = useResponsiveSidebar();
  const [activeItem, setActiveItem] = useState("");
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const currentUrl = `${window.location.origin}${pathname}`;
    const currentItem = MENU_ITEMS.find((item) =>
      currentUrl.includes(item.link)
    );
    if (currentItem) {
      setActiveItem(currentItem.label.toLowerCase());
    }
  }, [pathname]);

  const handleMenuItemClick = (item: MenuItem) => {
    setActiveItem(item.label.toLowerCase());
    router.push(item.link);
  };

  return (
    <aside
      className={`bg-white border-r transition-all duration-300 ${
        isSidebarOpen && !isMobile ? "w-64" : "w-14"
      }`}
    >
      <nav className="mt-4">
        {MENU_ITEMS.map((item, index) => (
          <SidebarMenuItem
            key={index}
            item={item}
            isActive={activeItem === item.label.toLowerCase()}
            isSidebarOpen={isSidebarOpen}
            isMobile={isMobile}
            onClick={() => handleMenuItemClick(item)}
          />
        ))}
      </nav>
    </aside>
  );
}
