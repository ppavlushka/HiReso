import { Fragment } from "react";
import Link from "next/link";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";

export default function LimitModal({ show = false, onClose = () => null }) {
  return (
    <Transition appear show={show} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 overflow-y-auto"
        onClose={onClose}
      >
        {/* The backdrop, rendered as a fixed sibling to the panel container */}
        <div
          className="fixed inset-0 bg-dialog-overlay backdrop-blur-xl "
          aria-hidden="true"
        ></div>

        <div className="min-h-screen text-center">
          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full my-8 overflow-hidden text-left align-middle transition-all transform bg-white dark:bg-black shadow-xl sm:rounded-[20px] max-w-md relative">
              {/* Close icon */}
              <button
                onClick={onClose}
                className="absolute top-5 right-5 shrink-0 p-1 rounded-full hover:bg-gray-100 transition focus:outline-none"
              >
                <XIcon className="w-8 h-8" />
              </button>

              <div className="py-16">
                <div className="px-4 sm:px-16">
                  <Dialog.Title
                    as="div"
                    className="text-2xl font-bold mb-5 text-black"
                  >
                    Upgrade Your Account to Keep Downloading
                  </Dialog.Title>

                  <Dialog.Description className="mb-5 text-black">
                    You&apos;ve used all of your free downloads for this month.
                    To continue downloading, please upgrade to a paid plan or
                    buy extra downloads.
                  </Dialog.Description>
                  <div>
                    <Link
                      href="/billing"
                      className="px-5 py-3.5 block w-full text-center text-lg text-white bg-custom-blue hover:bg-custom-hoverblue focus:bg-custom-hoverblue rounded-[10px]"
                    >
                      Upgrade Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
