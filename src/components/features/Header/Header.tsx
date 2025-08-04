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

export const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto p-4 flex justify-between items-center"></div>
      <div className="border-t border-gray-200">
        <nav className="container mx-auto p-4 flex justify-between items-center">
          {/* 左側のナビゲーションリンク */}
          <ul className="flex space-x-6 list-none">
            <li className="font-serif italic text-gray-600">
              Shop By Categories
            </li>
            {navItems.map((item) => (
              <li key={item.name}>
                <span className="text-gray-700 hover:text-gray-900 transition-colors">
                  {item.name}
                </span>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
