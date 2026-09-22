
import { Link } from "react-router-dom";

function About() {
    return (
        <div className="min-h-screen bg-black text-white">

            {/* =========================================
                HERO
            ========================================== */}
            <section className="relative min-h-[70svh] sm:min-h-[75vh] overflow-hidden">

                {/* BACKGROUND IMAGE */}
                <img
                    src="/images/1.jpeg"
                    alt="Beautiful property"
                    className="
                        absolute
                        inset-0
                        w-full
                        h-full
                        object-cover
                        object-center
                        brightness-[0.35]
                    "
                />

                {/* OVERLAY */}
                <div
                    className="
                        absolute
                        inset-0
                        bg-gradient-to-b
                        from-black/60
                        via-black/50
                        to-black
                    "
                ></div>


                {/* HERO CONTENT */}
                <div
                    className="
                        relative
                        z-10
                        min-h-[70svh]
                        sm:min-h-[75vh]
                        flex
                        items-center
                        px-4
                        sm:px-6
                        lg:px-10
                        pt-24
                        pb-12
                    "
                >

                    <div className="max-w-7xl mx-auto w-full">

                        <div className="max-w-4xl">

                            {/* SMALL LABEL */}
                            <div
                                className="
                                    inline-flex
                                    items-center
                                    gap-2
                                    px-3
                                    sm:px-4
                                    py-2
                                    rounded-full
                                    bg-green-500/10
                                    border
                                    border-green-500/20
                                    backdrop-blur-md
                                    mb-5
                                    sm:mb-6
                                "
                            >

                                <i className="fa fa-home text-green-400"></i>

                                <span className="text-gray-300 text-sm sm:text-base">
                                    About My Comfort
                                </span>

                            </div>


                            {/* TITLE */}
                            <h1
                                className="
                                    bebas-neue
                                    text-5xl
                                    sm:text-6xl
                                    md:text-7xl
                                    lg:text-8xl
                                    font-black
                                    capitalize
                                    leading-[0.9]
                                    bg-gradient-to-r
                                    from-white
                                    to-gray-500
                                    bg-clip-text
                                    text-transparent
                                "
                            >
                                Finding a home
                                <br />

                                <span className="text-green-400">
                                    should be easier.
                                </span>
                            </h1>


                            {/* DESCRIPTION */}
                            <p
                                className="
                                    playwrite-nz
                                    text-gray-300
                                    text-base
                                    sm:text-lg
                                    md:text-xl
                                    lg:text-2xl
                                    leading-7
                                    sm:leading-8
                                    mt-5
                                    sm:mt-6
                                    max-w-3xl
                                "
                            >
                                My Comfort connects people with verified
                                properties across Anambra and Nigeria,
                                making it easier to buy, sell, and rent
                                without unnecessary stress.
                            </p>


                            {/* BUTTONS */}
                            <div
                                className="
                                    flex
                                    flex-col
                                    sm:flex-row
                                    items-stretch
                                    sm:items-center
                                    gap-3
                                    sm:gap-4
                                    mt-7
                                    sm:mt-8
                                "
                            >

                                <Link
                                    to="/properties"
                                    className="
                                        inline-flex
                                        items-center
                                        justify-center
                                        gap-2
                                        w-full
                                        sm:w-auto
                                        min-h-12
                                        px-6
                                        py-3
                                        rounded-full
                                        bg-green-500
                                        text-white
                                        text-base
                                        sm:text-lg
                                        shadow-lg
                                        hover:bg-green-400
                                        hover:scale-105
                                        active:scale-[0.98]
                                        transition
                                    "
                                >
                                    Explore Properties

                                    <i className="fa fa-arrow-right"></i>

                                </Link>


                                <Link
                                    to="/getstarted"
                                    className="
                                        inline-flex
                                        items-center
                                        justify-center
                                        gap-2
                                        w-full
                                        sm:w-auto
                                        min-h-12
                                        px-6
                                        py-3
                                        rounded-full
                                        bg-white/10
                                        border
                                        border-white/20
                                        backdrop-blur-md
                                        text-white
                                        text-base
                                        sm:text-lg
                                        hover:bg-white/20
                                        hover:scale-105
                                        active:scale-[0.98]
                                        transition
                                    "
                                >
                                    Get Started
                                </Link>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================
                WHO WE ARE
            ========================================== */}
            <section className="px-4 sm:px-6 lg:px-10 py-16 sm:py-20">

                <div className="max-w-7xl mx-auto">

                    <div
                        className="
                            grid
                            grid-cols-1
                            lg:grid-cols-2
                            gap-10
                            lg:gap-12
                            items-center
                        "
                    >

                        {/* IMAGE */}
                        <div className="relative zoom-in">

                            <img
                                src="/images/3.jpeg"
                                alt="My Comfort property"
                                loading="lazy"
                                className="
                                    w-full
                                    h-[280px]
                                    sm:h-[380px]
                                    md:h-[480px]
                                    lg:h-[520px]
                                    object-cover
                                    rounded-2xl
                                    brightness-75
                                    border
                                    border-white/10
                                    shadow-2xl
                                "
                            />

                            <div
                                className="
                                    absolute
                                    -bottom-4
                                    right-3
                                    sm:-right-3
                                    md:-right-5
                                    bg-green-500
                                    w-14
                                    h-14
                                    sm:w-16
                                    sm:h-16
                                    rounded-xl
                                    shadow-xl
                                    flex
                                    items-center
                                    justify-center
                                "
                            >

                                <i className="fa fa-home text-2xl sm:text-3xl"></i>

                            </div>

                        </div>


                        {/* CONTENT */}
                        <div>

                            <p
                                className="
                                    text-green-400
                                    uppercase
                                    tracking-[3px]
                                    text-xs
                                    sm:text-sm
                                    font-bold
                                    mb-3
                                    slidetop
                                "
                            >
                                Who We Are
                            </p>


                            <h2
                                className="
                                    roboto-condensed
                                    text-4xl
                                    sm:text-5xl
                                    md:text-6xl
                                    font-black
                                    capitalize
                                    leading-tight
                                    bg-gradient-to-r
                                    from-white
                                    to-gray-500
                                    bg-clip-text
                                    text-transparent
                                    slidetop
                                "
                            >
                                Your trusted property partner
                            </h2>


                            <p
                                className="
                                    text-gray-400
                                    text-base
                                    sm:text-lg
                                    leading-7
                                    sm:leading-8
                                    mt-5
                                    sm:mt-6
                                    slidetop
                                "
                            >
                                My Comfort is designed to make the process
                                of finding and managing property simpler.
                                Whether you are looking for a place to live,
                                selling your property, or searching for a
                                rental, our platform brings property
                                information together in one place.
                            </p>


                            <p
                                className="
                                    text-gray-400
                                    text-base
                                    sm:text-lg
                                    leading-7
                                    sm:leading-8
                                    mt-4
                                    slidetop
                                "
                            >
                                We focus on making property discovery
                                straightforward, transparent, and convenient
                                while helping people connect with property
                                owners and agents.
                            </p>


                            {/* MINI STATS */}
                            <div
                                className="
                                    grid
                                    grid-cols-1
                                    sm:grid-cols-2
                                    gap-4
                                    mt-7
                                    sm:mt-8
                                "
                            >

                                <div
                                    className="
                                        p-5
                                        rounded-xl
                                        bg-white/5
                                        border
                                        border-white/10
                                        zoom-in
                                    "
                                >

                                    <i className="fa fa-building text-green-400 text-2xl"></i>

                                    <h3 className="text-xl sm:text-2xl font-bold mt-2">
                                        Properties
                                    </h3>

                                    <p className="text-gray-500 text-sm sm:text-base">
                                        Available listings
                                    </p>

                                </div>


                                <div
                                    className="
                                        p-5
                                        rounded-xl
                                        bg-white/5
                                        border
                                        border-white/10
                                        zoom-in
                                    "
                                >

                                    <i className="fa fa-users text-green-400 text-2xl"></i>

                                    <h3 className="text-xl sm:text-2xl font-bold mt-2">
                                        Community
                                    </h3>

                                    <p className="text-gray-500 text-sm sm:text-base">
                                        Buyers & sellers
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================
                WHAT WE DO
            ========================================== */}
            <section className="px-4 sm:px-6 lg:px-10 py-16 sm:py-20 bg-white/[0.02]">

                <div className="max-w-7xl mx-auto">

                    <div className="max-w-3xl mb-10 sm:mb-12">

                        <p
                            className="
                                text-green-400
                                uppercase
                                tracking-[3px]
                                text-xs
                                sm:text-sm
                                font-bold
                                slidetop
                            "
                        >
                            What We Do
                        </p>

                        <h2
                            className="
                                roboto-condensed
                                text-4xl
                                sm:text-5xl
                                md:text-6xl
                                lg:text-7xl
                                font-black
                                capitalize
                                mt-2
                                leading-tight
                                bg-gradient-to-r
                                from-white
                                to-gray-500
                                bg-clip-text
                                text-transparent
                                slidetop
                            "
                        >
                            Everything property,
                            <br />
                            in one place.
                        </h2>

                    </div>


                    <div
                        className="
                            grid
                            grid-cols-1
                            sm:grid-cols-2
                            lg:grid-cols-4
                            gap-4
                            sm:gap-5
                        "
                    >

                        {/* BUY */}
                        <ServiceCard
                            icon="fa fa-home"
                            title="Buy"
                            text="Discover properties that match your needs, location, and budget."
                        />

                        {/* SELL */}
                        <ServiceCard
                            icon="fa fa-tag"
                            title="Sell"
                            text="List your property and connect with people searching for their next home."
                        />

                        {/* RENT */}
                        <ServiceCard
                            icon="fa fa-key"
                            title="Rent"
                            text="Find rental homes and apartments that fit your lifestyle."
                        />

                        {/* AI */}
                        <ServiceCard
                            icon="fa fa-comments"
                            title="AI Assistant"
                            text="Tell our AI assistant what you need and get help finding suitable properties."
                        />

                    </div>

                </div>

            </section>


            {/* =========================================
                WHY CHOOSE US
            ========================================== */}
            <section className="px-4 sm:px-6 lg:px-10 py-16 sm:py-20">

                <div className="max-w-7xl mx-auto">

                    <div className="text-center max-w-3xl mx-auto">

                        <p
                            className="
                                text-green-400
                                uppercase
                                tracking-[3px]
                                text-xs
                                sm:text-sm
                                font-bold
                                slidetop
                            "
                        >
                            Why Choose Us
                        </p>

                        <h2
                            className="
                                roboto-condensed
                                text-4xl
                                sm:text-5xl
                                md:text-6xl
                                lg:text-7xl
                                font-black
                                mt-2
                                leading-tight
                                bg-gradient-to-r
                                from-white
                                to-gray-500
                                bg-clip-text
                                text-transparent
                                slidetop
                            "
                        >
                            Property search without
                            <br />
                            unnecessary stress.
                        </h2>

                    </div>


                    <div
                        className="
                            grid
                            grid-cols-1
                            md:grid-cols-2
                            lg:grid-cols-3
                            gap-4
                            sm:gap-5
                            mt-10
                            sm:mt-14
                        "
                    >

                        <WhyCard
                            icon="fa fa-check-circle"
                            title="Verified Listings"
                            text="Discover property listings with clear information to help you make better decisions."
                        />

                        <WhyCard
                            icon="fa fa-money"
                            title="Transparent"
                            text="Get straightforward property information without unnecessary confusion."
                        />

                        <WhyCard
                            icon="fa fa-map-marker"
                            title="Local Focus"
                            text="Start your search with properties and opportunities around your location."
                        />

                        <WhyCard
                            icon="fa fa-bolt"
                            title="Simple Process"
                            text="Search, explore, and connect without unnecessary steps."
                        />

                        <WhyCard
                            icon="fa fa-comments"
                            title="AI Assistance"
                            text="Get conversational help when you don't know exactly what property you need."
                        />

                        <WhyCard
                            icon="fa fa-users"
                            title="Human Connection"
                            text="Connect with property owners and agents when you are ready to take the next step."
                        />

                    </div>

                </div>

            </section>


            {/* =========================================
                MISSION
            ========================================== */}
            <section className="px-4 sm:px-6 lg:px-10 py-16 sm:py-20 bg-white/[0.02]">

                <div className="max-w-7xl mx-auto">

                    <div
                        className="
                            relative
                            overflow-hidden
                            rounded-2xl
                            sm:rounded-3xl
                            border
                            border-white/10
                            zoom-in
                        "
                    >

                        <img
                            src="/images/4.jpeg"
                            alt="My Comfort property"
                            loading="lazy"
                            className="
                                absolute
                                inset-0
                                w-full
                                h-full
                                object-cover
                                brightness-[0.25]
                            "
                        />

                        <div
                            className="
                                absolute
                                inset-0
                                bg-black/60
                            "
                        ></div>


                        <div
                            className="
                                relative
                                z-10
                                px-5
                                sm:px-8
                                md:px-12
                                py-14
                                sm:py-16
                                md:py-24
                                max-w-4xl
                            "
                        >

                            <div
                                className="
                                    flex
                                    items-center
                                    gap-3
                                    mb-5
                                    slidetop
                                "
                            >

                                <i className="fa fa-bullseye text-green-400 text-2xl sm:text-3xl"></i>

                                <span
                                    className="
                                        text-green-400
                                        uppercase
                                        tracking-[2px]
                                        sm:tracking-widest
                                        text-xs
                                        sm:text-sm
                                    "
                                >
                                    Our Mission
                                </span>

                            </div>


                            <h2
                                className="
                                    bebas-neue
                                    text-4xl
                                    sm:text-5xl
                                    md:text-7xl
                                    font-black
                                    leading-tight
                                    slidetop
                                "
                            >
                                Making property
                                <span className="text-green-400">
                                    {" "}accessible to everyone.
                                </span>
                            </h2>


                            <p
                                className="
                                    text-gray-300
                                    text-base
                                    sm:text-lg
                                    md:text-xl
                                    leading-7
                                    sm:leading-8
                                    mt-5
                                    sm:mt-6
                                    slidetop
                                "
                            >
                                Our goal is simple: make it easier for people
                                to discover properties, understand their
                                options, and connect with the right people
                                when they are ready to move.
                            </p>


                            <Link
                                to="/properties"
                                className="
                                    inline-flex
                                    items-center
                                    justify-center
                                    gap-2
                                    w-full
                                    sm:w-auto
                                    min-h-12
                                    mt-7
                                    sm:mt-8
                                    px-6
                                    py-3
                                    rounded-full
                                    bg-green-500
                                    hover:bg-green-400
                                    hover:scale-105
                                    active:scale-[0.98]
                                    transition
                                    slidetop
                                "
                            >
                                Explore Properties

                                <i className="fa fa-arrow-right"></i>

                            </Link>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================
                CTA
            ========================================== */}
            <section className="px-4 sm:px-6 lg:px-10 py-16 sm:py-20">

                <div className="max-w-5xl mx-auto text-center">

                    <i
                        className="
                            fa fa-home
                            text-green-400
                            text-4xl
                            sm:text-5xl
                            zoom-in
                        "
                    ></i>


                    <h2
                        className="
                            bebas-neue
                            text-4xl
                            sm:text-5xl
                            md:text-7xl
                            font-black
                            leading-tight
                            mt-5
                            bg-gradient-to-r
                            from-white
                            to-gray-500
                            bg-clip-text
                            text-transparent
                            zoom-in
                        "
                    >
                        Ready to find your next home?
                    </h2>


                    <p
                        className="
                            text-gray-400
                            text-base
                            sm:text-lg
                            md:text-xl
                            leading-7
                            sm:leading-8
                            mt-4
                            max-w-2xl
                            mx-auto
                            zoom-in
                        "
                    >
                        Explore our property listings or let us help you
                        find a property that matches your needs.
                    </p>


                    <div
                        className="
                            flex
                            flex-col
                            sm:flex-row
                            justify-center
                            items-stretch
                            sm:items-center
                            gap-3
                            sm:gap-4
                            mt-7
                            sm:mt-8
                        "
                    >

                        <Link
                            to="/properties"
                            className="
                                inline-flex
                                items-center
                                justify-center
                                w-full
                                sm:w-auto
                                min-h-12
                                px-7
                                py-3
                                rounded-full
                                bg-green-500
                                text-white
                                text-base
                                sm:text-lg
                                hover:bg-green-400
                                hover:scale-105
                                active:scale-[0.98]
                                transition
                                zoom-in
                            "
                        >
                            View Properties
                        </Link>


                        <Link
                            to="/getstarted"
                            className="
                                inline-flex
                                items-center
                                justify-center
                                w-full
                                sm:w-auto
                                min-h-12
                                px-7
                                py-3
                                rounded-full
                                bg-white/10
                                border
                                border-white/20
                                text-white
                                text-base
                                sm:text-lg
                                hover:bg-white/20
                                hover:scale-105
                                active:scale-[0.98]
                                transition
                                zoom-in
                            "
                        >
                            Get Started
                        </Link>

                    </div>

                </div>

            </section>

        </div>
    );
}


/* =========================================
   SERVICE CARD
========================================== */

function ServiceCard({ icon, title, text }) {
    return (
        <div
            className="
                p-5
                sm:p-6
                rounded-2xl
                bg-white/5
                border
                border-white/10
                hover:border-green-500/40
                hover:-translate-y-2
                transition
                zoom-in
            "
        >

            <i
                className={`
                    ${icon}
                    text-green-400
                    text-4xl
                `}
            ></i>

            <h3
                className="
                    bebas-neue
                    text-3xl
                    mt-5
                "
            >
                {title}
            </h3>

            <p className="text-gray-400 leading-7 mt-2">
                {text}
            </p>

        </div>
    );
}


/* =========================================
   WHY CARD
========================================== */

function WhyCard({ icon, title, text }) {
    return (
        <div
            className="
                flex
                items-start
                gap-4
                p-5
                sm:p-6
                rounded-2xl
                bg-white/5
                border
                border-white/10
                zoom-in
            "
        >

            <i
                className={`
                    ${icon}
                    text-green-400
                    text-2xl
                    sm:text-3xl
                    shrink-0
                `}
            ></i>

            <div>

                <h3 className="text-lg sm:text-xl font-bold">
                    {title}
                </h3>

                <p className="text-gray-400 text-sm sm:text-base mt-2 leading-7">
                    {text}
                </p>

            </div>

        </div>
    );
}


export default About;
