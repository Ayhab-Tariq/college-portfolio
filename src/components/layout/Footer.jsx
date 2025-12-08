"use client";

import Link from "next/link";
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
  Heart,
  ExternalLink,
  Sparkles,
  Send
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
  support: [
    { name: "FAQ", href: "/faq" },
    { name: "Student Portal", href: "/portal" },
    { name: "Career Services", href: "/careers" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook", color: "hover:bg-blue-600" },
  { icon: Twitter, href: "#", label: "Twitter", color: "hover:bg-sky-500" },
  { icon: Instagram, href: "#", label: "Instagram", color: "hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500" },
  { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:bg-blue-700" },
  { icon: Youtube, href: "#", label: "YouTube", color: "hover:bg-red-600" },
];

const contactInfo = [
  {
    icon: MapPin,
    text: "123 Education Street, Academic City, AC 12345",
    href: "#"
  },
  {
    icon: Phone,
    text: "+1 (555) 123-4567",
    href: "tel:+15551234567"
  },
  {
    icon: Mail,
    text: "info@eduverse.edu",
    href: "mailto:info@eduverse.edu"
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Gradient Top Border */}
      <div className="h-1 bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600" />

      {/* Main Footer Background */}
      <div className="bg-gradient-to-b from-slate-900 via-slate-950 to-black">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl" />

          {/* Pattern Overlay */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        {/* Newsletter Section */}
        <div className="relative border-b border-white/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col lg:flex-row items-center justify-between gap-8"
            >
              <div className="text-center lg:text-left">
                <div className="flex items-center gap-2 justify-center lg:justify-start mb-2">
                  <Sparkles className="h-5 w-5 text-violet-400" />
                  <span className="text-violet-400 font-medium text-sm uppercase tracking-wider">
                    Stay Updated
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  Subscribe to Our Newsletter
                </h3>
                <p className="text-white/60 max-w-md">
                  Get the latest updates on courses, events, and educational insights delivered to your inbox.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto max-w-md">
                <div className="relative flex-1">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="h-12 bg-white/5 border-white/10 text-white placeholder:text-white/40 rounded-xl pl-4 pr-4 focus:border-violet-500 focus:ring-violet-500/20"
                  />
                </div>
                <Button className="h-12 px-6 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white rounded-xl shadow-lg shadow-violet-500/25">
                  Subscribe
                  <Send className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12"
          >
            {/* Brand Column */}
            <motion.div variants={itemVariants} className="lg:col-span-4">
              <Link href="/" className="flex items-center gap-3 mb-6 group">
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Glow effect */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-xl blur-lg opacity-40 group-hover:opacity-70 transition-opacity duration-300" />

                  {/* Logo container */}
                  <div className="relative bg-gradient-to-br from-violet-600 to-indigo-600 p-2.5 rounded-xl shadow-lg">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                </motion.div>

                <div className="flex flex-col">
                  <span className="text-2xl font-bold bg-gradient-to-r from-violet-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                    EduVerse
                  </span>
                  <span className="text-[10px] font-medium tracking-wider uppercase text-white/50">
                    Education Excellence
                  </span>
                </div>
              </Link>

              <p className="text-white/60 mb-8 leading-relaxed">
                Empowering students with world-class education and career-focused programs.
                Join us to unlock your potential and shape your future.
              </p>

              {/* Contact Info */}
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-3 text-white/60 hover:text-white transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-white/5 group-hover:bg-gradient-to-br group-hover:from-violet-600/20 group-hover:to-indigo-600/20 transition-all">
                      <item.icon className="h-4 w-4 text-violet-400" />
                    </div>
                    <span className="text-sm pt-1.5">{item.text}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
                <div className="w-8 h-[2px] bg-gradient-to-r from-violet-500 to-transparent" />
                Quick Links
              </h3>
              <ul className="space-y-3">
                {footerLinks.quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/60 hover:text-violet-400 transition-colors flex items-center gap-2 group text-sm"
                    >
                      <ArrowRight className="h-3 w-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Courses */}
            <motion.div variants={itemVariants} className="lg:col-span-3">
              <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
                <div className="w-8 h-[2px] bg-gradient-to-r from-indigo-500 to-transparent" />
                Our Courses
              </h3>
              <ul className="space-y-3">
                {footerLinks.courses.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/60 hover:text-indigo-400 transition-colors flex items-center gap-2 group text-sm"
                    >
                      <ArrowRight className="h-3 w-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Support */}
            <motion.div variants={itemVariants} className="lg:col-span-3">
              <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
                <div className="w-8 h-[2px] bg-gradient-to-r from-cyan-500 to-transparent" />
                Support
              </h3>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/60 hover:text-cyan-400 transition-colors flex items-center gap-2 group text-sm"
                    >
                      <ArrowRight className="h-3 w-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      {link.name}
                      {link.name === "Student Portal" && (
                        <ExternalLink className="h-3 w-3 opacity-50" />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-8"
              >
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-violet-600/20 to-indigo-600/20 hover:from-violet-600/30 hover:to-indigo-600/30 text-white border border-white/10 rounded-xl"
                >
                  <Link href="/apply" className="flex items-center justify-center gap-2">
                    <Sparkles className="h-4 w-4" />
                    Apply Now
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <div className="relative border-t border-white/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Copyright */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-white/40 text-sm flex items-center gap-1"
              >
                &copy; {new Date().getFullYear()} EduVerse. Made with
                <Heart className="h-3 w-3 text-red-500 fill-red-500 mx-1" />
                All rights reserved.
              </motion.p>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="flex items-center gap-2"
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`p-2.5 rounded-xl bg-white/5 text-white/60 hover:text-white transition-all ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon className="h-4 w-4" />
                  </motion.a>
                ))}
              </motion.div>

              {/* Back to top (optional) */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="hidden md:flex items-center gap-2 text-white/40 hover:text-white/70 text-sm transition-colors"
              >
                Back to top
                <div className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                  <ArrowRight className="h-3 w-3 -rotate-90" />
                </div>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
