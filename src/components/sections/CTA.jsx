"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Phone,
  Mail,
  Sparkles,
  GraduationCap,
  Users,
  Trophy,
  Clock,
  CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { icon: Users, value: "5,000+", label: "Happy Students" },
  { icon: Trophy, value: "95%", label: "Placement Rate" },
  { icon: GraduationCap, value: "50+", label: "Programs" },
];

const benefits = [
  "Industry-recognized certifications",
  "Flexible learning options",
  "Career guidance & support",
  "Expert faculty members",
];

// Optimized animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  })
};

const fadeInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  })
};

export default function CTA() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070"
          alt="Graduation celebration"
          fill
          className="object-cover"
        />
        {/* Multi-layer Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-violet-950/95 via-indigo-950/90 to-purple-950/95" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40" />
      </div>

      {/* Background Pattern - Static */}
      <div className="absolute inset-0 opacity-5 z-[1]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Static Gradient Orbs - Using CSS animations instead of framer-motion */}
      <div
        className="absolute top-1/4 left-[15%] w-72 h-72 bg-violet-500/20 rounded-full blur-3xl z-[1] animate-pulse-slow"
        style={{ willChange: 'opacity' }}
      />
      <div
        className="absolute bottom-1/4 right-[15%] w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl z-[1] animate-pulse-slow"
        style={{ animationDelay: '2s', willChange: 'opacity' }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* Main Content */}
            <div className="lg:col-span-3 text-center lg:text-left">
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                custom={0}
              >
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm mb-6 shadow-lg">
                  <Sparkles className="h-4 w-4 text-yellow-400" />
                  <span>Admissions Open for 2026</span>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                </div>

                {/* Heading */}
                <h2
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
                  style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}
                >
                  Ready to Transform{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400">
                    Your Future?
                  </span>
                </h2>

                {/* Description */}
                <p
                  className="text-lg sm:text-xl text-white/80 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
                  style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}
                >
                  Take the first step towards your dream career. Join thousands of successful
                  graduates who transformed their lives with world-class education.
                </p>

                {/* Benefits List */}
                <motion.div
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={0.15}
                  className="grid grid-cols-2 gap-3 mb-8"
                >
                  {benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-white/80 text-sm"
                    >
                      <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={0.25}
                  className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10"
                >
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white px-8 py-6 text-lg rounded-full shadow-lg shadow-violet-500/30 border-0 transition-transform duration-200 hover:scale-105"
                  >
                    <Link href="/apply" className="flex items-center gap-2">
                      <GraduationCap className="h-5 w-5" />
                      Apply Now
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>

                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 px-8 py-6 text-lg rounded-full transition-colors duration-200"
                  >
                    <Link href="/contact">Talk to Admissions</Link>
                  </Button>
                </motion.div>

                {/* Contact Info */}
                <motion.div
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={0.35}
                  className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6"
                >
                  <a
                    href="tel:+15551234567"
                    className="flex items-center gap-3 text-white/80 hover:text-white transition-colors duration-200 group"
                  >
                    <div className="p-2.5 rounded-xl bg-white/10 group-hover:bg-violet-600/30 transition-colors duration-200">
                      <Phone className="h-5 w-5" />
                    </div>
                    <span>+1 (555) 123-4567</span>
                  </a>
                  <a
                    href="mailto:admissions@eduverse.edu"
                    className="flex items-center gap-3 text-white/80 hover:text-white transition-colors duration-200 group"
                  >
                    <div className="p-2.5 rounded-xl bg-white/10 group-hover:bg-violet-600/30 transition-colors duration-200">
                      <Mail className="h-5 w-5" />
                    </div>
                    <span>admissions@eduverse.edu</span>
                  </a>
                </motion.div>
              </motion.div>
            </div>

            {/* Stats Card */}
            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              custom={0.2}
              className="lg:col-span-2 will-change-transform"
            >
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-violet-600/30 to-cyan-600/30 rounded-3xl blur-xl" />

                {/* Card */}
                <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl">
                  {/* Card Header */}
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-2xl mb-4 shadow-lg shadow-violet-500/30">
                      <Trophy className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Why Students Choose Us</h3>
                    <p className="text-white/60 text-sm">Join our growing community of achievers</p>
                  </div>

                  {/* Stats */}
                  <div className="space-y-4">
                    {stats.map((stat, index) => (
                      <motion.div
                        key={index}
                        variants={fadeInRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={0.3 + index * 0.1}
                        className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-200 will-change-transform"
                      >
                        <div className="p-2.5 rounded-xl bg-gradient-to-br from-violet-600/20 to-indigo-600/20">
                          <stat.icon className="h-5 w-5 text-violet-400" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-white">{stat.value}</div>
                          <div className="text-white/60 text-sm">{stat.label}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Deadline Banner */}
                  <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={0.6}
                    className="mt-6 p-4 rounded-xl bg-gradient-to-r from-orange-500/20 to-amber-500/20 border border-orange-500/30"
                  >
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-orange-400" />
                      <div>
                        <p className="text-white font-medium text-sm">Early Bird Deadline</p>
                        <p className="text-white/60 text-xs">March 31, 2026 - Save 20% on fees</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
