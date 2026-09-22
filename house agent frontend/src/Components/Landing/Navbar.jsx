
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    // ==========================================
    // ROUTE CHECKS
    // ==========================================

    const isDashboard =
        location.pathname === "/dashboard" ||
        location.pathname.startsWith("/dashboard/");

    const isEditProperty =
        location.pathname === "/editproperty" ||
        location.pathname.startsWith("/editproperty/");

    const isAddProperty =
        location.pathname === "/addproperty" ||
        location.pathname.startsWith("/addproperty/");

    const isAdminPropertyView =
        location.pathname === "/adminpropertyview" ||
        location.pathname.startsWith("/adminpropertyview/");

    const isSignIn =
        location.pathname === "/signin" ||
        location.pathname.startsWith("/signin/");

    const isGetStarted =
        location.pathname === "/getstarted" ||
        location.pathname.startsWith("/getstarted/");

    // ==========================================
    // HIDE GENERAL NAVBAR ON THESE PAGES
    // ==========================================

    const hideNavbar =
        isDashboard ||
        isEditProperty ||
        isAddProperty ||
        isAdminPropertyView ||
        isSignIn ||
        isGetStarted;

    // ==========================================
    // CLOSE MOBILE MENU WHEN ROUTE CHANGES
    // ==========================================

    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    // ==========================================
    // NAVIGATION LINKS
    // ==========================================

    const navLinks = [
        {
            name: "Home",
            path: "/",
            icon: "fa-home",
        },
        {
            name: "Properties",
            path: "/properties",
            icon: "fa-building",
        },
        {
            name: "Sell",
            path: "/sell",
            icon: "fa-tag",
        },
        {
            name: "Rent",
            path: "/rent",
            icon: "fa-key",
        },
        {
            name: "Agents",
            path: "/agent",
            icon: "fa-user",
        },
        {
            name: "About",
            path: "/about",
            icon: "fa-info-circle",
        },
    ];

    // ==========================================
    // ACTIVE LINK
    // ==========================================

    const isActiveLink = (path) => {
        if (path === "/") {
            return location.pathname === "/";
        }

        return location.pathname.startsWith(path);
    };

    // ==========================================
    // DON'T RENDER NAVBAR ON ADMIN/AUTH PAGES
    // ==========================================

    if (hideNavbar) {
        return null;
    }

    return (
        <nav
            className="
                fixed
                top-0
                left-0
                z-50
                w-full
                bg-black/85
                backdrop-blur-xl
                border-b
                border-white/10
            "
        >

            {/* ==========================================
                NAVBAR CONTAINER
            ========================================== */}

            <div
                className="
                    max-w-7xl
                    mx-auto
                    px-4
                    sm:px-6
                    lg:px-8
                    h-20
                    flex
                    items-center
                    justify-between
                "
            >

                {/* ==========================================
                    LOGO
                ========================================== */}

                <Link
                    to="/"
                    className="
                        flex
                        items-center
                        gap-2
                        group
                        shrink-0
                    "
                    aria-label="My Comfort Homes home"
                >

                    <div
                        className="
                            w-10
                            h-10
                            rounded-xl
                            bg-green-500/10
                            border
                            border-green-500/20
                            flex
                            items-center
                            justify-center
                            group-hover:bg-green-500/20
                            transition
                        "
                    >
                        <i className="fa fa-home text-green-400 text-xl"></i>
                    </div>

                    <div className="leading-none">

                        <h1
                            className="
                                text-xl
                                sm:text-2xl
                                font-bold
                                text-white
                                roboto-condensed-bold
                            "
                        >
                            My Comfort
                        </h1>

                        <span
                            className="
                                hidden
                                sm:block
                                text-[10px]
                                uppercase
                                tracking-[3px]
                                text-gray-500
                                mt-1
                            "
                        >
                            Homes
                        </span>

                    </div>

                </Link>


                {/* ==========================================
                    DESKTOP NAVIGATION
                ========================================== */}

                <div
                    className="
                        hidden
                        lg:flex
                        items-center
                        gap-8
                    "
                >

                    <div className="flex items-center gap-1">

                        {navLinks.map((link) => (

                            <Link
                                key={link.path}
                                to={link.path}
                                className={`
                                    relative
                                    px-4
                                    py-2
                                    text-sm
                                    font-medium
                                    transition
                                    duration-200
                                    ${
                                        isActiveLink(link.path)
                                            ? "text-green-400"
                                            : "text-gray-300 hover:text-white"
                                    }
                                `}
                            >
                                {link.name}

                                {isActiveLink(link.path) && (
                                    <span
                                        className="
                                            absolute
                                            left-4
                                            right-4
                                            bottom-0
                                            h-0.5
                                            rounded-full
                                            bg-green-400
                                        "
                                    ></span>
                                )}

                            </Link>

                        ))}

                    </div>


                    {/* ==========================================
                        AUTH BUTTONS
                    ========================================== */}

                    <div className="flex items-center gap-3">

                        <Link
                            to="/signin"
                            className="
                                py-2.5
                                px-5
                                rounded-full
                                border
                                border-white/15
                                bg-white/5
                                text-white
                                text-sm
                                font-medium
                                hover:bg-white/10
                                hover:border-white/25
                                transition
                            "
                        >
                            Sign In
                        </Link>


                        <Link
                            to="/getstarted"
                            className="
                                py-2.5
                                px-5
                                rounded-full
                                bg-green-500
                                text-black
                                text-sm
                                font-semibold
                                hover:bg-green-400
                                hover:scale-[1.02]
                                transition
                            "
                        >
                            Get Started
                        </Link>

                    </div>

                </div>


                {/* ==========================================
                    MOBILE MENU BUTTON
                ========================================== */}

                <button
                    type="button"
                    onClick={() => setIsOpen((current) => !current)}
                    aria-label={
                        isOpen
                            ? "Close navigation menu"
                            : "Open navigation menu"
                    }
                    aria-expanded={isOpen}
                    className="
                        lg:hidden
                        w-11
                        h-11
                        rounded-xl
                        flex
                        items-center
                        justify-center
                        bg-white/5
                        border
                        border-white/10
                        text-white
                        hover:bg-green-500
                        hover:border-green-400
                        hover:text-black
                        transition
                    "
                >

                    <i
                        className={`
                            fa
                            ${
                                isOpen
                                    ? "fa-times"
                                    : "fa-bars"
                            }
                            text-lg
                        `}
                    ></i>

                </button>

            </div>


            {/* ==========================================
                MOBILE NAVIGATION
            ========================================== */}

            {isOpen && (

                <div
                    className="
                        lg:hidden
                        border-t
                        border-white/10
                        bg-black/95
                        backdrop-blur-xl
                    "
                >

                    <div className="px-4 sm:px-6 py-5">

                        {/* MOBILE LINKS */}

                        <div className="space-y-1">

                            {navLinks.map((link) => (

                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`
                                        flex
                                        items-center
                                        gap-4
                                        px-4
                                        py-3.5
                                        rounded-xl
                                        transition
                                        ${
                                            isActiveLink(link.path)
                                                ? "bg-green-500/10 text-green-400"
                                                : "text-gray-300 hover:bg-white/5 hover:text-white"
                                        }
                                    `}
                                >

                                    <i
                                        className={`fa ${link.icon} w-5 text-center`}
                                    ></i>

                                    <span className="font-medium">
                                        {link.name}
                                    </span>

                                </Link>

                            ))}

                        </div>


                        {/* ==========================================
                            MOBILE AUTH
                        ========================================== */}

                        <div
                            className="
                                border-t
                                border-white/10
                                mt-5
                                pt-5
                                grid
                                grid-cols-1
                                sm:grid-cols-2
                                gap-3
                            "
                        >

                            <Link
                                to="/signin"
                                className="
                                    w-full
                                    py-3
                                    flex
                                    items-center
                                    justify-center
                                    rounded-xl
                                    border
                                    border-white/15
                                    bg-white/5
                                    text-white
                                    hover:bg-white/10
                                    transition
                                "
                            >
                                Sign In
                            </Link>


                            <Link
                                to="/getstarted"
                                className="
                                    w-full
                                    py-3
                                    flex
                                    items-center
                                    justify-center
                                    rounded-xl
                                    bg-green-500
                                    text-black
                                    font-semibold
                                    hover:bg-green-400
                                    transition
                                "
                            >
                                Get Started
                            </Link>

                        </div>

                    </div>

                </div>

            )}

        </nav>
    );
}

export default Navbar;
