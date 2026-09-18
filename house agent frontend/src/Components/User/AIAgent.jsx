import { useState } from "react";
import { Link } from "react-router-dom";
import housesData from "../housesData";

function AIAgent() {
    const [message, setMessage] = useState("");

    const [messages, setMessages] = useState([
        {
            id: 1,
            sender: "ai",
            text: "Hello 👋 I'm your ConnectFlow Homes AI Agent. I can help you find a property based on your budget, location, property type and whether you want to buy or rent.",
        },
    ]);

    const [searchData, setSearchData] = useState({
        purpose: "",
        location: "",
        propertyType: "",
        budget: "",
    });

    // =========================================
    // SEND MESSAGE
    // =========================================

    const sendMessage = () => {
        const trimmedMessage = message.trim();

        if (!trimmedMessage) return;

        const userMessage = {
            id: Date.now(),
            sender: "user",
            text: trimmedMessage,
        };

        setMessages((previous) => [...previous, userMessage]);

        const userText = trimmedMessage.toLowerCase();

        let aiReply = "";

        // =====================================
        // SIMPLE AI LOGIC
        // =====================================

        if (
            userText.includes("buy") ||
            userText.includes("purchase")
        ) {
            aiReply =
                "Great! I can help you find a property to buy. What location are you interested in and what is your budget?";

            setSearchData((previous) => ({
                ...previous,
                purpose: "Buy",
            }));
        } else if (
            userText.includes("rent") ||
            userText.includes("rental")
        ) {
            aiReply =
                "Sure! I can help you find a property for rent. Tell me your preferred location and your budget.";

            setSearchData((previous) => ({
                ...previous,
                purpose: "Rent",
            }));
        } else if (
            userText.includes("sell") ||
            userText.includes("selling")
        ) {
            aiReply =
                "I can also help you list your property for sale. Tell me about the property and its location.";

            setSearchData((previous) => ({
                ...previous,
                purpose: "Sell",
            }));
        } else if (
            userText.includes("hello") ||
            userText.includes("hi")
        ) {
            aiReply =
                "Hello 👋 What type of property are you looking for today?";
        } else if (
            userText.includes("house") ||
            userText.includes("home")
        ) {
            aiReply =
                "Perfect. What location would you like the house to be in? For example, Awka, Nnewi or Onitsha.";

            setSearchData((previous) => ({
                ...previous,
                propertyType: "House",
            }));
        } else if (
            userText.includes("apartment") ||
            userText.includes("flat")
        ) {
            aiReply =
                "Great choice. What location and budget do you have in mind?";

            setSearchData((previous) => ({
                ...previous,
                propertyType: "Apartment",
            }));
        } else if (
            userText.includes("awka") ||
            userText.includes("onitsha") ||
            userText.includes("nnewi")
        ) {
            aiReply =
                "Nice. I can search properties around that location. What is your maximum budget?";

            setSearchData((previous) => ({
                ...previous,
                location: trimmedMessage,
            }));
        } else if (
            userText.includes("budget") ||
            userText.includes("million") ||
            userText.includes("₦") ||
            userText.includes("naira")
        ) {
            aiReply =
                "Thanks. I have your budget. I can now narrow down properties that match your requirements.";

            setSearchData((previous) => ({
                ...previous,
                budget: trimmedMessage,
            }));
        } else {
            aiReply =
                "I understand. Tell me your preferred location, property type, budget and whether you want to buy or rent, and I'll help you narrow down the options.";
        }

        setTimeout(() => {
            setMessages((previous) => [
                ...previous,
                {
                    id: Date.now() + 1,
                    sender: "ai",
                    text: aiReply,
                },
            ]);
        }, 500);

        setMessage("");
    };

    // =========================================
    // QUICK QUESTIONS
    // =========================================

    const quickMessage = (text) => {
        const userMessage = {
            id: Date.now(),
            sender: "user",
            text,
        };

        setMessages((previous) => [...previous, userMessage]);

        let reply = "Tell me more about what you are looking for.";

        if (text === "I want to buy a house") {
            reply =
                "Excellent. Which location would you prefer and what is your budget?";

            setSearchData((previous) => ({
                ...previous,
                purpose: "Buy",
                propertyType: "House",
            }));
        }

        if (text === "I want to rent") {
            reply =
                "Sure. Which area are you interested in and how much can you spend monthly or yearly?";

            setSearchData((previous) => ({
                ...previous,
                purpose: "Rent",
            }));
        }

        if (text === "Show me properties") {
            reply =
                "Absolutely. Tell me your preferred location and property type so I can narrow down the listings.";
        }

        setTimeout(() => {
            setMessages((previous) => [
                ...previous,
                {
                    id: Date.now() + 1,
                    sender: "ai",
                    text: reply,
                },
            ]);
        }, 500);
    };

    return (
        <div className="min-h-[100svh] overflow-x-hidden bg-black text-white">

            {/* =========================================
                HERO
            ========================================= */}
            <section className="relative flex min-h-[520px] items-center overflow-hidden sm:min-h-[580px]">

                <img
                    src="/images/1.jpeg"
                    alt="AI property assistant"
                    loading="lazy"
                    className="
                        absolute
                        inset-0
                        h-full
                        w-full
                        object-cover
                        brightness-[0.3]
                    "
                />

                <div className="absolute inset-0 bg-black/80" />

                <div
                    className="
                        absolute
                        -right-32
                        -top-32
                        h-64
                        w-64
                        rounded-full
                        bg-green-500/20
                        blur-3xl
                        sm:-right-40
                        sm:-top-40
                        sm:h-96
                        sm:w-96
                    "
                />

                <div className="relative z-10 w-full px-4 py-20 sm:px-6 md:px-10">

                    <div className="mx-auto max-w-7xl">

                        <div className="max-w-4xl">

                            {/* LABEL */}
                            <div
                                className="
                                    mb-5
                                    inline-flex
                                    items-center
                                    gap-2
                                    rounded-full
                                    border
                                    border-green-500/20
                                    bg-green-500/10
                                    px-3
                                    py-2
                                    backdrop-blur-md
                                    sm:mb-6
                                    sm:px-4
                                "
                            >
                                <i className="fa fa-terminal text-green-400" />

                                <span className="text-sm text-gray-300 sm:text-base">
                                    ConnectFlow AI
                                </span>
                            </div>

                            {/* TITLE */}
                            <h1
                                className="
                                    bebas-neue
                                    text-5xl
                                    font-black
                                    leading-none
                                    bg-gradient-to-r
                                    from-white
                                    to-gray-500
                                    bg-clip-text
                                    text-transparent
                                    sm:text-6xl
                                    md:text-8xl
                                "
                            >
                                Your AI Property Agent
                            </h1>

                            <p
                                className="
                                    playwrite-nz
                                    mt-5
                                    max-w-3xl
                                    text-base
                                    leading-relaxed
                                    text-gray-300
                                    sm:text-xl
                                    md:text-2xl
                                "
                            >
                                Tell us what kind of property you need.
                                Our AI assistant will help you find homes
                                that match your lifestyle, location and budget.
                            </p>

                        </div>

                    </div>

                </div>

            </section>

            {/* =========================================
                MAIN AI AREA
            ========================================= */}
            <section className="px-4 py-8 sm:px-6 sm:py-12 md:px-10">

                <div
                    className="
                        mx-auto
                        grid
                        max-w-7xl
                        grid-cols-1
                        gap-6
                        lg:grid-cols-4
                    "
                >

                    {/* =====================================
                        LEFT SIDEBAR
                    ====================================== */}
                    <div className="lg:col-span-1">

                        <div
                            className="
                                rounded-2xl
                                border
                                border-white/10
                                bg-white/5
                                p-4
                                sm:p-5
                                lg:sticky
                                lg:top-24
                            "
                        >

                            {/* AI STATUS */}
                            <div className="mb-6 flex items-center gap-3">

                                <div
                                    className="
                                        flex
                                        h-11
                                        w-11
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-full
                                        border
                                        border-green-500/20
                                        bg-green-500/10
                                        sm:h-12
                                        sm:w-12
                                    "
                                >
                                    <i className="fa fa-robot text-lg text-green-400 sm:text-xl" />
                                </div>

                                <div className="min-w-0">

                                    <h3 className="font-bold text-lg">
                                        AI Agent
                                    </h3>

                                    <div className="flex items-center gap-2">

                                        <span
                                            className="
                                                h-2
                                                w-2
                                                rounded-full
                                                bg-green-400
                                            "
                                        />

                                        <span className="text-sm text-gray-400">
                                            Online
                                        </span>

                                    </div>

                                </div>

                            </div>

                            {/* QUICK QUESTIONS */}
                            <h4
                                className="
                                    roboto-condensed-light
                                    mb-3
                                    text-gray-400
                                "
                            >
                                Start a conversation
                            </h4>

                            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">

                                <button
                                    type="button"
                                    onClick={() =>
                                        quickMessage("I want to buy a house")
                                    }
                                    className="
                                        min-h-11
                                        rounded-xl
                                        border
                                        border-white/10
                                        bg-white/5
                                        p-3
                                        text-left
                                        text-sm
                                        transition
                                        hover:border-green-500/40
                                        hover:bg-green-500/5
                                        sm:text-base
                                    "
                                >
                                    <i className="fa fa-home mr-2 text-green-400" />
                                    I want to buy a house
                                </button>

                                <button
                                    type="button"
                                    onClick={() =>
                                        quickMessage("I want to rent")
                                    }
                                    className="
                                        min-h-11
                                        rounded-xl
                                        border
                                        border-white/10
                                        bg-white/5
                                        p-3
                                        text-left
                                        text-sm
                                        transition
                                        hover:border-green-500/40
                                        hover:bg-green-500/5
                                        sm:text-base
                                    "
                                >
                                    <i className="fa fa-key mr-2 text-green-400" />
                                    I want to rent
                                </button>

                                <button
                                    type="button"
                                    onClick={() =>
                                        quickMessage("Show me properties")
                                    }
                                    className="
                                        min-h-11
                                        rounded-xl
                                        border
                                        border-white/10
                                        bg-white/5
                                        p-3
                                        text-left
                                        text-sm
                                        transition
                                        hover:border-green-500/40
                                        hover:bg-green-500/5
                                        sm:text-base
                                    "
                                >
                                    <i className="fa fa-building mr-2 text-green-400" />
                                    Show me properties
                                </button>

                            </div>

                            {/* REQUIREMENTS */}
                            <div className="mt-8">

                                <h4
                                    className="
                                        roboto-condensed-light
                                        mb-3
                                        text-gray-400
                                    "
                                >
                                    Your requirements
                                </h4>

                                <div className="space-y-3">

                                    <div className="flex items-start justify-between gap-4 border-b border-white/5 pb-2">
                                        <span className="shrink-0 text-sm text-gray-500">
                                            Purpose
                                        </span>

                                        <span className="max-w-[60%] break-words text-right text-sm text-white">
                                            {searchData.purpose || "Not set"}
                                        </span>
                                    </div>

                                    <div className="flex items-start justify-between gap-4 border-b border-white/5 pb-2">
                                        <span className="shrink-0 text-sm text-gray-500">
                                            Location
                                        </span>

                                        <span className="max-w-[60%] break-words text-right text-sm text-white">
                                            {searchData.location || "Not set"}
                                        </span>
                                    </div>

                                    <div className="flex items-start justify-between gap-4 border-b border-white/5 pb-2">
                                        <span className="shrink-0 text-sm text-gray-500">
                                            Type
                                        </span>

                                        <span className="max-w-[60%] break-words text-right text-sm text-white">
                                            {searchData.propertyType || "Not set"}
                                        </span>
                                    </div>

                                    <div className="flex items-start justify-between gap-4">
                                        <span className="shrink-0 text-sm text-gray-500">
                                            Budget
                                        </span>

                                        <span className="max-w-[60%] break-words text-right text-sm text-white">
                                            {searchData.budget || "Not set"}
                                        </span>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                    {/* =====================================
                        CHAT
                    ====================================== */}
                    <div className="min-w-0 lg:col-span-3">

                        <div
                            className="
                                flex
                                h-[650px]
                                min-h-0
                                flex-col
                                overflow-hidden
                                rounded-2xl
                                border
                                border-white/10
                                bg-white/5
                                sm:h-[700px]
                            "
                        >

                            {/* CHAT HEADER */}
                            <div
                                className="
                                    flex
                                    shrink-0
                                    items-center
                                    justify-between
                                    gap-3
                                    border-b
                                    border-white/10
                                    bg-white/5
                                    p-4
                                    sm:p-5
                                "
                            >

                                <div className="flex min-w-0 items-center gap-3">

                                    <div
                                        className="
                                            flex
                                            h-10
                                            w-10
                                            shrink-0
                                            items-center
                                            justify-center
                                            rounded-full
                                            bg-green-500
                                            sm:h-11
                                            sm:w-11
                                        "
                                    >
                                        <i className="fa fa-robot text-lg text-black sm:text-xl" />
                                    </div>

                                    <div className="min-w-0">

                                        <h2 className="truncate font-bold">
                                            ConnectFlow AI
                                        </h2>

                                        <p className="text-xs text-green-400 sm:text-sm">
                                            Property Assistant
                                        </p>

                                    </div>

                                </div>

                                <div
                                    className="
                                        hidden
                                        shrink-0
                                        items-center
                                        gap-2
                                        text-xs
                                        text-gray-400
                                        sm:flex
                                        sm:text-sm
                                    "
                                >
                                    <i className="fa fa-shield" />
                                    AI assisted search
                                </div>

                            </div>

                            {/* MESSAGES */}
                            <div
                                className="
                                    min-h-0
                                    flex-1
                                    space-y-5
                                    overflow-y-auto
                                    p-4
                                    sm:p-5
                                "
                            >

                                {messages.map((msg) => (

                                    <div
                                        key={msg.id}
                                        className={`flex ${
                                            msg.sender === "user"
                                                ? "justify-end"
                                                : "justify-start"
                                        }`}
                                    >

                                        <div
                                            className={`
                                                max-w-[92%]
                                                rounded-2xl
                                                px-4
                                                py-3
                                                sm:max-w-[75%]
                                                sm:px-5
                                                sm:py-4
                                                ${
                                                    msg.sender === "user"
                                                        ? "rounded-br-none bg-green-500 text-white"
                                                        : "rounded-bl-none border border-white/10 bg-white/10 text-gray-200"
                                                }
                                            `}
                                        >

                                            {msg.sender === "ai" && (
                                                <div className="mb-2 flex items-center gap-2">

                                                    <i className="fa fa-robot text-green-400" />

                                                    <span className="text-sm text-green-400">
                                                        AI Agent
                                                    </span>

                                                </div>
                                            )}

                                            <p className="break-words text-sm leading-6 sm:text-base sm:leading-7">
                                                {msg.text}
                                            </p>

                                        </div>

                                    </div>

                                ))}

                                {/* PROPERTY RECOMMENDATIONS */}
                                {searchData.location && (

                                    <div>

                                        <div className="mb-3 flex items-center gap-2">

                                            <i className="fa fa-home text-green-400" />

                                            <span className="text-sm text-gray-300 sm:text-base">
                                                Recommended properties
                                            </span>

                                        </div>

                                        <div
                                            className="
                                                grid
                                                grid-cols-1
                                                gap-4
                                                sm:grid-cols-2
                                            "
                                        >

                                            {housesData.slice(0, 2).map((house) => (

                                                <div
                                                    key={house.id}
                                                    className="
                                                        overflow-hidden
                                                        rounded-xl
                                                        border
                                                        border-white/10
                                                        bg-black/40
                                                    "
                                                >

                                                    <img
                                                        src={house.image}
                                                        alt={house.title}
                                                        loading="lazy"
                                                        className="
                                                            h-40
                                                            w-full
                                                            object-cover
                                                            brightness-[0.6]
                                                            sm:h-44
                                                        "
                                                    />

                                                    <div className="p-4">

                                                        <h3
                                                            className="
                                                                roboto-condensed-bold
                                                                truncate
                                                                text-lg
                                                            "
                                                            title={house.title}
                                                        >
                                                            {house.title}
                                                        </h3>

                                                        <p
                                                            className="
                                                                mt-1
                                                                flex
                                                                items-start
                                                                gap-2
                                                                text-sm
                                                                text-gray-500
                                                            "
                                                        >
                                                            <i className="fa fa-map-marker mt-1 shrink-0" />

                                                            <span className="line-clamp-2">
                                                                {house.location}
                                                            </span>
                                                        </p>

                                                        <p
                                                            className="
                                                                mt-2
                                                                text-xl
                                                                font-bold
                                                                text-green-400
                                                            "
                                                        >
                                                            {house.price}
                                                        </p>

                                                        <Link
                                                            to={`/property/${house.id}`}
                                                            className="
                                                                mt-3
                                                                flex
                                                                min-h-11
                                                                items-center
                                                                justify-center
                                                                gap-2
                                                                rounded-full
                                                                border
                                                                border-white/10
                                                                px-3
                                                                text-sm
                                                                transition
                                                                hover:bg-green-500
                                                                sm:text-base
                                                            "
                                                        >
                                                            View Property
                                                            <i className="fa fa-arrow-right" />
                                                        </Link>

                                                    </div>

                                                </div>

                                            ))}

                                        </div>

                                    </div>

                                )}

                            </div>

                            {/* INPUT */}
                            <div
                                className="
                                    shrink-0
                                    border-t
                                    border-white/10
                                    bg-black/30
                                    p-3
                                    sm:p-4
                                "
                            >

                                <div
                                    className="
                                        flex
                                        items-center
                                        gap-2
                                        rounded-2xl
                                        border
                                        border-white/10
                                        bg-white/5
                                        p-1.5
                                        sm:rounded-full
                                        sm:p-2
                                    "
                                >

                                    <input
                                        type="text"
                                        value={message}
                                        onChange={(e) =>
                                            setMessage(e.target.value)
                                        }
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter") {
                                                e.preventDefault();
                                                sendMessage();
                                            }
                                        }}
                                        placeholder="Tell me what you're looking for..."
                                        aria-label="Message AI property agent"
                                        className="
                                            min-w-0
                                            flex-1
                                            bg-transparent
                                            px-3
                                            py-3
                                            text-sm
                                            text-white
                                            outline-none
                                            placeholder:text-gray-500
                                            sm:px-4
                                            sm:text-base
                                        "
                                    />

                                    <button
                                        type="button"
                                        onClick={sendMessage}
                                        aria-label="Send message"
                                        className="
                                            flex
                                            h-11
                                            w-11
                                            shrink-0
                                            items-center
                                            justify-center
                                            rounded-full
                                            bg-green-500
                                            text-white
                                            transition
                                            hover:scale-105
                                            hover:bg-green-400
                                        "
                                    >
                                        <i className="fa fa-paper-plane" />
                                    </button>

                                </div>

                                <p
                                    className="
                                        mt-2
                                        px-2
                                        text-center
                                        text-[11px]
                                        leading-5
                                        text-gray-600
                                        sm:mt-3
                                        sm:text-xs
                                    "
                                >
                                    ConnectFlow AI can help you discover
                                    properties based on your preferences.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* =========================================
                CTA
            ========================================= */}
            <section className="px-4 pb-12 sm:px-6 sm:pb-20 md:px-10">

                <div
                    className="
                        mx-auto
                        max-w-7xl
                        rounded-2xl
                        border
                        border-white/10
                        bg-white/5
                        p-6
                        text-center
                        sm:p-10
                    "
                >

                    <i
                        className="
                            fa
                            fa-home
                            text-4xl
                            text-green-400
                            sm:text-5xl
                        "
                    />

                    <h2
                        className="
                            bebas-neue
                            mt-5
                            text-4xl
                            leading-none
                            sm:text-5xl
                            md:text-6xl
                        "
                    >
                        Let AI find your next home
                    </h2>

                    <p
                        className="
                            mx-auto
                            mt-3
                            max-w-2xl
                            text-base
                            leading-7
                            text-gray-400
                            sm:text-lg
                        "
                    >
                        Tell us what you need and we'll help you
                        narrow down the right properties.
                    </p>

                    <Link
                        to="/properties"
                        className="
                            mt-6
                            inline-flex
                            min-h-12
                            w-full
                            items-center
                            justify-center
                            gap-3
                            rounded-full
                            bg-green-500
                            px-7
                            py-3
                            text-base
                            text-white
                            transition
                            hover:bg-green-400
                            hover:scale-105
                            sm:w-auto
                            sm:text-lg
                        "
                    >
                        Browse Properties
                        <i className="fa fa-arrow-right" />
                    </Link>

                </div>

            </section>

        </div>
    );
}

export default AIAgent;