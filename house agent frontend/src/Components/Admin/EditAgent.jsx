import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Save,
  UserPen,
  Upload,
  X,
  Building2,
  Star,
  Clock3,
  ShieldCheck,
  AlertCircle,
  MapPin,
  Phone,
} from "lucide-react";

import agentsData from "../agentsData";

function EditAgent() {
  const { id } = useParams();
  const navigate = useNavigate();

  const agent = agentsData.find(
    (item) => String(item.id) === String(id)
  );

  const [formData, setFormData] = useState(() => {
    if (!agent) {
      return {
        name: "",
        role: "",
        location: "",
        phone: "",
        properties: "",
        rating: "",
        experience: "",
        verified: false,
        image: "",
      };
    }

    return {
      name: agent.name || "",
      role: agent.role || "",
      location: agent.location || "",
      phone: agent.phone || "",
      properties: agent.properties ?? "",
      rating: agent.rating ?? "",
      experience: agent.experience || "",
      verified: Boolean(agent.verified),
      image: agent.image || "",
    };
  });

  const [imagePreview, setImagePreview] = useState(
    agent?.image || ""
  );

  // ============================================
  // HANDLE INPUT
  // ============================================
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // ============================================
  // HANDLE IMAGE
  // ============================================
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

  // ============================================
  // REMOVE IMAGE
  // ============================================
  const removeImage = () => {
    setImagePreview("");

    setFormData((prev) => ({
      ...prev,
      image: "",
    }));
  };

  // ============================================
  // SUBMIT
  // ============================================
  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedAgent = {
      id: agent.id,
      ...formData,
      properties: Number(formData.properties),
      rating: Number(formData.rating),
    };

    console.log("Updated Agent:", updatedAgent);

    alert("Agent updated successfully!");

    navigate("/adminagents");
  };

  // ============================================
  // AGENT NOT FOUND
  // ============================================
  if (!agent) {
    return (
      <div className="flex min-h-[100svh] items-center justify-center bg-black px-4 text-white">
        <div className="w-full max-w-xl rounded-3xl border border-white/10 bg-white/5 p-6 text-center sm:p-10">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-500/10 text-red-400 sm:h-20 sm:w-20">
            <AlertCircle size={32} />

          </div>

          <h1 className="mt-6 text-2xl font-bold sm:text-3xl">
            Agent Not Found
          </h1>

          <p className="mt-3 text-sm leading-relaxed text-gray-400 sm:text-base">
            The agent you are trying to edit could not be found.
          </p>

          <Link
            to="/adminagents"
            className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-green-500 px-6 py-3 text-sm font-semibold text-black transition hover:bg-green-400 sm:text-base"
          >
            <ArrowLeft size={18} />
            Back to Agents
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[100svh] overflow-x-hidden bg-black text-white">
      {/* ============================================
          HEADER
      ============================================ */}
      <header className="border-b border-white/10">
        <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="min-w-0">
              <div className="mb-2 flex items-center gap-2">
                <span className="h-2 w-2 shrink-0 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.7)]" />

                <p className="text-xs font-medium uppercase tracking-[0.2em] text-green-400 sm:text-sm">
                  Admin Dashboard
                </p>
              </div>

              <h1 className="break-words text-3xl font-black sm:text-4xl md:text-5xl">
                Edit Agent
              </h1>

              <p className="mt-2 text-sm text-gray-400 sm:text-base">
                Update the information for {agent.name}.
              </p>
            </div>

            <Link
              to="/adminagents"
              className="inline-flex min-h-12 w-full shrink-0 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-gray-300 transition hover:bg-white/10 hover:text-white sm:w-auto sm:text-base"
            >
              <ArrowLeft size={18} />
              Back to Agents
            </Link>
          </div>
        </div>
      </header>

      {/* ============================================
          MAIN
      ============================================ */}
      <main className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        <form onSubmit={handleSubmit}>
          <div className="grid min-w-0 gap-6 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-start">
            {/* ========================================
                FORM
            ======================================== */}
            <section className="min-w-0 rounded-3xl border border-white/10 bg-white/5 p-5 shadow-xl sm:p-7">
              <div className="mb-7">
                <div className="flex items-center gap-2">
                  <UserPen
                    size={20}
                    className="text-green-400"
                  />

                  <p className="text-xs uppercase tracking-[0.15em] text-gray-500">
                    Agent Information
                  </p>
                </div>

                <h2 className="mt-2 text-xl font-bold sm:text-2xl">
                  Personal & Professional Details
                </h2>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                {/* NAME */}
                <div className="md:col-span-2">
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Full Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                    className="min-h-12 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-green-500/50 sm:text-base"
                    placeholder="Enter agent name"
                  />
                </div>

                {/* ROLE */}
                <div>
                  <label
                    htmlFor="role"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Role
                  </label>

                  <input
                    id="role"
                    name="role"
                    type="text"
                    value={formData.role}
                    onChange={handleChange}
                    required
                    className="min-h-12 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-green-500/50 sm:text-base"
                    placeholder="e.g. Senior Property Agent"
                  />
                </div>

                {/* LOCATION */}
                <div>
                  <label
                    htmlFor="location"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Location
                  </label>

                  <input
                    id="location"
                    name="location"
                    type="text"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    className="min-h-12 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-green-500/50 sm:text-base"
                    placeholder="e.g. Awka, Anambra"
                  />
                </div>

                {/* PHONE */}
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    autoComplete="tel"
                    className="min-h-12 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-green-500/50 sm:text-base"
                    placeholder="+234 801 234 5678"
                  />
                </div>

                {/* PROPERTIES */}
                <div>
                  <label
                    htmlFor="properties"
                    className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-300"
                  >
                    <Building2
                      size={16}
                      className="text-green-400"
                    />
                    Properties
                  </label>

                  <input
                    id="properties"
                    name="properties"
                    type="number"
                    min="0"
                    value={formData.properties}
                    onChange={handleChange}
                    required
                    className="min-h-12 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-green-500/50 sm:text-base"
                    placeholder="e.g. 24"
                  />
                </div>

                {/* RATING */}
                <div>
                  <label
                    htmlFor="rating"
                    className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-300"
                  >
                    <Star
                      size={16}
                      className="text-yellow-400"
                    />
                    Rating
                  </label>

                  <input
                    id="rating"
                    name="rating"
                    type="number"
                    min="0"
                    max="5"
                    step="0.1"
                    value={formData.rating}
                    onChange={handleChange}
                    required
                    className="min-h-12 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-green-500/50 sm:text-base"
                    placeholder="e.g. 4.9"
                  />

                  <p className="mt-1 text-xs text-gray-500">
                    Enter a rating between 0 and 5.
                  </p>
                </div>

                {/* EXPERIENCE */}
                <div>
                  <label
                    htmlFor="experience"
                    className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-300"
                  >
                    <Clock3
                      size={16}
                      className="text-blue-400"
                    />
                    Experience
                  </label>

                  <input
                    id="experience"
                    name="experience"
                    type="text"
                    value={formData.experience}
                    onChange={handleChange}
                    required
                    className="min-h-12 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-green-500/50 sm:text-base"
                    placeholder="e.g. 7 Years"
                  />
                </div>

                {/* VERIFIED */}
                <div className="flex items-end">
                  <label
                    htmlFor="verified"
                    className="flex min-h-12 w-full cursor-pointer items-center gap-3 rounded-xl border border-white/10 bg-black/40 px-4 py-3 transition hover:border-green-500/40"
                  >
                    <input
                      id="verified"
                      name="verified"
                      type="checkbox"
                      checked={formData.verified}
                      onChange={handleChange}
                      className="h-5 w-5 shrink-0 accent-green-500"
                    />

                    <span className="flex min-w-0 items-center gap-2 text-sm text-gray-300">
                      <ShieldCheck
                        size={18}
                        className="shrink-0 text-green-400"
                      />

                      <span>
                        Verified agent
                      </span>
                    </span>
                  </label>
                </div>

                {/* IMAGE */}
                <div className="md:col-span-2">
                  <label
                    htmlFor="image"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Profile Image
                  </label>

                  <input
                    id="image"
                    name="image"
                    type="text"
                    value={formData.image}
                    onChange={(e) => {
                      handleChange(e);
                      setImagePreview(e.target.value);
                    }}
                    className="min-h-12 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-green-500/50 sm:text-base"
                    placeholder="/images/agent.jpg"
                  />

                  <p className="mt-2 text-xs text-gray-500">
                    Enter the image path or URL for the agent profile.
                  </p>
                </div>
              </div>

              {/* FORM ACTIONS */}
              <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:justify-end">
                <Link
                  to="/adminagents"
                  className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm text-gray-300 transition hover:bg-white/10 hover:text-white sm:text-base"
                >
                  Cancel
                </Link>

                <button
                  type="submit"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-green-500 px-6 py-3 text-sm font-semibold text-black transition hover:bg-green-400 sm:text-base"
                >
                  <Save size={18} />
                  Save Changes
                </button>
              </div>
            </section>

            {/* ========================================
                PREVIEW
            ======================================== */}
            <aside className="min-w-0 lg:sticky lg:top-6">
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-xl">
                <div className="border-b border-white/10 p-5 sm:p-6">
                  <p className="text-xs uppercase tracking-[0.15em] text-gray-500">
                    Profile Preview
                  </p>

                  <h2 className="mt-2 text-xl font-bold">
                    Agent Card
                  </h2>
                </div>

                <div className="p-5 sm:p-6">
                  <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/30">
                    {imagePreview ? (
                      <img
                        src={imagePreview}
                        alt={formData.name || "Agent"}
                        className="h-64 w-full object-cover sm:h-72"
                      />
                    ) : (
                      <div className="flex h-64 items-center justify-center text-gray-600 sm:h-72">
                        <UserPen size={56} />
                      </div>
                    )}

                    <div className="p-5">
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div className="min-w-0">
                          <h3 className="break-words text-2xl font-bold">
                            {formData.name || "Agent Name"}
                          </h3>

                          <p className="mt-1 break-words text-sm text-green-400">
                            {formData.role || "Agent Role"}
                          </p>
                        </div>

                        {formData.verified && (
                          <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-green-500/10 px-2.5 py-1 text-xs text-green-400">
                            <ShieldCheck size={13} />
                            Verified
                          </span>
                        )}
                      </div>

                      <div className="mt-4 flex items-start gap-2">
                        <MapPin
                          size={17}
                          className="mt-0.5 shrink-0 text-green-400"
                        />

                        <p className="min-w-0 break-words text-sm text-gray-400">
                          {formData.location || "Agent Location"}
                        </p>
                      </div>

                      {formData.phone && (
                        <div className="mt-3 flex items-start gap-2">
                          <Phone
                            size={17}
                            className="mt-0.5 shrink-0 text-green-400"
                          />

                          <p className="min-w-0 break-all text-sm text-gray-400">
                            {formData.phone}
                          </p>
                        </div>
                      )}

                      <div className="mt-5 grid grid-cols-2 gap-3">
                        <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
                          <p className="text-xs text-gray-500">
                            Properties
                          </p>

                          <p className="mt-1 font-semibold text-white">
                            {formData.properties || 0}
                          </p>
                        </div>

                        <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
                          <p className="text-xs text-gray-500">
                            Rating
                          </p>

                          <p className="mt-1 flex items-center gap-1 font-semibold text-white">
                            <Star
                              size={14}
                              className="text-yellow-400"
                            />
                            {formData.rating || "N/A"}
                          </p>
                        </div>

                        <div className="col-span-2 rounded-lg border border-white/10 bg-white/[0.03] p-3">
                          <p className="text-xs text-gray-500">
                            Experience
                          </p>

                          <p className="mt-1 font-semibold text-white">
                            {formData.experience || "N/A"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </form>
      </main>
    </div>
  );
}

export default EditAgent;
