import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AddProperty() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: "",
        type: "House",
        status: "For Sale",
        price: "",
        location: "",
        latitude: "",
        longitude: "",
        beds: "",
        baths: "",
        size: "",
        description: "",
        image: "",
        availability: true,
        showcase: false,
    });

    const [imagePreview, setImagePreview] = useState("");

    // ==========================================
    // HANDLE INPUT
    // ==========================================

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    // ==========================================
    // HANDLE IMAGE
    // ==========================================

    const handleImageChange = (e) => {
        const file = e.target.files?.[0];

        if (!file) return;

        const imageUrl = URL.createObjectURL(file);

        setImagePreview(imageUrl);

        setFormData((prev) => ({
            ...prev,
            image: imageUrl,
        }));
    };

    // ==========================================
    // SUBMIT
    // ==========================================

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("New Property:", formData);

        // Later:
        // Send formData to Django API

        alert("Property added successfully!");

        navigate("/dashboard");
    };

    return (
        <div className="min-h-[100svh] overflow-x-hidden bg-black text-white">

            {/* =====================================
                PAGE CONTAINER
            ====================================== */}

            <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">

                {/* =====================================
                    HEADER
                ====================================== */}

                <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">

                    <div className="min-w-0">

                        <div className="mb-3 flex items-center gap-2">

                            <span
                                className="
                                    inline-flex
                                    items-center
                                    gap-2
                                    rounded-full
                                    border
                                    border-green-500/20
                                    bg-green-500/10
                                    px-4
                                    py-2
                                    text-sm
                                    text-green-400
                                "
                            >
                                <i className="fa fa-plus" aria-hidden="true"></i>

                                Add Property
                            </span>

                        </div>

                        <h1
                            className="
                                bebas-neue
                                text-4xl
                                font-black
                                leading-none
                                bg-gradient-to-r
                                from-white
                                to-gray-500
                                bg-clip-text
                                text-transparent
                                sm:text-5xl
                                md:text-6xl
                                lg:text-7xl
                            "
                        >
                            Add New Property
                        </h1>

                        <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-400 sm:text-base lg:text-lg">
                            Add a new property to your listings.
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
                            border-white/10
                            bg-white/5
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
                        <i className="fa fa-arrow-left" aria-hidden="true"></i>

                        Back to Dashboard
                    </Link>

                </div>

                {/* =====================================
                    FORM
                ====================================== */}

                <form onSubmit={handleSubmit}>

                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">

                        {/* =================================
                            LEFT SIDE
                        ================================== */}

                        <div className="min-w-0 space-y-6 lg:col-span-2 lg:space-y-8">

                            {/* =================================
                                BASIC INFORMATION
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

                                    <h2 className="text-xl font-bold sm:text-2xl">
                                        Basic Information
                                    </h2>

                                    <p className="mt-1 text-sm leading-6 text-gray-400">
                                        Enter the main information about this property.
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
                                        placeholder="e.g. Modern 4 Bedroom Duplex"
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
                                            placeholder:text-gray-500
                                            focus:border-green-500
                                        "
                                    />

                                </div>

                                {/* TYPE + STATUS */}

                                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

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
                                            <option value="Self Contain">Self Contain</option>
                                        </select>

                                    </div>

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
                                        </select>

                                    </div>

                                </div>

                            </section>

                            {/* =================================
                                PRICE & LOCATION
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

                                    <h2 className="text-xl font-bold sm:text-2xl">
                                        Price & Location
                                    </h2>

                                    <p className="mt-1 text-sm leading-6 text-gray-400">
                                        Tell clients where the property is and how much it costs.
                                    </p>

                                </div>

                                {/* PRICE */}

                                <div className="mb-5">

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
                                            type="number"
                                            name="price"
                                            value={formData.price}
                                            onChange={handleChange}
                                            placeholder="25000000"
                                            min="0"
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
                                                text-green-400
                                            "
                                            aria-hidden="true"
                                        ></i>

                                        <input
                                            id="location"
                                            type="text"
                                            name="location"
                                            value={formData.location}
                                            onChange={handleChange}
                                            placeholder="Awka, Anambra"
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
                                    Coordinates are used to display the property's location on the map.
                                </p>

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

                                <h2 className="mb-6 text-xl font-bold sm:text-2xl">
                                    Property Features
                                </h2>

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
                                                    text-green-400
                                                "
                                                aria-hidden="true"
                                            ></i>

                                            <input
                                                id="beds"
                                                type="number"
                                                name="beds"
                                                value={formData.beds}
                                                onChange={handleChange}
                                                placeholder="4"
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
                                                    placeholder:text-gray-500
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
                                                    text-green-400
                                                "
                                                aria-hidden="true"
                                            ></i>

                                            <input
                                                id="baths"
                                                type="number"
                                                name="baths"
                                                value={formData.baths}
                                                onChange={handleChange}
                                                placeholder="3"
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
                                                    placeholder:text-gray-500
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
                                                    text-green-400
                                                "
                                                aria-hidden="true"
                                            ></i>

                                            <input
                                                id="size"
                                                type="text"
                                                name="size"
                                                value={formData.size}
                                                onChange={handleChange}
                                                placeholder="450 sqm"
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

                                <h2 className="mb-6 text-xl font-bold sm:text-2xl">
                                    Property Description
                                </h2>

                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    rows="7"
                                    placeholder="Describe the property, its features, nearby locations and other important information..."
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
                                        placeholder:text-gray-500
                                        focus:border-green-500
                                        resize-none
                                    "
                                />

                            </section>

                        </div>

                        {/* =================================
                            RIGHT SIDE
                        ================================== */}

                        <div className="min-w-0 space-y-6 lg:space-y-8">

                            {/* =================================
                                PROPERTY IMAGE
                            ================================== */}

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

                                <h2 className="text-xl font-bold sm:text-2xl">
                                    Property Image
                                </h2>

                                <p className="mb-5 mt-2 text-sm leading-6 text-gray-400">
                                    Upload a clear image of the property.
                                </p>

                                {/* PREVIEW */}

                                <div
                                    className="
                                        relative
                                        h-56
                                        w-full
                                        overflow-hidden
                                        rounded-xl
                                        border
                                        border-white/10
                                        bg-black/50
                                        sm:h-64
                                    "
                                >

                                    {imagePreview ? (

                                        <img
                                            src={imagePreview}
                                            alt="Property preview"
                                            className="h-full w-full object-cover"
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
                                                className="fa fa-image mb-3 text-4xl sm:text-5xl"
                                                aria-hidden="true"
                                            ></i>

                                            <p className="text-sm">
                                                No image selected
                                            </p>

                                        </div>

                                    )}

                                </div>

                                {/* UPLOAD */}

                                <label
                                    className="
                                        mt-4
                                        flex
                                        min-h-12
                                        w-full
                                        cursor-pointer
                                        items-center
                                        justify-center
                                        gap-2
                                        rounded-xl
                                        bg-green-500
                                        py-3
                                        text-sm
                                        font-medium
                                        text-white
                                        transition
                                        hover:bg-green-400
                                    "
                                >

                                    <i
                                        className="fa fa-upload"
                                        aria-hidden="true"
                                    ></i>

                                    Choose Image

                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                        className="hidden"
                                    />

                                </label>

                            </section>

                            {/* =================================
                                PROPERTY SETTINGS
                            ================================== */}

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

                                <h2 className="mb-6 text-xl font-bold sm:text-2xl">
                                    Property Settings
                                </h2>

                                {/* AVAILABLE */}

                                <label
                                    className="
                                        flex
                                        cursor-pointer
                                        items-center
                                        justify-between
                                        gap-4
                                        rounded-xl
                                        border
                                        border-white/10
                                        bg-black/30
                                        p-4
                                    "
                                >

                                    <div className="flex min-w-0 items-center gap-3">

                                        <i
                                            className="fa fa-check-circle shrink-0 text-xl text-green-400"
                                            aria-hidden="true"
                                        ></i>

                                        <div className="min-w-0">

                                            <p className="font-medium">
                                                Available
                                            </p>

                                            <p className="text-xs leading-5 text-gray-500 sm:text-sm">
                                                Property can be viewed by clients.
                                            </p>

                                        </div>

                                    </div>

                                    <input
                                        type="checkbox"
                                        name="availability"
                                        checked={formData.availability}
                                        onChange={handleChange}
                                        className="h-5 w-5 shrink-0 accent-green-500"
                                    />

                                </label>

                                {/* SHOWCASE */}

                                <label
                                    className="
                                        mt-4
                                        flex
                                        cursor-pointer
                                        items-center
                                        justify-between
                                        gap-4
                                        rounded-xl
                                        border
                                        border-white/10
                                        bg-black/30
                                        p-4
                                    "
                                >

                                    <div className="flex min-w-0 items-center gap-3">

                                        <i
                                            className="fa fa-star shrink-0 text-xl text-green-400"
                                            aria-hidden="true"
                                        ></i>

                                        <div className="min-w-0">

                                            <p className="font-medium">
                                                Featured Property
                                            </p>

                                            <p className="text-xs leading-5 text-gray-500 sm:text-sm">
                                                Show this property on the homepage.
                                            </p>

                                        </div>

                                    </div>

                                    <input
                                        type="checkbox"
                                        name="showcase"
                                        checked={formData.showcase}
                                        onChange={handleChange}
                                        className="h-5 w-5 shrink-0 accent-green-500"
                                    />

                                </label>

                            </section>

                            {/* =================================
                                ACTIONS
                            ================================== */}

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
                                        px-4
                                        py-4
                                        text-base
                                        font-semibold
                                        text-white
                                        transition
                                        hover:bg-green-400
                                        sm:text-lg
                                    "
                                >

                                    <i
                                        className="fa fa-plus-circle"
                                        aria-hidden="true"
                                    ></i>

                                    Add Property
                                </button>

                                <Link
                                    to="/dashboard"
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
                                        border-white/10
                                        py-4
                                        text-gray-300
                                        transition
                                        hover:bg-white/5
                                        hover:text-white
                                    "
                                >
                                    Cancel
                                </Link>

                            </section>

                        </div>

                    </div>

                </form>

            </main>

        </div>
    );
}

export default AddProperty;