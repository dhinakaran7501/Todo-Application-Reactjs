import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { credential, siteLogo } from "../config";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoMoonOutline } from "react-icons/io5";
import { MdLightMode } from "react-icons/md";
import { IoIosArrowForward, IoMdLogOut } from "react-icons/io";
import { navMenusList } from "../utils/constant";
import { deleteCookie } from "../utils/helpers";
import CustomModal from "../components/CustomModal";
import { NavMenuItem } from "../@types/constant";

const Navbar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [isToggleNavbar, setisToggleNavbar] = useState<boolean>(true);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [isTitle, setisTitle] = useState<string>("");
  const [isLogout, setisLogout] = useState<boolean>(false);

  useEffect(() => {
    const activeItem = navMenusList.find((item: NavMenuItem) =>
      pathname.includes(item.navigate)
    );
    if (activeItem) {
      setisTitle(activeItem.title || "Welcome to this Page");
    }
  }, [pathname, navMenusList]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);

    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleThemes = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const renderMenuItems = (items: NavMenuItem[]) => {
    return items.map((item: NavMenuItem) => {
      const { name, icon: Icon } = item;
      return (
        <li
          key={name}
          className={`flex items-center justify-between  p-4 cursor-pointer  my-1.5 rounded-2xl transition-all
            ${
              pathname.includes(item?.navigate)
                ? "text-[var(--nav-item-active-color)] transition-all"
                : "text-[var(--nav-item-color)] hover:text-[var(--nav-item-hover-color)] "
            }
          `}
          onClick={() => {
            if (item.navigate) {
              navigate(item.navigate);
            }
          }}
        >
          <div className="flex items-center">
            <Icon className="text-[23px]" />
            {isToggleNavbar && <span className="ml-4">{name}</span>}
          </div>
          {pathname.includes(item?.navigate) && isToggleNavbar && (
            <IoIosArrowForward />
          )}
        </li>
      );
    });
  };

  const handleLogout = () => {
    deleteCookie(credential);
    navigate("/");
  };

  return (
    <>
      <div className="h-[100vh] flex items-start">
        <div
          className={`${
            isToggleNavbar ? "w-72" : "w-20"
          } bg-[var(--main-nav-bg)] h-screen flex flex-col transition-width duration-300 px-3`}
          style={{
            boxShadow: "var(--box-shadow)",
          }}
        >
          {/* Logo */}
          <div className="flex items-start justify-between p-4 gap-5">
            {isToggleNavbar && (
              <div className="text-[var(--text-color)] w-[70%] text-xl">
                <img src={siteLogo} />
              </div>
            )}
            <button
              onClick={() => setisToggleNavbar((prev) => !prev)}
              className=" text-2xl text-[var(--nav-item-color)] hover:text-[var(--nav-item-hover-color)]"
            >
              <FaBars />
            </button>
          </div>

          <div className="mt-5 flex flex-grow flex-col justify-between h-[100vh]">
            <ul>{renderMenuItems(navMenusList)}</ul>

            <div
              className={`cursor-pointer mb-4 p-2 shadow-lg flex text-center items-center ${
                isToggleNavbar ? "justify-between" : "justify-center"
              } text-white border border-green-300/20 rounded-lg`}
              style={{
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
              }}
              onClick={() => setisLogout(true)}
            >
              {isToggleNavbar && "Logout"}
              <IoMdLogOut className="text-2xl" />
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="w-full ">
          <div
            className="p-8 py-6 flex justify-between w-full  bg-[var(--main-subNav-bg)] text-[var(--topbar-item-color)]"
            style={{
              boxShadow: "var(--box-shadow)",
            }}
          >
            <div className="text-[var(--topbar-item-color)] font-semibold uppercase text-md">
              {isTitle}
            </div>
            <div className="flex items-center gap-x-2">
              <div
                className="w-[36px] h-[36px] rounded-full text-[var(--topbar)] flex items-center justify-center text-xl cursor-pointer"
                onClick={() => handleThemes()}
              >
                {theme === "light" ? (
                  <IoMoonOutline />
                ) : (
                  <MdLightMode className="" />
                )}
              </div>
            </div>
          </div>
          <div className="min-h-[91vh] pt-0 p-6 bg-[var(--main-subNav-bg)]">
            <Outlet />
          </div>
        </div>
      </div>

      {isLogout && (
        <CustomModal
          title="Logout Confirmation"
          isOpen={isLogout}
          onPressPositiveBtn={handleLogout}
          onPressNegativeBtn={() => setisLogout(false)}
          positiveText="Logout"
          renderContent={() => (
            <p className="text-center text-[var(--text-color)]">
              Are you sure you want to Logout ?
            </p>
          )}
        />
      )}
    </>
  );
};

export default Navbar;
