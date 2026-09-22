
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import housesData from "../housesData";

function Dashboard() {
    // ==========================================
    // NAVIGATION
    // ==========================================

    const navigate = useNavigate();

    // ==========================================
    // MOBILE MENU STATE
    // ==========================================

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // ==========================================
    // DASHBOARD DATA
    // ==========================================

    const totalProperties = housesData.length;

    const availableProperties = housesData.filter(
        (house) => house.availability === true
    ).length;

    const propertiesForRent = housesData.filter(
        (house) => house.status?.toLowerCase().includes("rent")
    ).length;

    const propertiesForSale = housesData.filter(
        (house) => house.status?.toLowerCase().includes("sell")
    ).length;

    // ==========================================
    // RECENT PROPERTIES
    // ==========================================

    const recentProperties = housesData.slice(0, 4);

    // ==========================================
    // CLOSE MOBILE MENU
    // ==========================================

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    // ==========================================
    // LOGOUT
    // ==========================================

    const handleLogout = () => {
        // Temporary frontend logout
        localStorage.removeItem("adminLoggedIn");

        // Close mobile menu
        setIsMenuOpen(false);

        // Go to sign in page
        navigate("/signin");
    };

    return (
        <div className="min-h-[100svh] overflow-x-hidden bg-black text-white">

            <div className="flex min-h-[100svh]">

                {/* ==========================================
                    DESKTOP SIDEBAR
                =========================================== */}

                <aside
                    className="
                        hidden
                        w-64
                        shrink-0
                        flex-col
                        border-r
                        border-white/10
                        bg-black
                        p-5
                        lg:flex
                    "
                >

                    {/* LOGO */}

                    <div className="mb-10">

                        <Link
                            to="/"
                            className="
                                flex
                                items-center
                                gap-2
                                text-xl
                                font-bold
                                sm:text-2xl
                            "
                        >
                            <i className="fa fa-home text-green-500" />

                            <span>My Comfort</span>
                        </Link>

                    </div>

                    {/* USER */}

                    <div
                        className="
                            mb-8
                            flex
                            items-center
                            gap-3
                            rounded-xl
                            border
                            border-white/10
                            bg-white/5
                            p-3
                        "
                    >

                        <div
                            className="
                                flex
                                h-10
                                w-10
                                shrink-0
                                items-center
                                justify-center
                                rounded-full
                                border
                                border-green-500/20
                                bg-green-500/10
                            "
                        >
                            <i className="fa fa-user text-green-400" />
                        </div>

                        <div className="min-w-0">

                            <h3 className="truncate text-sm font-semibold">
                                Stephen
                            </h3>

                            <p className="truncate text-xs text-gray-500">
                                Property Manager
                            </p>

                        </div>

                    </div>

                    {/* DESKTOP NAVIGATION */}

                    <nav className="flex flex-col gap-2">

                        {/* DASHBOARD */}

                        <Link
                            to="/dashboard"
                            className="
                                flex
                                min-h-11
                                items-center
                                gap-3
                                rounded-lg
                                bg-green-500
                                px-4
                                py-3
                                text-white
                            "
                        >
                            <i className="fa fa-dashboard" />
                            Dashboard
                        </Link>

                        {/* ADD PROPERTY */}

                        <Link
                            to="/addproperty"
                            className="
                                flex
                                min-h-11
                                items-center
                                gap-3
                                rounded-lg
                                px-4
                                py-3
                                text-gray-400
                                transition
                                hover:bg-white/5
                                hover:text-white
                            "
                        >
                            <i className="fa fa-plus" />
                            Add Property
                        </Link>

                        {/* AGENTS */}

                        <Link
                            to="/adminagents"
                            className="
                                flex
                                min-h-11
                                items-center
                                gap-3
                                rounded-lg
                                px-4
                                py-3
                                text-gray-400
                                transition
                                hover:bg-white/5
                                hover:text-white
                            "
                        >
                            <i className="fa fa-users" />
                            Agents
                        </Link>

                        {/* AI AGENT */}

                        <Link
                            to="/aiagent"
                            className="
                                flex
                                min-h-11
                                items-center
                                gap-3
                                rounded-lg
                                px-4
                                py-3
                                text-gray-400
                                transition
                                hover:bg-white/5
                                hover:text-white
                            "
                        >
                            <i className="fa fa-comments" />
                            AI Agent
                        </Link>

                        {/* ABOUT */}

                        <Link
                            to="/about"
                            className="
                                flex
                                min-h-11
                                items-center
                                gap-3
                                rounded-lg
                                px-4
                                py-3
                                text-gray-400
                                transition
                                hover:bg-white/5
                                hover:text-white
                            "
                        >
                            <i className="fa fa-info-circle" />
                            About
                        </Link>

                    </nav>

                    {/* DESKTOP BOTTOM */}

                    <div className="mt-auto">

                        {/* BACK TO WEBSITE */}

                        <Link
                            to="/"
                            className="
                                flex
                                min-h-11
                                items-center
                                gap-3
                                rounded-lg
                                px-4
                                py-3
                                text-gray-400
                                transition
                                hover:bg-white/5
                                hover:text-white
                            "
                        >
                            <i className="fa fa-home" />
                            Back to Website
                        </Link>

                        {/* LOGOUT */}

                        <button
                            type="button"
                            onClick={handleLogout}
                            className="
                                mt-2
                                flex
                                min-h-11
                                w-full
                                items-center
                                gap-3
                                rounded-lg
                                px-4
                                py-3
                                text-red-400
                                transition
                                hover:bg-red-500/10
                                hover:text-red-300
                            "
                        >
                            <i className="fa fa-sign-out" />
                            Logout
                        </button>

                    </div>

                </aside>

                {/* ==========================================
                    MAIN AREA
                =========================================== */}

                <main className="min-w-0 flex-1">

                    {/* ==========================================
                        TOP BAR
                    =========================================== */}

                    <header
                        className="
                            flex
                            items-center
                            justify-between
                            border-b
                            border-white/10
                            bg-black
                            px-4
                            py-4
                            sm:px-6
                            sm:py-5
                            md:px-8
                        "
                    >

                        <div className="min-w-0">

                            <p className="text-xs text-gray-500 sm:text-sm">
                                Dashboard
                            </p>

                            <h1
                                className="
                                    roboto-condensed
                                    mt-1
                                    truncate
                                    text-2xl
                                    font-bold
                                    sm:text-3xl
                                    md:text-4xl
                                "
                            >
                                Welcome back
                            </h1>

                        </div>

                        {/* MOBILE MENU BUTTON */}

                        <button
                            type="button"
                            onClick={() => setIsMenuOpen((prev) => !prev)}
                            aria-label={
                                isMenuOpen
                                    ? "Close dashboard menu"
                                    : "Open dashboard menu"
                            }
                            aria-expanded={isMenuOpen}
                            className="
                                flex
                                h-11
                                w-11
                                shrink-0
                                items-center
                                justify-center
                                rounded-full
                                border
                                border-white/10
                                bg-white/5
                                text-white
                                transition
                                hover:bg-green-500
                                lg:hidden
                            "
                        >
                            <i
                                className={`fa ${
                                    isMenuOpen
                                        ? "fa-times"
                                        : "fa-bars"
                                } text-lg`}
                            />
                        </button>

                    </header>

                    {/* ==========================================
                        MOBILE DASHBOARD MENU
                    =========================================== */}

                    {isMenuOpen && (
                        <div
                            className="
                                border-b
                                border-white/10
                                bg-black
                                px-4
                                py-4
                                sm:px-6
                                lg:hidden
                            "
                        >

                            <nav className="flex flex-col gap-2">

                                {/* DASHBOARD */}

                                <Link
                                    to="/dashboard"
                                    onClick={closeMenu}
                                    className="
                                        flex
                                        min-h-11
                                        items-center
                                        gap-3
                                        rounded-lg
                                        bg-green-500
                                        px-4
                                        py-3
                                    "
                                >
                                    <i className="fa fa-dashboard" />
                                    Dashboard
                                </Link>

                                {/* ADD PROPERTY */}

                                <Link
                                    to="/addproperty"
                                    onClick={closeMenu}
                                    className="
                                        flex
                                        min-h-11
                                        items-center
                                        gap-3
                                        rounded-lg
                                        px-4
                                        py-3
                                        text-gray-400
                                        transition
                                        hover:bg-white/5
                                        hover:text-white
                                    "
                                >
                                    <i className="fa fa-plus" />
                                    Add Property
                                </Link>

                                {/* AGENTS */}

                                <Link
                                    to="/adminagents"
                                    onClick={closeMenu}
                                    className="
                                        flex
                                        min-h-11
                                        items-center
                                        gap-3
                                        rounded-lg
                                        px-4
                                        py-3
                                        text-gray-400
                                        transition
                                        hover:bg-white/5
                                        hover:text-white
                                    "
                                >
                                    <i className="fa fa-users" />
                                    Agents
                                </Link>

                                {/* AI AGENT */}

                                <Link
                                    to="/aiagent"
                                    onClick={closeMenu}
                                    className="
                                        flex
                                        min-h-11
                                        items-center
                                        gap-3
                                        rounded-lg
                                        px-4
                                        py-3
                                        text-gray-400
                                        transition
                                        hover:bg-white/5
                                        hover:text-white
                                    "
                                >
                                    <i className="fa fa-comments" />
                                    AI Agent
                                </Link>

                                {/* ABOUT */}

                                <Link
                                    to="/about"
                                    onClick={closeMenu}
                                    className="
                                        flex
                                        min-h-11
                                        items-center
                                        gap-3
                                        rounded-lg
                                        px-4
                                        py-3
                                        text-gray-400
                                        transition
                                        hover:bg-white/5
                                        hover:text-white
                                    "
                                >
                                    <i className="fa fa-info-circle" />
                                    About
                                </Link>

                                <div className="my-2 border-t border-white/10" />

                                {/* BACK TO WEBSITE */}

                                <Link
                                    to="/"
                                    onClick={closeMenu}
                                    className="
                                        flex
                                        min-h-11
                                        items-center
                                        gap-3
                                        rounded-lg
                                        px-4
                                        py-3
                                        text-gray-400
                                        transition
                                        hover:bg-white/5
                                        hover:text-white
                                    "
                                >
                                    <i className="fa fa-home" />
                                    Back to Website
                                </Link>

                                {/* LOGOUT */}

                                <button
                                    type="button"
                                    onClick={handleLogout}
                                    className="
                                        flex
                                        min-h-11
                                        items-center
                                        gap-3
                                        rounded-lg
                                        px-4
                                        py-3
                                        text-left
                                        text-red-400
                                        transition
                                        hover:bg-red-500/10
                                        hover:text-red-300
                                    "
                                >
                                    <i className="fa fa-sign-out" />
                                    Logout
                                </button>

                            </nav>

                        </div>
                    )}

                    {/* ==========================================
                        CONTENT
                    =========================================== */}

                    <div className="p-4 sm:p-5 md:p-8">

                        {/* ==========================================
                            WELCOME BANNER
                        =========================================== */}

                        <section
                            className="
                                relative
                                mb-8
                                overflow-hidden
                                rounded-2xl
                                border
                                border-white/10
                                bg-white/5
                                p-5
                                sm:p-6
                                md:p-8
                            "
                        >

                            <div className="relative z-10 max-w-2xl">

                                <span
                                    className="
                                        inline-flex
                                        items-center
                                        gap-2
                                        rounded-full
                                        border
                                        border-green-500/20
                                        bg-green-500/10
                                        px-3
                                        py-2
                                        text-xs
                                        text-green-400
                                        sm:px-4
                                        sm:text-sm
                                    "
                                >
                                    <i className="fa fa-home" />
                                    My Comfort Dashboard
                                </span>

                                <h2
                                    className="
                                        bebas-neue
                                        mt-4
                                        bg-gradient-to-r
                                        from-white
                                        to-gray-500
                                        bg-clip-text
                                        text-4xl
                                        leading-tight
                                        text-transparent
                                        sm:mt-5
                                        sm:text-5xl
                                        md:text-7xl
                                    "
                                >
                                    Manage your properties
                                </h2>

                                <p
                                    className="
                                        mt-3
                                        max-w-xl
                                        text-sm
                                        leading-relaxed
                                        text-gray-400
                                        sm:text-base
                                        md:text-lg
                                    "
                                >
                                    Manage your listings, monitor properties
                                    and connect with potential clients.
                                </p>

                                <div
                                    className="
                                        mt-6
                                        flex
                                        flex-col
                                        gap-3
                                        sm:flex-row
                                        sm:flex-wrap
                                    "
                                >

                                    <Link
                                        to="/adminpropertyview"
                                        className="
                                            inline-flex
                                            min-h-11
                                            items-center
                                            justify-center
                                            gap-2
                                            rounded-full
                                            bg-green-500
                                            px-5
                                            py-3
                                            text-sm
                                            text-white
                                            transition
                                            hover:bg-green-400
                                            sm:text-base
                                        "
                                    >
                                        <i className="fa fa-building" />
                                        View Properties
                                    </Link>

                                    <Link
                                        to="/aiagent"
                                        className="
                                            inline-flex
                                            min-h-11
                                            items-center
                                            justify-center
                                            gap-2
                                            rounded-full
                                            border
                                            border-white/20
                                            bg-white/5
                                            px-5
                                            py-3
                                            text-sm
                                            text-white
                                            transition
                                            hover:bg-white/10
                                            sm:text-base
                                        "
                                    >
                                        <i className="fa fa-comments text-green-400" />
                                        Talk to AI
                                    </Link>

                                </div>

                            </div>

                            <i
                                aria-hidden="true"
                                className="
                                    fa
                                    fa-home
                                    absolute
                                    -bottom-8
                                    -right-8
                                    text-[120px]
                                    text-green-500/5
                                    sm:text-[160px]
                                    md:text-[180px]
                                "
                            />

                        </section>

                        {/* ==========================================
                            STATISTICS
                        =========================================== */}

                        <section
                            className="
                                mb-10
                                grid
                                grid-cols-1
                                gap-4
                                sm:grid-cols-2
                                sm:gap-5
                                xl:grid-cols-4
                            "
                        >

                            <StatCard
                                title="Total Properties"
                                value={totalProperties}
                                icon="fa-building"
                            />

                            <StatCard
                                title="Available"
                                value={availableProperties}
                                icon="fa-check-circle"
                            />

                            <StatCard
                                title="For Rent"
                                value={propertiesForRent}
                                icon="fa-key"
                            />

                            <StatCard
                                title="For Sale"
                                value={propertiesForSale}
                                icon="fa-money"
                            />

                        </section>

                        {/* ==========================================
                            QUICK ACTIONS
                        =========================================== */}

                        <section className="mb-10">

                            <h2 className="mb-5 text-xl font-bold sm:text-2xl">
                                Quick Actions
                            </h2>

                            <div
                                className="
                                    grid
                                    grid-cols-1
                                    gap-4
                                    sm:grid-cols-2
                                    lg:grid-cols-4
                                "
                            >

                                <QuickAction
                                    to="/addproperty"
                                    icon="fa-plus"
                                    title="Add Property"
                                    description="Create a new listing"
                                />

                                <QuickAction
                                    to="/adminpropertyview"
                                    icon="fa-search"
                                    title="Find Property"
                                    description="Browse available homes"
                                />

                                <QuickAction
                                    to="/aiagent"
                                    icon="fa-comments"
                                    title="AI Assistant"
                                    description="Find properties with AI"
                                />

                                <QuickAction
                                    to="/adminagents"
                                    icon="fa-users"
                                    title="Manage Agents"
                                    description="View and manage agents"
                                />

                            </div>

                        </section>

                        {/* ==========================================
                            RECENT PROPERTIES
                        =========================================== */}

                        <section>

                            <div
                                className="
                                    mb-5
                                    flex
                                    flex-col
                                    gap-2
                                    sm:flex-row
                                    sm:items-center
                                    sm:justify-between
                                    sm:gap-3
                                "
                            >

                                <div>

                                    <h2 className="text-xl font-bold sm:text-2xl">
                                        Recent Properties
                                    </h2>

                                    <p className="mt-1 text-sm text-gray-500">
                                        Recently added properties
                                    </p>

                                </div>

                                <Link
                                    to="/adminpropertyview"
                                    className="
                                        inline-flex
                                        items-center
                                        text-sm
                                        text-green-400
                                        transition
                                        hover:text-green-300
                                        sm:text-base
                                    "
                                >
                                    View all
                                    <i className="fa fa-arrow-right ml-2" />
                                </Link>

                            </div>

                            {recentProperties.length === 0 ? (

                                <div
                                    className="
                                        rounded-2xl
                                        border
                                        border-dashed
                                        border-white/10
                                        bg-white/5
                                        px-5
                                        py-12
                                        text-center
                                    "
                                >

                                    <i className="fa fa-building text-3xl text-gray-600" />

                                    <h3 className="mt-4 text-lg font-semibold">
                                        No properties yet
                                    </h3>

                                    <p className="mt-2 text-sm text-gray-500">
                                        Add your first property to see it here.
                                    </p>

                                    <Link
                                        to="/addproperty"
                                        className="
                                            mt-5
                                            inline-flex
                                            min-h-11
                                            items-center
                                            gap-2
                                            rounded-full
                                            bg-green-500
                                            px-5
                                            py-3
                                            text-sm
                                            transition
                                            hover:bg-green-400
                                        "
                                    >
                                        <i className="fa fa-plus" />
                                        Add Property
                                    </Link>

                                </div>

                            ) : (

                                <div className="flex flex-col gap-4">

                                    {recentProperties.map((house) => (

                                        <div
                                            key={house.id}
                                            className="
                                                flex
                                                min-w-0
                                                flex-col
                                                gap-4
                                                rounded-2xl
                                                border
                                                border-white/10
                                                bg-white/5
                                                p-4
                                                transition
                                                hover:border-green-500/30
                                                md:flex-row
                                            "
                                        >

                                            {/* IMAGE */}

                                            <div
                                                className="
                                                    relative
                                                    w-full
                                                    shrink-0
                                                    md:w-48
                                                "
                                            >

                                                <img
                                                    src={house.image}
                                                    alt={house.title}
                                                    loading="lazy"
                                                    className="
                                                        h-48
                                                        w-full
                                                        rounded-xl
                                                        object-cover
                                                        brightness-75
                                                        sm:h-56
                                                        md:h-40
                                                    "
                                                />

                                                <span
                                                    className="
                                                        absolute
                                                        left-2
                                                        top-2
                                                        rounded-full
                                                        bg-black/60
                                                        px-3
                                                        py-1
                                                        text-xs
                                                        backdrop-blur-md
                                                    "
                                                >
                                                    {house.status}
                                                </span>

                                            </div>

                                            {/* DETAILS */}

                                            <div className="min-w-0 flex-1">

                                                <div
                                                    className="
                                                        flex
                                                        flex-col
                                                        gap-3
                                                        md:flex-row
                                                        md:items-start
                                                        md:justify-between
                                                    "
                                                >

                                                    <div className="min-w-0">

                                                        <h3
                                                            className="
                                                                break-words
                                                                text-lg
                                                                font-bold
                                                                sm:text-xl
                                                            "
                                                        >
                                                            {house.title}
                                                        </h3>

                                                        <div className="mt-2 flex items-start">

                                                            <i className="fa fa-map-marker mt-1 shrink-0 text-green-400" />

                                                            <p
                                                                className="
                                                                    ml-2
                                                                    break-words
                                                                    text-sm
                                                                    text-gray-500
                                                                    sm:text-base
                                                                "
                                                            >
                                                                {house.location}
                                                            </p>

                                                        </div>

                                                    </div>

                                                    <h3
                                                        className="
                                                            shrink-0
                                                            text-xl
                                                            font-bold
                                                            text-green-400
                                                            sm:text-2xl
                                                        "
                                                    >
                                                        {house.price}
                                                    </h3>

                                                </div>

                                                {/* FEATURES */}

                                                <div
                                                    className="
                                                        mt-4
                                                        flex
                                                        flex-wrap
                                                        items-center
                                                        gap-x-5
                                                        gap-y-3
                                                        text-sm
                                                        text-gray-400
                                                        sm:mt-5
                                                        sm:text-base
                                                    "
                                                >

                                                    <span>
                                                        <i className="fa fa-bed mr-2 text-green-400" />
                                                        {house.beds}
                                                    </span>

                                                    <span>
                                                        <i className="fa fa-bath mr-2 text-green-400" />
                                                        {house.baths}
                                                    </span>

                                                    <span>
                                                        <i className="fa fa-expand mr-2 text-green-400" />
                                                        {house.size}
                                                    </span>

                                                </div>

                                                {/* ACTION BUTTONS */}

                                                <div
                                                    className="
                                                        mt-5
                                                        flex
                                                        flex-col
                                                        gap-2
                                                        sm:flex-row
                                                        sm:flex-wrap
                                                    "
                                                >

                                                    {/* VIEW */}

                                                    <Link
                                                        to={`/adminpropertyview/${house.id}`}
                                                        className="
                                                            inline-flex
                                                            min-h-11
                                                            items-center
                                                            justify-center
                                                            gap-2
                                                            rounded-full
                                                            border
                                                            border-white/10
                                                            px-5
                                                            py-2
                                                            text-sm
                                                            text-gray-300
                                                            transition
                                                            hover:bg-white/10
                                                            hover:text-white
                                                            sm:text-base
                                                        "
                                                    >
                                                        View Details
                                                        <i className="fa fa-arrow-right" />
                                                    </Link>

                                                    {/* EDIT */}

                                                    <Link
                                                        to={`/editproperty/${house.id}`}
                                                        className="
                                                            inline-flex
                                                            min-h-11
                                                            items-center
                                                            justify-center
                                                            rounded-full
                                                            border
                                                            border-white/20
                                                            px-4
                                                            py-2
                                                            text-sm
                                                            text-gray-300
                                                            transition
                                                            hover:bg-green-500
                                                            hover:text-white
                                                            sm:text-base
                                                        "
                                                    >
                                                        <i className="fa fa-edit mr-2" />
                                                        Edit
                                                    </Link>

                                                    {/* DELETE */}

                                                    <button
                                                        type="button"
                                                        aria-label={`Delete ${house.title}`}
                                                        className="
                                                            inline-flex
                                                            min-h-11
                                                            items-center
                                                            justify-center
                                                            rounded-full
                                                            border
                                                            border-red-500/20
                                                            px-4
                                                            py-2
                                                            text-sm
                                                            text-red-400
                                                            transition
                                                            hover:bg-red-500
                                                            hover:text-white
                                                            sm:text-base
                                                        "
                                                    >
                                                        <i className="fa fa-trash mr-2" />
                                                        Delete
                                                    </button>

                                                </div>

                                            </div>

                                        </div>

                                    ))}

                                </div>

                            )}

                        </section>

                    </div>

                </main>

            </div>

        </div>
    );
}

/* ==========================================
   STAT CARD
========================================== */

function StatCard({ title, value, icon }) {
    return (
        <div
            className="
                rounded-2xl
                border
                border-white/10
                bg-white/5
                p-5
                transition
                hover:border-green-500/30
            "
        >

            <div className="flex items-start justify-between gap-4">

                <div className="min-w-0">

                    <p className="text-sm text-gray-500">
                        {title}
                    </p>

                    <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
                        {value}
                    </h2>

                </div>

                <div
                    className="
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        bg-green-500/10
                    "
                >
                    <i className={`fa ${icon} text-xl text-green-400`} />
                </div>

            </div>

        </div>
    );
}

/* ==========================================
   QUICK ACTION
========================================== */

function QuickAction({
    to,
    icon,
    title,
    description,
}) {
    return (
        <Link
            to={to}
            className="
                rounded-xl
                border
                border-white/10
                bg-white/5
                p-5
                transition
                hover:border-green-500/30
                hover:bg-white/10
            "
        >

            <i className={`fa ${icon} text-2xl text-green-400`} />

            <h3 className="mt-4 font-bold">
                {title}
            </h3>

            <p className="mt-1 text-sm text-gray-500">
                {description}
            </p>

        </Link>
    );
}

export default Dashboard;
