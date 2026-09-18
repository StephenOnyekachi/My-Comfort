import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import housesData from "../housesData";
import PropertyMap from "../User/PropertyMap";

function AdminPropertyView() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [houses, setHouses] = useState(housesData);

    const property = houses.find(
        (house) => String(house.id) === String(id)
    );

    // ============================================
    // DELETE PROPERTY
    // ============================================
    const handleDelete = () => {
        if (!property) return;

        const confirmDelete = window.confirm(
            `Are you sure you want to delete "${property.title}"?`
        );

        if (!confirmDelete) return;

        setHouses((prevHouses) =>
            prevHouses.filter(
                (house) => String(house.id) !== String(id)
            )
        );

        alert("Property deleted successfully.");

        navigate("/adminpropertyview");
    };

    // ============================================
    // PROPERTY NOT FOUND
    // ============================================
    if (!property) {
        return (
            <div className="flex min-h-[100svh] items-center justify-center overflow-x-hidden bg-black px-4 py-10 text-white">
                <div className="w-full max-w-xl rounded-3xl border border-white/10 bg-white/5 p-6 text-center shadow-2xl sm:p-10">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-500/10 text-red-400 sm:h-20 sm:w-20">
                        <i
                            className="fa fa-home text-2xl sm:text-3xl"
                            aria-hidden="true"
                        />
                    </div>

                    <h1 className="mt-6 text-2xl font-bold sm:text-3xl">
                        Property Not Found
                    </h1>

                    <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-gray-400 sm:text-base">
                        The property you are trying to view does not exist
                        or may have already been removed.
                    </p>

                    <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center">
                        <Link
                            to="/adminpropertyview"
                            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-gray-300 transition hover:bg-white/10 hover:text-white sm:text-base"
                        >
                            <i
                                className="fa fa-arrow-left"
                                aria-hidden="true"
                            />
                            Back to Properties
                        </Link>

                        <Link
                            to="/dashboard"
                            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-green-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-green-400 sm:text-base"
                        >
                            <i
                                className="fa fa-dashboard"
                                aria-hidden="true"
                            />
                            Dashboard
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-[100svh] overflow-x-hidden bg-black text-white">
            {/* ============================================
                TOP HEADER
            ============================================ */}
            <section className="border-b border-white/10 bg-black">
                <div className="mx-auto w-full max-w-7xl px-4 py-5 sm:px-6 sm:py-7 lg:px-8">
                    <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                        {/* HEADER TEXT */}
                        <div className="min-w-0">
                            <div className="mb-2 flex items-center gap-2">
                                <span className="h-2 w-2 shrink-0 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.7)]" />

                                <p className="text-xs font-medium uppercase tracking-[0.2em] text-green-400 sm:text-sm">
                                    Admin Property View
                                </p>
                            </div>

                            <h1 className="roboto-condensed break-words text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
                                Property Information
                            </h1>

                            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-gray-400 sm:text-base">
                                Review the complete information for this
                                property and manage its listing.
                            </p>
                        </div>

                        {/* HEADER ACTIONS */}
                        <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto">
                            <Link
                                to="/adminpropertyview"
                                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-gray-300 transition hover:border-white/20 hover:bg-white/10 hover:text-white sm:text-base"
                            >
                                <i
                                    className="fa fa-arrow-left"
                                    aria-hidden="true"
                                />
                                Back to Properties
                            </Link>

                            <Link
                                to={`/editproperty/${property.id}`}
                                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-green-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-green-500/10 transition hover:bg-green-400 sm:text-base"
                            >
                                <i
                                    className="fa fa-edit"
                                    aria-hidden="true"
                                />
                                Edit Property
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================
                MAIN CONTENT
            ============================================ */}
            <main className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
                <div className="grid min-w-0 gap-6 lg:grid-cols-[minmax(0,1.5fr)_minmax(320px,0.8fr)] lg:items-start">
                    {/* ========================================
                        LEFT COLUMN
                    ======================================== */}
                    <div className="min-w-0 space-y-6">
                        {/* PROPERTY IMAGE */}
                        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl">
                            <img
                                src={property.image}
                                alt={property.title}
                                loading="lazy"
                                className="h-[280px] w-full object-cover brightness-75 sm:h-[400px] md:h-[480px] lg:h-[520px]"
                            />

                            {/* IMAGE OVERLAY */}
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/60 to-transparent p-5 pt-20 sm:p-7 sm:pt-28">
                                <div className="flex flex-wrap items-center gap-2">
                                    {/* AVAILABILITY */}
                                    <span
                                        className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-medium backdrop-blur-md sm:text-sm ${
                                            property.availability
                                                ? "border-green-400/30 bg-green-500/20 text-green-300"
                                                : "border-red-400/30 bg-red-500/20 text-red-300"
                                        }`}
                                    >
                                        <i
                                            className={`fa ${
                                                property.availability
                                                    ? "fa-check-circle"
                                                    : "fa-times-circle"
                                            }`}
                                            aria-hidden="true"
                                        />

                                        {property.availability
                                            ? "Available"
                                            : "Unavailable"}
                                    </span>

                                    {/* STATUS */}
                                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/60 px-3 py-2 text-xs text-gray-200 backdrop-blur-md sm:text-sm">
                                        <i
                                            className="fa fa-tag text-green-400"
                                            aria-hidden="true"
                                        />

                                        <span className="capitalize">
                                            {property.status}
                                        </span>
                                    </span>
                                </div>

                                <h2 className="roboto-condensed mt-3 break-words text-2xl font-bold sm:text-3xl md:text-4xl">
                                    {property.title}
                                </h2>
                            </div>
                        </div>

                        {/* PROPERTY OVERVIEW */}
                        <section className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-xl sm:p-7">
                            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                                <div className="min-w-0">
                                    <p className="text-xs uppercase tracking-[0.15em] text-gray-500">
                                        Property Overview
                                    </p>

                                    <h3 className="mt-2 break-words text-xl font-bold sm:text-2xl">
                                        {property.title}
                                    </h3>

                                    <div className="mt-3 flex min-w-0 items-start gap-2 text-gray-400">
                                        <i
                                            className="fa fa-map-marker mt-1 shrink-0 text-green-400"
                                            aria-hidden="true"
                                        />

                                        <span className="min-w-0 break-words text-sm sm:text-base">
                                            {property.location}
                                        </span>
                                    </div>
                                </div>

                                <div className="shrink-0 rounded-xl border border-green-500/20 bg-green-500/10 px-4 py-3">
                                    <p className="text-xs uppercase tracking-wide text-gray-500">
                                        Property ID
                                    </p>

                                    <p className="mt-1 font-bold text-green-400">
                                        #{property.id}
                                    </p>
                                </div>
                            </div>

                            {/* PRICE */}
                            <div className="mt-6 rounded-2xl border border-green-500/20 bg-green-500/5 p-4 sm:p-5">
                                <p className="text-xs uppercase tracking-[0.15em] text-gray-500">
                                    Price
                                </p>

                                <p className="bebas-neue mt-1 break-words text-4xl text-green-400 sm:text-5xl">
                                    ₦{property.price}
                                </p>
                            </div>

                            {/* FEATURES */}
                            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                                {/* TYPE */}
                                <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                                    <i
                                        className="fa fa-building text-green-400"
                                        aria-hidden="true"
                                    />

                                    <p className="mt-3 text-xs text-gray-500">
                                        Type
                                    </p>

                                    <p className="mt-1 break-words text-sm font-medium text-white sm:text-base">
                                        {property.type}
                                    </p>
                                </div>

                                {/* BEDS */}
                                <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                                    <i
                                        className="fa fa-bed text-green-400"
                                        aria-hidden="true"
                                    />

                                    <p className="mt-3 text-xs text-gray-500">
                                        Bedrooms
                                    </p>

                                    <p className="mt-1 text-sm font-medium text-white sm:text-base">
                                        {property.beds}
                                    </p>
                                </div>

                                {/* BATHS */}
                                <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                                    <i
                                        className="fa fa-bath text-green-400"
                                        aria-hidden="true"
                                    />

                                    <p className="mt-3 text-xs text-gray-500">
                                        Bathrooms
                                    </p>

                                    <p className="mt-1 text-sm font-medium text-white sm:text-base">
                                        {property.baths}
                                    </p>
                                </div>

                                {/* SIZE */}
                                <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                                    <i
                                        className="fa fa-expand text-green-400"
                                        aria-hidden="true"
                                    />

                                    <p className="mt-3 text-xs text-gray-500">
                                        Size
                                    </p>

                                    <p className="mt-1 break-words text-sm font-medium text-white sm:text-base">
                                        {property.size}
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* DESCRIPTION */}
                        <section className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-xl sm:p-7">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-500/10 text-green-400">
                                    <i
                                        className="fa fa-file-text"
                                        aria-hidden="true"
                                    />
                                </div>

                                <div>
                                    <p className="text-xs uppercase tracking-[0.15em] text-gray-500">
                                        Description
                                    </p>

                                    <h3 className="text-xl font-bold sm:text-2xl">
                                        About This Property
                                    </h3>
                                </div>
                            </div>

                            <p className="mt-5 whitespace-pre-line text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
                                {property.description ||
                                    "No description has been added for this property yet."}
                            </p>
                        </section>

                        {/* LOCATION / MAP */}
                        <section className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-xl sm:p-7">
                            <div className="mb-5 flex items-center gap-3">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-500/10 text-green-400">
                                    <i
                                        className="fa fa-map-marker"
                                        aria-hidden="true"
                                    />
                                </div>

                                <div className="min-w-0">
                                    <p className="text-xs uppercase tracking-[0.15em] text-gray-500">
                                        Location
                                    </p>

                                    <h3 className="break-words text-xl font-bold sm:text-2xl">
                                        Property Location
                                    </h3>
                                </div>
                            </div>

                            <div className="mb-5 flex items-start gap-3 rounded-2xl border border-white/10 bg-black/30 p-4">
                                <i
                                    className="fa fa-map-marker mt-1 shrink-0 text-green-400"
                                    aria-hidden="true"
                                />

                                <p className="min-w-0 break-words text-sm leading-relaxed text-gray-300 sm:text-base">
                                    {property.location}
                                </p>
                            </div>

                            <PropertyMap
                                latitude={property.latitude}
                                longitude={property.longitude}
                            />
                        </section>
                    </div>

                    {/* ========================================
                        RIGHT COLUMN
                    ======================================== */}
                    <aside className="min-w-0 space-y-6 lg:sticky lg:top-6">
                        {/* MANAGEMENT CARD */}
                        <section className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-xl sm:p-6">
                            <p className="text-xs uppercase tracking-[0.15em] text-gray-500">
                                Property Management
                            </p>

                            <h3 className="mt-2 text-xl font-bold sm:text-2xl">
                                Manage Listing
                            </h3>

                            <div className="mt-5 space-y-3">
                                <Link
                                    to={`/editproperty/${property.id}`}
                                    className="flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-green-500 px-4 py-3 text-sm font-medium text-white transition hover:bg-green-400 sm:text-base"
                                >
                                    <i
                                        className="fa fa-edit"
                                        aria-hidden="true"
                                    />
                                    Edit Property
                                </Link>

                                <button
                                    type="button"
                                    onClick={handleDelete}
                                    className="flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm font-medium text-red-400 transition hover:bg-red-500 hover:text-white sm:text-base"
                                >
                                    <i
                                        className="fa fa-trash"
                                        aria-hidden="true"
                                    />
                                    Delete Property
                                </button>
                            </div>
                        </section>

                        {/* LISTING STATUS */}
                        <section className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-xl sm:p-6">
                            <p className="text-xs uppercase tracking-[0.15em] text-gray-500">
                                Listing Status
                            </p>

                            <div className="mt-5 space-y-4">
                                <div className="flex items-center justify-between gap-4">
                                    <span className="text-sm text-gray-400">
                                        Availability
                                    </span>

                                    <span
                                        className={`rounded-full px-3 py-1.5 text-xs font-medium ${
                                            property.availability
                                                ? "bg-green-500/10 text-green-400"
                                                : "bg-red-500/10 text-red-400"
                                        }`}
                                    >
                                        {property.availability
                                            ? "Available"
                                            : "Unavailable"}
                                    </span>
                                </div>

                                <div className="h-px bg-white/10" />

                                <div className="flex items-center justify-between gap-4">
                                    <span className="text-sm text-gray-400">
                                        Listing Type
                                    </span>

                                    <span className="capitalize text-sm font-medium text-white">
                                        {property.status}
                                    </span>
                                </div>

                                <div className="h-px bg-white/10" />

                                <div className="flex items-center justify-between gap-4">
                                    <span className="text-sm text-gray-400">
                                        Property Type
                                    </span>

                                    <span className="text-right text-sm font-medium text-white">
                                        {property.type}
                                    </span>
                                </div>
                            </div>
                        </section>

                        {/* COORDINATES */}
                        <section className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-xl sm:p-6">
                            <p className="text-xs uppercase tracking-[0.15em] text-gray-500">
                                Map Coordinates
                            </p>

                            <div className="mt-5 space-y-3">
                                <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                                    <p className="text-xs text-gray-500">
                                        Latitude
                                    </p>

                                    <p className="mt-1 break-all text-sm text-gray-200">
                                        {property.latitude ?? "Not provided"}
                                    </p>
                                </div>

                                <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                                    <p className="text-xs text-gray-500">
                                        Longitude
                                    </p>

                                    <p className="mt-1 break-all text-sm text-gray-200">
                                        {property.longitude ?? "Not provided"}
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* QUICK NAVIGATION */}
                        <section className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-xl sm:p-6">
                            <p className="text-xs uppercase tracking-[0.15em] text-gray-500">
                                Quick Navigation
                            </p>

                            <div className="mt-5 space-y-3">
                                <Link
                                    to="/dashboard"
                                    className="flex min-h-12 items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-gray-300 transition hover:bg-white/10 hover:text-white"
                                >
                                    <i
                                        className="fa fa-dashboard w-5 text-green-400"
                                        aria-hidden="true"
                                    />

                                    Dashboard
                                </Link>

                                <Link
                                    to="/adminpropertyview"
                                    className="flex min-h-12 items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-gray-300 transition hover:bg-white/10 hover:text-white"
                                >
                                    <i
                                        className="fa fa-building w-5 text-green-400"
                                        aria-hidden="true"
                                    />

                                    All Properties
                                </Link>

                                <Link
                                    to="/addproperty"
                                    className="flex min-h-12 items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-gray-300 transition hover:bg-white/10 hover:text-white"
                                >
                                    <i
                                        className="fa fa-plus w-5 text-green-400"
                                        aria-hidden="true"
                                    />

                                    Add Property
                                </Link>
                            </div>
                        </section>
                    </aside>
                </div>
            </main>
        </div>
    );
}

export default AdminPropertyView;
