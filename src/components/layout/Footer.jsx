"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ArrowRight,
  ArrowUpRight,
  Heart,
  Sparkles,
  Send,
  Star,
  Award,
  Users,
  BookOpen,
  Globe,
  Clock,
  ChevronUp,
  MessageCircle,
  Play
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const footerLinks = {
  quickLinks: [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Courses", href: "/courses" },
    { name: "Contact", href: "/contact" },
    { name: "Apply Now", href: "/apply" },
  ],
  courses: [
    { name: "Computer Science", href: "/courses/computer-science" },
    { name: "Business Administration", href: "/courses/business-administration" },
    { name: "Data Science", href: "/courses/data-science" },
    { name: "Graphic Design", href: "/courses/graphic-design" },
    { name: "Digital Marketing", href: "/courses/digital-marketing" },
  ],
  resources: [
    { name: "Student Portal", href: "/portal", external: true },
    { name: "Career Services", href: "/careers" },
    { name: "Library", href: "/library" },
    { name: "Research", href: "/research" },
    { name: "Events", href: "/events" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook", followers: "25K", color: "group-hover:bg-blue-600" },
  { icon: Instagram, href: "#", label: "Instagram", followers: "18K", color: "group-hover:bg-linear-to-br group-hover:from-purple-600 group-hover:to-pink-500" },
  { icon: Twitter, href: "#", label: "Twitter", followers: "12K", color: "group-hover:bg-sky-500" },
  { icon: Linkedin, href: "#", label: "LinkedIn", followers: "8K", color: "group-hover:bg-blue-700" },
  { icon: Youtube, href: "#", label: "YouTube", followers: "5K", color: "group-hover:bg-red-600" },
];

const stats = [
  { icon: Users, value: "5,000+", label: "Students" },
  { icon: BookOpen, value: "50+", label: "Courses" },
  { icon: Globe, value: "30+", label: "Countries" },
  { icon: Award, value: "25+", label: "Years" },
];

const awards = [
  { title: "Top 100", subtitle: "Universities 2024" },
  { title: "A+", subtitle: "NAAC Accredited" },
  { title: "5 Star", subtitle: "QS Rating" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Decorative Wave Top */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none rotate-180">
        <svg
          className="relative block w-full h-16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-slate-900"
          />
        </svg>
      </div>

      {/* Main Footer Background */}
      <div className="bg-linear-to-b from-slate-900 via-slate-950 to-black pt-20">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Animated Gradient Orbs */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
              x: [0, 50, 0],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-10 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.15, 0.25, 0.15],
              x: [0, -30, 0],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-40 right-10 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl"
          />

          {/* Floating Particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                delay: i * 0.5,
              }}
              className="absolute w-2 h-2 bg-violet-400/30 rounded-full"
              style={{
                left: `${15 + i * 15}%`,
                top: `${20 + (i % 3) * 25}%`,
              }}
            />
          ))}

          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Stats Bar */}
        <div className="relative border-b border-white/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-linear-to-r from-violet-600/20 to-cyan-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 group-hover:border-white/10 transition-all">
                    <div className="p-3 rounded-xl bg-linear-to-br from-violet-600/20 to-indigo-600/20 group-hover:from-violet-600/30 group-hover:to-indigo-600/30 transition-all">
                      <stat.icon className="h-6 w-6 text-violet-400" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">{stat.value}</div>
                      <div className="text-white/50 text-sm">{stat.label}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="relative border-b border-white/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Newsletter Card */}
              <div className="relative overflow-hidden rounded-3xl">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070"
                    alt="Students studying"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-r from-violet-950/95 via-indigo-950/90 to-purple-950/95" />
                </div>

                <div className="relative p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
                  <div className="text-center lg:text-left">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm mb-4"
                    >
                      <Sparkles className="h-4 w-4 text-yellow-400" />
                      <span>Stay Connected</span>
                    </motion.div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                      Subscribe to Our Newsletter
                    </h3>
                    <p className="text-white/70 max-w-md">
                      Get exclusive updates on courses, scholarships, and campus events delivered weekly.
                    </p>
                  </div>

                  <div className="w-full lg:w-auto">
                    <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto lg:mx-0">
                      <div className="relative flex-1">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/40" />
                        <Input
                          type="email"
                          placeholder="Enter your email"
                          className="h-14 bg-white/10 border-white/20 text-white placeholder:text-white/40 rounded-xl pl-12 pr-4 focus:border-violet-400 focus:ring-violet-400/20 backdrop-blur-sm"
                        />
                      </div>
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button className="h-14 px-8 bg-linear-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white rounded-xl shadow-lg shadow-violet-500/25 font-semibold">
                          Subscribe
                          <Send className="h-4 w-4 ml-2" />
                        </Button>
                      </motion.div>
                    </div>
                    <p className="text-white/40 text-xs mt-3 text-center lg:text-left">
                      By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Brand Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-4"
            >
              {/* Logo */}
              <Link href="/" className="flex items-center gap-3 mb-6 group">
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute -inset-3 bg-linear-to-r from-violet-600 to-cyan-600 rounded-2xl blur-lg opacity-40 group-hover:opacity-70 transition-opacity duration-300" />
                  <div className="relative bg-linear-to-br from-violet-600 via-indigo-600 to-cyan-600 p-3 rounded-2xl shadow-lg">
                    <GraduationCap className="h-8 w-8 text-white" />
                  </div>
                </motion.div>

                <div className="flex flex-col">
                  <span className="text-3xl font-bold bg-linear-to-r from-violet-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                    EduVerse
                  </span>
                  <span className="text-xs font-medium tracking-widest uppercase text-white/40">
                    Education Excellence
                  </span>
                </div>
              </Link>

              <p className="text-white/60 mb-8 leading-relaxed text-sm">
                Empowering minds since 1999. We provide world-class education with industry-focused programs,
                expert faculty, and guaranteed placement support to help you achieve your dreams.
              </p>

              {/* Contact Cards */}
              <div className="space-y-3">
                <motion.a
                  href="tel:+15551234567"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-violet-500/30 transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-linear-to-br from-violet-600/20 to-indigo-600/20 group-hover:from-violet-600/30 group-hover:to-indigo-600/30 transition-all">
                    <Phone className="h-5 w-5 text-violet-400" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs">Call Us</p>
                    <p className="text-white font-medium">+1 (555) 123-4567</p>
                  </div>
                </motion.a>

                <motion.a
                  href="mailto:info@eduverse.edu"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-cyan-500/30 transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-linear-to-br from-cyan-600/20 to-blue-600/20 group-hover:from-cyan-600/30 group-hover:to-blue-600/30 transition-all">
                    <Mail className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs">Email Us</p>
                    <p className="text-white font-medium">info@eduverse.edu</p>
                  </div>
                </motion.a>

                <motion.a
                  href="#"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-emerald-500/30 transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-linear-to-br from-emerald-600/20 to-teal-600/20 group-hover:from-emerald-600/30 group-hover:to-teal-600/30 transition-all">
                    <MapPin className="h-5 w-5 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs">Visit Us</p>
                    <p className="text-white font-medium text-sm">123 Education St, Academic City</p>
                  </div>
                </motion.a>
              </div>

              {/* Awards */}
              <div className="mt-8 flex items-center gap-3">
                {awards.map((award, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="flex-1 text-center p-3 rounded-xl bg-linear-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20"
                  >
                    <div className="text-amber-400 font-bold text-lg">{award.title}</div>
                    <div className="text-white/50 text-[10px] uppercase tracking-wider">{award.subtitle}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Links Columns */}
            <div className="lg:col-span-5 grid grid-cols-2 md:grid-cols-3 gap-8">
              {/* Quick Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-violet-500" />
                  Quick Links
                </h3>
                <ul className="space-y-3">
                  {footerLinks.quickLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-white/50 hover:text-violet-400 transition-colors flex items-center gap-2 group text-sm"
                      >
                        <ArrowRight className="h-3 w-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Courses */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-indigo-500" />
                  Courses
                </h3>
                <ul className="space-y-3">
                  {footerLinks.courses.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-white/50 hover:text-indigo-400 transition-colors flex items-center gap-2 group text-sm"
                      >
                        <ArrowRight className="h-3 w-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Resources */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-500" />
                  Resources
                </h3>
                <ul className="space-y-3">
                  {footerLinks.resources.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-white/50 hover:text-cyan-400 transition-colors flex items-center gap-2 group text-sm"
                      >
                        <ArrowRight className="h-3 w-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                        {link.name}
                        {link.external && (
                          <ArrowUpRight className="h-3 w-3 opacity-50" />
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Social & CTA Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="lg:col-span-3"
            >
              <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-pink-500" />
                Follow Us
              </h3>

              {/* Social Links with Followers */}
              <div className="space-y-3 mb-8">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    whileHover={{ x: 5 }}
                    className={`flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all group ${social.color}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-white/10 group-hover:bg-white/20 transition-all">
                        <social.icon className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-white/70 group-hover:text-white text-sm transition-colors">{social.label}</span>
                    </div>
                    <span className="text-white/40 text-sm font-medium">{social.followers}</span>
                  </motion.a>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    asChild
                    className="w-full h-12 bg-linear-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white rounded-xl shadow-lg shadow-violet-500/25"
                  >
                    <Link href="/apply" className="flex items-center justify-center gap-2">
                      <Sparkles className="h-4 w-4" />
                      Apply Now
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full h-12 bg-white/5 border-white/10 text-white hover:bg-white/10 rounded-xl"
                  >
                    <Link href="/contact" className="flex items-center justify-center gap-2">
                      <MessageCircle className="h-4 w-4" />
                      Chat with Us
                    </Link>
                  </Button>
                </motion.div>
              </div>

              {/* Office Hours */}
              <div className="mt-6 p-4 rounded-xl bg-linear-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-emerald-400" />
                  <div>
                    <p className="text-white font-medium text-sm">Office Hours</p>
                    <p className="text-white/50 text-xs">Mon - Fri: 9AM - 6PM</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="relative border-t border-white/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Copyright */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4"
              >
                <p className="text-white/40 text-sm flex items-center gap-1">
                  &copy; {new Date().getFullYear()} EduVerse. Made with
                  <motion.span
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <Heart className="h-3 w-3 text-red-500 fill-red-500 mx-1" />
                  </motion.span>
                  All rights reserved.
                </p>
                <div className="flex items-center gap-3 text-white/30 text-sm">
                  <Link href="/privacy" className="hover:text-white/60 transition-colors">Privacy</Link>
                  <span>•</span>
                  <Link href="/terms" className="hover:text-white/60 transition-colors">Terms</Link>
                  <span>•</span>
                  <Link href="/cookies" className="hover:text-white/60 transition-colors">Cookies</Link>
                </div>
              </motion.div>

              {/* Back to top */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-white/40 hover:text-white/70 text-sm transition-all border border-white/5 hover:border-white/10"
              >
                <span>Back to top</span>
                <ChevronUp className="h-4 w-4" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
