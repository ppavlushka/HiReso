import { useState, Fragment } from "react";
import classNames from "classnames";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";

export default function UpscaleForm({
  image,
  isUpscaling,
  onSubmit = () => {},
  className = "",
  isCompact = false,
  popoverButtonClass = "",
}) {
  const [scale, setScale] = useState(2);
  const handleSubmit = (e) => {
    e.preventDefault();
    // call the upscaler function
    onSubmit({ scale, image });
  };

  // if the form is compact, return @headlessui/react dropdown with scale options
  if (isCompact) {
    return (
      <Menu as="div" className="relative">
        <Menu.Button
          disabled={isUpscaling}
          className={classNames(
            "flex w-full  justify-center items-center px-5 py-2.5",
            popoverButtonClass
          )}
        >
          {isUpscaling ? (
            <span>Processing...</span>
          ) : (
            <>
              <span className="">Enlarge</span>
              <ChevronDownIcon
                className="ml-2 -mr-1 h-5 w-5 text-white"
                aria-hidden="true"
              />
            </>
          )}
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="mt-2 w-full origin-top-right divide-y divide-gray-100 rounded-md bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              {Array.from({ length: 7 }, (_, i) => i + 2).map((i) => (
                <Menu.Item key={i}>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-custom-hoverblue text-white" : ""
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      onClick={() => onSubmit({ scale: i, image })}
                    >
                      Enlarge {i}x
                    </button>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    );
  }

  return (
    <form
      className={classNames(
        className,
        "flex flex-col sm:flex-row items-center"
      )}
      onSubmit={handleSubmit}
    >
      {/* message to upscale */}
      <span className="text-lg font-medium mb-3 sm:mb-0">Enlarge Image:</span>
      {/* <select> control with scale option from 2 to 8 */}
      <select
        className="mb-3 sm:mb-0 sm:ml-2.5 pl-3.5 pr-16 py-2.5 border border-custom-border text-custom-inputtext placeholder:text-custom-placeholder bg-custom-inputbg  outline-none disabled:opacity-75 disabled:pointer-events-none rounded-[5px]"
        disabled={isUpscaling}
        value={scale}
        onChange={(e) => setScale(Number(e.target.value))}
      >
        {/* iterate from 2 to 8 */}
        {Array.from({ length: 7 }, (_, i) => i + 2).map((i) => (
          <option key={i} value={i}>
            {i}x
          </option>
        ))}
      </select>
      <button
        type="submit"
        disabled={isUpscaling}
        className={classNames(
          popoverButtonClass,
          "mb-3 sm:mb-0 sm:ml-2.5 sm:w-auto"
        )}
      >
        {isUpscaling ? "Processing..." : "Enlarge Image"}
      </button>
    </form>
  );
}
