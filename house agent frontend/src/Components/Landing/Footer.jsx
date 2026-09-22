
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="bg-black text-white border-t border-white/10">

            {/* ================================
                MAIN FOOTER
            ================================= */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16">

                <div
                    className="
                        grid
                        grid-cols-1
                        sm:grid-cols-2
                        lg:grid-cols-4
                        gap-10
                        lg:gap-8
                    "
                >

                    {/* ================================
                        BRAND
                    ================================= */}
                    <div className="sm:col-span-2 lg:col-span-1">

                        <Link
                            to="/"
                            className="
                                inline-flex
                                items-center
                                text-3xl
                                sm:text-4xl
                                font-black
                                bebas-neue
                                hover:scale-105
                                transition
                            "
                        >

                            <i
                                className="
                                    fa fa-home
                                    text-green-500
                                    mr-2
                                "
                            ></i>

                            My Comfort

                        </Link>


                        <p
                            className="
                                playwrite-nz-light
                                text-gray-400
                                text-sm
                                sm:text-base
                                leading-7
                                mt-5
                                max-w-sm
                            "
                        >
                            Find verified properties to buy, sell, or rent.
                            Connect with trusted property owners and agents
                            without the usual agent wahala.
                        </p>


                        {/* SOCIAL ICONS */}
                        <div className="flex items-center gap-3 mt-6">

                            <a
                                href="#"
                                aria-label="Facebook"
                                className="
                                    w-10
                                    h-10
                                    shrink-0
                                    flex
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-white/5
                                    border
                                    border-white/10
                                    text-gray-400
                                    hover:text-green-400
                                    hover:border-green-500/40
                                    hover:bg-green-500/10
                                    hover:scale-110
                                    transition
                                "
                            >
                                <i className="fa fa-facebook"></i>
                            </a>


                            <a
                                href="#"
                                aria-label="Instagram"
                                className="
                                    w-10
                                    h-10
                                    shrink-0
                                    flex
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-white/5
                                    border
                                    border-white/10
                                    text-gray-400
                                    hover:text-green-400
                                    hover:border-green-500/40
                                    hover:bg-green-500/10
                                    hover:scale-110
                                    transition
                                "
                            >
                                <i className="fa fa-instagram"></i>
                            </a>


                            <a
                                href="#"
                                aria-label="Twitter"
                                className="
                                    w-10
                                    h-10
                                    shrink-0
                                    flex
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-white/5
                                    border
                                    border-white/10
                                    text-gray-400
                                    hover:text-green-400
                                    hover:border-green-500/40
                                    hover:bg-green-500/10
                                    hover:scale-110
                                    transition
                                "
                            >
                                <i className="fa fa-twitter"></i>
                            </a>


                            <a
                                href="#"
                                aria-label="WhatsApp"
                                className="
                                    w-10
                                    h-10
                                    shrink-0
                                    flex
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-white/5
                                    border
                                    border-white/10
                                    text-gray-400
                                    hover:text-green-400
                                    hover:border-green-500/40
                                    hover:bg-green-500/10
                                    hover:scale-110
                                    transition
                                "
                            >
                                <i className="fa fa-whatsapp"></i>
                            </a>

                        </div>

                    </div>


                    {/* ================================
                        QUICK LINKS
                    ================================= */}
                    <FooterColumn title="Quick Links">

                        <FooterLink to="/" text="Home" />

                        <FooterLink
                            to="/properties"
                            text="Properties"
                        />

                        <FooterLink
                            to="/buy"
                            text="Buy Property"
                        />

                        <FooterLink
                            to="/sell"
                            text="Sell Property"
                        />

                        <FooterLink
                            to="/rent"
                            text="Rent Property"
                        />

                        <FooterLink
                            to="/about"
                            text="About Us"
                        />

                    </FooterColumn>


                    {/* ================================
                        SERVICES
                    ================================= */}
                    <FooterColumn title="Our Services">

                        <FooterLink
                            to="/properties"
                            text="Property Search"
                        />

                        <FooterLink
                            to="/buy"
                            text="Buy a Home"
                        />

                        <FooterLink
                            to="/rent"
                            text="Rent a Home"
                        />

                        <FooterLink
                            to="/sell"
                            text="Sell Your Property"
                        />

                        <FooterLink
                            to="/agentt"
                            text="Find an Agent"
                        />

                        <FooterLink
                            to="/aiagent"
                            text="AI Property Assistant"
                        />

                    </FooterColumn>


                    {/* ================================
                        CONTACT
                    ================================= */}
                    <div>

                        <h3
                            className="
                                bebas-neue
                                text-2xl
                                text-white
                                mb-5
                            "
                        >
                            Contact Us
                        </h3>


                        <div className="flex flex-col gap-5">

                            {/* LOCATION */}
                            <div className="flex items-start gap-3">

                                <i
                                    className="
                                        fa fa-map-marker
                                        text-green-500
                                        text-xl
                                        mt-1
                                        shrink-0
                                    "
                                ></i>

                                <p className="text-gray-400 text-sm sm:text-base">
                                    Anambra State,
                                    <br />
                                    Nigeria
                                </p>

                            </div>


                            {/* PHONE */}
                            <div className="flex items-center gap-3 min-w-0">

                                <i
                                    className="
                                        fa fa-phone
                                        text-green-500
                                        text-xl
                                        shrink-0
                                    "
                                ></i>

                                <a
                                    href="tel:+2340000000000"
                                    className="
                                        text-gray-400
                                        text-sm
                                        sm:text-base
                                        hover:text-green-400
                                        transition
                                        break-all
                                    "
                                >
                                    +234 000 000 0000
                                </a>

                            </div>


                            {/* EMAIL */}
                            <div className="flex items-center gap-3 min-w-0">

                                <i
                                    className="
                                        fa fa-envelope
                                        text-green-500
                                        text-xl
                                        shrink-0
                                    "
                                ></i>

                                <a
                                    href="mailto:info@mycomfort.com"
                                    className="
                                        text-gray-400
                                        text-sm
                                        sm:text-base
                                        hover:text-green-400
                                        transition
                                        break-all
                                    "
                                >
                                    info@mycomfort.com
                                </a>

                            </div>


                            {/* BUTTON */}
                            <Link
                                to="/getstarted"
                                className="
                                    inline-flex
                                    items-center
                                    justify-center
                                    gap-2
                                    w-full
                                    sm:w-fit
                                    min-h-11
                                    px-5
                                    py-3
                                    rounded-full
                                    bg-green-500
                                    text-white
                                    shadow-lg
                                    hover:bg-green-400
                                    hover:scale-105
                                    active:scale-[0.98]
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


            {/* ================================
                AI SECTION
            ================================= */}
            <div className="border-t border-white/10">

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-10">

                    <div
                        className="
                            flex
                            flex-col
                            lg:flex-row
                            lg:items-center
                            lg:justify-between
                            gap-6
                            p-5
                            sm:p-6
                            md:p-8
                            rounded-2xl
                            bg-white/5
                            border
                            border-white/10
                        "
                    >

                        <div className="min-w-0">

                            <div className="flex items-start sm:items-center gap-3">

                                <i
                                    className="
                                        fa fa-comments
                                        text-green-400
                                        text-2xl
                                        shrink-0
                                    "
                                ></i>

                                <h3
                                    className="
                                        bebas-neue
                                        text-2xl
                                        sm:text-3xl
                                        text-white
                                        leading-tight
                                    "
                                >
                                    Need help finding a property?
                                </h3>

                            </div>


                            <p
                                className="
                                    text-gray-400
                                    text-sm
                                    sm:text-base
                                    leading-7
                                    mt-2
                                    max-w-2xl
                                "
                            >
                                Talk to our AI property assistant and
                                tell us what you're looking for.
                            </p>

                        </div>


                        <Link
                            to="/aiagent"
                            className="
                                inline-flex
                                items-center
                                justify-center
                                gap-2
                                w-full
                                lg:w-auto
                                min-h-11
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

                            Talk to AI Agent

                            <i className="fa fa-arrow-right"></i>

                        </Link>

                    </div>

                </div>

            </div>


            {/* ================================
                BOTTOM FOOTER
            ================================= */}
            <div className="border-t border-white/10">

                <div
                    className="
                        max-w-7xl
                        mx-auto
                        px-4
                        sm:px-6
                        lg:px-10
                        py-6
                        flex
                        flex-col
                        md:flex-row
                        items-center
                        justify-between
                        gap-4
                    "
                >

                    <p
                        className="
                            text-gray-500
                            text-xs
                            sm:text-sm
                            text-center
                            md:text-left
                        "
                    >
                        © {new Date().getFullYear()} My Comfort.
                        All rights reserved.
                    </p>


                    <div
                        className="
                            flex
                            flex-wrap
                            items-center
                            justify-center
                            gap-x-5
                            gap-y-2
                        "
                    >

                        <Link
                            to="/about"
                            className="
                                text-gray-500
                                text-xs
                                sm:text-sm
                                hover:text-green-400
                                transition
                            "
                        >
                            Privacy Policy
                        </Link>


                        <Link
                            to="/about"
                            className="
                                text-gray-500
                                text-xs
                                sm:text-sm
                                hover:text-green-400
                                transition
                            "
                        >
                            Terms
                        </Link>

                    </div>

                </div>

            </div>

        </footer>
    );
}


/* =========================================
   FOOTER COLUMN
========================================= */

function FooterColumn({ title, children }) {
    return (
        <div>

            <h3
                className="
                    bebas-neue
                    text-2xl
                    text-white
                    mb-5
                "
            >
                {title}
            </h3>

            <div className="flex flex-col gap-3">
                {children}
            </div>

        </div>
    );
}


/* =========================================
   FOOTER LINK
========================================= */

function FooterLink({ to, text }) {
    return (
        <Link
            to={to}
            className="
                inline-block
                w-fit
                text-gray-400
                text-sm
                sm:text-base
                hover:text-green-400
                hover:translate-x-1
                transition
            "
        >
            {text}
        </Link>
    );
}


export default Footer;
