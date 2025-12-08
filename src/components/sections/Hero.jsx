"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Play, Users, Award, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const floatingElements = [
  { icon: Users, label: "5000+ Students", position: "top-24 left-4 lg:left-10", delay: 0 },
  { icon: Award, label: "95% Placement", position: "top-36 right-4 lg:right-10", delay: 0.2 },
  { icon: BookOpen, label: "50+ Courses", position: "bottom-40 left-4 lg:left-20", delay: 0.4 },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 lg:pt-24">
      {/* Background Image - College Life */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070"
          alt="Students enjoying college life on campus"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        {/* Multi-layer Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
        <div className="absolute inset-0 bg-violet-950/30" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-[1]">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Floating Gradient Orbs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1 }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl z-[1]"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl z-[1]"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl z-[1]"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm mb-8 shadow-lg"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Admissions Open for 2025
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg"
            style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}
          >
            Shape Your Future with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400">
              World-Class Education
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-white/90 mb-10 max-w-2xl mx-auto drop-shadow-md"
            style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}
          >
            Join thousands of students who have transformed their careers with our
            industry-leading programs. Expert faculty, modern facilities, and
            guaranteed placement support.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white border-0 px-8 py-6 text-lg rounded-full hover:scale-105 transition-all shadow-lg shadow-violet-500/25"
            >
              <Link href="/courses">
                Explore Courses
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 px-8 py-6 text-lg rounded-full shadow-lg"
            >
              <Link href="/about">
                <Play className="mr-2 h-5 w-5" />
                Watch Video
              </Link>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-white/20"
          >
            {[
              { value: "5,000+", label: "Students" },
              { value: "50+", label: "Courses" },
              { value: "120+", label: "Faculty" },
              { value: "95%", label: "Placement" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
              >
                <div className="text-3xl sm:text-4xl font-bold text-white mb-1 drop-shadow-lg">
                  {stat.value}
                </div>
                <div className="text-white/70 text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Floating Cards */}
      <div className="hidden lg:block">
        {floatingElements.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: item.delay + 0.5 }}
            className={`absolute ${item.position} animate-float z-10`}
            style={{ animationDelay: `${index * 0.5}s` }}
          >
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 flex items-center gap-3 shadow-xl">
              <div className="p-2 rounded-lg bg-gradient-to-br from-violet-500/30 to-indigo-500/30">
                <item.icon className="h-5 w-5 text-white" />
              </div>
              <span className="text-white text-sm font-medium">{item.label}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-2 h-2 bg-white rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}
