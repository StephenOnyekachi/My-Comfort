
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function SignIn() {
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        remember: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Login data:", formData);

        // Later:
        // Connect this form to your Django authentication API.

        // Temporary redirect for the frontend.
        navigate("/");
    };

    return (
        <div className="relative min-h-[100svh] overflow-hidden bg-black text-white">

            {/* ================================
                BACKGROUND IMAGE
            ================================= */}
            <img
                src="/images/1.jpeg"
                alt=""
                aria-hidden="true"
                className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                    brightness-[0.25]
                "
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/70" />

            {/* ================================
                BACK BUTTON
            ================================= */}
            <div className="absolute left-3 top-3 z-20 sm:left-5 sm:top-5">

                <Link
                    to="/"
                    className="
                        flex
                        min-h-10
                        items-center
                        gap-2
                        rounded-full
                        border
                        border-white/20
                        bg-black/40
                        px-3
                        py-2
                        text-sm
                        text-white
                        backdrop-blur-md
                        transition
                        hover:bg-green-500
                        sm:px-4
                        sm:text-base
                    "
                >
                    <i className="fa fa-arrow-left" />

                    <span>Home</span>
                </Link>

            </div>

            {/* ================================
                MAIN CONTAINER
            ================================= */}
            <main
                className="
                    relative
                    z-10
                    flex
                    min-h-[100svh]
                    items-center
                    justify-center
                    px-4
                    py-20
                    sm:px-6
                    sm:py-24
                "
            >

                <div className="w-full max-w-md">

                    {/* ================================
                        HEADER
                    ================================= */}
                    <div className="mb-7 text-center sm:mb-8">

                        <div
                            className="
                                mx-auto
                                mb-4
                                flex
                                h-14
                                w-14
                                items-center
                                justify-center
                                rounded-full
                                border
                                border-green-500/20
                                bg-green-500/10
                                backdrop-blur-md
                                sm:mb-5
                                sm:h-16
                                sm:w-16
                            "
                        >
                            <i
                                className="
                                    fa fa-home
                                    text-2xl
                                    text-green-400
                                    sm:text-3xl
                                "
                            />
                        </div>

                        <h1
                            className="
                                roboto-condensed
                                text-4xl
                                font-black
                                leading-tight
                                text-transparent
                                bg-gradient-to-r
                                from-white
                                to-gray-500
                                bg-clip-text
                                sm:text-5xl
                                md:text-6xl
                            "
                        >
                            Welcome Back
                        </h1>

                        <p
                            className="
                                mt-2
                                px-2
                                text-sm
                                leading-relaxed
                                text-gray-400
                                sm:mt-3
                                sm:text-lg
                            "
                        >
                            Sign in to continue to My Comfort.
                        </p>

                    </div>

                    {/* ================================
                        LOGIN CARD
                    ================================= */}
                    <div
                        className="
                            rounded-2xl
                            border
                            border-white/10
                            bg-black/60
                            p-5
                            shadow-2xl
                            backdrop-blur-xl
                            sm:p-7
                            md:p-8
                        "
                    >

                        <form
                            onSubmit={handleSubmit}
                            className="space-y-5 sm:space-y-6"
                        >

                            {/* ================================
                                EMAIL
                            ================================= */}
                            <div>

                                <label
                                    htmlFor="email"
                                    className="
                                        mb-2
                                        block
                                        text-sm
                                        text-gray-300
                                    "
                                >
                                    Email Address
                                </label>

                                <div className="relative">

                                    <i
                                        className="
                                            fa fa-envelope
                                            absolute
                                            left-4
                                            top-1/2
                                            -translate-y-1/2
                                            text-green-400
                                        "
                                    />

                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Enter your email"
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
                                            pl-12
                                            pr-4
                                            text-white
                                            outline-none
                                            placeholder:text-gray-500
                                            transition
                                            focus:border-green-500
                                            focus:ring-1
                                            focus:ring-green-500
                                        "
                                    />

                                </div>

                            </div>

                            {/* ================================
                                PASSWORD
                            ================================= */}
                            <div>

                                <div className="mb-2 flex items-center justify-between gap-3">

                                    <label
                                        htmlFor="password"
                                        className="text-sm text-gray-300"
                                    >
                                        Password
                                    </label>

                                    <Link
                                        to="/forgot-password"
                                        className="
                                            text-xs
                                            text-green-400
                                            transition
                                            hover:text-green-300
                                            sm:text-sm
                                        "
                                    >
                                        Forgot password?
                                    </Link>

                                </div>

                                <div className="relative">

                                    <i
                                        className="
                                            fa fa-lock
                                            absolute
                                            left-4
                                            top-1/2
                                            -translate-y-1/2
                                            text-green-400
                                        "
                                    />

                                    <input
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        placeholder="Enter your password"
                                        autoComplete="current-password"
                                        required
                                        className="
                                            min-h-12
                                            w-full
                                            rounded-xl
                                            border
                                            border-white/10
                                            bg-white/5
                                            py-3
                                            pl-12
                                            pr-12
                                            text-white
                                            outline-none
                                            placeholder:text-gray-500
                                            transition
                                            focus:border-green-500
                                            focus:ring-1
                                            focus:ring-green-500
                                        "
                                    />

                                    {/* SHOW / HIDE PASSWORD */}
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowPassword((prev) => !prev)
                                        }
                                        aria-label={
                                            showPassword
                                                ? "Hide password"
                                                : "Show password"
                                        }
                                        className="
                                            absolute
                                            right-2
                                            top-1/2
                                            flex
                                            h-10
                                            w-10
                                            -translate-y-1/2
                                            items-center
                                            justify-center
                                            rounded-full
                                            text-gray-400
                                            transition
                                            hover:text-green-400
                                        "
                                    >
                                        <i
                                            className={`fa ${
                                                showPassword
                                                    ? "fa-eye-slash"
                                                    : "fa-eye"
                                            }`}
                                        />
                                    </button>

                                </div>

                            </div>

                            {/* ================================
                                REMEMBER ME
                            ================================= */}
                            <div className="flex items-center">

                                <input
                                    id="remember"
                                    type="checkbox"
                                    name="remember"
                                    checked={formData.remember}
                                    onChange={handleChange}
                                    className="
                                        h-4
                                        w-4
                                        cursor-pointer
                                        accent-green-500
                                    "
                                />

                                <label
                                    htmlFor="remember"
                                    className="
                                        ml-2
                                        cursor-pointer
                                        text-sm
                                        text-gray-400
                                    "
                                >
                                    Remember me
                                </label>

                            </div>

                            {/* ================================
                                LOGIN BUTTON
                            ================================= */}
                            <button
                                type="submit"
                                className="
                                    flex
                                    min-h-12
                                    w-full
                                    items-center
                                    justify-center
                                    gap-3
                                    rounded-full
                                    bg-green-500
                                    px-4
                                    py-3
                                    text-base
                                    font-medium
                                    text-white
                                    shadow-lg
                                    transition
                                    duration-300
                                    hover:bg-green-400
                                    sm:text-lg
                                "
                            >
                                <i className="fa fa-sign-in" />

                                Sign In
                            </button>

                            {/* ================================
                                DIVIDER
                            ================================= */}
                            <div className="flex items-center gap-3">

                                <div className="h-px flex-1 bg-white/10" />

                                <span className="text-xs text-gray-500 sm:text-sm">
                                    OR
                                </span>

                                <div className="h-px flex-1 bg-white/10" />

                            </div>

                            {/* ================================
                                GOOGLE BUTTON
                            ================================= */}
                            <button
                                type="button"
                                className="
                                    flex
                                    min-h-12
                                    w-full
                                    items-center
                                    justify-center
                                    gap-3
                                    rounded-full
                                    border
                                    border-white/10
                                    bg-white/5
                                    px-4
                                    py-3
                                    text-sm
                                    text-white
                                    transition
                                    hover:bg-white/10
                                    sm:text-base
                                "
                            >
                                <i className="fa fa-google text-green-400" />

                                Continue with Google
                            </button>

                        </form>

                        {/* ================================
                            SIGN UP
                        ================================= */}
                        <div
                            className="
                                mt-6
                                border-t
                                border-white/10
                                pt-5
                                text-center
                                sm:mt-7
                                sm:pt-6
                            "
                        >
                            <p className="text-sm text-gray-400 sm:text-base">

                                Don't have an account?

                                <Link
                                    to="/getstarted"
                                    className="
                                        ml-1
                                        text-green-400
                                        transition
                                        hover:text-green-300
                                        sm:ml-2
                                    "
                                >
                                    Create Account
                                </Link>

                            </p>
                        </div>

                    </div>

                    {/* ================================
                        FOOTER TEXT
                    ================================= */}
                    <p
                        className="
                            mt-5
                            px-3
                            text-center
                            text-xs
                            leading-relaxed
                            text-gray-500
                            sm:mt-6
                            sm:text-sm
                        "
                    >
                        © {new Date().getFullYear()} My Comfort. Find a home that fits your life.
                    </p>

                </div>

            </main>

        </div>
    );
}

export default SignIn;
