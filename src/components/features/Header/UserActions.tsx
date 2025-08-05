import cartIcon from "../../../assets/images/icon/cartIcon.svg";
import hertIcon from "../../../assets/images/icon/hertIcon.svg";
import userIcon from "../../../assets/images/icon/userIcon.svg";

export const UserActions = () => {
  return (
    <div className="flex items-center jestify-end gap-8">
      <img src={cartIcon} alt="cart icon" />
      <img src={hertIcon} alt="heart icon" />
      <img src={userIcon} alt="user icon" />
    </div>
  );
};
