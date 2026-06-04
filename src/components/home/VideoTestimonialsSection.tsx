"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Star, MapPin } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { EASE_EXPO } from "@/lib/animations";

// 🔁 Replace videoId values with actual customer testimonial YouTube video IDs
const VIDEO_TESTIMONIALS = [
  {
    videoId: "NrlQ7Z1sK-0",
    name: "Rajesh Kumar",
    business: "SuperMart",
    industry: "Supermarket",
    city: "Chennai",
    quote: "Billing speed has doubled. Our customers love the digital receipts!",
    stars: 5,
    avatarGradient: ["#1D4ED8", "#2563EB"],
  },
  {
    videoId: "NrlQ7Z1sK-0",
    name: "Priya Lakshmi",
    business: "Fashion World",
    industry: "Textile",
    city: "Coimbatore",
    quote: "Managing 3 branches from one dashboard saved us hours every week.",
    stars: 5,
    avatarGradient: ["#7C3AED", "#8B5CF6"],
  },
  {
    videoId: "NrlQ7Z1sK-0",
    name: "Suresh Rajan",
    business: "Spice Garden",
    industry: "Restaurant",
    city: "Madurai",
    quote: "Zomato & Swiggy orders sync automatically. No more manual entry!",
    stars: 5,
    avatarGradient: ["#059669", "#10B981"],
  },
];

function VideoCard({
  video,
  index,
}: {
  video: (typeof VIDEO_TESTIMONIALS)[0];
  index: number;
}) {
  const [playing, setPlaying] = useState(false);
  const thumbUrl = `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: EASE_EXPO }}
      className="flex flex-col rounded-2xl overflow-hidden"
      style={{
        background: "#FFFFFF",
        border: "1px solid #E8EDF5",
        boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
      }}
    >
      {/* Video area */}
      <div style={{ position: "relative", paddingBottom: "56.25%", background: "#0F1A2E" }}>
        {playing ? (
          <iframe
            src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1&rel=0&modestbranding=1`}
            title={`${video.name} testimonial`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              border: "none",
            }}
          />
        ) : (
          <button
            onClick={() => setPlaying(true)}
            className="group"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              padding: 0,
              border: "none",
              cursor: "pointer",
              background: "transparent",
            }}
            aria-label={`Play ${video.name} testimonial`}
          >
            {/* Thumbnail */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={thumbUrl}
              alt={video.name}
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.4s ease",
              }}
              className="group-hover:scale-105"
            />

            {/* Dark overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.45) 100%)",
                transition: "opacity 0.3s ease",
              }}
            />

            {/* Play button */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.2 }}
            >
              <div
                style={{
                  width: 62,
                  height: 62,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.15)",
                  backdropFilter: "blur(8px)",
                  border: "2px solid rgba(255,255,255,0.4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "background 0.3s ease",
                }}
                className="group-hover:bg-white/25"
              >
                <Play size={22} fill="white" color="white" style={{ marginLeft: 3 }} />
              </div>
            </motion.div>

            {/* "Watch Story" label bottom left */}
            <div
              style={{
                position: "absolute",
                bottom: 12,
                left: 14,
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              <span
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.9)",
                  letterSpacing: "0.02em",
                }}
              >
                Watch Story
              </span>
            </div>

            {/* Duration badge top right */}
            <div
              style={{
                position: "absolute",
                top: 10,
                right: 10,
                background: "rgba(0,0,0,0.55)",
                backdropFilter: "blur(4px)",
                borderRadius: 6,
                padding: "2px 7px",
                fontSize: "0.7rem",
                fontWeight: 600,
                color: "#FFFFFF",
              }}
            >
              2:30
            </div>
          </button>
        )}
      </div>

      {/* Info area */}
      <div className="p-5 flex flex-col gap-3">
        {/* Stars */}
        <div className="flex gap-0.5">
          {Array.from({ length: video.stars }).map((_, i) => (
            <Star key={i} size={13} className="text-amber-400 fill-amber-400" />
          ))}
        </div>

        {/* Quote */}
        <p
          className="text-slate-700 font-medium"
          style={{ fontSize: "0.92rem", lineHeight: 1.6 }}
        >
          &ldquo;{video.quote}&rdquo;
        </p>

        {/* Divider */}
        <div style={{ height: 1, background: "#F1F5F9" }} />

        {/* Person row */}
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-base text-white shrink-0"
            style={{
              background: `linear-gradient(135deg, ${video.avatarGradient[0]}, ${video.avatarGradient[1]})`,
            }}
          >
            {video.name[0]}
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-slate-900 text-sm leading-tight">{video.name}</p>
            <p className="text-xs text-slate-500 mt-0.5">{video.business} · {video.industry}</p>
          </div>
          {/* Location */}
          <div
            className="flex items-center gap-1 shrink-0"
            style={{ fontSize: "0.72rem", color: "#64748B" }}
          >
            <MapPin size={11} />
            <span>{video.city}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function VideoTestimonialsSection() {
  return (
    <section
      className="section-padding"
      style={{ background: "linear-gradient(180deg, #F0F6FF 0%, #FFFFFF 100%)", padding: "52px 0 56px" }}
    >
      <div className="container-xl">
        {/* Heading */}
        <ScrollReveal className="text-center mb-12">
          <SectionLabel className="mx-auto mb-4" variant="cyan">Video Stories</SectionLabel>
          <h2
            className="font-display font-bold text-slate-900 mb-4"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.8rem)", lineHeight: 1.15 }}
          >
            Hear it from{" "}
            <span className="gradient-text">real businesses</span>
          </h2>
          <p className="text-base text-slate-500 max-w-lg mx-auto" style={{ lineHeight: 1.7 }}>
            Watch how Kassapos is transforming retail and hospitality businesses
            across Tamil Nadu and South India.
          </p>
        </ScrollReveal>

        {/* Video grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {VIDEO_TESTIMONIALS.map((video, i) => (
            <VideoCard key={video.name} video={video} index={i} />
          ))}
        </div>

        {/* Bottom note */}
        <ScrollReveal className="text-center mt-10">
          <p className="text-sm text-slate-400">
            Join{" "}
            <span className="font-semibold text-slate-600">5,000+ businesses</span>{" "}
            who trust Kassapos every day
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
