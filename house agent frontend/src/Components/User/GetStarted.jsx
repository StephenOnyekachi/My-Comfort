
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function GetStarted() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((currentData) => ({
            ...currentData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            !formData.fullName.trim() ||
            !formData.email.trim() ||
            !formData.password
        ) {
            alert("Please fill in all required fields.");
            return;
        }

        if (formData.password.length < 8) {
            alert("Password must be at least 8 characters.");
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        // Backend registration will be connected here later.
        console.log("Signup Data:", formData);

        // Temporary frontend behavior.
        // Normal users should not be sent to the admin dashboard.
        navigate("/");
    };

    return (
        <div className="min-h-screen overflow-x-hidden bg-black text-white">

            {/* =========================================================
                MAIN CONTAINER
            ========================================================== */}

            <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">

                {/* =====================================================
                    LEFT SIDE
                ====================================================== */}

                <div
                    className="
                        relative
                        hidden
                        min-h-screen
                        overflow-hidden
                        lg:flex
                    "
                >

                    {/* BACKGROUND IMAGE */}

                    <img
                        src="/images/1.jpeg"
                        alt="Beautiful property"
                        className="
                            absolute
                            inset-0
                            h-full
                            w-full
                            object-cover
                            brightness-[0.35]
                        "
                    />


                    {/* OVERLAY */}

                    <div
                        className="
                            absolute
                            inset-0
                            bg-gradient-to-br
                            from-black/90
                            via-black/60
                            to-green-950/40
                        "
                    ></div>


                    {/* CONTENT */}

                    <div
                        className="
                            relative
                            z-10
                            flex
                            w-full
                            flex-col
                            justify-between
                            p-10
                            xl:p-16
                        "
                    >

                        {/* LOGO */}

                        <Link
                            to="/"
                            className="
                                flex
                                w-fit
                                items-center
                                transition
                                hover:scale-105
                            "
                        >

                            <i
                                className="
                                    fa
                                    fa-home
                                    mr-3
                                    text-3xl
                                    text-green-500
                                "
                            ></i>

                            <span
                                className="
                                    roboto-condensed-bold
                                    text-2xl
                                    font-bold
                                "
                            >
                                My Comfort
                            </span>

                        </Link>


                        {/* HERO TEXT */}

                        <div className="max-w-xl">

                            <span
                                className="
                                    mb-6
                                    inline-flex
                                    items-center
                                    gap-2
                                    rounded-full
                                    border
                                    border-green-500/20
                                    bg-green-500/10
                                    px-4
                                    py-2
                                    text-sm
                                    text-green-400
                                "
                            >
                                <i className="fa fa-home"></i>

                                Find your dream home
                            </span>


                            <h1
                                className="
                                    bebas-neue
                                    text-6xl
                                    font-black
                                    leading-none
                                    bg-gradient-to-r
                                    from-white
                                    to-gray-500
                                    bg-clip-text
                                    text-transparent
                                    xl:text-8xl
                                "
                            >
                                Your next home
                                <br />
                                starts here.
                            </h1>


                            <p
                                className="
                                    mt-6
                                    max-w-lg
                                    text-lg
                                    leading-8
                                    text-gray-300
                                    xl:text-xl
                                "
                            >
                                Discover verified properties, connect
                                with trusted agents and find a home that
                                fits your lifestyle.
                            </p>


                            {/* FEATURES */}

                            <div className="mt-8 space-y-4">

                                <div className="flex items-center gap-3">

                                    <i className="fa fa-check-circle text-xl text-green-400"></i>

                                    <span className="text-gray-300">
                                        Verified property listings
                                    </span>

                                </div>


                                <div className="flex items-center gap-3">

                                    <i className="fa fa-check-circle text-xl text-green-400"></i>

                                    <span className="text-gray-300">
                                        Trusted property agents
                                    </span>

                                </div>


                                <div className="flex items-center gap-3">

                                    <i className="fa fa-check-circle text-xl text-green-400"></i>

                                    <span className="text-gray-300">
                                        AI-powered property search
                                    </span>

                                </div>

                            </div>

                        </div>


                        {/* COPYRIGHT */}

                        <p className="text-sm text-gray-500">
                            © {new Date().getFullYear()} My Comfort.
                            All rights reserved.
                        </p>

                    </div>

                </div>


                {/* =====================================================
                    RIGHT SIDE - SIGN UP
                ====================================================== */}

                <div
                    className="
                        flex
                        min-h-screen
                        items-center
                        justify-center
                        px-4
                        py-10
                        sm:px-8
                        sm:py-12
                        lg:px-12
                        xl:px-20
                    "
                >

                    <div className="w-full max-w-xl">

                        {/* MOBILE LOGO */}

                        <div className="mb-8 lg:hidden sm:mb-10">

                            <Link
                                to="/"
                                className="flex w-fit items-center"
                            >

                                <i
                                    className="
                                        fa
                                        fa-home
                                        mr-3
                                        text-3xl
                                        text-green-500
                                    "
                                ></i>

                                <span
                                    className="
                                        roboto-condensed-bold
                                        text-2xl
                                        font-bold
                                    "
                                >
                                    My Comfort
                                </span>

                            </Link>

                        </div>


                        {/* HEADER */}

                        <div className="mb-7 sm:mb-8">

                            <p
                                className="
                                    mb-3
                                    text-xs
                                    uppercase
                                    tracking-[0.2em]
                                    text-green-400
                                    sm:text-sm
                                "
                            >
                                Get Started
                            </p>


                            <h1
                                className="
                                    bebas-neue
                                    text-4xl
                                    font-black
                                    leading-tight
                                    bg-gradient-to-r
                                    from-white
                                    to-gray-500
                                    bg-clip-text
                                    text-transparent
                                    sm:text-5xl
                                    md:text-6xl
                                "
                            >
                                Create your account
                            </h1>


                            <p className="mt-3 text-sm leading-6 text-gray-400 sm:text-base">
                                Join My Comfort and start finding your
                                perfect property.
                            </p>

                        </div>


                        {/* FORM */}

                        <form
                            onSubmit={handleSubmit}
                            className="space-y-5"
                        >

                            {/* FULL NAME */}

                            <div>

                                <label
                                    htmlFor="fullName"
                                    className="mb-2 block text-sm text-gray-300"
                                >
                                    Full Name
                                </label>

                                <div className="relative">

                                    <i
                                        className="
                                            fa
                                            fa-user
                                            absolute
                                            left-4
                                            top-1/2
                                            -translate-y-1/2
                                            text-gray-500
                                        "
                                    ></i>

                                    <input
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        placeholder="Enter your full name"
                                        autoComplete="name"
                                        required
                                        className="
                                            min-h-12
                                            w-full
                                            rounded-xl
                                            border
                                            border-white/10
                                            bg-white/5
                                            py-3
                                            pl-11
                                            pr-4
                                            text-white
                                            outline-none
                                            transition
                                            placeholder:text-gray-600
                                            focus:border-green-500
                                            focus:bg-white/[0.07]
                                        "
                                    />

                                </div>

                            </div>


                            {/* EMAIL */}

                            <div>

                                <label
                                    htmlFor="email"
                                    className="mb-2 block text-sm text-gray-300"
                                >
                                    Email Address
                                </label>

                                <div className="relative">

                                    <i
                                        className="
                                            fa
                                            fa-envelope
                                            absolute
                                            left-4
                                            top-1/2
                                            -translate-y-1/2
                                            text-gray-500
                                        "
                                    ></i>

                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="you@example.com"
                                        autoComplete="email"
                                        required
                                        className="
                                            min-h-12
                                            w-full
                                            rounded-xl
                                            border
                                            border-white/10
                                            bg-white/5
                                            py-3
                                            pl-11
                                            pr-4
                                            text-white
                                            outline-none
                                            transition
                                            placeholder:text-gray-600
                                            focus:border-green-500
                                            focus:bg-white/[0.07]
                                        "
                                    />

                                </div>

                            </div>


                            {/* PHONE */}

                            <div>

                                <label
                                    htmlFor="phone"
                                    className="mb-2 block text-sm text-gray-300"
                                >
                                    Phone Number
                                    <span className="ml-1 text-gray-600">
                                        (optional)
                                    </span>
                                </label>

                                <div className="relative">

                                    <i
                                        className="
                                            fa
                                            fa-phone
                                            absolute
                                            left-4
                                            top-1/2
                                            -translate-y-1/2
                                            text-gray-500
                                        "
                                    ></i>

                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+234 800 000 0000"
                                        autoComplete="tel"
                                        className="
                                            min-h-12
                                            w-full
                                            rounded-xl
                                            border
                                            border-white/10
                                            bg-white/5
                                            py-3
                                            pl-11
                                            pr-4
                                            text-white
                                            outline-none
                                            transition
                                            placeholder:text-gray-600
                                            focus:border-green-500
                                            focus:bg-white/[0.07]
                                        "
                                    />

                                </div>

                            </div>


                            {/* PASSWORD */}

                            <div>

                                <label
                                    htmlFor="password"
                                    className="mb-2 block text-sm text-gray-300"
                                >
                                    Password
                                </label>

                                <div className="relative">

                                    <i
                                        className="
                                            fa
                                            fa-lock
                                            absolute
                                            left-4
                                            top-1/2
                                            -translate-y-1/2
                                            text-gray-500
                                        "
                                    ></i>

                                    <input
                                        type={
                                            showPassword
                                                ? "text"
                                                : "password"
                                        }
                                        id="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        placeholder="Create a password"
                                        autoComplete="new-password"
                                        minLength={8}
                                        required
                                        className="
                                            min-h-12
                                            w-full
                                            rounded-xl
                                            border
                                            border-white/10
                                            bg-white/5
                                            py-3
                                            pl-11
                                            pr-12
                                            text-white
                                            outline-none
                                            transition
                                            placeholder:text-gray-600
                                            focus:border-green-500
                                            focus:bg-white/[0.07]
                                        "
                                    />

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowPassword(
                                                (current) => !current
                                            )
                                        }
                                        aria-label={
                                            showPassword
                                                ? "Hide password"
                                                : "Show password"
                                        }
                                        className="
                                            absolute
                                            right-3
                                            top-1/2
                                            flex
                                            h-10
                                            w-10
                                            -translate-y-1/2
                                            items-center
                                            justify-center
                                            rounded-lg
                                            text-gray-500
                                            transition
                                            hover:bg-white/5
                                            hover:text-white
                                        "
                                    >
                                        <i
                                            className={`fa ${
                                                showPassword
                                                    ? "fa-eye-slash"
                                                    : "fa-eye"
                                            }`}
                                        ></i>
                                    </button>

                                </div>

                                <p className="mt-2 text-xs text-gray-600">
                                    Use at least 8 characters.
                                </p>

                            </div>


                            {/* CONFIRM PASSWORD */}

                            <div>

                                <label
                                    htmlFor="confirmPassword"
                                    className="mb-2 block text-sm text-gray-300"
                                >
                                    Confirm Password
                                </label>

                                <div className="relative">

                                    <i
                                        className="
                                            fa
                                            fa-lock
                                            absolute
                                            left-4
                                            top-1/2
                                            -translate-y-1/2
                                            text-gray-500
                                        "
                                    ></i>

                                    <input
                                        type={
                                            showConfirmPassword
                                                ? "text"
                                                : "password"
                                        }
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        placeholder="Confirm your password"
                                        autoComplete="new-password"
                                        minLength={8}
                                        required
                                        className="
                                            min-h-12
                                            w-full
                                            rounded-xl
                                            border
                                            border-white/10
                                            bg-white/5
                                            py-3
                                            pl-11
                                            pr-12
                                            text-white
                                            outline-none
                                            transition
                                            placeholder:text-gray-600
                                            focus:border-green-500
                                            focus:bg-white/[0.07]
                                        "
                                    />

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowConfirmPassword(
                                                (current) => !current
                                            )
                                        }
                                        aria-label={
                                            showConfirmPassword
                                                ? "Hide confirm password"
                                                : "Show confirm password"
                                        }
                                        className="
                                            absolute
                                            right-3
                                            top-1/2
                                            flex
                                            h-10
                                            w-10
                                            -translate-y-1/2
                                            items-center
                                            justify-center
                                            rounded-lg
                                            text-gray-500
                                            transition
                                            hover:bg-white/5
                                            hover:text-white
                                        "
                                    >
                                        <i
                                            className={`fa ${
                                                showConfirmPassword
                                                    ? "fa-eye-slash"
                                                    : "fa-eye"
                                            }`}
                                        ></i>
                                    </button>

                                </div>

                            </div>


                            {/* TERMS */}

                            <div className="flex items-start gap-3 pt-1">

                                <input
                                    type="checkbox"
                                    id="terms"
                                    required
                                    className="
                                        mt-1
                                        h-4
                                        w-4
                                        shrink-0
                                        accent-green-500
                                    "
                                />

                                <label
                                    htmlFor="terms"
                                    className="text-sm leading-6 text-gray-500"
                                >
                                    I agree to the{" "}

                                    <Link
                                        to="/terms"
                                        className="
                                            text-green-400
                                            transition
                                            hover:text-green-300
                                        "
                                    >
                                        Terms of Service
                                    </Link>

                                    {" "}and{" "}

                                    <Link
                                        to="/privacy"
                                        className="
                                            text-green-400
                                            transition
                                            hover:text-green-300
                                        "
                                    >
                                        Privacy Policy
                                    </Link>

                                </label>

                            </div>


                            {/* SUBMIT */}

                            <button
                                type="submit"
                                className="
                                    flex
                                    min-h-12
                                    w-full
                                    items-center
                                    justify-center
                                    gap-3
                                    rounded-xl
                                    bg-green-500
                                    px-5
                                    py-3
                                    text-base
                                    font-medium
                                    text-white
                                    shadow-lg
                                    shadow-green-500/10
                                    transition
                                    duration-300
                                    hover:bg-green-400
                                    sm:text-lg
                                "
                            >
                                Create Account

                                <i className="fa fa-arrow-right"></i>
                            </button>

                        </form>


                        {/* SIGN IN */}

                        <div className="mt-7 text-center">

                            <p className="text-sm text-gray-500 sm:text-base">

                                Already have an account?

                                <Link
                                    to="/signIn"
                                    className="
                                        ml-2
                                        text-green-400
                                        transition
                                        hover:text-green-300
                                    "
                                >
                                    Sign In
                                </Link>

                            </p>

                        </div>


                        {/* BACK HOME */}

                        <div className="mt-5 text-center">

                            <Link
                                to="/"
                                className="
                                    inline-flex
                                    min-h-10
                                    items-center
                                    gap-2
                                    px-3
                                    py-2
                                    text-sm
                                    text-gray-500
                                    transition
                                    hover:text-white
                                "
                            >
                                <i className="fa fa-arrow-left"></i>
                                Back to Home
                            </Link>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default GetStarted;
