import React, { useState } from "react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { motion } from "motion/react";
import Lottie from "lottie-react";
import successAnimation from "../../assets/login.json";
import useAuth from "../../hooks/useAuth";
import registerAnim from '../../assets/register.json'
import { Helmet } from "react-helmet-async";


const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

const Register = () => {
    const [name, setName] = useState('');
    const [nameError, setNameError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [loading, setLoading] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);


    const { createUser, setUser, updateUser, googleSignIn } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const handleNameOnChange = (e) => {
        const value = e.target.value;
        setName(value);
        setNameError(value.length < 6 ? "Name must be 6 characters or longer" : "");
    };

    const handlePasswordOnChange = (e) => {
        const value = e.target.value;
        setPassword(value);
        const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        setPasswordError(!regex.test(value) ? "Password must have uppercase, lowercase, and be at least 6 characters" : "");
    };

    const firebaseError = (code) => {
        switch (code) {
            case "auth/email-already-in-use": return "This email is already in use.";
            case "auth/invalid-email": return "Invalid email address.";
            case "auth/weak-password": return "Password is too weak.";
            default: return "Something went wrong. Please try again.";
        }
    };

    const handleSignUp = (e) => {
        e.preventDefault();
        setLoading(true);
        const form = e.target;
        const name = form.name.value.trim();
        const photo = form.photo.value.trim();
        const email = form.email.value.trim();
        const password = form.password.value.trim();

        createUser(email, password)
            .then(result => {
                const user = result.user;
                updateUser({ displayName: name, photoURL: photo })
                    .then(() => {
                        setShowSuccess(true);
                        setTimeout(() => {
                            toast.success("Account created successfully!");
                            navigate(location.state ? location.state : "/");
                        }, 2000);
                    })
                    .catch(() => {
                        setUser(user);
                        toast.error("Profile update failed.");
                    });
            })
            .catch(error => {
                toast.error(firebaseError(error.code));
            })
            .finally(() => setLoading(false));
    };

    const handleGoogleSignUp = () => {
        setLoading(true);
        googleSignIn()
            .then(() => {
                setShowSuccess(true);
                setTimeout(() => {
                    toast.success("Signed in with Google successfully!");
                    navigate(location.state ? location.state : "/");
                }, 2000);

            })
            .catch((error) => {
                toast.error(firebaseError(error.code));
            })
            .finally(() => setLoading(false));
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
                <title>Register | AltPick</title>
            </Helmet>
            <div className="min-h-[calc(100vh-64px)] bg-base-300 py-10 flex items-center justify-center px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="flex items-center justify-center">
                        <Lottie animationData={registerAnim} className="w-80"></Lottie>
                    </div>
                    <div>
                        <motion.div
                            className="w-full min-w-[400px] max-w-sm p-8 rounded-xl shadow-2xl bg-base-100 border border-base-300"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <motion.h2
                                className="text-3xl font-bold text-center text-primary mb-6"
                                variants={fadeUp}
                                initial="hidden"
                                animate="visible"
                                transition={{ delay: 0.1 }}
                            >
                                Create Account
                            </motion.h2>

                            <motion.form className="space-y-4" onSubmit={handleSignUp}>
                                {/* Full Name */}
                                <motion.div className="form-control" variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.15 }}>
                                    <label className="label text-base-content">Full Name</label>
                                    <div className="relative">
                                        <FaUserAlt className="absolute top-1/2 left-3 -translate-y-1/2 text-base-content/60" />
                                        <input
                                            onChange={handleNameOnChange}
                                            value={name}
                                            name="name"
                                            type="text"
                                            placeholder="Your Name"
                                            className="pl-3 input input-bordered w-full bg-base-200"
                                            required
                                        />
                                    </div>
                                    {nameError && <small className="text-red-500">{nameError}</small>}
                                </motion.div>

                                {/* Email */}
                                <motion.div className="form-control" variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.2 }}>
                                    <label className="label text-base-content">Email</label>
                                    <div className="relative">
                                        <FaUserAlt className="absolute top-1/2 left-3 -translate-y-1/2 text-base-content/60" />
                                        <input
                                            name="email"
                                            type="email"
                                            placeholder="you@example.com"
                                            className="pl-3 input input-bordered w-full bg-base-200"
                                            required
                                        />
                                    </div>
                                </motion.div>

                                {/* Photo URL */}
                                <motion.div className="form-control" variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.25 }}>
                                    <label className="label text-base-content">Photo URL</label>
                                    <input
                                        type="text"
                                        name="photo"
                                        placeholder="https://example.com/photo.jpg"
                                        className="input input-bordered w-full bg-base-200"
                                        required
                                    />
                                </motion.div>

                                {/* Password */}
                                <motion.div className="form-control" variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.3 }}>
                                    <label className="label text-base-content">Password</label>
                                    <div className="relative">
                                        <FaLock className="absolute top-1/2 left-3 -translate-y-1/2 text-base-content/60" />
                                        <input
                                            onChange={handlePasswordOnChange}
                                            value={password}
                                            type="password"
                                            name="password"
                                            placeholder="••••••••"
                                            className="pl-3 input input-bordered w-full bg-base-200"
                                            required
                                        />
                                    </div>
                                    {passwordError && <small className="text-red-500">{passwordError}</small>}
                                </motion.div>

                                {/* Sign Up Button */}
                                <motion.button
                                    disabled={loading || nameError || passwordError}
                                    type="submit"
                                    className="btn btn-primary w-full"
                                    variants={fadeUp}
                                    initial="hidden"
                                    animate="visible"
                                    transition={{ delay: 0.35 }}
                                >
                                    {loading ? "Registering..." : "Register"}
                                </motion.button>
                            </motion.form>

                            {/* Divider */}
                            <motion.div
                                className="divider text-sm text-base-content/70"
                                variants={fadeUp}
                                initial="hidden"
                                animate="visible"
                                transition={{ delay: 0.4 }}
                            >
                                OR
                            </motion.div>

                            {/* Google Signup */}
                            <motion.button
                                disabled={loading}
                                onClick={handleGoogleSignUp}
                                className="btn btn-outline w-full flex items-center justify-center gap-2"
                                variants={fadeUp}
                                initial="hidden"
                                animate="visible"
                                transition={{ delay: 0.45 }}
                            >
                                <FcGoogle className="text-xl" />
                                Continue with Google
                            </motion.button>

                            {/* Footer Link */}
                            <motion.p
                                className="text-sm text-center mt-6 text-base-content/70"
                                variants={fadeUp}
                                initial="hidden"
                                animate="visible"
                                transition={{ delay: 0.5 }}
                            >
                                Already have an account?{" "}
                                <Link to="/login" className="text-primary font-medium hover:underline">
                                    Log In
                                </Link>
                            </motion.p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;