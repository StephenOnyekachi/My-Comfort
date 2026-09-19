
import { Link, useNavigate, useParams } from "react-router-dom";
import agentsData from "../agentsData";

function AgentProfile() {
    const { id } = useParams();
    const navigate = useNavigate();

    const agent = agentsData.find(
        (item) => item.id === Number(id)
    );

    // Agent not found
    if (!agent) {
        return (
            <div className="min-h-[100svh] bg-black px-4 py-32 text-white">
                <div className="mx-auto max-w-3xl text-center">

                    <i className="fa fa-user-times text-5xl text-gray-600" />

                    <h1 className="bebas-neue mt-6 text-5xl">
                        Agent Not Found
                    </h1>

                    <p className="mt-3 text-gray-500">
                        The agent profile you are looking for does not exist.
                    </p>

                    <button
                        type="button"
                        onClick={() => navigate("/agent")}
                        className="
                            mt-7
                            rounded-full
                            bg-green-500
                            px-6
                            py-3
                            text-white
                            transition
                            hover:bg-green-400
                        "
                    >
                        Back to Agents
                    </button>

                </div>
            </div>
        );
    }

    return (
        <div className="min-h-[100svh] overflow-x-hidden bg-black text-white">

            {/* =========================================
                HEADER
            ========================================= */}
            <section className="px-4 pb-8 pt-24 sm:px-6 md:px-10">

                <div className="mx-auto max-w-7xl">

                    <button
                        type="button"
                        onClick={() => navigate("/agent")}
                        className="
                            flex
                            items-center
                            gap-2
                            text-sm
                            text-gray-400
                            transition
                            hover:text-green-400
                            sm:text-base
                        "
                    >
                        <i className="fa fa-arrow-left" />
                        Back to Agents
                    </button>

                </div>

            </section>


            {/* =========================================
                PROFILE
            ========================================= */}
            <section className="px-4 pb-16 sm:px-6 md:px-10">

                <div className="mx-auto max-w-7xl">

                    <div
                        className="
                            overflow-hidden
                            rounded-3xl
                            border
                            border-white/10
                            bg-white/5
                        "
                    >

                        <div className="grid lg:grid-cols-[420px_1fr]">

                            {/* =====================================
                                IMAGE
                            ====================================== */}
                            <div className="relative min-h-[420px] lg:min-h-[560px]">

                                <img
                                    src={agent.image}
                                    alt={agent.name}
                                    className="
                                        absolute
                                        inset-0
                                        h-full
                                        w-full
                                        object-cover
                                        brightness-[0.75]
                                    "
                                />

                                <div
                                    className="
                                        absolute
                                        inset-0
                                        bg-gradient-to-t
                                        from-black
                                        via-black/20
                                        to-transparent
                                    "
                                />

                                {/* Verified */}
                                {agent.verified && (
                                    <div
                                        className="
                                            absolute
                                            left-4
                                            top-4
                                            flex
                                            items-center
                                            gap-2
                                            rounded-full
                                            border
                                            border-white/10
                                            bg-black/60
                                            px-4
                                            py-2
                                            text-sm
                                            backdrop-blur-md
                                            sm:left-6
                                            sm:top-6
                                        "
                                    >
                                        <i className="fa fa-check-circle text-green-400" />
                                        <span>Verified Agent</span>
                                    </div>
                                )}

                                {/* Rating */}
                                <div
                                    className="
                                        absolute
                                        right-4
                                        top-4
                                        flex
                                        items-center
                                        gap-2
                                        rounded-full
                                        border
                                        border-white/10
                                        bg-black/60
                                        px-4
                                        py-2
                                        backdrop-blur-md
                                        sm:right-6
                                        sm:top-6
                                    "
                                >
                                    <i className="fa fa-star text-green-400" />
                                    <span>{agent.rating}</span>
                                </div>


                                {/* Name on image - mobile/desktop */}
                                <div
                                    className="
                                        absolute
                                        bottom-5
                                        left-5
                                        right-5
                                        sm:bottom-7
                                        sm:left-7
                                    "
                                >
                                    <p className="text-sm text-gray-300">
                                        Property Agent
                                    </p>

                                    <h1
                                        className="
                                            bebas-neue
                                            mt-1
                                            text-5xl
                                            leading-none
                                            sm:text-6xl
                                        "
                                    >
                                        {agent.name}
                                    </h1>
                                </div>

                            </div>


                            {/* =====================================
                                DETAILS
                            ====================================== */}
                            <div className="p-5 sm:p-8 md:p-10 lg:p-12">

                                <div className="max-w-3xl">

                                    {/* Role */}
                                    <p
                                        className="
                                            roboto-condensed-light
                                            text-lg
                                            text-green-400
                                            sm:text-xl
                                        "
                                    >
                                        {agent.role}
                                    </p>


                                    {/* Location */}
                                    <div className="mt-5 flex items-start gap-3">

                                        <i className="fa fa-map-marker mt-1 text-green-400" />

                                        <div>
                                            <p className="text-xs uppercase tracking-wider text-gray-500">
                                                Location
                                            </p>

                                            <p className="mt-1 text-base text-gray-300 sm:text-lg">
                                                {agent.location}
                                            </p>
                                        </div>

                                    </div>


                                    {/* =================================
                                        STATS
                                    ================================== */}
                                    <div
                                        className="
                                            mt-8
                                            grid
                                            grid-cols-1
                                            gap-3
                                            sm:grid-cols-3
                                        "
                                    >

                                        <div
                                            className="
                                                rounded-2xl
                                                border
                                                border-white/10
                                                bg-black/40
                                                p-5
                                            "
                                        >
                                            <i className="fa fa-home text-xl text-green-400" />

                                            <p className="mt-4 text-xs text-gray-500">
                                                Properties
                                            </p>

                                            <p className="mt-1 text-2xl font-bold">
                                                {agent.properties}
                                            </p>
                                        </div>


                                        <div
                                            className="
                                                rounded-2xl
                                                border
                                                border-white/10
                                                bg-black/40
                                                p-5
                                            "
                                        >
                                            <i className="fa fa-star text-xl text-green-400" />

                                            <p className="mt-4 text-xs text-gray-500">
                                                Rating
                                            </p>

                                            <p className="mt-1 text-2xl font-bold">
                                                {agent.rating}
                                            </p>
                                        </div>


                                        <div
                                            className="
                                                rounded-2xl
                                                border
                                                border-white/10
                                                bg-black/40
                                                p-5
                                            "
                                        >
                                            <i className="fa fa-clock-o text-xl text-green-400" />

                                            <p className="mt-4 text-xs text-gray-500">
                                                Experience
                                            </p>

                                            <p className="mt-1 text-2xl font-bold">
                                                {agent.experience}
                                            </p>
                                        </div>

                                    </div>


                                    {/* =================================
                                        CONTACT
                                    ================================== */}
                                    <div className="mt-8">

                                        <p className="text-xs uppercase tracking-wider text-gray-500">
                                            Contact Agent
                                        </p>

                                        <a
                                            href={`tel:${agent.phone}`}
                                            className="
                                                mt-3
                                                flex
                                                items-center
                                                gap-4
                                                rounded-2xl
                                                border
                                                border-white/10
                                                bg-black/40
                                                p-4
                                                transition
                                                hover:border-green-500/30
                                                hover:bg-white/5
                                            "
                                        >

                                            <div
                                                className="
                                                    flex
                                                    h-12
                                                    w-12
                                                    shrink-0
                                                    items-center
                                                    justify-center
                                                    rounded-full
                                                    bg-green-500
                                                "
                                            >
                                                <i className="fa fa-phone" />
                                            </div>

                                            <div>
                                                <p className="text-xs text-gray-500">
                                                    Phone
                                                </p>

                                                <p className="mt-1 text-base text-white sm:text-lg">
                                                    {agent.phone}
                                                </p>
                                            </div>

                                        </a>

                                    </div>


                                    {/* =================================
                                        ACTIONS
                                    ================================== */}
                                    <div
                                        className="
                                            mt-8
                                            flex
                                            flex-col
                                            gap-3
                                            sm:flex-row
                                        "
                                    >

                                        <a
                                            href={`tel:${agent.phone}`}
                                            className="
                                                flex
                                                min-h-12
                                                flex-1
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
                                            "
                                        >
                                            <i className="fa fa-phone" />
                                            Call Agent
                                        </a>


                                        <Link
                                            to="/properties"
                                            className="
                                                flex
                                                min-h-12
                                                flex-1
                                                items-center
                                                justify-center
                                                gap-2
                                                rounded-full
                                                border
                                                border-white/20
                                                px-6
                                                py-3
                                                text-white
                                                transition
                                                hover:border-green-400
                                                hover:text-green-400
                                            "
                                        >
                                            <i className="fa fa-home" />
                                            View Properties
                                        </Link>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

        </div>
    );
}

export default AgentProfile;
