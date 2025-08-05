import React from 'react';
import { Link } from 'react-router-dom';

// ナビゲーションアイテムの型定義
type NavItem = {
  name: string;
  href: string;
};

const navItems: NavItem[] = [
  { name: "Petclothing", href: "/petclothing" },
  { name: "PetFoodies", href: "/petfoodies" },
  { name: "BestSellingProducts", href: "/bestselling" },
  { name: "LatestPostBlog", href: "/blog" },
];

export const Nav = () => {
  return (
    <nav className="container mx-auto p-4 flex justify-between items-center">
      {/* 左側のナビゲーションリンク */}
      <ul className="flex space-x-6">
        <li className="font-serif italic text-gray-600">Shop By Categories</li>
        {navItems.map((item) => (
          <li key={item.name}>
            <Link to={item.href} className="text-gray-700 hover:text-gray-900 transition-colors">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};