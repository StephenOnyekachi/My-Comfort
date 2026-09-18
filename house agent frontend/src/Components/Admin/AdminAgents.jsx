import { useState } from "react";
import { Link } from "react-router-dom";

import agentsData from "../agentsData";

function AdminAgents() {
    const [agents, setAgents] = useState(agentsData);
    const [search, setSearch] = useState("");

    // ============================================
    // DELETE AGENT
    // ============================================

    const handleDelete = (id) => {
        const agent = agents.find((item) => item.id === id);

        if (!agent) return;

        const confirmDelete = window.confirm(
            `Are you sure you want to delete "${agent.name}"?`
        );

        if (!confirmDelete) return;

        setAgents((prevAgents) =>
            prevAgents.filter((item) => item.id !== id)
        );
    };

    // ============================================
    // SEARCH AGENTS
    // ============================================

    const filteredAgents = agents.filter((agent) => {
        const searchTerm = search.toLowerCase().trim();

        if (!searchTerm) return true;

        return (
            agent.name?.toLowerCase().includes(searchTerm) ||
            agent.role?.toLowerCase().includes(searchTerm) ||
            agent.location?.toLowerCase().includes(searchTerm)
        );
    });

    return (
        <div className="min-h-[100svh] overflow-x-hidden bg-black px-4 py-6 text-white sm:px-6 sm:py-8 lg:px-8 lg:py-10">
            <div className="mx-auto w-full max-w-7xl">

                {/* ============================================
                    HEADER
                ============================================ */}

                <div className="mb-8 flex flex-col gap-6 lg:mb-10 lg:flex-row lg:items-end lg:justify-between">

                    <div className="min-w-0 max-w-2xl">

                        <div className="mb-3 flex items-center gap-2">

                            <span className="h-2 w-2 shrink-0 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.7)]" />

                            <p className="text-xs font-medium uppercase tracking-[0.2em] text-green-400 sm:text-sm">
                                Admin Dashboard
                            </p>

                        </div>

                        <h1 className="roboto-condensed text-4xl font-black leading-none sm:text-5xl md:text-6xl">
                            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">
                                Manage Agents
                            </span>
                        </h1>

                        <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-400 sm:text-base md:text-lg">
                            View, edit and manage all agents registered on
                            House Agent.
                        </p>

                    </div>

                    {/* HEADER ACTIONS */}

                    <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto">

                        <Link
                            to="/dashboard"
                            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-gray-300 transition hover:bg-white/10 hover:text-white sm:text-base"
                        >
                            <i
                                className="fa fa-arrow-left"
                                aria-hidden="true"
                            />

                            Back to Dashboard
                        </Link>

                        {/* ADD AGENT */}

                        <Link
                            to="/addagent"
                            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-green-400/30 bg-green-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-green-400 sm:text-base"
                        >
                            <i
                                className="fa fa-plus"
                                aria-hidden="true"
                            />

                            Add Agent
                        </Link>

                    </div>

                </div>

                {/* ============================================
                    STATS
                ============================================ */}

                <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

                    {/* TOTAL */}

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">

                        <div className="flex items-center justify-between">

                            <div>

                                <p className="text-sm text-gray-400">
                                    Total Agents
                                </p>

                                <p className="mt-2 text-3xl font-bold text-white">
                                    {agents.length}
                                </p>

                            </div>

                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/10 text-green-400">

                                <i
                                    className="fa fa-users text-xl"
                                    aria-hidden="true"
                                />

                            </div>

                        </div>

                    </div>

                    {/* SEARCH RESULTS */}

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">

                        <div className="flex items-center justify-between">

                            <div>

                                <p className="text-sm text-gray-400">
                                    Search Results
                                </p>

                                <p className="mt-2 text-3xl font-bold text-white">
                                    {filteredAgents.length}
                                </p>

                            </div>

                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">

                                <i
                                    className="fa fa-search text-xl"
                                    aria-hidden="true"
                                />

                            </div>

                        </div>

                    </div>

                    {/* MANAGEMENT */}

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:col-span-2 lg:col-span-1">

                        <div className="flex items-center justify-between">

                            <div>

                                <p className="text-sm text-gray-400">
                                    Management
                                </p>

                                <p className="mt-2 text-lg font-bold text-green-400">
                                    Active
                                </p>

                            </div>

                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/10 text-green-400">

                                <i
                                    className="fa fa-check-circle text-xl"
                                    aria-hidden="true"
                                />

                            </div>

                        </div>

                    </div>

                </div>

                {/* ============================================
                    SEARCH
                ============================================ */}

                <div className="mb-6 rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5">

                    <div className="relative">

                        <i
                            className="fa fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                            aria-hidden="true"
                        />

                        <input
                            type="search"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search agents by name, role or location..."
                            className="min-h-12 w-full rounded-xl border border-white/10 bg-black/40 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-green-500/50 sm:text-base"
                        />

                    </div>

                </div>

                {/* ============================================
                    EMPTY STATE
                ============================================ */}

                {filteredAgents.length === 0 ? (

                    <div className="flex min-h-[350px] flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/5 px-5 py-10 text-center sm:min-h-[400px]">

                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/5 text-gray-500">

                            <i
                                className="fa fa-users text-2xl"
                                aria-hidden="true"
                            />

                        </div>

                        <h2 className="mt-5 text-2xl font-bold sm:text-3xl">
                            No Agents Found
                        </h2>

                        <p className="mt-2 max-w-md text-sm text-gray-400 sm:text-base">
                            No agents match your current search.
                        </p>

                        {search && (
                            <button
                                type="button"
                                onClick={() => setSearch("")}
                                className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-green-500 px-6 py-3 text-sm font-medium text-white transition hover:bg-green-400"
                            >
                                <i
                                    className="fa fa-refresh"
                                    aria-hidden="true"
                                />

                                Clear Search
                            </button>
                        )}

                    </div>

                ) : (

                    /* ============================================
                        AGENTS GRID
                    ============================================ */

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">

                        {filteredAgents.map((agent) => (

                            <div
                                key={agent.id}
                                className="min-w-0 overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-xl transition duration-300 hover:border-green-500/30"
                            >

                                {/* ====================================
                                    IMAGE
                                ==================================== */}

                                <div className="relative">

                                    <img
                                        src={agent.image}
                                        alt={agent.name}
                                        loading="lazy"
                                        className="h-64 w-full object-cover brightness-75 sm:h-72"
                                    />

                                    {/* AGENT ID */}

                                    <div className="absolute right-3 top-3 rounded-full border border-white/10 bg-black/60 px-3 py-2 text-xs text-gray-300 backdrop-blur-md">
                                        ID: {agent.id}
                                    </div>

                                    {/* ROLE */}

                                    <div className="absolute bottom-3 left-3 rounded-full border border-green-400/20 bg-green-500/20 px-3 py-2 text-xs text-green-300 backdrop-blur-md">
                                        {agent.role}
                                    </div>

                                </div>

                                {/* ====================================
                                    INFORMATION
                                ==================================== */}

                                <div className="p-5">

                                    <h2 className="roboto-condensed break-words text-2xl font-bold text-white">
                                        {agent.name}
                                    </h2>

                                    {/* LOCATION */}

                                    <div className="mt-3 flex items-start gap-2">

                                        <i
                                            className="fa fa-map-marker mt-1 shrink-0 text-green-400"
                                            aria-hidden="true"
                                        />

                                        <p className="min-w-0 break-words text-sm leading-relaxed text-gray-400">
                                            {agent.location}
                                        </p>

                                    </div>

                                    {/* PHONE */}

                                    {agent.phone && (
                                        <div className="mt-3 flex items-start gap-2">

                                            <i
                                                className="fa fa-phone mt-1 shrink-0 text-green-400"
                                                aria-hidden="true"
                                            />

                                            <p className="min-w-0 break-all text-sm text-gray-400">
                                                {agent.phone}
                                            </p>

                                        </div>
                                    )}

                                    {/* ====================================
                                        ACTIONS
                                    ==================================== */}

                                    <div className="mt-6 grid grid-cols-3 gap-2">

                                        {/* VIEW */}

                                        <Link
                                            to={`/adminagents/${agent.id}`}
                                            className="flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-2 py-3 text-sm text-gray-300 transition hover:bg-white/10 hover:text-white"
                                        >
                                            <i
                                                className="fa fa-eye"
                                                aria-hidden="true"
                                            />

                                            <span className="hidden sm:inline">
                                                View
                                            </span>
                                        </Link>

                                        {/* EDIT */}

                                        <Link
                                            to={`/editagent/${agent.id}`}
                                            className="flex min-h-12 items-center justify-center gap-2 rounded-xl border border-green-500/20 bg-green-500/10 px-2 py-3 text-sm text-green-400 transition hover:bg-green-500 hover:text-white"
                                        >
                                            <i
                                                className="fa fa-edit"
                                                aria-hidden="true"
                                            />

                                            <span className="hidden sm:inline">
                                                Edit
                                            </span>
                                        </Link>

                                        {/* DELETE */}

                                        <button
                                            type="button"
                                            onClick={() =>
                                                handleDelete(agent.id)
                                            }
                                            aria-label={`Delete ${agent.name}`}
                                            className="flex min-h-12 items-center justify-center gap-2 rounded-xl border border-red-500/20 bg-red-500/10 px-2 py-3 text-sm text-red-400 transition hover:bg-red-500 hover:text-white"
                                        >
                                            <i
                                                className="fa fa-trash"
                                                aria-hidden="true"
                                            />

                                            <span className="hidden sm:inline">
                                                Delete
                                            </span>
                                        </button>

                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>

                )}

            </div>
        </div>
    );
}

export default AdminAgents;
