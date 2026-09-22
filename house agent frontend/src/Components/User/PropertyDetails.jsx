
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import housesData from "../housesData";
import PropertyMap from "./PropertyMap";

function PropertyDetails() {
    const { id } = useParams();

    const [liked, setLiked] = useState(false);

    const property = housesData.find(
        (house) => house.id === Number(id)
    );

    if (!property) {
        return (
            <div className="flex min-h-[100svh] items-center justify-center bg-black px-4 text-white">
                <div className="w-full max-w-md text-center">

                    <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-green-500/20 bg-green-500/10">
                        <i className="fa fa-home text-3xl text-green-400" />
                    </div>

                    <h1 className="roboto-condensed text-3xl font-black sm:text-4xl">
                        Property Not Found
                    </h1>

                    <p className="mt-3 text-gray-400">
                        The property you're looking for doesn't exist or
                        may have been removed.
                    </p>

                    <Link
                        to="/properties"
                        className="
                            mt-7
                            inline-flex
                            min-h-12
                            w-full
                            items-center
                            justify-center
                            gap-2
                            rounded-full
                            bg-green-500
                            px-6
                            py-3
                            font-medium
                            transition
                            hover:bg-green-400
                            sm:w-auto
                        "
                    >
                        <i className="fa fa-arrow-left" />
                        Back to Properties
                    </Link>

                </div>
            </div>
        );
    }

    return (
        <div className="min-h-[100svh] overflow-x-hidden bg-black text-white">

            {/* =====================================================
                PAGE HEADER
            ====================================================== */}
            <section className="px-4 pb-8 pt-24 sm:px-6 sm:pb-10 lg:px-10">

                <div className="mx-auto max-w-7xl">

                    <div className="max-w-4xl">

                        <p
                            className="
                                mb-3
                                text-xs
                                uppercase
                                tracking-[3px]
                                text-green-400
                                sm:text-sm
                                sm:tracking-[4px]
                            "
                        >
                            My Comfort Homes
                        </p>

                        <h1
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
                                lg:text-8xl
                            "
                        >
                            Property Details
                        </h1>

                        <p
                            className="
                                playwrite-nz
                                mt-4
                                max-w-3xl
                                text-base
                                leading-relaxed
                                text-gray-400
                                sm:mt-5
                                sm:text-lg
                                md:text-2xl
                            "
                        >
                            My Comfort Homes connects you to verified
                            houses in Anambra and across Nigeria.
                            No agent wahala.
                        </p>

                    </div>

                </div>

            </section>


            {/* =====================================================
                PROPERTY HERO IMAGE
            ====================================================== */}
            <section className="relative w-full">

                <img
                    src={property.image}
                    alt={property.title}
                    loading="lazy"
                    className="
                        h-[430px]
                        w-full
                        object-cover
                        brightness-50
                        sm:h-[500px]
                        md:h-[550px]
                        lg:h-[600px]
                    "
                />

                {/* IMAGE OVERLAY */}
                <div
                    className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black
                        via-black/30
                        to-transparent
                    "
                />

                {/* =================================================
                    TOP CONTROLS
                ================================================== */}
                <div
                    className="
                        absolute
                        left-0
                        top-0
                        w-full
                        px-4
                        pt-5
                        sm:px-6
                        md:px-10
                    "
                >

                    <div className="flex items-center justify-between">

                        {/* BACK */}
                        <Link
                            to="/properties"
                            className="
                                flex
                                min-h-11
                                items-center
                                justify-center
                                gap-2
                                rounded-full
                                border
                                border-white/20
                                bg-black/40
                                px-4
                                py-2
                                text-sm
                                backdrop-blur-md
                                transition
                                hover:bg-green-500
                                sm:text-base
                            "
                        >
                            <i className="fa fa-arrow-left" />
                            <span>Back</span>
                        </Link>


                        {/* LIKE */}
                        <button
                            type="button"
                            onClick={() => setLiked(!liked)}
                            aria-label={
                                liked
                                    ? "Remove property from saved properties"
                                    : "Save property"
                            }
                            className="
                                flex
                                h-11
                                w-11
                                items-center
                                justify-center
                                rounded-full
                                border
                                border-white/20
                                bg-black/40
                                backdrop-blur-md
                                transition
                                hover:scale-105
                                sm:h-12
                                sm:w-12
                            "
                        >
                            <i
                                className={`
                                    fa
                                    fa-heart
                                    text-lg
                                    sm:text-xl
                                    ${
                                        liked
                                            ? "text-green-400"
                                            : "text-white"
                                    }
                                `}
                            />
                        </button>

                    </div>

                </div>


                {/* =================================================
                    PROPERTY TITLE
                ================================================== */}
                <div
                    className="
                        absolute
                        bottom-0
                        left-0
                        w-full
                        px-4
                        pb-7
                        sm:px-6
                        sm:pb-9
                        md:px-10
                        md:pb-10
                    "
                >

                    <div className="mx-auto max-w-7xl">

                        {/* STATUS */}
                        <div className="mb-3">

                            <span
                                className="
                                    inline-flex
                                    items-center
                                    gap-2
                                    rounded-full
                                    border
                                    border-white/20
                                    bg-black/40
                                    px-3
                                    py-2
                                    text-xs
                                    backdrop-blur-md
                                    sm:px-4
                                    sm:text-sm
                                "
                            >
                                <i
                                    className={`
                                        fa
                                        ${
                                            property.availability
                                                ? "fa-check-circle text-green-400"
                                                : "fa-times-circle text-red-400"
                                        }
                                    `}
                                />

                                {property.status}
                            </span>

                        </div>


                        {/* TITLE */}
                        <h1
                            className="
                                bebas-neue
                                max-w-4xl
                                text-4xl
                                font-black
                                leading-none
                                bg-gradient-to-r
                                from-white
                                to-gray-400
                                bg-clip-text
                                text-transparent
                                sm:text-5xl
                                md:text-7xl
                            "
                        >
                            {property.title}
                        </h1>


                        {/* LOCATION */}
                        <div className="mt-3 flex items-start gap-2">

                            <i className="fa fa-map-marker mt-1 text-green-400" />

                            <p className="text-sm text-gray-300 sm:text-lg">
                                {property.location}
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                MAIN CONTENT
            ====================================================== */}
            <section
                className="
                    mx-auto
                    max-w-7xl
                    px-4
                    py-8
                    sm:px-6
                    sm:py-10
                    md:px-10
                    lg:py-12
                "
            >

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

                    {/* =================================================
                        LEFT CONTENT
                    ================================================== */}
                    <div className="min-w-0 lg:col-span-2">

                        {/* PRICE */}
                        <div
                            className="
                                mb-8
                                flex
                                flex-col
                                gap-5
                                sm:flex-row
                                sm:items-center
                                sm:justify-between
                            "
                        >

                            <div>

                                <p className="text-sm text-gray-400 sm:text-lg">
                                    Price
                                </p>

                                <h2
                                    className="
                                        bebas-neue
                                        text-4xl
                                        font-black
                                        text-green-400
                                        sm:text-5xl
                                        md:text-6xl
                                    "
                                >
                                    {property.price}
                                </h2>

                            </div>


                            {/* PROPERTY TYPE */}
                            <div
                                className="
                                    w-full
                                    rounded-2xl
                                    border
                                    border-white/10
                                    bg-white/5
                                    px-4
                                    py-3
                                    sm:w-auto
                                    sm:rounded-full
                                    sm:px-5
                                "
                            >
                                <span className="text-sm text-gray-400">
                                    Property Type:
                                </span>

                                <span className="ml-2 capitalize text-white">
                                    {property.type || "House"}
                                </span>
                            </div>

                        </div>


                        {/* PROPERTY FEATURES */}
                        <div
                            className="
                                mb-10
                                grid
                                grid-cols-1
                                gap-3
                                sm:grid-cols-3
                                sm:gap-4
                            "
                        >

                            {/* BEDROOMS */}
                            <div
                                className="
                                    rounded-xl
                                    border
                                    border-white/10
                                    bg-white/5
                                    p-4
                                    sm:p-5
                                "
                            >
                                <i className="fa fa-bed text-2xl text-green-400" />

                                <p className="mt-2 text-sm text-gray-400">
                                    Bedrooms
                                </p>

                                <h3 className="text-lg font-bold text-white sm:text-xl">
                                    {property.beds}
                                </h3>
                            </div>


                            {/* BATHROOMS */}
                            <div
                                className="
                                    rounded-xl
                                    border
                                    border-white/10
                                    bg-white/5
                                    p-4
                                    sm:p-5
                                "
                            >
                                <i className="fa fa-bath text-2xl text-green-400" />

                                <p className="mt-2 text-sm text-gray-400">
                                    Bathrooms
                                </p>

                                <h3 className="text-lg font-bold text-white sm:text-xl">
                                    {property.baths}
                                </h3>
                            </div>


                            {/* SIZE */}
                            <div
                                className="
                                    rounded-xl
                                    border
                                    border-white/10
                                    bg-white/5
                                    p-4
                                    sm:p-5
                                "
                            >
                                <i className="fa fa-expand text-2xl text-green-400" />

                                <p className="mt-2 text-sm text-gray-400">
                                    Property Size
                                </p>

                                <h3 className="text-lg font-bold text-white sm:text-xl">
                                    {property.size}
                                </h3>
                            </div>

                        </div>


                        {/* DESCRIPTION */}
                        <div className="mb-10">

                            <h2
                                className="
                                    bebas-neue
                                    mb-4
                                    text-3xl
                                    sm:text-4xl
                                    md:text-5xl
                                "
                            >
                                About This Property
                            </h2>

                            <p
                                className="
                                    text-base
                                    leading-7
                                    text-gray-400
                                    sm:text-lg
                                    sm:leading-8
                                "
                            >
                                {property.description ||
                                    "This beautiful property offers a comfortable living environment in a great location. Contact us to learn more about this property and arrange an inspection."}
                            </p>

                        </div>


                        {/* LOCATION */}
                        <div className="mb-10">

                            <h2
                                className="
                                    bebas-neue
                                    mb-4
                                    text-3xl
                                    sm:text-4xl
                                    md:text-5xl
                                "
                            >
                                Location
                            </h2>

                            <div
                                className="
                                    flex
                                    items-start
                                    gap-3
                                    rounded-xl
                                    border
                                    border-white/10
                                    bg-white/5
                                    p-4
                                    sm:items-center
                                    sm:p-5
                                "
                            >

                                <i className="fa fa-map-marker mt-1 text-xl text-green-400 sm:text-2xl" />

                                <p className="text-base text-gray-300 sm:text-lg">
                                    {property.location}
                                </p>

                            </div>

                        </div>

                    </div>


                    {/* =================================================
                        RIGHT SIDEBAR
                    ================================================== */}
                    <div>

                        <div
                            className="
                                rounded-2xl
                                border
                                border-white/10
                                bg-white/5
                                p-5
                                shadow-xl
                                lg:sticky
                                lg:top-24
                                lg:p-6
                            "
                        >

                            <h2 className="text-xl font-bold sm:text-2xl">
                                Interested in this property?
                            </h2>

                            <p className="mb-6 mt-2 text-sm leading-6 text-gray-400 sm:text-base">
                                Talk to our AI assistant or contact an agent
                                to learn more.
                            </p>


                            {/* AI BUTTON */}
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
                                    bg-green-500
                                    px-4
                                    py-3
                                    text-base
                                    font-medium
                                    text-white
                                    transition
                                    hover:bg-green-400
                                    sm:text-lg
                                "
                            >
                                <i className="fa fa-comments" />
                                Talk to AI Agent
                            </button>


                            {/* CONTACT */}
                            <button
                                type="button"
                                className="
                                    mt-3
                                    flex
                                    min-h-12
                                    w-full
                                    items-center
                                    justify-center
                                    gap-3
                                    rounded-full
                                    border
                                    border-white/20
                                    px-4
                                    py-3
                                    text-base
                                    text-white
                                    transition
                                    hover:bg-white/10
                                    sm:text-lg
                                "
                            >
                                <i className="fa fa-phone" />
                                Contact Agent
                            </button>


                            {/* SAVE */}
                            <button
                                type="button"
                                onClick={() => setLiked(!liked)}
                                className="
                                    mt-3
                                    flex
                                    min-h-12
                                    w-full
                                    items-center
                                    justify-center
                                    gap-3
                                    rounded-full
                                    border
                                    border-white/20
                                    px-4
                                    py-3
                                    text-base
                                    text-gray-300
                                    transition
                                    hover:text-green-400
                                "
                            >
                                <i
                                    className={`
                                        fa
                                        fa-heart
                                        ${
                                            liked
                                                ? "text-green-400"
                                                : ""
                                        }
                                    `}
                                />

                                {liked
                                    ? "Saved Property"
                                    : "Save Property"}
                            </button>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                PROPERTY MAP
            ====================================================== */}
            <section
                className="
                    mx-auto
                    max-w-7xl
                    px-4
                    pb-10
                    pt-2
                    sm:px-6
                    md:px-10
                    lg:pb-16
                "
            >

                <div className="mb-5">

                    <p className="text-xs uppercase tracking-widest text-green-400 sm:text-sm">
                        Location
                    </p>

                    <h2
                        className="
                            roboto-condensed
                            text-3xl
                            font-bold
                            sm:text-4xl
                            md:text-5xl
                        "
                    >
                        Property Location
                    </h2>

                    <p className="mt-2 text-sm text-gray-400 sm:text-base">
                        Explore the location of this property on the map.
                    </p>

                </div>

                <div className="overflow-hidden rounded-2xl border border-white/10">
                    <PropertyMap
                        latitude={property.latitude}
                        longitude={property.longitude}
                        title={property.title}
                        location={property.location}
                    />
                </div>

            </section>

        </div>
    );
}

export default PropertyDetails;
