import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import housesData from "../housesData";

function EditProperty() {
    const { id } = useParams();
    const navigate = useNavigate();

    // ==========================================
    // FIND PROPERTY
    // ==========================================

    const property = housesData.find(
        (house) => house.id === parseInt(id)
    );

    // ==========================================
    // PROPERTY NOT FOUND
    // ==========================================

    if (!property) {
        return (
            <div className="flex min-h-[100svh] items-center justify-center bg-black px-5 text-white">
                <div className="w-full max-w-lg text-center">

                    <div className="mb-5">
                        <i
                            className="fa fa-home text-5xl text-green-500 sm:text-6xl"
                            aria-hidden="true"
                        ></i>
                    </div>

                    <h1 className="bebas-neue mb-3 text-4xl sm:text-5xl">
                        Property Not Found
                    </h1>

                    <p className="mb-6 text-sm leading-6 text-gray-400 sm:text-base">
                        The property you are trying to edit does not exist.
                    </p>

                    <Link
                        to="/dashboard"
                        className="
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
                            text-white
                            transition
                            hover:bg-green-400
                            sm:w-auto
                        "
                    >
                        <i
                            className="fa fa-arrow-left"
                            aria-hidden="true"
                        ></i>

                        Back to Dashboard
                    </Link>

                </div>
            </div>
        );
    }

    // ==========================================
    // FORM STATE
    // ==========================================

    const [formData, setFormData] = useState({
        title: property.title || "",
        location: property.location || "",
        price: property.price || "",
        type: property.type || "House",
        status: property.status || "For Sale",
        availability: property.availability ?? true,
        beds: property.beds ?? "",
        baths: property.baths ?? "",
        size: property.size || "",
        description: property.description || "",
        image: property.image || "",
        latitude: property.latitude ?? "",
        longitude: property.longitude ?? "",
    });

    // ==========================================
    // HANDLE INPUT
    // ==========================================

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // ==========================================
    // HANDLE AVAILABILITY
    // ==========================================

    const handleAvailability = (event) => {
        setFormData((prev) => ({
            ...prev,
            availability: event.target.checked,
        }));
    };

    // ==========================================
    // SUBMIT
    // ==========================================

    const handleSubmit = (event) => {
        event.preventDefault();

        const updatedProperty = {
            id: property.id,
            ...formData,
        };

        console.log("Updated Property:", updatedProperty);

        /*
            Later, Django REST Framework will handle this.

            Example:

            await fetch(`/api/properties/${property.id}/`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
        */

        alert("Property updated successfully!");

        navigate("/dashboard");
    };

    return (
        <div className="min-h-[100svh] overflow-x-hidden bg-black text-white">

            {/* =====================================
                HEADER
            ====================================== */}

            <header
                className="
                    border-b
                    border-white/10
                    bg-white/5
                    backdrop-blur-xl
                "
            >
                <div
                    className="
                        mx-auto
                        flex
                        max-w-7xl
                        flex-col
                        gap-4
                        px-4
                        py-5
                        sm:px-6
                        md:flex-row
                        md:items-center
                        md:justify-between
                        lg:px-8
                    "
                >

                    <div className="min-w-0">

                        {/* BREADCRUMB */}

                        <div className="mb-2 flex flex-wrap items-center gap-2 text-sm">

                            <Link
                                to="/dashboard"
                                className="
                                    text-gray-400
                                    transition
                                    hover:text-green-400
                                "
                            >
                                Dashboard
                            </Link>

                            <i
                                className="fa fa-angle-right text-gray-600"
                                aria-hidden="true"
                            ></i>

                            <span className="text-green-400">
                                Edit Property
                            </span>

                        </div>

                        <h1
                            className="
                                bebas-neue
                                bg-gradient-to-r
                                from-white
                                to-gray-500
                                bg-clip-text
                                text-4xl
                                leading-none
                                text-transparent
                                sm:text-5xl
                                md:text-6xl
                            "
                        >
                            Edit Property
                        </h1>

                        <p className="mt-2 text-sm text-gray-400 sm:text-base">
                            Update your property information.
                        </p>

                    </div>

                    {/* BACK */}

                    <Link
                        to="/dashboard"
                        className="
                            inline-flex
                            min-h-12
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
                            text-gray-300
                            transition
                            hover:bg-white/10
                            hover:text-white
                            sm:w-auto
                        "
                    >
                        <i
                            className="fa fa-arrow-left"
                            aria-hidden="true"
                        ></i>

                        Back
                    </Link>

                </div>
            </header>

            {/* =====================================
                MAIN CONTENT
            ====================================== */}

            <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">

                <form onSubmit={handleSubmit}>

                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">

                        {/* =================================
                            LEFT - FORM
                        ================================== */}

                        <div className="min-w-0 space-y-6 lg:col-span-2 lg:space-y-8">

                            {/* =================================
                                PROPERTY INFORMATION
                            ================================== */}

                            <section
                                className="
                                    rounded-2xl
                                    border
                                    border-white/10
                                    bg-white/5
                                    p-5
                                    sm:p-6
                                    md:p-8
                                "
                            >

                                <div className="mb-6">

                                    <h2 className="bebas-neue text-3xl sm:text-4xl">
                                        Property Information
                                    </h2>

                                    <p className="mt-1 text-sm leading-6 text-gray-400">
                                        Basic information about this property.
                                    </p>

                                </div>

                                {/* TITLE */}

                                <div className="mb-5">

                                    <label
                                        htmlFor="title"
                                        className="mb-2 block text-sm text-gray-300 sm:text-base"
                                    >
                                        Property Title
                                    </label>

                                    <input
                                        id="title"
                                        type="text"
                                        name="title"
                                        value={formData.title}
                                        onChange={handleChange}
                                        placeholder="Enter property title"
                                        required
                                        className="
                                            min-h-12
                                            w-full
                                            rounded-xl
                                            border
                                            border-white/10
                                            bg-black/40
                                            px-4
                                            py-3
                                            text-white
                                            outline-none
                                            transition
                                            placeholder:text-gray-500
                                            focus:border-green-500
                                        "
                                    />

                                </div>

                                {/* LOCATION */}

                                <div className="mb-5">

                                    <label
                                        htmlFor="location"
                                        className="mb-2 block text-sm text-gray-300 sm:text-base"
                                    >
                                        Location
                                    </label>

                                    <div className="relative">

                                        <i
                                            className="
                                                fa
                                                fa-map-marker
                                                absolute
                                                left-4
                                                top-1/2
                                                -translate-y-1/2
                                                text-green-500
                                            "
                                            aria-hidden="true"
                                        ></i>

                                        <input
                                            id="location"
                                            type="text"
                                            name="location"
                                            value={formData.location}
                                            onChange={handleChange}
                                            placeholder="Enter property location"
                                            required
                                            className="
                                                min-h-12
                                                w-full
                                                rounded-xl
                                                border
                                                border-white/10
                                                bg-black/40
                                                py-3
                                                pl-11
                                                pr-4
                                                text-white
                                                outline-none
                                                transition
                                                placeholder:text-gray-500
                                                focus:border-green-500
                                            "
                                        />

                                    </div>

                                </div>

                                {/* COORDINATES */}

                                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                                    {/* LATITUDE */}

                                    <div>

                                        <label
                                            htmlFor="latitude"
                                            className="mb-2 block text-sm text-gray-300 sm:text-base"
                                        >
                                            Latitude
                                        </label>

                                        <div className="relative">

                                            <i
                                                className="
                                                    fa
                                                    fa-map-marker
                                                    absolute
                                                    left-4
                                                    top-1/2
                                                    -translate-y-1/2
                                                    text-green-400
                                                "
                                                aria-hidden="true"
                                            ></i>

                                            <input
                                                id="latitude"
                                                type="number"
                                                name="latitude"
                                                value={formData.latitude}
                                                onChange={handleChange}
                                                placeholder="6.1451"
                                                step="any"
                                                required
                                                className="
                                                    min-h-12
                                                    w-full
                                                    rounded-xl
                                                    border
                                                    border-white/10
                                                    bg-black/40
                                                    py-3
                                                    pl-11
                                                    pr-4
                                                    text-white
                                                    outline-none
                                                    placeholder:text-gray-500
                                                    focus:border-green-500
                                                "
                                            />

                                        </div>

                                    </div>

                                    {/* LONGITUDE */}

                                    <div>

                                        <label
                                            htmlFor="longitude"
                                            className="mb-2 block text-sm text-gray-300 sm:text-base"
                                        >
                                            Longitude
                                        </label>

                                        <div className="relative">

                                            <i
                                                className="
                                                    fa
                                                    fa-map-marker
                                                    absolute
                                                    left-4
                                                    top-1/2
                                                    -translate-y-1/2
                                                    text-green-400
                                                "
                                                aria-hidden="true"
                                            ></i>

                                            <input
                                                id="longitude"
                                                type="number"
                                                name="longitude"
                                                value={formData.longitude}
                                                onChange={handleChange}
                                                placeholder="6.7859"
                                                step="any"
                                                required
                                                className="
                                                    min-h-12
                                                    w-full
                                                    rounded-xl
                                                    border
                                                    border-white/10
                                                    bg-black/40
                                                    py-3
                                                    pl-11
                                                    pr-4
                                                    text-white
                                                    outline-none
                                                    placeholder:text-gray-500
                                                    focus:border-green-500
                                                "
                                            />

                                        </div>

                                    </div>

                                </div>

                                <p className="mt-3 text-xs leading-5 text-gray-500">
                                    These coordinates are used by the property map.
                                </p>

                                {/* PRICE */}

                                <div className="mt-5">

                                    <label
                                        htmlFor="price"
                                        className="mb-2 block text-sm text-gray-300 sm:text-base"
                                    >
                                        Price
                                    </label>

                                    <div className="relative">

                                        <span
                                            className="
                                                absolute
                                                left-4
                                                top-1/2
                                                -translate-y-1/2
                                                font-bold
                                                text-green-400
                                            "
                                        >
                                            ₦
                                        </span>

                                        <input
                                            id="price"
                                            type="text"
                                            name="price"
                                            value={formData.price}
                                            onChange={handleChange}
                                            placeholder="e.g. 50000000"
                                            required
                                            className="
                                                min-h-12
                                                w-full
                                                rounded-xl
                                                border
                                                border-white/10
                                                bg-black/40
                                                py-3
                                                pl-10
                                                pr-4
                                                text-white
                                                outline-none
                                                placeholder:text-gray-500
                                                focus:border-green-500
                                            "
                                        />

                                    </div>

                                </div>

                                {/* TYPE + STATUS */}

                                <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">

                                    {/* TYPE */}

                                    <div>

                                        <label
                                            htmlFor="type"
                                            className="mb-2 block text-sm text-gray-300 sm:text-base"
                                        >
                                            Property Type
                                        </label>

                                        <select
                                            id="type"
                                            name="type"
                                            value={formData.type}
                                            onChange={handleChange}
                                            className="
                                                min-h-12
                                                w-full
                                                rounded-xl
                                                border
                                                border-white/10
                                                bg-black
                                                px-4
                                                py-3
                                                text-white
                                                outline-none
                                                focus:border-green-500
                                            "
                                        >
                                            <option value="House">House</option>
                                            <option value="Apartment">Apartment</option>
                                            <option value="Duplex">Duplex</option>
                                            <option value="Condo">Condo</option>
                                            <option value="Self Contain">
                                                Self Contain
                                            </option>
                                        </select>

                                    </div>

                                    {/* STATUS */}

                                    <div>

                                        <label
                                            htmlFor="status"
                                            className="mb-2 block text-sm text-gray-300 sm:text-base"
                                        >
                                            Property Status
                                        </label>

                                        <select
                                            id="status"
                                            name="status"
                                            value={formData.status}
                                            onChange={handleChange}
                                            className="
                                                min-h-12
                                                w-full
                                                rounded-xl
                                                border
                                                border-white/10
                                                bg-black
                                                px-4
                                                py-3
                                                text-white
                                                outline-none
                                                focus:border-green-500
                                            "
                                        >
                                            <option value="For Sale">For Sale</option>
                                            <option value="For Rent">For Rent</option>
                                            <option value="Sold">Sold</option>
                                            <option value="Rented">Rented</option>
                                        </select>

                                    </div>

                                </div>

                            </section>

                            {/* =================================
                                PROPERTY FEATURES
                            ================================== */}

                            <section
                                className="
                                    rounded-2xl
                                    border
                                    border-white/10
                                    bg-white/5
                                    p-5
                                    sm:p-6
                                    md:p-8
                                "
                            >

                                <div className="mb-6">

                                    <h2 className="bebas-neue text-3xl sm:text-4xl">
                                        Property Features
                                    </h2>

                                    <p className="mt-1 text-sm text-gray-400">
                                        Update the property's features and size.
                                    </p>

                                </div>

                                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">

                                    {/* BEDROOMS */}

                                    <div>

                                        <label
                                            htmlFor="beds"
                                            className="mb-2 block text-sm text-gray-300 sm:text-base"
                                        >
                                            Bedrooms
                                        </label>

                                        <div className="relative">

                                            <i
                                                className="
                                                    fa
                                                    fa-bed
                                                    absolute
                                                    left-4
                                                    top-1/2
                                                    -translate-y-1/2
                                                    text-green-500
                                                "
                                                aria-hidden="true"
                                            ></i>

                                            <input
                                                id="beds"
                                                type="number"
                                                name="beds"
                                                value={formData.beds}
                                                onChange={handleChange}
                                                min="0"
                                                className="
                                                    min-h-12
                                                    w-full
                                                    rounded-xl
                                                    border
                                                    border-white/10
                                                    bg-black/40
                                                    py-3
                                                    pl-11
                                                    pr-4
                                                    text-white
                                                    outline-none
                                                    focus:border-green-500
                                                "
                                            />

                                        </div>

                                    </div>

                                    {/* BATHROOMS */}

                                    <div>

                                        <label
                                            htmlFor="baths"
                                            className="mb-2 block text-sm text-gray-300 sm:text-base"
                                        >
                                            Bathrooms
                                        </label>

                                        <div className="relative">

                                            <i
                                                className="
                                                    fa
                                                    fa-bath
                                                    absolute
                                                    left-4
                                                    top-1/2
                                                    -translate-y-1/2
                                                    text-green-500
                                                "
                                                aria-hidden="true"
                                            ></i>

                                            <input
                                                id="baths"
                                                type="number"
                                                name="baths"
                                                value={formData.baths}
                                                onChange={handleChange}
                                                min="0"
                                                className="
                                                    min-h-12
                                                    w-full
                                                    rounded-xl
                                                    border
                                                    border-white/10
                                                    bg-black/40
                                                    py-3
                                                    pl-11
                                                    pr-4
                                                    text-white
                                                    outline-none
                                                    focus:border-green-500
                                                "
                                            />

                                        </div>

                                    </div>

                                    {/* SIZE */}

                                    <div>

                                        <label
                                            htmlFor="size"
                                            className="mb-2 block text-sm text-gray-300 sm:text-base"
                                        >
                                            Property Size
                                        </label>

                                        <div className="relative">

                                            <i
                                                className="
                                                    fa
                                                    fa-expand
                                                    absolute
                                                    left-4
                                                    top-1/2
                                                    -translate-y-1/2
                                                    text-green-500
                                                "
                                                aria-hidden="true"
                                            ></i>

                                            <input
                                                id="size"
                                                type="text"
                                                name="size"
                                                value={formData.size}
                                                onChange={handleChange}
                                                placeholder="e.g. 250 sqm"
                                                className="
                                                    min-h-12
                                                    w-full
                                                    rounded-xl
                                                    border
                                                    border-white/10
                                                    bg-black/40
                                                    py-3
                                                    pl-11
                                                    pr-4
                                                    text-white
                                                    outline-none
                                                    placeholder:text-gray-500
                                                    focus:border-green-500
                                                "
                                            />

                                        </div>

                                    </div>

                                </div>

                            </section>

                            {/* =================================
                                DESCRIPTION
                            ================================== */}

                            <section
                                className="
                                    rounded-2xl
                                    border
                                    border-white/10
                                    bg-white/5
                                    p-5
                                    sm:p-6
                                    md:p-8
                                "
                            >

                                <h2 className="bebas-neue mb-2 text-3xl sm:text-4xl">
                                    Description
                                </h2>

                                <p className="mb-5 text-sm leading-6 text-gray-400">
                                    Give potential clients more information.
                                </p>

                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    rows="7"
                                    placeholder="Describe this property..."
                                    className="
                                        w-full
                                        rounded-xl
                                        border
                                        border-white/10
                                        bg-black/40
                                        px-4
                                        py-4
                                        text-white
                                        outline-none
                                        transition
                                        placeholder:text-gray-500
                                        focus:border-green-500
                                        resize-none
                                    "
                                ></textarea>

                            </section>

                            {/* =================================
                                IMAGE
                            ================================== */}

                            <section
                                className="
                                    rounded-2xl
                                    border
                                    border-white/10
                                    bg-white/5
                                    p-5
                                    sm:p-6
                                    md:p-8
                                "
                            >

                                <h2 className="bebas-neue mb-2 text-3xl sm:text-4xl">
                                    Property Image
                                </h2>

                                <p className="mb-5 text-sm leading-6 text-gray-400">
                                    Update the property image path.
                                </p>

                                <input
                                    type="text"
                                    name="image"
                                    value={formData.image}
                                    onChange={handleChange}
                                    placeholder="/images/house.jpg"
                                    className="
                                        min-h-12
                                        w-full
                                        rounded-xl
                                        border
                                        border-white/10
                                        bg-black/40
                                        px-4
                                        py-3
                                        text-white
                                        outline-none
                                        placeholder:text-gray-500
                                        focus:border-green-500
                                    "
                                />

                            </section>

                        </div>

                        {/* =================================
                            RIGHT SIDEBAR
                        ================================== */}

                        <aside className="min-w-0">

                            <div className="space-y-6 lg:sticky lg:top-8">

                                {/* IMAGE PREVIEW */}

                                <section
                                    className="
                                        overflow-hidden
                                        rounded-2xl
                                        border
                                        border-white/10
                                        bg-white/5
                                    "
                                >

                                    <div className="relative h-56 bg-black/50 sm:h-64">

                                        {formData.image ? (

                                            <img
                                                src={formData.image}
                                                alt={
                                                    formData.title ||
                                                    "Property preview"
                                                }
                                                className="h-full w-full object-cover"
                                                onError={(event) => {
                                                    event.currentTarget.style.display =
                                                        "none";
                                                }}
                                            />

                                        ) : (

                                            <div
                                                className="
                                                    flex
                                                    h-full
                                                    flex-col
                                                    items-center
                                                    justify-center
                                                    text-gray-500
                                                "
                                            >
                                                <i
                                                    className="fa fa-image mb-3 text-4xl"
                                                    aria-hidden="true"
                                                ></i>

                                                <p className="text-sm">
                                                    No image preview
                                                </p>
                                            </div>

                                        )}

                                        <div
                                            className="
                                                absolute
                                                left-4
                                                top-4
                                                rounded-full
                                                bg-black/60
                                                px-3
                                                py-2
                                                text-xs
                                                backdrop-blur-md
                                                sm:text-sm
                                            "
                                        >
                                            Preview
                                        </div>

                                    </div>

                                    <div className="p-5">

                                        <h3 className="break-words text-lg font-bold sm:text-xl">
                                            {formData.title || "Property Title"}
                                        </h3>

                                        <p className="mt-2 flex items-start gap-2 break-words text-sm text-gray-400">
                                            <i
                                                className="fa fa-map-marker mt-1 shrink-0 text-green-500"
                                                aria-hidden="true"
                                            ></i>

                                            <span>
                                                {formData.location ||
                                                    "Property location"}
                                            </span>
                                        </p>

                                        <p className="mt-4 break-words text-xl font-bold text-green-400 sm:text-2xl">
                                            {formData.price
                                                ? `₦${formData.price}`
                                                : "Price"}
                                        </p>

                                    </div>

                                </section>

                                {/* AVAILABILITY */}

                                <section
                                    className="
                                        rounded-2xl
                                        border
                                        border-white/10
                                        bg-white/5
                                        p-5
                                        sm:p-6
                                    "
                                >

                                    <h3 className="mb-4 text-xl font-bold">
                                        Availability
                                    </h3>

                                    <label
                                        className="
                                            flex
                                            cursor-pointer
                                            items-center
                                            justify-between
                                            gap-4
                                        "
                                    >

                                        <div className="min-w-0">

                                            <p className="text-white">
                                                Property Available
                                            </p>

                                            <p className="mt-1 text-xs leading-5 text-gray-500 sm:text-sm">
                                                Allow clients to see this property.
                                            </p>

                                        </div>

                                        <input
                                            type="checkbox"
                                            checked={formData.availability}
                                            onChange={handleAvailability}
                                            className="
                                                h-5
                                                w-5
                                                shrink-0
                                                accent-green-500
                                            "
                                        />

                                    </label>

                                </section>

                                {/* ACTIONS */}

                                <section
                                    className="
                                        rounded-2xl
                                        border
                                        border-white/10
                                        bg-white/5
                                        p-5
                                        sm:p-6
                                    "
                                >

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
                                            py-4
                                            font-medium
                                            text-white
                                            transition
                                            hover:bg-green-400
                                        "
                                    >
                                        <i
                                            className="fa fa-save"
                                            aria-hidden="true"
                                        ></i>

                                        Save Changes
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => navigate("/dashboard")}
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
                                            py-4
                                            text-gray-300
                                            transition
                                            hover:bg-white/10
                                            hover:text-white
                                        "
                                    >
                                        <i
                                            className="fa fa-times"
                                            aria-hidden="true"
                                        ></i>

                                        Cancel
                                    </button>

                                </section>

                            </div>

                        </aside>

                    </div>

                </form>

            </main>

        </div>
    );
}

export default EditProperty;
