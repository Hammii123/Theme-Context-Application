import { useContext, useState } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import ThemeToggle from "./ThemeToggle";
import chatgptImage from "../assets/ChatGPT-Website-Creation.png";

function AppContent() {
    const { theme } = useContext(ThemeContext);

    const [menuOpen, setMenuOpen] = useState(false);

    function closeMenu() {
        setMenuOpen(false);
    }
    return (
        <div className={`app ${theme}`}>

            {/* ================= HEADER ================= */}
            <header className="header">





                {/* Navbar */}
                <nav className="nav-wrapper">

                    <span className="brand" >
                        ChatGPT
                    </span>

                    {/* Hamburger */}
                    <button
                        className="hamburger"
                        type="button"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        ☰
                    </button>

                    {/* Navigation Links */}
                    <ul className={`nav-links ${menuOpen ? "open" : ""}`}>

                        <li>
                            <a href="#introduction" onClick={closeMenu}>
                                Introduction
                            </a>
                        </li>

                        <li>
                            <a href="#services" onClick={closeMenu}>
                                Services
                            </a>
                        </li>

                        <li>
                            <a href="#features" onClick={closeMenu}>
                                Features
                            </a>
                        </li>

                        <li>
                            <a href="#reviews" onClick={closeMenu}>
                                Reviews
                            </a>
                        </li>

                        <li>
                            <a href="#pricing" onClick={closeMenu}>
                                Pricing
                            </a>
                        </li>

                    </ul>

                </nav>

                {/* Theme slider */}
                <ThemeToggle />

            </header>


            {/* ================= MAIN ================= */}
            <main className="main-content">

                {/* ================= INTRODUCTION ================= */}
                <section id="introduction">

                    <div className="Introduction">

                        <div className="image">
                            <img
                                src={chatgptImage}
                                alt="ChatGPT introduction" width="240px" height="240px"
                            />
                        </div>

                        <div className="intro_content">

                            <h1>
                                Transform teams with ChatGPT
                            </h1>

                            <p>
                                ChatGPT Business gives teams a secure workspace
                                with connected company plugins, shared context,
                                and workflows — while giving admins the control,
                                visibility, and security to deploy AI at scale.
                            </p>

                        </div>

                    </div>

                </section>


                {/* ================= SERVICES ================= */}
                <section id="services">

                    <div className="services-header">

                        <h2>
                            What ChatGPT can do
                        </h2>

                        <p>
                            One assistant, endless use cases
                        </p>

                    </div>


                    <div className="services-grid">

                        <div className="service-card">

                            <span className="service-icon">
                                💬
                            </span>

                            <h3>
                                Conversational Assistant
                            </h3>

                            <p>
                                Ask questions, get explanations, and have
                                natural back-and-forth conversations on any topic.
                            </p>

                        </div>


                        <div className="service-card">

                            <span className="service-icon">
                                ✍️
                            </span>

                            <h3>
                                Writing & Editing
                            </h3>

                            <p>
                                Draft emails, essays, and articles, or polish
                                existing writing for tone, grammar, and clarity.
                            </p>

                        </div>


                        <div className="service-card">

                            <span className="service-icon">
                                💻
                            </span>

                            <h3>
                                Coding Assistant
                            </h3>

                            <p>
                                Write, debug, and explain code across dozens
                                of programming languages and frameworks.
                            </p>

                        </div>


                        <div className="service-card">

                            <span className="service-icon">
                                📚
                            </span>

                            <h3>
                                Learning & Research
                            </h3>

                            <p>
                                Break down complex topics, summarize documents,
                                and tutor you through new subjects.
                            </p>

                        </div>


                        <div className="service-card">

                            <span className="service-icon">
                                🌎
                            </span>

                            <h3>
                                Translation
                            </h3>

                            <p>
                                Translate and localize text across languages
                                while preserving tone and context.
                            </p>

                        </div>


                        <div className="service-card">

                            <span className="service-icon">
                                🎙️
                            </span>

                            <h3>
                                Voice & Image
                            </h3>

                            <p>
                                Talk to ChatGPT out loud or share images
                                for it to analyze and describe.
                            </p>

                        </div>

                    </div>

                </section>


                {/* ================= FEATURES ================= */}
                <section id="features">

                    <div className="features-inner">

                        <div className="features-media">

                            <img
                                src={chatgptImage}
                                alt="ChatGPT interface preview"
                            />

                        </div>


                        <div className="features-content">

                            <h1 className="eyebrow">
                                Why ChatGPT
                            </h1>

                            <h2>
                                Built to keep up with how you think
                            </h2>

                            <p className="features-subtext">
                                Fast, flexible, and available whenever you need
                                it — not just another chatbot.
                            </p>


                            <ul className="features-list">

                                <li>

                                    <span className="check">
                                        ✓
                                    </span>

                                    <div>

                                        <h4>
                                            Instant Response
                                        </h4>

                                        <p>
                                            Delivers immediate, natural-sounding
                                            responses that keep pace with your train
                                            of thought — no awkward pauses.
                                        </p>

                                    </div>

                                </li>


                                <li>

                                    <span className="check">
                                        ✓
                                    </span>

                                    <div>

                                        <h4>
                                            Available 24/7
                                        </h4>

                                        <p>
                                            No waiting rooms, no support tickets.
                                            Get answers the moment you need them.
                                        </p>

                                    </div>

                                </li>

                            </ul>

                        </div>

                    </div>

                </section>


                {/* ================= REVIEWS ================= */}
                <section id="reviews">

                    <div className="reviews-header">

                        <h2>
                            What people say about ChatGPT
                        </h2>

                        <p>
                            Real feedback from real users.
                        </p>

                    </div>


                    <div className="reviews-grid">

                        <div className="review-card">

                            <p className="review-text">
                                ChatGPT has transformed the way I approach
                                my daily tasks.
                            </p>

                            <div className="reviewer">

                                <div className="avatar">
                                    A
                                </div>

                                <div>

                                    <h4>
                                        Ayesha Khan
                                    </h4>

                                    <span>
                                        Marketing Manager
                                    </span>

                                </div>

                            </div>

                        </div>


                        <div className="review-card">

                            <p className="review-text">
                                As a developer, I use it daily for debugging
                                and explaining tricky code. It's like having
                                a senior developer on call.
                            </p>

                            <div className="reviewer">

                                <div className="avatar">
                                    B
                                </div>

                                <div>

                                    <h4>
                                        Bhavesh Kumar
                                    </h4>

                                    <span>
                                        Software Engineer
                                    </span>

                                </div>

                            </div>

                        </div>


                        <div className="review-card">

                            <p className="review-text">
                                Great for studying and breaking down complex
                                topics. Feels like a patient tutor available
                                24/7.
                            </p>

                            <div className="reviewer">

                                <div className="avatar">
                                    C
                                </div>

                                <div>

                                    <h4>
                                        Chetna
                                    </h4>

                                    <span>
                                        Student
                                    </span>

                                </div>

                            </div>

                        </div>

                    </div>

                </section>


                {/* ================= PRICING ================= */}
                <section id="pricing">

                    <div className="pricing-header">

                        <h2>
                            Transparent Pricing
                        </h2>

                        <p>
                            Choose the plan that fits how you can use ChatGPT.
                        </p>

                    </div>


                    <div className="pricing-grid">

                        {/* FREE */}
                        <div className="pricing-card">

                            <h3>
                                Free
                            </h3>

                            <p className="price">
                                $0
                                <span>/month</span>
                            </p>

                            <p className="plan-desc">
                                Simple operations.
                            </p>

                            <ul className="plan-features">

                                <li>
                                    Access to GPT base model
                                </li>

                                <li>
                                    Standard response speed
                                </li>

                                <li>
                                    Limited daily messages
                                </li>

                                <li>
                                    Web access
                                </li>

                            </ul>

                            <button className="btn">
                                Get started
                            </button>

                        </div>


                        {/* PLUS */}
                        <div className="pricing-card featured">

                            <span className="badge">
                                Most Popular
                            </span>

                            <h3>
                                Plus Plan
                            </h3>

                            <p className="price">
                                $20
                                <span>/month</span>
                            </p>

                            <p className="plan-desc">
                                More access, faster responses, priority features.
                            </p>

                            <ul className="plan-features">

                                <li>
                                    Everything in Free plan
                                </li>

                                <li>
                                    Faster response times
                                </li>

                                <li>
                                    More credits and tokens
                                </li>

                                <li>
                                    Voice and image support
                                </li>

                            </ul>

                            <button className="btn">
                                Get started
                            </button>

                        </div>


                        {/* TEAM */}
                        <div className="pricing-card">

                            <h3>
                                Team
                            </h3>

                            <p className="price">
                                $30
                                <span>/user/month</span>
                            </p>

                            <p className="plan-desc">
                                Built for teams that collaborate daily.
                            </p>

                            <ul className="plan-features">

                                <li>
                                    Everything in Plus plan
                                </li>

                                <li>
                                    Shared workspace
                                </li>

                                <li>
                                    Admin console
                                </li>

                                <li>
                                    50000 tokens/month
                                </li>

                                <li>
                                    Dedicated support
                                </li>

                            </ul>

                            <button className="btn">
                                Contact sales
                            </button>

                        </div>

                    </div>

                </section>

            </main>


            {/* ================= FOOTER ================= */}
            <footer className="site-footer">

                <div className="footer-top">

                    <div className="footer-brand">

                        <span className="brand">
                            ChatGPT
                        </span>

                        <p>
                            An AI assistant built to help you write,
                            learn, code, and create — anytime you need it.
                        </p>

                    </div>


                    <div className="footer-col">

                        <h4>
                            Product
                        </h4>

                        <ul>

                            <li>
                                <a href="#services">
                                    Services
                                </a>
                            </li>

                            <li>
                                <a href="#features">
                                    Features
                                </a>
                            </li>

                            <li>
                                <a href="#reviews">
                                    Reviews
                                </a>
                            </li>

                            <li>
                                <a href="#pricing">
                                    Pricing
                                </a>
                            </li>

                        </ul>

                    </div>


                    <div className="footer-col">

                        <h4>
                            Company
                        </h4>

                        <ul>

                            <li>
                                <a href="#">
                                    About
                                </a>
                            </li>

                            <li>
                                <a href="#">
                                    Careers
                                </a>
                            </li>

                            <li>
                                <a href="#">
                                    Blog
                                </a>
                            </li>

                            <li>
                                <a href="#">
                                    Contact
                                </a>
                            </li>

                        </ul>

                    </div>

                </div>


                <div className="footer-bottom">

                    <p>
                        © 2026 ChatGPT. All rights reserved.
                    </p>

                </div>

            </footer>

        </div>
    );
}

export default AppContent;