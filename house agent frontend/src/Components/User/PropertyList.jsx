import { useState } from "react";
import { Link } from "react-router-dom";
import housesData from "../housesData";

function PropertyList() {
    const [houses, setHouses] = useState(housesData);

    const [selectedTypes, setSelectedTypes] = useState([]);
    const [selectedStatuses, setSelectedStatuses] = useState([]);

    // Toggle property like
    const toggleLike = (id) => {
        setHouses((currentHouses) =>
            currentHouses.map((house) =>
                house.id === id
                    ? { ...house, like: !house.like }
                    : house
            )
        );
    };

    // Handle property type checkbox
    const handleTypeChange = (type) => {
        if (type === "All type") {
            setSelectedTypes([]);
            return;
        }

        setSelectedTypes((currentTypes) =>
            currentTypes.includes(type)
                ? currentTypes.filter((item) => item !== type)
                : [...currentTypes, type]
        );
    };

    // Handle status checkbox
    const handleStatusChange = (status) => {
        setSelectedStatuses((currentStatuses) =>
            currentStatuses.includes(status)
                ? currentStatuses.filter((item) => item !== status)
                : [...currentStatuses, status]
        );
    };

    // Apply filters
    const handleApplyFilters = (e) => {
        e.preventDefault();

        let filteredHouses = housesData;

        if (selectedTypes.length > 0) {
            filteredHouses = filteredHouses.filter((house) =>
                selectedTypes.some(
                    (type) =>
                        house.type?.toLowerCase() === type.toLowerCase()
                )
            );
        }

        if (selectedStatuses.length > 0) {
            filteredHouses = filteredHouses.filter((house) =>
                selectedStatuses.some(
                    (status) =>
                        house.status?.toLowerCase() === status.toLowerCase()
                )
            );
        }

        setHouses(filteredHouses);
    };

    // Clear all filters
    const clearFilters = () => {
        setSelectedTypes([]);
        setSelectedStatuses([]);
        setHouses(housesData);
    };

    return (
        <div className="min-h-screen bg-black text-white">

            {/* =========================
                PAGE HEADER
            ========================== */}
            <section className="px-4 sm:px-6 lg:px-8 xl:px-10 pt-28 sm:pt-32 pb-10 sm:pb-12">

                <div className="max-w-7xl mx-auto">

                    <div className="max-w-4xl">

                        <p
                            className="
                                text-green-400
                                text-xs
                                sm:text-sm
                                md:text-base
                                uppercase
                                tracking-[3px]
                                sm:tracking-[4px]
                                mb-3
                            "
                        >
                            ConnectFlow Homes
                        </p>

                        <h1
                            className="
                                roboto-condensed
                                text-4xl
                                sm:text-5xl
                                md:text-6xl
                                lg:text-7xl
                                xl:text-8xl
                                capitalize
                                font-black
                                leading-[0.95]
                                bg-gradient-to-r
                                from-white
                                to-gray-500
                                bg-clip-text
                                text-transparent
                            "
                        >
                            Property listings
                        </h1>

                        <p
                            className="
                                playwrite-nz
                                text-gray-400
                                text-base
                                sm:text-lg
                                md:text-xl
                                mt-5
                                max-w-3xl
                                leading-relaxed
                            "
                        >
                            ConnectFlow Homes connects you to verified
                            houses in Anambra and across Nigeria.
                            No agent wahala.
                        </p>

                    </div>

                </div>

            </section>


            {/* =========================
                MAIN CONTENT
            ========================== */}
            <section className="px-4 sm:px-6 lg:px-8 xl:px-10 pb-16 sm:pb-20">

                <div
                    className="
                        max-w-7xl
                        mx-auto
                        grid
                        grid-cols-1
                        md:grid-cols-[240px_1fr]
                        lg:grid-cols-[260px_1fr]
                        xl:grid-cols-[280px_1fr]
                        gap-6
                        lg:gap-8
                        items-start
                    "
                >

                    {/* =========================
                        FILTER SIDEBAR
                    ========================== */}
                    <aside className="md:sticky md:top-24">

                        <div
                            className="
                                bg-white/5
                                border
                                border-white/10
                                rounded-2xl
                                p-4
                                sm:p-5
                                shadow-xl
                                backdrop-blur-md
                            "
                        >

                            {/* FILTER HEADER */}
                            <div className="flex items-center gap-3 mb-6">

                                <div
                                    className="
                                        w-10
                                        h-10
                                        shrink-0
                                        rounded-full
                                        bg-green-500/10
                                        border
                                        border-green-500/20
                                        flex
                                        items-center
                                        justify-center
                                    "
                                >
                                    <i className="fa fa-sliders text-green-400"></i>
                                </div>

                                <div>
                                    <h2 className="text-lg font-semibold">
                                        Filters
                                    </h2>

                                    <p className="text-gray-500 text-sm">
                                        Find your property
                                    </p>
                                </div>

                            </div>


                            <form onSubmit={handleApplyFilters}>

                                {/* PROPERTY TYPE */}
                                <div className="mb-6">

                                    <h3
                                        className="
                                            roboto-condensed-light
                                            text-lg
                                            text-white
                                            mb-3
                                        "
                                    >
                                        Property type
                                    </h3>

                                    <div className="space-y-3">

                                        {[
                                            "All type",
                                            "Houses",
                                            "Apartment",
                                            "Duplex",
                                            "Condo",
                                        ].map((type) => (

                                            <label
                                                key={type}
                                                className="
                                                    flex
                                                    items-center
                                                    gap-3
                                                    cursor-pointer
                                                    group
                                                    min-h-6
                                                "
                                            >

                                                <input
                                                    type="checkbox"
                                                    checked={
                                                        type === "All type"
                                                            ? selectedTypes.length === 0
                                                            : selectedTypes.includes(type)
                                                    }
                                                    onChange={() =>
                                                        handleTypeChange(type)
                                                    }
                                                    className="
                                                        w-4
                                                        h-4
                                                        shrink-0
                                                        accent-green-500
                                                        cursor-pointer
                                                    "
                                                />

                                                <span
                                                    className="
                                                        text-sm
                                                        sm:text-base
                                                        text-gray-400
                                                        group-hover:text-white
                                                        transition
                                                    "
                                                >
                                                    {type}
                                                </span>

                                            </label>

                                        ))}

                                    </div>

                                </div>


                                <div className="border-t border-white/10 my-5"></div>


                                {/* PROPERTY STATUS */}
                                <div className="mb-6">

                                    <h3
                                        className="
                                            roboto-condensed-light
                                            text-lg
                                            text-white
                                            mb-3
                                        "
                                    >
                                        Property status
                                    </h3>

                                    <div className="space-y-3">

                                        {["For sale", "For rent"].map((status) => (

                                            <label
                                                key={status}
                                                className="
                                                    flex
                                                    items-center
                                                    gap-3
                                                    cursor-pointer
                                                    group
                                                    min-h-6
                                                "
                                            >

                                                <input
                                                    type="checkbox"
                                                    checked={selectedStatuses.includes(
                                                        status
                                                    )}
                                                    onChange={() =>
                                                        handleStatusChange(status)
                                                    }
                                                    className="
                                                        w-4
                                                        h-4
                                                        shrink-0
                                                        accent-green-500
                                                        cursor-pointer
                                                    "
                                                />

                                                <span
                                                    className="
                                                        text-sm
                                                        sm:text-base
                                                        text-gray-400
                                                        group-hover:text-white
                                                        transition
                                                    "
                                                >
                                                    {status}
                                                </span>

                                            </label>

                                        ))}

                                    </div>

                                </div>


                                {/* BUTTONS */}
                                <div className="space-y-3">

                                    <button
                                        type="submit"
                                        className="
                                            w-full
                                            min-h-12
                                            flex
                                            items-center
                                            justify-center
                                            gap-2
                                            py-3
                                            px-5
                                            rounded-xl
                                            bg-green-500
                                            hover:bg-green-400
                                            active:scale-[0.98]
                                            text-black
                                            font-semibold
                                            shadow-lg
                                            transition
                                        "
                                    >
                                        <i className="fa fa-filter"></i>
                                        Apply filters
                                    </button>


                                    {(selectedTypes.length > 0 ||
                                        selectedStatuses.length > 0) && (

                                        <button
                                            type="button"
                                            onClick={clearFilters}
                                            className="
                                                w-full
                                                min-h-11
                                                py-2.5
                                                rounded-xl
                                                border
                                                border-white/10
                                                text-gray-400
                                                hover:text-white
                                                hover:border-white/20
                                                active:scale-[0.98]
                                                transition
                                            "
                                        >
                                            Clear filters
                                        </button>

                                    )}

                                </div>

                            </form>

                        </div>

                    </aside>


                    {/* =========================
                        PROPERTY LIST
                    ========================== */}
                    <main className="min-w-0">

                        {/* RESULT HEADER */}
                        <div
                            className="
                                flex
                                flex-col
                                sm:flex-row
                                sm:items-center
                                sm:justify-between
                                gap-4
                                mb-5
                            "
                        >

                            <div>

                                <h2
                                    className="
                                        text-xl
                                        sm:text-2xl
                                        font-semibold
                                    "
                                >
                                    Available properties
                                </h2>

                                <p className="text-gray-500 mt-1 text-sm sm:text-base">
                                    {houses.length}{" "}
                                    {houses.length === 1
                                        ? "property"
                                        : "properties"}{" "}
                                    found
                                </p>

                            </div>


                            <div
                                className="
                                    flex
                                    items-center
                                    gap-2
                                    w-fit
                                    px-3
                                    sm:px-4
                                    py-2
                                    rounded-full
                                    bg-white/5
                                    border
                                    border-white/10
                                    text-gray-400
                                    text-xs
                                    sm:text-sm
                                "
                            >
                                <i className="fa fa-home text-green-400"></i>
                                Verified listings
                            </div>

                        </div>


                        {/* PROPERTY CARDS */}
                        <div className="space-y-5">

                            {houses.map((house) => (

                                <article
                                    key={house.id}
                                    className="
                                        group
                                        overflow-hidden
                                        rounded-2xl
                                        bg-white/5
                                        border
                                        border-white/10
                                        hover:border-green-500/30
                                        shadow-xl
                                        hover:shadow-green-500/5
                                        transition
                                        duration-300
                                    "
                                >

                                    <div className="flex flex-col lg:flex-row">

                                        {/* =========================
                                            IMAGE
                                        ========================== */}
                                        <div
                                            className="
                                                relative
                                                w-full
                                                lg:w-[300px]
                                                xl:w-[340px]
                                                shrink-0
                                                h-[220px]
                                                sm:h-[260px]
                                                lg:h-[270px]
                                                overflow-hidden
                                            "
                                        >

                                            <img
                                                src={house.image}
                                                alt={house.title}
                                                loading="lazy"
                                                className="
                                                    w-full
                                                    h-full
                                                    object-cover
                                                    brightness-75
                                                    group-hover:brightness-90
                                                    group-hover:scale-105
                                                    transition
                                                    duration-500
                                                "
                                            />

                                            {/* IMAGE GRADIENT */}
                                            <div
                                                className="
                                                    absolute
                                                    inset-0
                                                    bg-gradient-to-t
                                                    from-black/70
                                                    via-transparent
                                                    to-black/20
                                                "
                                            ></div>


                                            {/* STATUS */}
                                            <div className="absolute top-3 sm:top-4 left-3 sm:left-4">

                                                <div
                                                    className="
                                                        flex
                                                        items-center
                                                        gap-2
                                                        px-2.5
                                                        sm:px-3
                                                        py-1.5
                                                        sm:py-2
                                                        rounded-full
                                                        bg-black/50
                                                        backdrop-blur-md
                                                        border
                                                        border-white/10
                                                        text-xs
                                                        sm:text-sm
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

                                                    <span className="text-white capitalize">
                                                        {house.status}
                                                    </span>

                                                </div>

                                            </div>


                                            {/* LIKE BUTTON */}
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    toggleLike(house.id)
                                                }
                                                aria-label={
                                                    house.like
                                                        ? "Remove from favorites"
                                                        : "Add to favorites"
                                                }
                                                className="
                                                    absolute
                                                    top-3
                                                    sm:top-4
                                                    right-3
                                                    sm:right-4
                                                    w-10
                                                    h-10
                                                    sm:w-11
                                                    sm:h-11
                                                    rounded-full
                                                    flex
                                                    items-center
                                                    justify-center
                                                    bg-black/50
                                                    backdrop-blur-md
                                                    border
                                                    border-white/10
                                                    hover:bg-green-500/20
                                                    hover:scale-110
                                                    active:scale-95
                                                    transition
                                                "
                                            >

                                                <i
                                                    className={`
                                                        fa
                                                        fa-heart
                                                        text-base
                                                        sm:text-lg
                                                        ${
                                                            house.like
                                                                ? "text-green-400"
                                                                : "text-white"
                                                        }
                                                    `}
                                                ></i>

                                            </button>


                                            {/* PROPERTY TYPE */}
                                            <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">

                                                <span
                                                    className="
                                                        inline-block
                                                        max-w-[calc(100vw-2rem)]
                                                        px-3
                                                        py-1.5
                                                        rounded-full
                                                        bg-black/50
                                                        backdrop-blur-md
                                                        border
                                                        border-white/10
                                                        text-gray-200
                                                        text-xs
                                                        sm:text-sm
                                                    "
                                                >
                                                    {house.type || "House"}
                                                </span>

                                            </div>

                                        </div>


                                        {/* =========================
                                            PROPERTY INFORMATION
                                        ========================== */}
                                        <div
                                            className="
                                                flex-1
                                                min-w-0
                                                p-4
                                                sm:p-5
                                                md:p-6
                                                flex
                                                flex-col
                                                justify-between
                                            "
                                        >

                                            <div>

                                                {/* TITLE */}
                                                <div className="mb-3">

                                                    <h3
                                                        className="
                                                            roboto-condensed-bold
                                                            text-xl
                                                            sm:text-2xl
                                                            md:text-3xl
                                                            text-white
                                                            leading-tight
                                                            break-words
                                                        "
                                                    >
                                                        {house.title}
                                                    </h3>

                                                </div>


                                                {/* LOCATION */}
                                                <div className="flex items-start gap-2 mb-4">

                                                    <i className="fa fa-map-marker text-green-400 mt-1 shrink-0"></i>

                                                    <p
                                                        className="
                                                            text-gray-400
                                                            text-sm
                                                            sm:text-base
                                                            leading-relaxed
                                                        "
                                                    >
                                                        {house.location}
                                                    </p>

                                                </div>


                                                {/* PRICE */}
                                                <div className="mb-5">

                                                    <p
                                                        className="
                                                            text-gray-500
                                                            text-xs
                                                            sm:text-sm
                                                            uppercase
                                                            tracking-wider
                                                        "
                                                    >
                                                        Price
                                                    </p>

                                                    <div className="flex items-baseline min-w-0">

                                                        <span className="text-green-400 text-lg sm:text-xl mr-1">
                                                            ₦
                                                        </span>

                                                        <h2
                                                            className="
                                                                bebas-neue
                                                                text-3xl
                                                                sm:text-4xl
                                                                md:text-5xl
                                                                text-green-400
                                                                font-black
                                                                break-all
                                                            "
                                                        >
                                                            {house.price}
                                                        </h2>

                                                    </div>

                                                </div>


                                                {/* FEATURES */}
                                                <div
                                                    className="
                                                        flex
                                                        flex-wrap
                                                        items-center
                                                        gap-x-4
                                                        sm:gap-x-5
                                                        gap-y-3
                                                        mb-5
                                                    "
                                                >

                                                    <div className="flex items-center gap-2 text-gray-300 text-sm sm:text-base">
                                                        <i className="fa fa-bed text-green-400"></i>
                                                        <span>{house.beds} Beds</span>
                                                    </div>

                                                    <div className="flex items-center gap-2 text-gray-300 text-sm sm:text-base">
                                                        <i className="fa fa-bath text-green-400"></i>
                                                        <span>{house.baths} Baths</span>
                                                    </div>

                                                    <div className="flex items-center gap-2 text-gray-300 text-sm sm:text-base">
                                                        <i className="fa fa-expand text-green-400"></i>
                                                        <span>{house.size}</span>
                                                    </div>

                                                </div>

                                            </div>


                                            {/* BOTTOM ACTIONS */}
                                            <div
                                                className="
                                                    flex
                                                    flex-col
                                                    sm:flex-row
                                                    sm:items-center
                                                    sm:justify-between
                                                    gap-3
                                                    pt-4
                                                    border-t
                                                    border-white/10
                                                "
                                            >

                                                <div className="flex items-center gap-2 text-sm">

                                                    <i className="fa fa-check-circle text-green-400"></i>

                                                    <span className="text-gray-400">
                                                        Verified property
                                                    </span>

                                                </div>


                                                <Link
                                                    to={`/property/${house.id}`}
                                                    className="
                                                        inline-flex
                                                        items-center
                                                        justify-center
                                                        gap-2
                                                        w-full
                                                        sm:w-auto
                                                        min-h-11
                                                        px-5
                                                        py-3
                                                        rounded-full
                                                        border
                                                        border-white/20
                                                        text-white
                                                        hover:bg-green-500
                                                        hover:border-green-500
                                                        hover:text-black
                                                        active:scale-[0.98]
                                                        transition
                                                    "
                                                >
                                                    View details
                                                    <i className="fa fa-arrow-right"></i>
                                                </Link>

                                            </div>

                                        </div>

                                    </div>

                                </article>

                            ))}

                        </div>


                        {/* =========================
                            EMPTY STATE
                        ========================== */}
                        {houses.length === 0 && (

                            <div
                                className="
                                    text-center
                                    py-16
                                    sm:py-20
                                    px-5
                                    border
                                    border-white/10
                                    rounded-2xl
                                    bg-white/5
                                "
                            >

                                <div
                                    className="
                                        w-16
                                        h-16
                                        mx-auto
                                        mb-5
                                        rounded-full
                                        bg-white/5
                                        flex
                                        items-center
                                        justify-center
                                    "
                                >
                                    <i className="fa fa-home text-3xl text-gray-600"></i>
                                </div>

                                <h2 className="text-xl sm:text-2xl text-white mb-2">
                                    No properties found
                                </h2>

                                <p className="text-gray-500 text-sm sm:text-base">
                                    Try adjusting your filters.
                                </p>

                                <button
                                    type="button"
                                    onClick={clearFilters}
                                    className="
                                        mt-5
                                        px-5
                                        py-2.5
                                        rounded-full
                                        bg-green-500
                                        text-black
                                        font-medium
                                        hover:bg-green-400
                                        transition
                                    "
                                >
                                    Reset filters
                                </button>

                            </div>

                        )}

                    </main>

                </div>

            </section>

        </div>
    );
}

export default PropertyList;