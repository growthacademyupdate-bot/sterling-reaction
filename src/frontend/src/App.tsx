import { ChevronRight, Play, Search } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import {
  SiFacebook,
  SiInstagram,
  SiSnapchat,
  SiTelegram,
  SiYoutube,
} from "react-icons/si";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Reactions", href: "#trending" },
  { label: "Categories", href: "#categories" },
  { label: "Community", href: "#footer" },
];

const FILTER_PILLS = [
  "All",
  "Movie Reactions",
  "Music Videos",
  "Viral Trends",
  "Comedy",
];

const VIDEO_CARDS = [
  {
    id: 1,
    title: "Epic Movie Reaction",
    category: "🎬 Movie",
    views: "124K views",
    time: "2 days ago",
    img: "https://picsum.photos/seed/react1/600/340",
  },
  {
    id: 2,
    title: "Music Reaction Banger",
    category: "🎵 Music",
    views: "89K views",
    time: "5 hours ago",
    img: "https://picsum.photos/seed/react2/600/340",
  },
  {
    id: 3,
    title: "Viral Clip Goes Wild",
    category: "🔥 Viral",
    views: "231K views",
    time: "1 day ago",
    img: "https://picsum.photos/seed/react3/600/340",
  },
  {
    id: 4,
    title: "Comedy Gold Compilation",
    category: "😂 Comedy",
    views: "56K views",
    time: "3 days ago",
    img: "https://picsum.photos/seed/react4/600/340",
  },
  {
    id: 5,
    title: "Anime Scene Breakdown",
    category: "⚔️ Anime",
    views: "178K views",
    time: "6 hours ago",
    img: "https://picsum.photos/seed/react5/600/340",
  },
  {
    id: 6,
    title: "Tech Reveal Reaction",
    category: "💻 Tech",
    views: "44K views",
    time: "4 days ago",
    img: "https://picsum.photos/seed/react6/600/340",
  },
];

const CATEGORIES = [
  { icon: "🎬", label: "Movies" },
  { icon: "🎵", label: "Music" },
  { icon: "🔥", label: "Viral" },
  { icon: "😂", label: "Comedy" },
  { icon: "🎮", label: "Gaming" },
  { icon: "⚔️", label: "Anime" },
  { icon: "💻", label: "Tech" },
];

const FOOTER_NAV = ["Home", "Reactions", "Categories", "About", "Contact"];
const FOOTER_CATS = ["Movies", "Music", "Viral", "Comedy", "Gaming", "Anime"];

const SOCIAL_LINKS = [
  {
    icon: SiYoutube,
    label: "YouTube",
    href: "http://www.youtube.com/@thehandsomereaction",
  },
  {
    icon: SiInstagram,
    label: "Instagram",
    href: "https://www.instagram.com/monuhandsomereaction",
  },
  {
    icon: SiFacebook,
    label: "Facebook",
    href: "https://www.facebook.com/monuhansomereaction",
  },
  {
    icon: SiTelegram,
    label: "Telegram",
    href: "https://t.me/thehandsomereaction",
  },
  {
    icon: SiSnapchat,
    label: "Snapchat",
    href: "https://www.snapchat.com/@monuhandsom",
  },
];

export default function App() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeNav, setActiveNav] = useState("Home");

  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* NAVBAR */}
      <header
        className="sticky top-0 z-50 w-full bg-nav-bg border-b border-border"
        data-ocid="nav.panel"
      >
        <div className="max-w-[1200px] mx-auto px-6 py-3 flex items-center gap-6">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2 shrink-0"
            data-ocid="nav.link"
          >
            <span className="text-red-accent text-xl">▶</span>
            <span className="text-foreground font-display font-bold text-lg tracking-tight">
              Sterling <span className="text-red-accent">Reaction</span>
            </span>
          </a>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-1 flex-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setActiveNav(link.label)}
                data-ocid="nav.link"
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors relative ${
                  activeNav === link.label
                    ? "text-foreground"
                    : "text-text-muted hover:text-foreground"
                }`}
              >
                {link.label}
                {activeNav === link.label && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-red-accent rounded-full" />
                )}
              </a>
            ))}
          </nav>

          {/* Search */}
          <div className="relative hidden sm:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
            <input
              type="text"
              placeholder="Search reactions..."
              data-ocid="nav.search_input"
              className="bg-surface border border-border rounded-full pl-9 pr-4 py-2 text-sm text-foreground placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-red-accent/50 w-52"
            />
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            <a
              href="http://www.youtube.com/@thehandsomereaction"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="nav.link"
              className="text-text-muted hover:text-red-accent transition-colors"
            >
              <SiYoutube className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/monuhandsomereaction"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="nav.link"
              className="text-text-muted hover:text-foreground transition-colors"
            >
              <SiInstagram className="w-5 h-5" />
            </a>
          </div>

          {/* CTA */}
          <a
            href="http://www.youtube.com/@thehandsomereaction"
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="nav.primary_button"
            className="shrink-0 bg-red-accent text-primary-foreground text-sm font-semibold px-4 py-2 rounded-full hover:opacity-90 transition-opacity flex items-center gap-1.5"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            Watch Now
          </a>
        </div>
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative w-full px-4 py-10 flex items-center justify-center"
        style={{ minHeight: "72vh" }}
        data-ocid="hero.section"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(11,16,32,0.65), rgba(10,15,26,0.9)), url('https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=1600')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-10 max-w-2xl mx-auto text-center px-4"
        >
          <div className="inline-flex items-center gap-2 bg-red-accent/15 border border-red-accent/30 text-red-accent text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-red-accent animate-pulse" />
            NEW REACTIONS EVERY WEEK
          </div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.05] mb-5">
            FEEL EVERY
            <span className="text-red-accent"> REACTION.</span>
          </h1>
          <p className="text-text-secondary text-lg mb-8 leading-relaxed">
            Raw, unfiltered reactions to movies, music, viral moments and more.
            Experience every emotion — live.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href="http://www.youtube.com/@thehandsomereaction"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="hero.primary_button"
              className="inline-flex items-center gap-2 bg-red-accent text-primary-foreground font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-opacity shadow-hero text-sm"
            >
              <Play className="w-4 h-4 fill-current" />
              Watch Now
            </a>
            <button
              type="button"
              data-ocid="hero.secondary_button"
              onClick={() =>
                document
                  .getElementById("trending")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center gap-2 bg-transparent border border-foreground/30 text-foreground font-semibold px-6 py-3 rounded-full hover:bg-foreground/10 transition-colors text-sm"
            >
              Explore
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </section>

      {/* TRENDING */}
      <section
        id="trending"
        className="max-w-[1200px] mx-auto px-6 py-16"
        data-ocid="trending.section"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-2xl md:text-3xl font-bold tracking-widest text-center text-foreground uppercase mb-8">
            TRENDING NOW
          </h2>

          {/* Filter pills */}
          <div
            className="flex flex-wrap justify-center gap-2 mb-10"
            data-ocid="trending.panel"
          >
            {FILTER_PILLS.map((pill) => (
              <button
                type="button"
                key={pill}
                onClick={() => setActiveFilter(pill)}
                data-ocid="trending.tab"
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                  activeFilter === pill
                    ? "bg-red-accent text-primary-foreground border-red-accent"
                    : "bg-transparent border-pill-border text-text-secondary hover:border-foreground/50 hover:text-foreground"
                }`}
              >
                {pill}
              </button>
            ))}
          </div>

          {/* Cards grid */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            data-ocid="trending.list"
          >
            {VIDEO_CARDS.map((card, idx) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.45 }}
                data-ocid={`trending.item.${idx + 1}`}
                className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-red-accent/40 transition-all shadow-card cursor-pointer"
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-red-accent/90 flex items-center justify-center">
                      <Play className="w-5 h-5 fill-white text-white" />
                    </div>
                  </div>
                  <span className="absolute top-3 left-3 bg-red-accent/90 text-primary-foreground text-xs font-bold px-2 py-0.5 rounded-md">
                    {card.category}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="text-foreground font-semibold text-sm mb-2 line-clamp-2 leading-snug">
                    {card.title}
                  </h3>
                  <div className="flex items-center justify-between text-xs text-text-muted">
                    <span>@SterlingReaction</span>
                    <span>
                      {card.views} · {card.time}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CATEGORIES */}
      <section
        id="categories"
        className="max-w-[1200px] mx-auto px-6 py-16 border-t border-border"
        data-ocid="categories.section"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-2xl md:text-3xl font-bold tracking-widest text-center text-foreground uppercase mb-10">
            BROWSE BY CATEGORY
          </h2>
          <div
            className="flex flex-wrap justify-center gap-4"
            data-ocid="categories.list"
          >
            {CATEGORIES.map((cat, idx) => (
              <motion.button
                type="button"
                key={cat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06 }}
                whileHover={{ scale: 1.05 }}
                data-ocid={`categories.item.${idx + 1}`}
                className="flex flex-col items-center gap-3 bg-surface border border-border hover:border-red-accent/50 rounded-2xl px-6 py-5 min-w-[110px] transition-all group"
              >
                <span className="text-3xl group-hover:scale-110 transition-transform">
                  {cat.icon}
                </span>
                <span className="text-sm font-semibold text-text-secondary group-hover:text-foreground transition-colors">
                  {cat.label}
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer
        id="footer"
        className="bg-nav-bg border-t border-border mt-8"
        data-ocid="footer.section"
      >
        <div className="max-w-[1200px] mx-auto px-6 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-10">
            {/* Navigation */}
            <div>
              <h4 className="text-foreground font-bold text-sm uppercase tracking-widest mb-4">
                Navigation
              </h4>
              <ul className="space-y-2.5">
                {FOOTER_NAV.map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      data-ocid="footer.link"
                      className="text-text-muted hover:text-foreground text-sm transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h4 className="text-foreground font-bold text-sm uppercase tracking-widest mb-4">
                Categories
              </h4>
              <ul className="space-y-2.5">
                {FOOTER_CATS.map((cat) => (
                  <li key={cat}>
                    <a
                      href="#categories"
                      data-ocid="footer.link"
                      className="text-text-muted hover:text-foreground text-sm transition-colors"
                    >
                      {cat}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="text-foreground font-bold text-sm uppercase tracking-widest mb-4">
                Social Media
              </h4>
              <ul className="space-y-3">
                {SOCIAL_LINKS.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-ocid="footer.link"
                      className="flex items-center gap-2.5 text-text-muted hover:text-foreground text-sm transition-colors group"
                    >
                      <social.icon className="w-4 h-4 group-hover:text-red-accent transition-colors" />
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Divider & copyright */}
          <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-text-muted">
            <div className="flex items-center gap-2">
              <span className="text-red-accent text-base">▶</span>
              <span className="font-bold text-foreground">
                Sterling Reaction
              </span>
            </div>
            <span>© {currentYear} Sterling Reaction. All rights reserved.</span>
            <span>
              Built with <span className="text-red-accent">♥</span> using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                caffeine.ai
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
