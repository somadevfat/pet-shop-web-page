import { UserActions } from "./UserActions";
import { Logo } from "./Logo";
import { Email } from "./Email";
import { Tell } from "./Tell";
import { NaviItems } from "./NaviItems";
export const Header = () => {
  return (
    <header className="bg-white shadow-md">
      {/*ロゴ・Tell・Email コンポーネント*/}
      <div className="grid grid-cols-10 justify-center items-center container mx-auto p-4 m-5">
        <div className="col-start-2 col-end-5 flex items-center justify-start">
          <Logo />
        </div>
        <div className="col-start-7 col-end-10 flex items-center justify-end gap-30">
          <Tell />
          <Email />
        </div>
      </div>
      <div className="border-t border-gray-200">
        <nav className="container mx-auto p-4 flex justify-between items-center gap-4 ">
          <div className="grid grid-cols-10 justify-center items-center container mx-auto p-4">
            <div className="col-start-2 col-end-4 font-serif italic flex text-gray-600 jestify-center items-center">
              <div>Shop By Categories</div>
            </div>
            {/* 左側のナビゲーションリンク */}
            <div className="col-start-4 col-end-6 flex jestify-center items-center">
              <NaviItems />
            </div>

            {/* 右側のユーザーアクション */}
            <div className=" col-start-8 col-end-10 flex items-center justify-end">
              <UserActions />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
