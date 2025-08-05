import React from "react";
// ナビゲーションアイテムの型定義
type NavItem = {
  name: string;
};

const navItems: NavItem[] = [
  { name: "TOP" },
  { name: "Petclothing" },
  { name: "PetFoodies" },
  { name: "BestSellingProducts" },
  { name: "LatestPostBlog" },
];
export const NaviItems = () => {
  return (
    <div>
      <ul className="flex space-x-6 list-none">
        {navItems.map((item) => (
          <li key={item.name}>
            <span className="text-gray-700 hover:text-gray-900 transition-colors">
              {item.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NaviItems;
