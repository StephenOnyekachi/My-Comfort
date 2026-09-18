import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Edit3,
  Trash2,
  MapPin,
  Phone,
  User,
  BriefcaseBusiness,
  Building2,
  Star,
  Clock3,
  ShieldCheck,
  AlertCircle,
} from "lucide-react";

import agentsData from "../agentsData";

function AdminAgentView() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [agents, setAgents] = useState(agentsData);

  const agent = agents.find(
    (item) => String(item.id) === String(id)
  );

  // Agent not found
  if (!agent) {
    return (
      <div className="min-h-screen bg-black px-4 py-10 text-white sm:px-6 lg:px-8">
        <div className="mx-auto flex min-h-[70vh] max-w-2xl items-center justify-center">
          <div className="w-full rounded-2xl border border-white/10 bg-white/5 p-6 text-center sm:p-10">
            <AlertCircle
              size={52}
              className="mx-auto mb-5 text-red-400"
            />

            <h1 className="text-2xl font-bold sm:text-3xl">
              Agent Not Found
            </h1>

            <p className="mt-3 text-sm leading-6 text-gray-400 sm:text-base">
              The agent you are looking for does not exist or may have
              been removed.
            </p>

            <Link
              to="/adminagents"
              className="mt-7 inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-green-500 px-5 py-3 text-sm font-semibold text-black transition hover:bg-green-400"
            >
              <ArrowLeft size={18} />
              Back to Agents
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const handleDelete = () => {
    const confirmed = window.confirm(
      `Are you sure you want to delete ${agent.name}?`
    );

    if (!confirmed) return;

    const updatedAgents = agents.filter(
      (item) => String(item.id) !== String(agent.id)
    );

    setAgents(updatedAgents);

    alert("Agent deleted successfully!");

    navigate("/adminagents");
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-white">
      {/* Header */}
      <div className="border-b border-white/10 bg-black">
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="min-w-0">
              <Link
                to="/adminagents"
                className="mb-3 inline-flex min-h-10 items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-sm text-gray-300 transition hover:border-green-500/40 hover:text-green-400"
              >
                <ArrowLeft size={17} />
                Back to Agents
              </Link>

              <h1 className="text-2xl font-bold sm:text-3xl">
                Agent Details
              </h1>

              <p className="mt-1 text-sm text-gray-400">
                View and manage this agent's information.
              </p>
            </div>

            {/* Desktop Actions */}
            <div className="hidden items-center gap-3 sm:flex">
              <Link
                to={`/editagent/${agent.id}`}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-white/10 px-4 py-2.5 text-sm font-semibold text-gray-200 transition hover:border-green-500/40 hover:text-green-400"
              >
                <Edit3 size={17} />
                Edit Agent
              </Link>

              <button
                type="button"
                onClick={handleDelete}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-red-500/10 px-4 py-2.5 text-sm font-semibold text-red-400 transition hover:bg-red-500 hover:text-white"
              >
                <Trash2 size={17} />
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main */}
      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
          {/* Agent Profile */}
          <section className="min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
            {/* Profile Header */}
            <div className="border-b border-white/10 p-5 sm:p-7 lg:p-8">
              <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:items-start sm:text-left">
                {/* Image */}
                <div className="h-28 w-28 shrink-0 overflow-hidden rounded-full border-4 border-green-500/20 bg-white/10 sm:h-32 sm:w-32">
                  <img
                    src={agent.image}
                    alt={agent.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Name + Basic Info */}
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap justify-center gap-2 sm:justify-start">
                    {agent.verified ? (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium text-green-400">
                        <ShieldCheck size={14} />
                        Verified Agent
                      </span>
                    ) : (
                      <span className="rounded-full bg-yellow-500/10 px-3 py-1 text-xs font-medium text-yellow-400">
                        Unverified Agent
                      </span>
                    )}
                  </div>

                  <h2 className="mt-3 break-words text-2xl font-bold sm:text-3xl lg:text-4xl">
                    {agent.name}
                  </h2>

                  <p className="mt-2 text-base text-gray-400 sm:text-lg">
                    {agent.role}
                  </p>

                  {agent.location && (
                    <div className="mt-3 flex items-center justify-center gap-2 text-sm text-gray-400 sm:justify-start">
                      <MapPin
                        size={17}
                        className="shrink-0 text-green-400"
                      />

                      <span className="break-words">
                        {agent.location}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Overview */}
            <div className="border-b border-white/10 p-5 sm:p-7 lg:p-8">
              <h3 className="text-lg font-semibold sm:text-xl">
                Agent Overview
              </h3>

              <div className="mt-5 grid grid-cols-1 gap-4 min-[420px]:grid-cols-2 lg:grid-cols-4">
                {/* Properties */}
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-500/10 text-green-400">
                      <Building2 size={19} />
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-wide text-gray-500">
                        Properties
                      </p>

                      <p className="mt-1 text-lg font-semibold text-white">
                        {agent.properties ?? 0}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Rating */}
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-yellow-500/10 text-yellow-400">
                      <Star size={19} />
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-wide text-gray-500">
                        Rating
                      </p>

                      <p className="mt-1 text-lg font-semibold text-white">
                        {agent.rating ?? "N/A"}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Experience */}
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                      <Clock3 size={19} />
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-wide text-gray-500">
                        Experience
                      </p>

                      <p className="mt-1 break-words text-sm font-semibold text-white sm:text-base">
                        {agent.experience || "N/A"}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Agent ID */}
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400">
                      <User size={19} />
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-wide text-gray-500">
                        Agent ID
                      </p>

                      <p className="mt-1 text-lg font-semibold text-white">
                        #{agent.id}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="p-5 sm:p-7 lg:p-8">
              <h3 className="text-lg font-semibold sm:text-xl">
                Contact Information
              </h3>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {/* Phone */}
                <div className="min-w-0 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-500/10 text-green-400">
                      <Phone size={19} />
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-wide text-gray-500">
                        Phone
                      </p>

                      <a
                        href={`tel:${agent.phone}`}
                        className="mt-1 block break-all text-sm text-gray-200 transition hover:text-green-400 sm:text-base"
                      >
                        {agent.phone}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Role */}
                <div className="min-w-0 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-500/10 text-green-400">
                      <BriefcaseBusiness size={19} />
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-wide text-gray-500">
                        Role
                      </p>

                      <p className="mt-1 break-words text-sm text-gray-200 sm:text-base">
                        {agent.role || "Real Estate Agent"}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="min-w-0 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-500/10 text-green-400">
                      <MapPin size={19} />
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-wide text-gray-500">
                        Location
                      </p>

                      <p className="mt-1 break-words text-sm text-gray-200 sm:text-base">
                        {agent.location || "Location not available"}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Verification */}
                <div className="min-w-0 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-500/10 text-green-400">
                      <ShieldCheck size={19} />
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-wide text-gray-500">
                        Verification
                      </p>

                      <p className="mt-1 text-sm text-gray-200 sm:text-base">
                        {agent.verified
                          ? "Verified Agent"
                          : "Not Verified"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Management Panel */}
          <aside className="h-fit rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 lg:sticky lg:top-6">
            <h3 className="text-lg font-semibold">
              Manage Agent
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-400">
              Use the actions below to update or remove this agent.
            </p>

            <div className="mt-6 space-y-3">
              <Link
                to={`/editagent/${agent.id}`}
                className="flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-green-500 px-4 py-3 text-sm font-semibold text-black transition hover:bg-green-400"
              >
                <Edit3 size={18} />
                Edit Agent
              </Link>

              <button
                type="button"
                onClick={handleDelete}
                className="flex min-h-12 w-full items-center justify-center gap-2 rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm font-semibold text-red-400 transition hover:bg-red-500 hover:text-white"
              >
                <Trash2 size={18} />
                Delete Agent
              </button>

              <Link
                to="/adminagents"
                className="flex min-h-12 w-full items-center justify-center gap-2 rounded-lg border border-white/10 px-4 py-3 text-sm font-semibold text-gray-300 transition hover:border-white/20 hover:bg-white/5 hover:text-white"
              >
                <ArrowLeft size={18} />
                Back to Agents
              </Link>
            </div>
          </aside>
        </div>

        {/* Mobile Actions */}
        <div className="mt-6 grid gap-3 sm:hidden">
          <Link
            to={`/editagent/${agent.id}`}
            className="flex min-h-12 items-center justify-center gap-2 rounded-lg bg-green-500 px-4 py-3 text-sm font-semibold text-black"
          >
            <Edit3 size={18} />
            Edit Agent
          </Link>

          <button
            type="button"
            onClick={handleDelete}
            className="flex min-h-12 items-center justify-center gap-2 rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm font-semibold text-red-400"
          >
            <Trash2 size={18} />
            Delete Agent
          </button>
        </div>
      </main>
    </div>
  );
}

export default AdminAgentView;
