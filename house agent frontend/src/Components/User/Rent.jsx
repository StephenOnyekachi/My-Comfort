import { useState } from "react";
import { Link } from "react-router-dom";
import housesData from "../housesData";

function Rent() {
    const [houses, setHouses] = useState(housesData);

    const [selectedTypes, setSelectedTypes] = useState([]);

    const toggleLike = (id) => {
        setHouses((currentHouses) =>
            currentHouses.map((house) =>
                house.id === id
                    ? { ...house, like: !house.like }
                    : house
            )
        );
    };

    const toggleType = (type) => {
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

    const rentHouses = houses.filter((house) => {
        if (house.status !== "rent") {
            return false;
        }

        if (selectedTypes.length === 0) {
            return true;
        }

        return selectedTypes.some(
            (type) =>
                house.type?.toLowerCase() === type.toLowerCase()
        );
    });

    const resetFilters = () => {
        setSelectedTypes([]);
    };

    return (
        <div className="min-h-screen overflow-x-hidden bg-black text-white">

            {/* =====================================================
                PAGE HEADER
            ====================================================== */}

            <section className="px-4 pt-24 pb-10 sm:px-6 sm:pt-28 lg:px-10 lg:pb-12">

                <div className="mx-auto max-w-7xl">

                    <div className="max-w-4xl">

                        <p className="mb-3 text-xs uppercase tracking-[3px] text-green-400 sm:text-sm sm:tracking-[4px]">
                            ConnectFlow Homes
                        </p>

                        <h1
                            className="
                                roboto-condensed
                                text-4xl
                                font-black
                                leading-[0.95]
                                bg-gradient-to-r
                                from-white
                                to-gray-500
                                bg-clip-text
                                text-transparent
                                sm:text-5xl
                                md:text-6xl
                                lg:text-8xl
                            "
                        >
                            properties listed for rent
                        </h1>

                        <p
                            className="
                                playwrite-nz
                                mt-5
                                max-w-3xl
                                text-base
                                leading-relaxed
                                text-gray-400
                                sm:text-lg
                                md:text-xl
                                lg:text-2xl
                            "
                        >
                            ConnectFlow Homes connects you to verified
                            houses in Anambra and across Nigeria.
                            No agent wahala.
                        </p>

                    </div>

                </div>

            </section>


            {/* =====================================================
                MAIN CONTENT
            ====================================================== */}

            <section className="px-4 pb-16 sm:px-6 lg:px-10 lg:pb-20">

                <div
                    className="
                        mx-auto
                        grid
                        max-w-7xl
                        grid-cols-1
                        gap-6
                        lg:grid-cols-[280px_1fr]
                        lg:gap-8
                    "
                >

                    {/* =================================================
                        FILTER SIDEBAR
                    ================================================== */}

                    <aside className="lg:sticky lg:top-24 lg:self-start">

                        <div
                            className="
                                rounded-2xl
                                border
                                border-white/10
                                bg-white/5
                                p-5
                                shadow-xl
                                backdrop-blur-md
                                sm:p-6
                            "
                        >

                            {/* FILTER HEADER */}

                            <div className="mb-6 flex items-center justify-between">

                                <div className="flex items-center gap-3">

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
                                        <i className="fa fa-sliders text-green-400"></i>
                                    </div>

                                    <div>
                                        <h2 className="text-lg font-semibold">
                                            Filters
                                        </h2>

                                        <p className="text-sm text-gray-500">
                                            Find your property
                                        </p>
                                    </div>

                                </div>

                            </div>


                            <form
                                onSubmit={(e) => e.preventDefault()}
                            >

                                {/* PROPERTY TYPE */}

                                <div className="mb-6">

                                    <h3
                                        className="
                                            roboto-condensed-light
                                            mb-3
                                            text-lg
                                            text-white
                                        "
                                    >
                                        Property type
                                    </h3>

                                    <div className="space-y-3">

                                        {[
                                            "All type",
                                            "House",
                                            "Apartment",
                                            "Duplex",
                                            "Condo",
                                        ].map((type) => {

                                            const isAll =
                                                type === "All type";

                                            const checked = isAll
                                                ? selectedTypes.length === 0
                                                : selectedTypes.includes(type);

                                            return (
                                                <label
                                                    key={type}
                                                    className="
                                                        flex
                                                        cursor-pointer
                                                        items-center
                                                        gap-3
                                                        rounded-lg
                                                        py-1
                                                        text-sm
                                                        sm:text-base
                                                    "
                                                >

                                                    <input
                                                        type="checkbox"
                                                        checked={checked}
                                                        onChange={() =>
                                                            toggleType(type)
                                                        }
                                                        className="
                                                            h-4
                                                            w-4
                                                            shrink-0
                                                            accent-green-500
                                                        "
                                                    />

                                                    <span
                                                        className={`
                                                            capitalize
                                                            transition
                                                            ${
                                                                checked
                                                                    ? "text-white"
                                                                    : "text-gray-400"
                                                            }
                                                        `}
                                                    >
                                                        {type}
                                                    </span>

                                                </label>
                                            );
                                        })}

                                    </div>

                                </div>


                                <div className="my-5 border-t border-white/10"></div>


                                {/* FILTER ACTIONS */}

                                <div className="flex flex-col gap-3">

                                    <button
                                        type="submit"
                                        className="
                                            flex
                                            min-h-11
                                            w-full
                                            items-center
                                            justify-center
                                            gap-2
                                            rounded-xl
                                            bg-green-500
                                            px-5
                                            py-3
                                            font-medium
                                            text-white
                                            shadow-lg
                                            transition
                                            hover:bg-green-400
                                        "
                                    >
                                        <i className="fa fa-filter"></i>
                                        Apply filters
                                    </button>

                                    {selectedTypes.length > 0 && (
                                        <button
                                            type="button"
                                            onClick={resetFilters}
                                            className="
                                                min-h-11
                                                w-full
                                                rounded-xl
                                                border
                                                border-white/10
                                                px-5
                                                py-3
                                                text-gray-300
                                                transition
                                                hover:border-green-500/30
                                                hover:text-white
                                            "
                                        >
                                            Clear filters
                                        </button>
                                    )}

                                </div>

                            </form>

                        </div>

                    </aside>


                    {/* =================================================
                        PROPERTY LIST
                    ================================================== */}

                    <main className="min-w-0">

                        {/* RESULT HEADER */}

                        <div
                            className="
                                mb-5
                                flex
                                flex-col
                                gap-4
                                sm:flex-row
                                sm:items-center
                                sm:justify-between
                            "
                        >

                            <div>

                                <h2 className="text-xl font-semibold sm:text-2xl">
                                    Available rental properties
                                </h2>

                                <p className="mt-1 text-sm text-gray-500 sm:text-base">
                                    {rentHouses.length}{" "}
                                    {rentHouses.length === 1
                                        ? "property"
                                        : "properties"}{" "}
                                    found
                                </p>

                            </div>


                            <div
                                className="
                                    inline-flex
                                    w-fit
                                    items-center
                                    gap-2
                                    rounded-full
                                    border
                                    border-white/10
                                    bg-white/5
                                    px-4
                                    py-2
                                    text-xs
                                    text-gray-400
                                    sm:text-sm
                                "
                            >
                                <i className="fa fa-home text-green-400"></i>
                                Verified listings
                            </div>

                        </div>


                        {/* PROPERTY CARDS */}

                        <div className="space-y-5">

                            {rentHouses.map((house) => (

                                <article
                                    key={house.id}
                                    className="
                                        group
                                        overflow-hidden
                                        rounded-2xl
                                        border
                                        border-white/10
                                        bg-white/5
                                        shadow-xl
                                        transition
                                        duration-300
                                        hover:border-green-500/30
                                        hover:shadow-green-500/5
                                    "
                                >

                                    <div className="flex flex-col md:flex-row">

                                        {/* IMAGE */}

                                        <div
                                            className="
                                                relative
                                                h-[230px]
                                                w-full
                                                shrink-0
                                                sm:h-[280px]
                                                md:h-[270px]
                                                md:w-[300px]
                                                lg:w-[340px]
                                            "
                                        >

                                            <img
                                                src={house.image}
                                                alt={house.title}
                                                loading="lazy"
                                                className="
                                                    h-full
                                                    w-full
                                                    object-cover
                                                    brightness-75
                                                    transition
                                                    duration-500
                                                    group-hover:brightness-90
                                                    group-hover:scale-[1.01]
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

                                            <div className="absolute left-3 top-3 sm:left-4 sm:top-4">

                                                <div
                                                    className="
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

                                                    <span className="capitalize text-white">
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
                                                        ? "Remove property from saved properties"
                                                        : "Save property"
                                                }
                                                aria-pressed={house.like}
                                                className="
                                                    absolute
                                                    right-3
                                                    top-3
                                                    flex
                                                    h-11
                                                    w-11
                                                    items-center
                                                    justify-center
                                                    rounded-full
                                                    border
                                                    border-white/10
                                                    bg-black/50
                                                    backdrop-blur-md
                                                    transition
                                                    hover:scale-105
                                                    sm:right-4
                                                    sm:top-4
                                                "
                                            >

                                                <i
                                                    className={`
                                                        fa
                                                        fa-heart
                                                        text-lg
                                                        ${
                                                            house.like
                                                                ? "text-green-400"
                                                                : "text-white"
                                                        }
                                                    `}
                                                ></i>

                                            </button>


                                            {/* PROPERTY TYPE */}

                                            <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">

                                                <span
                                                    className="
                                                        rounded-full
                                                        border
                                                        border-white/10
                                                        bg-black/50
                                                        px-3
                                                        py-1.5
                                                        text-xs
                                                        text-gray-200
                                                        backdrop-blur-md
                                                        sm:text-sm
                                                    "
                                                >
                                                    {house.type || "House"}
                                                </span>

                                            </div>

                                        </div>


                                        {/* PROPERTY INFORMATION */}

                                        <div
                                            className="
                                                flex
                                                min-w-0
                                                flex-1
                                                flex-col
                                                justify-between
                                                p-5
                                                sm:p-6
                                            "
                                        >

                                            <div>

                                                {/* TITLE */}

                                                <div className="mb-3">

                                                    <h3
                                                        className="
                                                            roboto-condensed-bold
                                                            break-words
                                                            text-2xl
                                                            leading-tight
                                                            text-white
                                                            sm:text-3xl
                                                        "
                                                    >
                                                        {house.title}
                                                    </h3>

                                                </div>


                                                {/* LOCATION */}

                                                <div className="mb-4 flex min-w-0 items-start gap-2">

                                                    <i className="fa fa-map-marker mt-1 shrink-0 text-green-400"></i>

                                                    <p className="break-words text-sm leading-relaxed text-gray-400 sm:text-base">
                                                        {house.location}
                                                    </p>

                                                </div>


                                                {/* PRICE */}

                                                <div className="mb-5">

                                                    <p className="text-xs uppercase tracking-wider text-gray-500 sm:text-sm">
                                                        Rent
                                                    </p>

                                                    <div className="flex items-center">

                                                        <span className="mr-1 text-xl text-green-400">
                                                            ₦
                                                        </span>

                                                        <h2
                                                            className="
                                                                bebas-neue
                                                                text-4xl
                                                                font-black
                                                                text-green-400
                                                                sm:text-5xl
                                                            "
                                                        >
                                                            {house.price}
                                                        </h2>

                                                    </div>

                                                </div>


                                                {/* FEATURES */}

                                                <div
                                                    className="
                                                        mb-5
                                                        flex
                                                        flex-wrap
                                                        items-center
                                                        gap-x-4
                                                        gap-y-3
                                                        sm:gap-x-5
                                                    "
                                                >

                                                    <div className="flex items-center gap-2 text-sm text-gray-300 sm:text-base">
                                                        <i className="fa fa-bed text-green-400"></i>
                                                        <span>{house.beds} Beds</span>
                                                    </div>

                                                    <div className="flex items-center gap-2 text-sm text-gray-300 sm:text-base">
                                                        <i className="fa fa-bath text-green-400"></i>
                                                        <span>{house.baths} Baths</span>
                                                    </div>

                                                    <div className="flex items-center gap-2 text-sm text-gray-300 sm:text-base">
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
                                                    gap-3
                                                    border-t
                                                    border-white/10
                                                    pt-4
                                                    sm:flex-row
                                                    sm:items-center
                                                    sm:justify-between
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
                                                        min-h-11
                                                        w-full
                                                        items-center
                                                        justify-center
                                                        gap-2
                                                        rounded-full
                                                        border
                                                        border-white/20
                                                        px-5
                                                        py-3
                                                        text-sm
                                                        text-white
                                                        transition
                                                        hover:border-green-500
                                                        hover:bg-green-500
                                                        sm:w-auto
                                                    "
                                                >
                                                    View details

                                                    <i className="fa fa-arrow-right text-green-400"></i>
                                                </Link>

                                            </div>

                                        </div>

                                    </div>

                                </article>

                            ))}

                        </div>


                        {/* EMPTY STATE */}

                        {rentHouses.length === 0 && (

                            <div
                                className="
                                    rounded-2xl
                                    border
                                    border-white/10
                                    bg-white/5
                                    px-5
                                    py-16
                                    text-center
                                    sm:py-20
                                "
                            >

                                <i className="fa fa-home mb-5 text-5xl text-gray-600"></i>

                                <h2 className="mb-2 text-xl text-white sm:text-2xl">
                                    No rental properties found
                                </h2>

                                <p className="mb-6 text-sm text-gray-500 sm:text-base">
                                    Try adjusting your filters.
                                </p>

                                <button
                                    type="button"
                                    onClick={resetFilters}
                                    className="
                                        min-h-11
                                        rounded-xl
                                        bg-green-500
                                        px-6
                                        py-3
                                        text-sm
                                        font-medium
                                        text-white
                                        transition
                                        hover:bg-green-400
                                    "
                                >
                                    Clear filters
                                </button>

                            </div>

                        )}

                    </main>

                </div>

            </section>

        </div>
    );
}

export default Rent;