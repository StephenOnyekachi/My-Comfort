import { useState } from "react";
import { Link } from "react-router-dom";
import agentsData from "../agentsData";

function Agent() {
    const [search, setSearch] = useState("");

    const filteredAgents = agentsData.filter((agent) =>
        agent.name.toLowerCase().includes(search.toLowerCase()) ||
        agent.location.toLowerCase().includes(search.toLowerCase()) ||
        agent.role.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="min-h-[100svh] overflow-x-hidden bg-black text-white">

            {/* =========================================
                HERO
            ========================================= */}
            <section className="relative flex min-h-[560px] items-center overflow-hidden sm:min-h-[600px]">

                {/* Background */}
                <img
                    src="/images/1.jpeg"
                    alt="Real estate"
                    loading="lazy"
                    className="
                        absolute
                        inset-0
                        h-full
                        w-full
                        object-cover
                        brightness-[0.4]
                    "
                />

                <div className="absolute inset-0 bg-black/70" />

                {/* Green Glow */}
                <div
                    className="
                        absolute
                        -right-32
                        -top-32
                        h-64
                        w-64
                        rounded-full
                        bg-green-500/20
                        blur-3xl
                        sm:-right-40
                        sm:-top-40
                        sm:h-96
                        sm:w-96
                    "
                />

                <div className="relative z-10 w-full px-4 py-20 sm:px-6 md:px-10">

                    <div className="mx-auto max-w-7xl">

                        <div className="max-w-4xl">

                            {/* Small Label */}
                            <div
                                className="
                                    mb-5
                                    inline-flex
                                    items-center
                                    gap-2
                                    rounded-full
                                    border
                                    border-green-500/20
                                    bg-green-500/10
                                    px-3
                                    py-2
                                    backdrop-blur-md
                                    sm:mb-6
                                    sm:px-4
                                "
                            >
                                <i className="fa fa-users text-green-400" />

                                <span className="roboto-condensed-light text-sm text-gray-300 sm:text-base">
                                    Trusted Property Experts
                                </span>
                            </div>


                            {/* Heading */}
                            <h1
                                className="
                                    bebas-neue
                                    text-5xl
                                    font-black
                                    leading-none
                                    bg-gradient-to-r
                                    from-white
                                    to-gray-500
                                    bg-clip-text
                                    text-transparent
                                    sm:text-6xl
                                    md:text-8xl
                                "
                            >
                                Meet Our Agents
                            </h1>


                            {/* Description */}
                            <p
                                className="
                                    playwrite-nz
                                    mt-5
                                    max-w-3xl
                                    text-base
                                    leading-relaxed
                                    text-gray-300
                                    sm:mt-6
                                    sm:text-xl
                                    md:text-2xl
                                "
                            >
                                Connect with trusted property agents who understand
                                the local market and can help you find the right
                                property without the usual agent wahala.
                            </p>


                            {/* Search */}
                            <div className="mt-7 max-w-2xl sm:mt-8">

                                <div
                                    className="
                                        flex
                                        items-center
                                        rounded-2xl
                                        border
                                        border-white/10
                                        bg-white/10
                                        p-1.5
                                        backdrop-blur-md
                                        sm:rounded-full
                                        sm:p-2
                                    "
                                >

                                    <i className="fa fa-search px-3 text-gray-400 sm:px-4" />

                                    <input
                                        type="text"
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                        placeholder="Search agent, location or specialty..."
                                        aria-label="Search agents"
                                        className="
                                            min-w-0
                                            flex-1
                                            bg-transparent
                                            py-3
                                            text-sm
                                            text-white
                                            outline-none
                                            placeholder:text-gray-500
                                            sm:text-base
                                        "
                                    />

                                    <button
                                        type="button"
                                        className="
                                            hidden
                                            min-h-11
                                            items-center
                                            gap-2
                                            rounded-full
                                            bg-green-500
                                            px-6
                                            text-white
                                            transition
                                            hover:bg-green-400
                                            md:flex
                                        "
                                    >
                                        <i className="fa fa-search" />
                                        Search
                                    </button>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================
                AGENT CONTENT
            ========================================= */}
            <section className="px-4 py-12 sm:px-6 sm:py-16 md:px-10">

                <div className="mx-auto max-w-7xl">

                    {/* SECTION TITLE */}
                    <div className="mb-8 sm:mb-10">

                        <h2
                            className="
                                roboto-condensed
                                text-4xl
                                font-black
                                leading-none
                                bg-gradient-to-r
                                from-white
                                to-gray-500
                                bg-clip-text
                                text-transparent
                                sm:text-5xl
                                md:text-7xl
                            "
                        >
                            Our Property Agents
                        </h2>

                        <p
                            className="
                                playwrite-nz
                                mt-3
                                max-w-2xl
                                text-base
                                text-gray-400
                                sm:text-xl
                            "
                        >
                            Find an agent who can help you buy, sell or rent
                            your next property.
                        </p>

                    </div>


                    {/* =====================================
                        AGENT GRID
                    ====================================== */}

                    {filteredAgents.length > 0 ? (

                        <div
                            className="
                                grid
                                grid-cols-1
                                gap-5
                                sm:grid-cols-2
                                sm:gap-6
                                lg:grid-cols-3
                                xl:grid-cols-4
                            "
                        >

                            {filteredAgents.map((agent) => (

                                <div
                                    key={agent.id}
                                    className="
                                        group
                                        min-w-0
                                        overflow-hidden
                                        rounded-2xl
                                        border
                                        border-white/10
                                        bg-white/5
                                        transition
                                        duration-300
                                        hover:border-green-500/30
                                        hover:bg-white/10
                                    "
                                >

                                    {/* IMAGE */}
                                    <div className="relative overflow-hidden">

                                        <img
                                            src={agent.image}
                                            alt={agent.name}
                                            loading="lazy"
                                            className="
                                                h-[300px]
                                                w-full
                                                object-cover
                                                brightness-[0.7]
                                                transition
                                                duration-500
                                                group-hover:scale-105
                                                group-hover:brightness-[0.9]
                                                sm:h-[280px]
                                            "
                                        />

                                        {/* Overlay */}
                                        <div
                                            className="
                                                absolute
                                                inset-0
                                                bg-gradient-to-t
                                                from-black
                                                via-transparent
                                                to-transparent
                                            "
                                        />


                                        {/* Verified */}
                                        {agent.verified && (
                                            <div
                                                className="
                                                    absolute
                                                    left-3
                                                    top-3
                                                    flex
                                                    items-center
                                                    gap-2
                                                    rounded-full
                                                    border
                                                    border-white/10
                                                    bg-black/50
                                                    px-3
                                                    py-2
                                                    text-xs
                                                    backdrop-blur-md
                                                    sm:left-4
                                                    sm:top-4
                                                    sm:text-sm
                                                "
                                            >
                                                <i className="fa fa-check-circle text-green-400" />
                                                <span>Verified</span>
                                            </div>
                                        )}


                                        {/* Rating */}
                                        <div
                                            className="
                                                absolute
                                                right-3
                                                top-3
                                                flex
                                                items-center
                                                gap-1
                                                rounded-full
                                                border
                                                border-white/10
                                                bg-black/50
                                                px-3
                                                py-2
                                                text-sm
                                                backdrop-blur-md
                                                sm:right-4
                                                sm:top-4
                                            "
                                        >
                                            <i className="fa fa-star text-green-400" />
                                            <span>{agent.rating}</span>
                                        </div>

                                    </div>


                                    {/* DETAILS */}
                                    <div className="p-4 sm:p-5">

                                        <h3
                                            className="
                                                bebas-neue
                                                truncate
                                                text-2xl
                                                sm:text-3xl
                                            "
                                            title={agent.name}
                                        >
                                            {agent.name}
                                        </h3>


                                        <p
                                            className="
                                                roboto-condensed-light
                                                mt-1
                                                truncate
                                                text-base
                                                text-green-400
                                                sm:text-lg
                                            "
                                            title={agent.role}
                                        >
                                            {agent.role}
                                        </p>


                                        {/* LOCATION */}
                                        <div className="mt-4 flex items-start gap-2">

                                            <i className="fa fa-map-marker mt-1 shrink-0 text-gray-400" />

                                            <span
                                                className="
                                                    roboto-condensed-light
                                                    line-clamp-2
                                                    text-sm
                                                    text-gray-400
                                                "
                                                title={agent.location}
                                            >
                                                {agent.location}
                                            </span>

                                        </div>


                                        {/* STATS */}
                                        <div
                                            className="
                                                mt-5
                                                grid
                                                grid-cols-2
                                                gap-3
                                            "
                                        >

                                            <div
                                                className="
                                                    rounded-xl
                                                    border
                                                    border-white/10
                                                    bg-black/30
                                                    p-3
                                                "
                                            >
                                                <p className="text-xs text-gray-500 sm:text-sm">
                                                    Properties
                                                </p>

                                                <p className="text-lg font-bold text-white sm:text-xl">
                                                    {agent.properties}
                                                </p>
                                            </div>


                                            <div
                                                className="
                                                    rounded-xl
                                                    border
                                                    border-white/10
                                                    bg-black/30
                                                    p-3
                                                "
                                            >
                                                <p className="text-xs text-gray-500 sm:text-sm">
                                                    Experience
                                                </p>

                                                <p className="text-lg font-bold text-white sm:text-xl">
                                                    {agent.experience}
                                                </p>
                                            </div>

                                        </div>


                                        {/* BUTTONS */}
                                        <div className="mt-5 flex gap-3">

                                            <Link
                                                to={`/agent/${agent.id}`}
                                                className="
                                                    flex
                                                    min-h-11
                                                    min-w-0
                                                    flex-1
                                                    items-center
                                                    justify-center
                                                    rounded-full
                                                    border
                                                    border-white/20
                                                    px-3
                                                    text-sm
                                                    text-white
                                                    transition
                                                    hover:bg-white/10
                                                    sm:text-base
                                                "
                                            >
                                                View Profile
                                            </Link>


                                            <a
                                                href={`tel:${agent.phone}`}
                                                aria-label={`Call ${agent.name}`}
                                                className="
                                                    flex
                                                    h-11
                                                    w-11
                                                    shrink-0
                                                    items-center
                                                    justify-center
                                                    rounded-full
                                                    bg-green-500
                                                    transition
                                                    hover:bg-green-400
                                                "
                                            >
                                                <i className="fa fa-phone" />
                                            </a>

                                        </div>

                                    </div>

                                </div>

                            ))}

                        </div>

                    ) : (

                        /* NO AGENTS */
                        <div
                            className="
                                rounded-2xl
                                border
                                border-white/10
                                bg-white/5
                                px-4
                                py-16
                                text-center
                                sm:py-20
                            "
                        >

                            <i
                                className="
                                    fa
                                    fa-search
                                    text-4xl
                                    text-gray-600
                                    sm:text-5xl
                                "
                            />

                            <h3
                                className="
                                    bebas-neue
                                    mt-5
                                    text-3xl
                                    sm:text-4xl
                                "
                            >
                                No Agent Found
                            </h3>

                            <p className="mt-2 text-sm text-gray-500 sm:text-base">
                                Try searching for another agent or location.
                            </p>

                            {search && (
                                <button
                                    type="button"
                                    onClick={() => setSearch("")}
                                    className="
                                        mt-5
                                        rounded-full
                                        border
                                        border-white/20
                                        px-5
                                        py-2.5
                                        text-sm
                                        text-gray-300
                                        transition
                                        hover:border-green-400
                                        hover:text-green-400
                                    "
                                >
                                    Clear Search
                                </button>
                            )}

                        </div>

                    )}

                </div>

            </section>


            {/* =========================================
                BECOME AN AGENT
            ========================================= */}
            <section className="px-4 pb-12 sm:px-6 sm:pb-20 md:px-10">

                <div
                    className="
                        relative
                        mx-auto
                        max-w-7xl
                        overflow-hidden
                        rounded-2xl
                        border
                        border-white/10
                        p-6
                        sm:p-8
                        md:p-12
                    "
                >

                    <img
                        src="/images/4.jpeg"
                        alt="Become an agent"
                        loading="lazy"
                        className="
                            absolute
                            inset-0
                            h-full
                            w-full
                            object-cover
                            brightness-[0.3]
                        "
                    />

                    <div className="absolute inset-0 bg-black/70" />


                    <div
                        className="
                            relative
                            z-10
                            flex
                            flex-col
                            gap-7
                            md:flex-row
                            md:items-center
                            md:justify-between
                            md:gap-8
                        "
                    >

                        <div className="min-w-0">

                            <div className="mb-4 flex items-center gap-3">

                                <i
                                    className="
                                        fa
                                        fa-user-plus
                                        text-2xl
                                        text-green-400
                                        sm:text-3xl
                                    "
                                />

                                <span className="text-sm text-gray-400 sm:text-base">
                                    For Property Professionals
                                </span>

                            </div>


                            <h2
                                className="
                                    bebas-neue
                                    text-4xl
                                    leading-none
                                    sm:text-5xl
                                    md:text-6xl
                                "
                            >
                                Want to become an agent?
                            </h2>


                            <p
                                className="
                                    mt-3
                                    max-w-2xl
                                    text-base
                                    leading-7
                                    text-gray-400
                                    sm:text-lg
                                "
                            >
                                Join our network of trusted property agents
                                and connect with buyers and renters looking
                                for their next home.
                            </p>

                        </div>


                        <Link
                            to="/getstarted"
                            className="
                                flex
                                min-h-12
                                w-full
                                shrink-0
                                items-center
                                justify-center
                                gap-3
                                rounded-full
                                bg-green-500
                                px-7
                                py-3
                                text-base
                                text-white
                                transition
                                hover:bg-green-400
                                sm:text-lg
                                md:w-auto
                            "
                        >
                            Become an Agent
                            <i className="fa fa-arrow-right" />
                        </Link>

                    </div>

                </div>

            </section>

        </div>
    );
}

export default Agent;