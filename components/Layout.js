import { Fragment, useState } from "react";
import { useRouter } from "next/router";
//import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import PropTypes from "prop-types";
import { useSession, signOut } from "next-auth/react";
import AuthModal from "./AuthModal";
import { Menu, Transition } from "@headlessui/react";
import { UserIcon, ChevronRightIcon } from "@heroicons/react/outline";
//import { ChevronRightIcon } from "@heroicons/react/solid";
import CustomHead from "../components/CustomHead";
import Logo from "../components/Logo";

const menuItems = [
  {
    label: "My profile",
    href: "/",
  },
  {
    label: "Logout",
    onClick: signOut,
  },
];

const Layout = ({
  children = null,
  mainClassName = "",
  isHome = false,
  linksComponent,
}) => {
  const router = useRouter();

  const { data: session, status } = useSession();
  const user = session?.user;
  console.log("user", user);
  const isLoadingUser = status === "loading";

  const [showModal, setShowModal] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);

  const openModal = (params) => {
    setShowSignIn(params?.showSignIn);
    setShowModal(true);
  };
  const closeModal = () => setShowModal(false);

  return (
    <>
      <CustomHead />

      <div className="min-h-screen flex flex-col">
        <header className="w-full">
          <div className="h-full mx-auto">
            <div className="h-full px-10 py-6 flex justify-between items-center space-x-4">
              {isHome ? (
                <div></div>
              ) : (
                <>
                  <Link
                    href="/"
                    className="flex items-center space-x-1 relative bottom-0.5"
                  >
                    <Logo className="shrink-0" />
                  </Link>
                  {linksComponent}
                </>
              )}
              <div className="flex-1"></div>

              <div className="flex items-center space-x-2.5">
                {isLoadingUser ? (
                  <div className="h-8 w-[75px] bg-gray-200 animate-pulse rounded" />
                ) : user ? (
                  <Menu as="div" className="relative z-50">
                    <Menu.Button className="flex items-center space-x-px group">
                      <div className="text-xs text-white bg-custom-blue hover:bg-custom-hoverblue focus:bg-custom-hoverblue px-2.5 py-1 rounded-[20px] border border-white translate-x-2.5 z-10 relative">
                        5 <span className="hidden sm:inline">Downloads</span>
                      </div>
                      <div className="shrink-0 flex items-center justify-center rounded-full overflow-hidden relative bg-gray-200 w-12 h-12">
                        {user?.image ? (
                          <Image
                            src={user?.image}
                            alt={user?.name || "Avatar"}
                            fill
                          />
                        ) : (
                          <UserIcon className="text-gray-400 w-12 h-12" />
                        )}
                      </div>
                      {/* <ChevronRightIcon className="w-5 h-5 shrink-0 text-gray-500 group-hover:text-current" /> */}
                    </Menu.Button>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <Menu.Items className="px-5 absolute right-0 w-48 mt-4 border-4 border-custom-inputbg dark:border-gray-600 bg-white dark:bg-black origin-top-right rounded-[3px] focus:outline-none">
                        <div
                          className="w-0 h-0 
                            absolute z-10 -top-2.5 right-2.5
                            border-l-[8px] border-l-transparent
                            border-b-[8px] border-b-custom-inputbg dark:border-b-gray-600
                            border-r-[8px] border-r-transparent
                              "
                        ></div>
                        {/*  <div className="flex items-center space-x-2 py-4 px-4 mb-2">
                          <div className="shrink-0 flex items-center justify-center rounded-full overflow-hidden relative bg-gray-200 w-9 h-9">
                            {user?.image ? (
                              <Image
                                src={user?.image}
                                alt={user?.name || "Avatar"}
                                fill
                              />
                            ) : (
                              <UserIcon className="text-gray-400 w-6 h-6" />
                            )}
                          </div>
                          <div className="flex flex-col truncate">
                            <span>{user?.name}</span>
                            <span className="text-sm text-gray-500">
                              {user?.email}
                            </span>
                          </div>
                        </div> */}

                        {menuItems.map(({ label, href, onClick }) => {
                          const icon = (
                            <ChevronRightIcon className="w-5 h-5 shrink-0 text-black dark:text-white group-hover:text-current" />
                          );
                          const linkClasses =
                            "w-full last:border-t dark:border-gray-600 flex items-center justify-between space-x-2 py-4 hover:bg-custom-hovergray dark:hover:bg-gray-700 transition";
                          return (
                            <Menu.Item key={label}>
                              {href ? (
                                <Link href={href} className={linkClasses}>
                                  <span>{label}</span>
                                  {icon}
                                </Link>
                              ) : (
                                <button
                                  className={linkClasses}
                                  onClick={onClick}
                                >
                                  <span>{label}</span>
                                  {icon}
                                </button>
                              )}
                            </Menu.Item>
                          );
                        })}
                      </Menu.Items>
                    </Transition>
                  </Menu>
                ) : (
                  <>
                    <button
                      onClick={() => {
                        session?.user
                          ? router.push("/create")
                          : openModal({ showSignIn: true });
                      }}
                      className="hidden sm:block px-5 py-3 hover:bg-custom-hovergray dark:hover:bg-gray-700 transition rounded-[5px]"
                    >
                      Login
                    </button>
                    <button
                      type="button"
                      onClick={() => openModal({ showSignIn: false })}
                      className="ml-2.5 px-5 py-3 rounded-[5px] bg-custom-blue hover:bg-custom-hoverblue focus:bg-custom-hoverblue focus:outline-none  text-white transition-colors"
                    >
                      Sign Up
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </header>

        <main
          className={
            "flex-grow w-full md:max-w-2xl lg:max-w-screen-lg mx-auto px-3 py-6 " +
            mainClassName
          }
        >
          {typeof children === "function" ? children(openModal) : children}
        </main>

        <AuthModal
          show={showModal}
          onClose={closeModal}
          showSignIn={showSignIn}
          setShowSignIn={setShowSignIn}
        />
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
};

export default Layout;
