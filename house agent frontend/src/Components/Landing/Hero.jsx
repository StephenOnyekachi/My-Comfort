
import { useState } from "react";
import { Link } from "react-router-dom";
import housesData from "../housesData";

function Hero() {
    const [houses, setHouses] = useState(housesData);

    const toggleLike = (id) => {
        setHouses((currentHouses) =>
            currentHouses.map((house) =>
                house.id === id
                    ? { ...house, like: !house.like }
                    : house
            )
        );
    };

    const showcaseHouses = houses.filter(
        (house) => house.showcase === true
    );

    return (
        <div className="min-h-screen bg-black text-white">

            {/* =====================================================
                HERO
            ====================================================== */}

            <section className="relative min-h-[92vh] sm:min-h-screen overflow-hidden">

                <img
                    src="/images/1.jpeg"
                    alt="Beautiful property"
                    className="
                        absolute
                        inset-0
                        w-full
                        h-full
                        object-cover
                        brightness-[0.4]
                    "
                />

                <div className="absolute inset-0 bg-black/65"></div>

                {/* EXTRA GRADIENT FOR TEXT READABILITY */}

                <div
                    className="
                        absolute
                        inset-0
                        bg-gradient-to-r
                        from-black/80
                        via-black/50
                        to-black/20
                    "
                ></div>


                <div
                    className="
                        relative
                        z-10
                        min-h-[92vh]
                        sm:min-h-screen
                        max-w-7xl
                        mx-auto
                        px-4
                        sm:px-6
                        lg:px-8
                        pt-28
                        sm:pt-32
                        pb-16
                        flex
                        items-center
                    "
                >

                    <div className="max-w-4xl">

                        {/* EYEBROW */}

                        <div
                            className="
                                inline-flex
                                items-center
                                gap-2
                                rounded-full
                                border
                                border-green-500/20
                                bg-green-500/10
                                backdrop-blur-md
                                px-4
                                py-2
                                mb-6
                            "
                        >

                            <i className="fa fa-home text-green-400"></i>

                            <span className="text-sm sm:text-base text-gray-200">
                                ConnectFlow Homes
                            </span>

                        </div>


                        {/* MAIN HEADING */}

                        <h1
                            className="
                                bebas-neue
                                text-5xl
                                sm:text-6xl
                                md:text-7xl
                                lg:text-8xl
                                leading-[0.95]
                                font-black
                                bg-gradient-to-r
                                from-white
                                to-gray-400
                                bg-clip-text
                                text-transparent
                            "
                        >
                            Find A Home That Fits Your Life.
                        </h1>


                        <h2
                            className="
                                roboto-condensed
                                text-3xl
                                sm:text-4xl
                                md:text-5xl
                                lg:text-6xl
                                leading-tight
                                font-black
                                mt-4
                                bg-gradient-to-r
                                from-green-400
                                to-gray-400
                                bg-clip-text
                                text-transparent
                            "
                        >
                            Buy, Sell, or Rent With Ease.
                        </h2>


                        {/* DESCRIPTION */}

                        <p
                            className="
                                playwrite-nz
                                text-gray-300
                                text-base
                                sm:text-lg
                                md:text-xl
                                lg:text-2xl
                                leading-relaxed
                                mt-6
                                max-w-3xl
                            "
                        >
                            Tell our AI assistant what you're looking for.
                            We'll help you discover properties that match
                            your needs, budget and location.
                        </p>


                        {/* CTA BUTTONS */}

                        <div
                            className="
                                flex
                                flex-col
                                sm:flex-row
                                sm:flex-wrap
                                gap-3
                                sm:gap-4
                                mt-8
                            "
                        >

                            <Link
                                to="/properties"
                                className="
                                    inline-flex
                                    items-center
                                    justify-center
                                    gap-2
                                    rounded-full
                                    bg-white
                                    px-7
                                    py-3.5
                                    text-black
                                    text-base
                                    sm:text-lg
                                    font-semibold
                                    shadow-lg
                                    hover:bg-gray-100
                                    hover:scale-[1.03]
                                    transition
                                "
                            >
                                <i className="fa fa-home text-green-500"></i>
                                Browse Properties
                            </Link>


                            <Link
                                to="/sell"
                                className="
                                    inline-flex
                                    items-center
                                    justify-center
                                    gap-2
                                    rounded-full
                                    bg-green-500
                                    px-7
                                    py-3.5
                                    text-black
                                    text-base
                                    sm:text-lg
                                    font-semibold
                                    shadow-lg
                                    hover:bg-green-400
                                    hover:scale-[1.03]
                                    transition
                                "
                            >
                                <i className="fa fa-upload"></i>
                                Sell Property
                            </Link>


                            <Link
                                to="/rent"
                                className="
                                    inline-flex
                                    items-center
                                    justify-center
                                    gap-2
                                    rounded-full
                                    bg-white/10
                                    border
                                    border-white/20
                                    backdrop-blur-md
                                    px-7
                                    py-3.5
                                    text-white
                                    text-base
                                    sm:text-lg
                                    font-medium
                                    hover:bg-white/20
                                    hover:border-white/30
                                    hover:scale-[1.03]
                                    transition
                                "
                            >
                                <i className="fa fa-key text-green-400"></i>
                                Find Rentals
                            </Link>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                MAIN CONTENT
            ====================================================== */}

            <main className="bg-black">

                <div
                    className="
                        max-w-7xl
                        mx-auto
                        px-4
                        sm:px-6
                        lg:px-8
                    "
                >

                    {/* =================================================
                        FEATURED LISTINGS
                    ================================================== */}

                    <section className="py-14 sm:py-16 md:py-20 slidetop">

                        <SectionHeading
                            title="Featured Listings"
                            description="ConnectFlow Homes connects you to verified houses in Anambra and across Nigeria. No agent wahala."
                        />


                        <div className="mb-8">

                            <Link
                                to="/properties"
                                className="
                                    inline-flex
                                    items-center
                                    gap-3
                                    rounded-full
                                    border
                                    border-white/10
                                    bg-white/5
                                    px-5
                                    py-3
                                    text-sm
                                    sm:text-base
                                    text-white
                                    hover:border-green-500/50
                                    hover:bg-green-500/10
                                    transition
                                "
                            >
                                <span>
                                    View All Properties
                                </span>

                                <i className="fa fa-arrow-right text-green-400"></i>

                            </Link>

                        </div>


                        <div
                            className="
                                grid
                                grid-cols-1
                                sm:grid-cols-2
                                lg:grid-cols-4
                                gap-4
                                sm:gap-5
                                zoom-in
                            "
                        >

                            {showcaseHouses.map((house) => (

                                <PropertyCard
                                    key={house.id}
                                    house={house}
                                    onToggleLike={toggleLike}
                                />

                            ))}

                        </div>

                    </section>


                    {/* =================================================
                        WHAT WE DO
                    ================================================== */}

                    <section className="py-14 sm:py-16 md:py-20 slidetop">

                        <SectionHeading
                            title="What We Do"
                            description="Everything you need to find, sell or rent your next property."
                        />


                        <div
                            className="
                                grid
                                grid-cols-1
                                sm:grid-cols-2
                                lg:grid-cols-4
                                gap-4
                                sm:gap-5
                                zoom-in
                            "
                        >

                            <ServiceCard
                                image="/images/3.jpeg"
                                title="Buy A Home"
                                description="Verified listings, transparent prices and a simpler way to find your next home."
                            />

                            <ServiceCard
                                image="/images/4.jpeg"
                                title="Sell Your Property"
                                description="List your property and connect with serious buyers looking for their next home."
                            />

                            <ServiceCard
                                image="/images/8.jpg"
                                title="Rent A Home"
                                description="Find everything from self-contain apartments to comfortable family homes and luxury duplexes."
                            />

                            <ServiceCard
                                image="/images/11.jpg"
                                title="AI Property Assistant"
                                description="Tell our AI what you need and get help discovering properties that match your preferences."
                            />

                        </div>

                    </section>


                    {/* =================================================
                        WHY US
                    ================================================== */}

                    <section className="py-14 sm:py-16 md:py-20 slidetop">

                        <SectionHeading
                            title="Why Us"
                            description="We make finding your next property easier, safer and more transparent."
                        />


                        <div
                            className="
                                grid
                                grid-cols-1
                                sm:grid-cols-2
                                lg:grid-cols-5
                                gap-4
                                sm:gap-5
                                zoom-in
                            "
                        >

                            <WhyCard
                                icon="fa-check-circle"
                                title="Verified Properties"
                                description="Browse properties that have been properly verified."
                            />

                            <WhyCard
                                icon="fa-money"
                                title="Clear Pricing"
                                description="See clear property pricing without unnecessary surprises."
                            />

                            <WhyCard
                                icon="fa-bolt"
                                title="Fast Support"
                                description="Get quick assistance when you need help."
                            />

                            <WhyCard
                                icon="fa-map-marker"
                                title="Local Experts"
                                description="Connect with people who understand the local property market."
                            />

                            <WhyCard
                                icon="fa-terminal"
                                title="AI Support"
                                description="Let AI help you discover properties based on your needs."
                            />

                        </div>

                    </section>


                    {/* =================================================
                        AI AGENT
                    ================================================== */}

                    <section className="py-14 sm:py-16 md:py-20 slidetop">

                        <SectionHeading
                            title="Meet Your AI Agent"
                            description="Your personal property assistant is ready to help you find the right home."
                        />


                        <div
                            className="
                                flex
                                flex-col
                                lg:flex-row
                                items-center
                                justify-between
                                gap-7
                                rounded-2xl
                                bg-white/5
                                border
                                border-white/10
                                p-6
                                sm:p-8
                                md:p-10
                                zoom-in
                            "
                        >

                            <div
                                className="
                                    flex
                                    flex-col
                                    sm:flex-row
                                    items-center
                                    gap-5
                                    text-center
                                    sm:text-left
                                "
                            >

                                <div
                                    className="
                                        w-16
                                        h-16
                                        shrink-0
                                        rounded-2xl
                                        bg-green-500/10
                                        border
                                        border-green-500/20
                                        flex
                                        items-center
                                        justify-center
                                    "
                                >
                                    <i className="fa fa-user text-3xl text-green-400"></i>
                                </div>


                                <div>

                                    <h2
                                        className="
                                            bebas-neue
                                            text-4xl
                                            md:text-5xl
                                            leading-none
                                            bg-gradient-to-r
                                            from-white
                                            to-gray-500
                                            bg-clip-text
                                            text-transparent
                                        "
                                    >
                                        AI Property Assistant
                                    </h2>

                                    <p
                                        className="
                                            text-gray-400
                                            text-base
                                            sm:text-lg
                                            mt-2
                                            max-w-2xl
                                        "
                                    >
                                        Tell our AI about your budget,
                                        location and preferred property.
                                    </p>

                                </div>

                            </div>


                            <Link
                                to="/aiagent"
                                className="
                                    inline-flex
                                    items-center
                                    justify-center
                                    gap-3
                                    w-full
                                    lg:w-auto
                                    shrink-0
                                    rounded-full
                                    bg-green-500
                                    px-6
                                    py-3
                                    text-black
                                    text-base
                                    sm:text-lg
                                    font-semibold
                                    shadow-lg
                                    hover:bg-green-400
                                    hover:scale-[1.03]
                                    transition
                                "
                            >
                                <i className="fa fa-comments"></i>
                                Talk To AI Agent
                                <i className="fa fa-arrow-right"></i>
                            </Link>

                        </div>

                    </section>


                    {/* =================================================
                        TESTIMONIALS
                    ================================================== */}

                    <section className="py-14 sm:py-16 md:py-20 slidetop">

                        <SectionHeading
                            title="What Our Clients Say"
                            description="Hear from people who have used our property services."
                        />


                        <div
                            className="
                                grid
                                grid-cols-1
                                md:grid-cols-3
                                gap-4
                                sm:gap-5
                                zoom-in
                            "
                        >

                            <Testimonial
                                image="/images/c1.png"
                                name="Client Name"
                                date="10/08/2026"
                            />

                            <Testimonial
                                image="/images/c2.png"
                                name="Client Name"
                                date="10/08/2026"
                            />

                            <Testimonial
                                image="/images/c3.png"
                                name="Client Name"
                                date="10/08/2026"
                            />

                        </div>

                    </section>


                    {/* =================================================
                        CTA
                    ================================================== */}

                    <section className="py-14 sm:py-16 md:py-20 zoom-in">

                        <div
                            className="
                                relative
                                overflow-hidden
                                rounded-2xl
                                border
                                border-white/10
                                min-h-[400px]
                                flex
                                items-center
                            "
                        >

                            <img
                                src="/images/1.jpeg"
                                alt="Find your dream property"
                                loading="lazy"
                                className="
                                    absolute
                                    inset-0
                                    w-full
                                    h-full
                                    object-cover
                                    brightness-[0.4]
                                "
                            />

                            <div className="absolute inset-0 bg-black/70"></div>


                            <div
                                className="
                                    relative
                                    z-10
                                    p-6
                                    sm:p-8
                                    md:p-10
                                    max-w-3xl
                                    slidetop
                                "
                            >

                                <div
                                    className="
                                        flex
                                        flex-col
                                        sm:flex-row
                                        items-start
                                        gap-5
                                    "
                                >

                                    <div
                                        className="
                                            w-14
                                            h-14
                                            shrink-0
                                            rounded-2xl
                                            bg-green-500/10
                                            border
                                            border-green-500/20
                                            flex
                                            items-center
                                            justify-center
                                        "
                                    >
                                        <i className="fa fa-map-signs text-2xl text-green-400"></i>
                                    </div>


                                    <div>

                                        <h2
                                            className="
                                                bebas-neue
                                                text-4xl
                                                sm:text-5xl
                                                md:text-6xl
                                                leading-none
                                                bg-gradient-to-r
                                                from-white
                                                to-gray-500
                                                bg-clip-text
                                                text-transparent
                                            "
                                        >
                                            Ready To Find Your Dream Property?
                                        </h2>


                                        <p
                                            className="
                                                roboto-condensed-light
                                                text-gray-300
                                                text-base
                                                sm:text-lg
                                                md:text-xl
                                                mt-4
                                                leading-relaxed
                                            "
                                        >
                                            Explore verified properties across
                                            Nigeria with ConnectFlow Homes.
                                        </p>


                                        <div className="mt-6">

                                            <Link
                                                to="/getstarted"
                                                className="
                                                    inline-flex
                                                    items-center
                                                    justify-center
                                                    gap-3
                                                    rounded-full
                                                    bg-green-500
                                                    px-7
                                                    py-3.5
                                                    text-black
                                                    font-semibold
                                                    shadow-lg
                                                    hover:bg-green-400
                                                    hover:scale-[1.03]
                                                    transition
                                                "
                                            >
                                                Get Started
                                                <i className="fa fa-arrow-right"></i>
                                            </Link>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </section>

                </div>

            </main>

        </div>
    );
}


/* ============================================================
   SECTION HEADING
============================================================ */

function SectionHeading({ title, description }) {
    return (
        <div className="mb-8 sm:mb-10">

            <h2
                className="
                    roboto-condensed
                    text-4xl
                    sm:text-5xl
                    md:text-6xl
                    lg:text-7xl
                    capitalize
                    font-black
                    leading-none
                    bg-gradient-to-r
                    from-white
                    to-gray-500
                    bg-clip-text
                    text-transparent
                "
            >
                {title}
            </h2>

            <p
                className="
                    playwrite-nz
                    text-gray-300
                    text-base
                    sm:text-lg
                    md:text-xl
                    mt-4
                    max-w-4xl
                    leading-relaxed
                "
            >
                {description}
            </p>

        </div>
    );
}


/* ============================================================
   PROPERTY CARD
============================================================ */

function PropertyCard({ house, onToggleLike }) {
    return (
        <article
            className="
                flex
                flex-col
                w-full
                overflow-hidden
                rounded-2xl
                bg-white/5
                border
                border-white/10
                shadow-xl
                hover:border-green-500/30
                hover:-translate-y-1
                transition
                duration-300
            "
        >

            {/* IMAGE */}

            <div className="relative overflow-hidden">

                <img
                    src={house.image}
                    alt={house.title}
                    loading="lazy"
                    className="
                        w-full
                        aspect-[4/3]
                        object-cover
                        brightness-75
                        transition
                        duration-500
                        hover:scale-105
                    "
                />

                <div
                    className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/70
                        via-transparent
                        to-transparent
                    "
                ></div>


                {/* STATUS */}

                <div
                    className="
                        absolute
                        top-3
                        left-3
                        inline-flex
                        items-center
                        gap-2
                        rounded-full
                        bg-black/50
                        border
                        border-white/20
                        backdrop-blur-md
                        px-3
                        py-2
                    "
                >

                    <i
                        className={`
                            fa
                            ${
                                house.availability
                                    ? "fa-check-circle text-green-400"
                                    : "fa-times-circle text-red-400"
                            }
                        `}
                    ></i>

                    <span className="text-white text-xs sm:text-sm capitalize">
                        {house.status}
                    </span>

                </div>


                {/* LIKE */}

                <button
                    type="button"
                    onClick={() => onToggleLike(house.id)}
                    aria-label={
                        house.like
                            ? "Remove property from favorites"
                            : "Save property to favorites"
                    }
                    className="
                        absolute
                        top-3
                        right-3
                        w-10
                        h-10
                        flex
                        items-center
                        justify-center
                        rounded-full
                        bg-black/50
                        border
                        border-white/20
                        backdrop-blur-md
                        hover:bg-green-500/20
                        hover:scale-110
                        transition
                    "
                >

                    <i
                        className={`
                            fa
                            fa-heart
                            ${
                                house.like
                                    ? "text-green-400"
                                    : "text-white"
                            }
                        `}
                    ></i>

                </button>

            </div>


            {/* CONTENT */}

            <div className="flex flex-col flex-1 p-4">

                <h3
                    className="
                        roboto-condensed-bold
                        text-xl
                        sm:text-2xl
                        text-white
                        line-clamp-1
                    "
                >
                    {house.title}
                </h3>


                {/* LOCATION */}

                <div className="flex items-center mt-2 min-w-0">

                    <i className="fa fa-map-marker text-green-400 shrink-0"></i>

                    <p className="text-gray-400 ml-2 text-sm line-clamp-1">
                        {house.location}
                    </p>

                </div>


                {/* PRICE */}

                <div className="flex items-center mt-4">

                    <span className="text-green-500 font-semibold">
                        ₦
                    </span>

                    <h4
                        className="
                            bebas-neue
                            text-4xl
                            text-green-400
                            ml-2
                        "
                    >
                        {house.price}
                    </h4>

                </div>


                {/* FEATURES */}

                <div
                    className="
                        flex
                        flex-wrap
                        items-center
                        gap-x-4
                        gap-y-2
                        mt-4
                        text-gray-300
                        text-sm
                    "
                >

                    <div className="flex items-center gap-2">
                        <i className="fa fa-bed text-green-400"></i>
                        <span>{house.beds}</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <i className="fa fa-bath text-green-400"></i>
                        <span>{house.baths}</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <i className="fa fa-expand text-green-400"></i>
                        <span>{house.size}</span>
                    </div>

                </div>


                {/* DETAILS */}

                <div className="mt-auto pt-5">

                    <Link
                        to={`/property/${house.id}`}
                        className="
                            w-full
                            inline-flex
                            items-center
                            justify-center
                            gap-2
                            rounded-full
                            border
                            border-white/10
                            px-5
                            py-3
                            text-sm
                            sm:text-base
                            text-gray-300
                            hover:text-white
                            hover:border-green-500
                            hover:bg-green-500/10
                            transition
                        "
                    >
                        View Details
                        <i className="fa fa-arrow-right text-green-400"></i>
                    </Link>

                </div>

            </div>

        </article>
    );
}


/* ============================================================
   SERVICE CARD
============================================================ */

function ServiceCard({ image, title, description }) {
    return (
        <article
            className="
                overflow-hidden
                rounded-2xl
                bg-white/5
                border
                border-white/10
                shadow-xl
                hover:-translate-y-1
                hover:border-green-500/30
                transition
                duration-300
            "
        >

            <div className="overflow-hidden">

                <img
                    src={image}
                    alt={title}
                    loading="lazy"
                    className="
                        w-full
                        h-48
                        sm:h-52
                        object-cover
                        brightness-75
                        transition
                        duration-500
                        hover:scale-105
                    "
                />

            </div>


            <div className="p-5">

                <h3
                    className="
                        bebas-neue
                        text-3xl
                        sm:text-4xl
                        capitalize
                        leading-none
                        bg-gradient-to-r
                        from-white
                        to-gray-500
                        bg-clip-text
                        text-transparent
                    "
                >
                    {title}
                </h3>


                <p
                    className="
                        roboto-condensed-light
                        text-gray-400
                        text-base
                        sm:text-lg
                        mt-3
                        leading-relaxed
                    "
                >
                    {description}
                </p>

            </div>

        </article>
    );
}


/* ============================================================
   WHY CARD
============================================================ */

function WhyCard({ icon, title, description }) {
    return (
        <article
            className="
                flex
                flex-col
                items-center
                text-center
                rounded-2xl
                bg-white/5
                border
                border-white/10
                p-5
                hover:border-green-500/30
                hover:-translate-y-1
                transition
                duration-300
            "
        >

            <div
                className="
                    w-14
                    h-14
                    rounded-2xl
                    bg-green-500/10
                    border
                    border-green-500/20
                    flex
                    items-center
                    justify-center
                    mb-5
                "
            >

                <i
                    className={`
                        fa
                        ${icon}
                        text-2xl
                        text-green-400
                    `}
                ></i>

            </div>


            <h3
                className="
                    bebas-neue
                    text-3xl
                    capitalize
                    leading-none
                    bg-gradient-to-r
                    from-white
                    to-gray-500
                    bg-clip-text
                    text-transparent
                "
            >
                {title}
            </h3>


            <p
                className="
                    roboto-condensed-light
                    text-gray-400
                    text-base
                    sm:text-lg
                    mt-3
                    leading-relaxed
                "
            >
                {description}
            </p>

        </article>
    );
}


/* ============================================================
   TESTIMONIAL
============================================================ */

function Testimonial({ image, name, date }) {
    return (
        <article
            className="
                rounded-2xl
                border
                border-white/10
                bg-white/5
                p-5
                shadow-xl
            "
        >

            <p
                className="
                    playwrite-nz-light
                    text-gray-400
                    text-sm
                    sm:text-base
                    leading-relaxed
                "
            >
                Our happy clients say. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Necessitatibus,
                cupiditate.
            </p>


            <div className="flex items-center mt-6">

                <img
                    src={image}
                    alt={name}
                    loading="lazy"
                    className="
                        w-14
                        h-14
                        sm:w-16
                        sm:h-16
                        rounded-full
                        object-cover
                        brightness-75
                        border
                        border-white/10
                    "
                />


                <div className="ml-4 min-w-0">

                    <h4
                        className="
                            roboto-condensed-bold
                            text-base
                            sm:text-lg
                            text-green-300
                        "
                    >
                        {name}
                    </h4>

                    <p className="text-gray-500 text-sm mt-1">
                        {date}
                    </p>

                </div>

            </div>

        </article>
    );
}

export default Hero;

