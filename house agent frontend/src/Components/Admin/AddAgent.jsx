
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Save,
  UserPlus,
  Upload,
  X,
  Building2,
  Star,
  Clock3,
  ShieldCheck,
} from "lucide-react";

function AddAgent() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    role: "",
    location: "",
    phone: "",
    properties: "",
    rating: "",
    experience: "",
    verified: false,
    image: "",
  });

  const [imagePreview, setImagePreview] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

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

  const removeImage = () => {
    setImagePreview("");

    setFormData((prev) => ({
      ...prev,
      image: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newAgent = {
      ...formData,
      properties: Number(formData.properties),
      rating: Number(formData.rating),
    };

    console.log("New agent:", newAgent);

    alert("Agent added successfully!");

    navigate("/adminagents");
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-white">
      {/* Header */}
      <header className="border-b border-white/10 bg-black">
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

              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-500/10 text-green-400">
                  <UserPlus size={22} />
                </div>

                <div className="min-w-0">
                  <h1 className="text-2xl font-bold sm:text-3xl">
                    Add Agent
                  </h1>

                  <p className="mt-1 text-sm text-gray-400">
                    Add a new real estate agent to your team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        <form onSubmit={handleSubmit}>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
            {/* Form */}
            <section className="min-w-0 rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-7 lg:p-8">
              <h2 className="text-lg font-semibold sm:text-xl">
                Agent Information
              </h2>

              <p className="mt-1 text-sm text-gray-400">
                Enter the agent's details below.
              </p>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                {/* Name */}
                <div className="sm:col-span-2">
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
                    placeholder="Enter agent's full name"
                    required
                    autoComplete="name"
                    className="h-12 w-full rounded-lg border border-white/10 bg-black px-4 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-green-500"
                  />
                </div>

                {/* Role */}
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
                    placeholder="e.g. Senior Property Agent"
                    required
                    className="h-12 w-full rounded-lg border border-white/10 bg-black px-4 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-green-500"
                  />
                </div>

                {/* Location */}
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
                    placeholder="e.g. Awka, Anambra"
                    required
                    className="h-12 w-full rounded-lg border border-white/10 bg-black px-4 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-green-500"
                  />
                </div>

                {/* Phone */}
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
                    placeholder="+234 801 234 5678"
                    required
                    autoComplete="tel"
                    className="h-12 w-full rounded-lg border border-white/10 bg-black px-4 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-green-500"
                  />
                </div>

                {/* Properties */}
                <div>
                  <label
                    htmlFor="properties"
                    className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-300"
                  >
                    <Building2 size={16} className="text-green-400" />
                    Properties
                  </label>

                  <input
                    id="properties"
                    name="properties"
                    type="number"
                    min="0"
                    value={formData.properties}
                    onChange={handleChange}
                    placeholder="e.g. 24"
                    required
                    className="h-12 w-full rounded-lg border border-white/10 bg-black px-4 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-green-500"
                  />
                </div>

                {/* Rating */}
                <div>
                  <label
                    htmlFor="rating"
                    className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-300"
                  >
                    <Star size={16} className="text-yellow-400" />
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
                    placeholder="e.g. 4.9"
                    required
                    className="h-12 w-full rounded-lg border border-white/10 bg-black px-4 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-green-500"
                  />

                  <p className="mt-1 text-xs text-gray-500">
                    Enter a rating between 0 and 5.
                  </p>
                </div>

                {/* Experience */}
                <div>
                  <label
                    htmlFor="experience"
                    className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-300"
                  >
                    <Clock3 size={16} className="text-blue-400" />
                    Experience
                  </label>

                  <input
                    id="experience"
                    name="experience"
                    type="text"
                    value={formData.experience}
                    onChange={handleChange}
                    placeholder="e.g. 7 Years"
                    required
                    className="h-12 w-full rounded-lg border border-white/10 bg-black px-4 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-green-500"
                  />
                </div>

                {/* Verified */}
                <div className="flex items-end">
                  <label
                    htmlFor="verified"
                    className="flex min-h-12 w-full cursor-pointer items-center gap-3 rounded-lg border border-white/10 bg-black px-4 py-3 transition hover:border-green-500/40"
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
                        Mark as verified agent
                      </span>
                    </span>
                  </label>
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-7 flex flex-col-reverse gap-3 border-t border-white/10 pt-6 sm:flex-row sm:justify-end">
                <Link
                  to="/adminagents"
                  className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/10 px-5 py-3 text-sm font-semibold text-gray-300 transition hover:bg-white/5 hover:text-white"
                >
                  Cancel
                </Link>

                <button
                  type="submit"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-green-500 px-5 py-3 text-sm font-semibold text-black transition hover:bg-green-400"
                >
                  <Save size={18} />
                  Add Agent
                </button>
              </div>
            </section>

            {/* Image */}
            <aside className="h-fit rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 lg:sticky lg:top-6">
              <h2 className="text-lg font-semibold">
                Profile Image
              </h2>

              <p className="mt-1 text-sm text-gray-400">
                Upload a profile image for the agent.
              </p>

              {imagePreview ? (
                <div className="relative mt-5 overflow-hidden rounded-xl border border-white/10 bg-black">
                  <img
                    src={imagePreview}
                    alt="Agent preview"
                    className="h-72 w-full object-cover sm:h-80 lg:h-72"
                  />

                  <button
                    type="button"
                    onClick={removeImage}
                    aria-label="Remove image"
                    className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-white backdrop-blur transition hover:bg-red-500"
                  >
                    <X size={18} />
                  </button>
                </div>
              ) : (
                <label
                  htmlFor="image"
                  className="mt-5 flex min-h-72 cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-white/15 bg-black px-5 text-center transition hover:border-green-500/50 hover:bg-green-500/[0.03] sm:min-h-80 lg:min-h-72"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500/10 text-green-400">
                    <Upload size={24} />
                  </div>

                  <p className="mt-4 text-sm font-medium text-gray-200">
                    Upload profile image
                  </p>

                  <p className="mt-2 text-xs leading-5 text-gray-500">
                    Click to choose an image from your device.
                  </p>

                  <input
                    id="image"
                    name="image"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </label>
              )}
            </aside>
          </div>
        </form>
      </main>
    </div>
  );
}

export default AddAgent;
