import { Link } from "react-router-dom";

function PageNotFound() {
    return (
        <div className="relative min-h-[100svh] overflow-hidden bg-black py-10 text-white sm:py-16 lg:py-20">

            {/* Background Glow */}
            <div className="pointer-events-none absolute inset-0">

                <div
                    className="
                        absolute
                        left-[-80px]
                        top-20
                        h-52
                        w-52
                        rounded-full
                        bg-green-500/10
                        blur-3xl
                        sm:left-10
                        sm:h-72
                        sm:w-72
                    "
                />

                <div
                    className="
                        absolute
                        bottom-10
                        right-[-80px]
                        h-52
                        w-52
                        rounded-full
                        bg-green-500/10
                        blur-3xl
                        sm:right-10
                        sm:h-72
                        sm:w-72
                    "
                />

            </div>

            {/* Main Content */}
            <div
                className="
                    relative
                    z-10
                    flex
                    min-h-[100svh]
                    items-center
                    justify-center
                    px-4
                    sm:px-6
                "
            >

                <div className="w-full max-w-3xl text-center">

                    {/* Icon */}
                    <div className="mb-5 sm:mb-6">

                        <div
                            className="
                                mx-auto
                                flex
                                h-20
                                w-20
                                items-center
                                justify-center
                                rounded-full
                                border
                                border-green-500/20
                                bg-green-500/10
                                shadow-xl
                                backdrop-blur-md
                                sm:h-24
                                sm:w-24
                            "
                        >
                            <i
                                className="
                                    fa
                                    fa-home
                                    text-3xl
                                    text-green-400
                                    sm:text-4xl
                                "
                            />
                        </div>

                    </div>

                    {/* 404 */}
                    <h1
                        className="
                            bebas-neue
                            text-[90px]
                            leading-none
                            font-black
                            bg-gradient-to-r
                            from-green-400
                            via-white
                            to-gray-500
                            bg-clip-text
                            text-transparent
                            sm:text-[130px]
                            md:text-[180px]
                        "
                    >
                        404
                    </h1>

                    {/* Title */}
                    <h2
                        className="
                            roboto-condensed
                            mt-3
                            text-3xl
                            font-black
                            capitalize
                            sm:mt-4
                            sm:text-4xl
                            md:text-6xl
                        "
                    >
                        Page Not Found
                    </h2>

                    {/* Description */}
                    <p
                        className="
                            playwrite-nz
                            mx-auto
                            mt-4
                            max-w-2xl
                            text-base
                            leading-relaxed
                            text-gray-400
                            sm:mt-5
                            sm:text-lg
                            md:text-2xl
                        "
                    >
                        Sorry, the property you're looking for doesn't
                        exist or the page may have been moved.
                    </p>

                    {/* Buttons */}
                    <div
                        className="
                            mx-auto
                            mt-7
                            flex
                            w-full
                            max-w-md
                            flex-col
                            items-stretch
                            justify-center
                            gap-3
                            sm:mt-8
                            sm:max-w-none
                            sm:flex-row
                            sm:items-center
                            sm:gap-4
                        "
                    >

                        {/* Home */}
                        <Link
                            to="/"
                            className="
                                flex
                                min-h-12
                                w-full
                                items-center
                                justify-center
                                gap-2
                                rounded-full
                                border
                                border-green-400/30
                                bg-green-500
                                px-6
                                py-3
                                text-base
                                text-white
                                shadow-lg
                                transition
                                duration-300
                                hover:scale-105
                                hover:bg-green-400
                                sm:w-auto
                                sm:px-7
                                sm:text-lg
                            "
                        >
                            <i className="fa fa-home" />
                            Back Home
                        </Link>

                        {/* Properties */}
                        <Link
                            to="/properties"
                            className="
                                flex
                                min-h-12
                                w-full
                                items-center
                                justify-center
                                gap-2
                                rounded-full
                                border
                                border-white/20
                                bg-white/5
                                px-6
                                py-3
                                text-base
                                text-white
                                shadow-lg
                                backdrop-blur-md
                                transition
                                duration-300
                                hover:scale-105
                                hover:bg-white/10
                                sm:w-auto
                                sm:px-7
                                sm:text-lg
                            "
                        >
                            <i className="fa fa-building" />
                            View Properties
                        </Link>

                    </div>

                    {/* Small Message */}
                    <div className="mt-8 sm:mt-10">

                        <p
                            className="
                                roboto-condensed-light
                                px-4
                                text-xs
                                text-gray-500
                                sm:text-sm
                            "
                        >
                            House Agent • Find a home that fits your life.
                        </p>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default PageNotFound;