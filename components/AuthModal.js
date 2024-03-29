import { Fragment, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import PropTypes from "prop-types";
import { signIn } from "next-auth/react";
import * as Yup from "yup";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";
import { Formik, Form } from "formik";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { useReCaptcha } from "next-recaptcha-v3";
import Input from "./Input";

const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .email("Invalid email")
    .required("This field is required"),
});

const Confirm = ({
  show = false,
  email = "",
  onCancel = () => null,
  onRetry = () => null,
}) => (
  <Transition appear show={show} as={Fragment}>
    <div className="fixed inset-0 z-50">
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 bg-white dark:bg-black" />
      </Transition.Child>

      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="flex items-center justify h-full  p-8">
          <div className="overflow-hidden transition-all transform">
            <div className="text-2xl font-bold mb-3">Check Your Email</div>
            <p className="text-muted mb-6">
              We&apos;ve sent a magic link to your inbox {email || ""}
            </p>

            <p className="mb-6">
              If you don&apos;t see it in your inbox, please check your spam or
              junk folder. If you entered the wrong email address, you can click
              the &quot;Change Email&quot; button below to update it. If you
              still don&apos;t receive the email,{" "}
              <a
                href="mailto:info@hireso.io"
                className="underline underline-offset-4 hover:text-custom-hoverblue"
              >
                contact us
              </a>
              .
            </p>
            <p className="mb-6">
              Didn’t get a code?
              <button
                type="button"
                onClick={onRetry}
                className="ml-1 font-bold text-custom-blue hover:text-custom-hoverblue focus:text-custom-hoverblue"
              >
                Click to resend
              </button>
            </p>
            <button
              type="button"
              onClick={onCancel}
              className="px-5 py-4 w-full text-lg text-white bg-custom-blue hover:bg-custom-hoverblue focus:bg-custom-hoverblue rounded-[10px]"
            >
              Change Email
            </button>
          </div>
        </div>
      </Transition.Child>
    </div>
  </Transition>
);

const AuthModal = ({
  show = false,
  onClose = () => null,
  showSignIn = false,
  setShowSignIn = () => null,
  invidationCode,
}) => {
  const [disabled, setDisabled] = useState(false);
  const [showConfirm, setConfirm] = useState(false);
  // Import 'executeRecaptcha' using 'useReCaptcha' hook
  const { executeRecaptcha } = useReCaptcha();

  const router = useRouter();

  const getCallbackUrl = () => {
    if (router.pathname.includes("/invitations/")) {
      return window.location.origin;
    }
    return window.location.href;
  };

  const signInWithEmail = async ({ email }) => {
    let toastId;
    try {
      toastId = toast.loading("Loading...");
      setDisabled(true);
      // Generate ReCaptcha token
      const recaptchaToken = await executeRecaptcha("login");
      // Perform sign in
      const { error } = await signIn("email", {
        redirect: false,
        callbackUrl: getCallbackUrl(),
        email,
        recaptchaToken,
        invidationCode,
      });
      // Something went wrong
      if (error) {
        throw new Error(error);
      }
      setConfirm(true);
      toast.dismiss(toastId);
    } catch (err) {
      toast.error("Unable to sign in", { id: toastId });
    } finally {
      setDisabled(false);
    }
  };

  const signInWithGoogle = () => {
    toast.loading("Redirecting...");
    setDisabled(true);
    // Perform sign in
    signIn("google", {
      callbackUrl: getCallbackUrl(),
    });
  };

  const closeModal = () => {
    if (typeof onClose === "function") {
      onClose();
    }
  };

  // Reset modal
  useEffect(() => {
    if (!show) {
      // Wait for 200ms for aniamtion to finish
      setTimeout(() => {
        setDisabled(false);
        setConfirm(false);
        setShowSignIn(false);
      }, 200);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show]);

  // Remove pending toasts if any
  useEffect(() => {
    toast.dismiss();
  }, []);

  return (
    <Transition appear show={show} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 overflow-y-auto"
        onClose={closeModal}
      >
        {/* The backdrop, rendered as a fixed sibling to the panel container */}
        <div
          className="fixed inset-0 bg-dialog-overlay backdrop-blur-xl "
          aria-hidden="true"
        ></div>

        <div className="min-h-screen text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 flex items-end justify-center">
              {!showConfirm && (
                <div className="text-white dark:text-black mb-7">
                  <span className="mr-1.5">
                    By clicking &quot;Send Magic Link&quot; you agree to our
                  </span>
                  <Link
                    href="/terms-and-conditions"
                    className="font-bold underline hover:text-custom-hoverblue transition-colors"
                  >
                    Terms of Service and Privacy Policy
                  </Link>
                </div>
              )}
            </div>
          </Transition.Child>

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
                onClick={closeModal}
                className="absolute top-2 right-2 shrink-0 p-1 rounded-full hover:bg-gray-100 transition focus:outline-none"
              >
                <XIcon className="w-8 h-8" />
              </button>

              <div className="py-12">
                <div className="px-4 sm:px-12">
                  <Dialog.Title
                    as="div"
                    className="font-bold text-xl sm:text-2xl mb-2"
                  >
                    Get Started in Seconds
                  </Dialog.Title>

                  <Dialog.Description className="text-muted text-base mb-7">
                    Sign up or log in with just one click!
                  </Dialog.Description>

                  <div className="">
                    {/* Sign with Google */}
                    {invidationCode ? (
                      <div className="mb-5 flex flex-col space-y-1">
                        <label
                          for="email"
                          className="font-semibold text-[15px] text-black dark:text-white mb-1"
                        >
                          Personal promocode
                        </label>
                        <div className="flex-1">
                          <div className="relative">
                            <div className="w-full rounded-[10px] p-3.5 truncate border placeholder:text-custom-placeholder focus:outline-none transition disabled:opacity-75 disabled:cursor-not-allowed disabled:pointer-events-none border-custom-border text-custom-inputtext  bg-custom-inputbg">
                              {invidationCode}
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <button
                        disabled={disabled}
                        onClick={() => signInWithGoogle()}
                        className="mb-5 w-full rounded-md py-2 pl-4 truncate border flex justify-center items-center space-x-2 hover:bg-custom-hovergray dark:hover:bg-gray-700 focus:outline-none disabled:opacity-75 disabled:pointer-events-none transition-colors"
                      >
                        <Image
                          src="/img/google.svg"
                          alt="Google"
                          width={32}
                          height={32}
                        />
                        <span>Sign {showSignIn ? "in" : "up"} with Google</span>
                      </button>
                    )}

                    {/* Sign with email */}
                    <Formik
                      initialValues={{ email: "", name: "" }}
                      validationSchema={SignInSchema}
                      validateOnBlur={false}
                      onSubmit={signInWithEmail}
                    >
                      {({ isSubmitting, isValid, values, resetForm }) => (
                        <Form className="">
                          <Input
                            name="email"
                            type="email"
                            label="Email address *"
                            disabled={disabled}
                            spellCheck={false}
                            className="mb-5"
                          />

                          <button
                            type="submit"
                            disabled={disabled || !isValid}
                            className="px-5 py-4 w-full text-lg text-white bg-custom-blue hover:bg-custom-hoverblue focus:bg-custom-hoverblue disabled:opacity-75 disabled:pointer-events-none rounded-[10px]"
                          >
                            {isSubmitting ? "Sending..." : "Send Magic Link"}
                          </button>

                          <Confirm
                            show={showConfirm}
                            email={values?.email ?? ""}
                            onCancel={() => {
                              setConfirm(false);
                              resetForm();
                            }}
                            onRetry={() => {
                              setConfirm(false);
                              signInWithEmail(values);
                            }}
                          />
                        </Form>
                      )}
                    </Formik>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

AuthModal.propTypes = {
  show: PropTypes.bool,
  onClose: PropTypes.func,
};

export default AuthModal;
