import React, { useState } from "react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import Lottie from "lottie-react";
import successAnimation from "../../assets/login.json";
import { motion } from "motion/react";
import useAuth from "../../hooks/useAuth";
import loginPageAnim from '../../assets/besideLogin.json'
import { Helmet } from "react-helmet-async";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
};

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [showSuccess, setShowSuccess] = useState(false);

    const { signIn, googleSignIn } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const handleSignIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(() => {
                setShowSuccess(true);
                setTimeout(() => {
                    toast.success("You've successfully logged in!");
                    navigate(location.state ? location.state : "/");
                }, 2000);
            })
            .catch((error) => {
                const errorCode = error.code;
                let message;

                switch (errorCode) {
                    case "auth/user-not-found":
                        message = "No account found with this email.";
                        break;
                    case "auth/wrong-password":
                        message = "Incorrect password. Please try again.";
                        break;
                    case "auth/invalid-email":
                        message = "Please enter a valid email address.";
                        break;
                    case "auth/invalid-credential":
                        message = "Invalid email or password.";
                        break;
                    case "auth/too-many-requests":
                        message = "Too many login attempts. Try again later.";
                        break;
                    default:
                        message = "Login failed. Please check your credentials.";
                }

                toast.error(message);
            });
    };

    const handleGoogleLogin = () => {
        googleSignIn()
            .then(() => {
                setShowSuccess(true);
                setTimeout(() => {
                    toast.success("You've successfully logged in!");
                    navigate(location.state ? location.state : "/");
                }, 2000);
            })
            .catch((error) => {
                toast.error(`Google sign-in failed: ${error.message}`);
            });
    };

    //animation on successful login
    if (showSuccess) {
        return (
            <div className="min-h-screen flex justify-center items-center bg-base-200">
                <Lottie animationData={successAnimation} loop={false} className="w-72 h-72" />
            </div>
        );
    }

    return (
        <>
            <Helmet>
                <title>Sign In | AltPick</title>
            </Helmet>

            <div className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-base-300 px-4 py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="flex items-center justify-center">
                        <Lottie animationData={loginPageAnim} className="w-60 md:w-80"></Lottie>
                    </div>
                    <div className="">
                        <motion.div
                            className="w-full md:min-w-[350px] lg:min-w-[400px] p-8 rounded-xl shadow-2xl bg-base-100 border border-base-300"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4 }}
                        >
                            <motion.h2
                                className="text-3xl font-bold text-center text-primary mb-6"
                                variants={fadeUp}
                                initial="hidden"
                                animate="visible"
                                transition={{ delay: 0.1 }}
                            >
                                Please Sign In
                            </motion.h2>

                            <motion.form
                                className="space-y-4"
                                onSubmit={handleSignIn}
                                variants={fadeUp}
                                initial="hidden"
                                animate="visible"
                                transition={{ delay: 0.15 }}
                            >
                                {/* Email */}
                                <div className="form-control">
                                    <label className="label" htmlFor="email">
                                        <span className="label-text text-base-content">Email</span>
                                    </label>
                                    <div className="relative">
                                        <FaUserAlt className="absolute top-1/2 left-3 -translate-y-1/2 text-secondary z-50" />
                                        <input
                                            // defaultValue={email}
                                            defaultValue={'admin@altpick.com'}
                                            onChange={(e) => setEmail(e.target.value)}
                                            id="email"
                                            type="email"
                                            name="email"
                                            placeholder="you@example.com"
                                            className="pl-10 input input-bordered w-full bg-base-200 text-base-content"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Password */}
                                <div className="form-control">
                                    <label className="label" htmlFor="password">
                                        <span className="label-text text-base-content">Password</span>
                                    </label>
                                    <div className="relative">
                                        <FaLock className="absolute top-1/2 left-3 -translate-y-1/2 text-secondary z-50" />
                                        <input
                                            defaultValue={'Pa$$word'}
                                            id="password"
                                            type="password"
                                            name="password"
                                            placeholder="••••••••"
                                            className="pl-10 input input-bordered w-full bg-base-200 text-base-content"
                                            required
                                        />
                                        <Link
                                            to="/auth/forgotPassword"
                                            state={{ email }}
                                            className="label-text-alt text-primary hover:underline absolute right-3 bottom-3 text-sm"
                                        >
                                            Forgot password?
                                        </Link>
                                    </div>
                                </div>

                                {/* Sign In Button */}
                                <motion.button
                                    type="submit"
                                    className="btn btn-primary w-full"
                                    variants={fadeUp}
                                    initial="hidden"
                                    animate="visible"
                                    transition={{ delay: 0.2 }}
                                >
                                    Sign In
                                </motion.button>
                            </motion.form>

                            {/* Divider */}
                            <motion.div
                                className="divider text-sm text-base-content/70"
                                variants={fadeUp}
                                initial="hidden"
                                animate="visible"
                                transition={{ delay: 0.3 }}
                            >
                                OR
                            </motion.div>

                            {/* Google Sign In */}
                            <motion.button
                                onClick={handleGoogleLogin}
                                className="btn btn-outline w-full flex items-center justify-center gap-2"
                                variants={fadeUp}
                                initial="hidden"
                                animate="visible"
                                transition={{ delay: 0.35 }}
                            >
                                <FcGoogle className="text-xl" />
                                Continue with Google
                            </motion.button>

                            {/* Sign Up Link */}
                            <motion.p
                                className="text-sm text-center mt-6 text-base-content/70"
                                variants={fadeUp}
                                initial="hidden"
                                animate="visible"
                                transition={{ delay: 0.4 }}
                            >
                                Don’t have an account?{" "}
                                <Link state={location.state} to="/register" className="text-primary font-medium hover:underline">
                                    Register
                                </Link>
                            </motion.p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignIn;