import { Github, Linkedin, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-tr from-secondary via-background to-primary/10 py-10 px-4 rounded-t-2xl shadow-2xl mt-16 relative overflow-hidden">
      {/* Highly visible, dynamic bubble gum effect bubbles */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-44 h-44 bg-pink-400/60 rounded-full blur-2xl opacity-80 animate-bubble-gum1" />
      <div className="absolute right-10 top-1/3 w-32 h-32 bg-purple-400/60 rounded-full blur-2xl opacity-70 animate-bubble-gum2" />
      <div className="absolute left-10 top-1/4 w-28 h-28 bg-primary/60 rounded-full blur-2xl opacity-60 animate-bubble-gum3" />
      <div className="absolute left-1/4 top-1/2 w-20 h-20 bg-pink-300/60 rounded-full blur-2xl opacity-60 animate-bubble-gum4" />
      <div className="absolute right-1/4 bottom-10 w-36 h-36 bg-blue-400/60 rounded-full blur-2xl opacity-60 animate-bubble-gum5" />
      <div className="absolute left-1/3 top-10 w-20 h-20 bg-pink-500/60 rounded-full blur-2xl opacity-60 animate-bubble-gum6" />
      <div className="absolute left-1/5 bottom-1/3 w-16 h-16 bg-yellow-400/50 rounded-full blur-2xl opacity-60 animate-bubble-gum7" />
      <div className="absolute right-1/5 top-1/5 w-20 h-20 bg-green-400/50 rounded-full blur-2xl opacity-55 animate-bubble-gum8" />
      <div className="absolute left-1/6 top-1/6 w-14 h-14 bg-pink-200/50 rounded-full blur-2xl opacity-50 animate-bubble-gum9" />
      <div className="absolute right-1/3 bottom-1/4 w-24 h-24 bg-blue-300/50 rounded-full blur-2xl opacity-50 animate-bubble-gum10" />
      <div className="absolute left-1/2 top-1/3 w-20 h-20 bg-purple-300/50 rounded-full blur-2xl opacity-50 animate-bubble-gum11" />
      <div className="absolute left-0 top-0 w-20 h-20 bg-green-400/60 rounded-full blur-2xl opacity-60 animate-bubble-gum12" />
      <div className="absolute right-0 bottom-0 w-24 h-24 bg-yellow-300/60 rounded-full blur-2xl opacity-60 animate-bubble-gum13" />
      <div className="absolute left-1/3 bottom-0 w-16 h-16 bg-blue-300/60 rounded-full blur-2xl opacity-60 animate-bubble-gum14" />
      <div className="absolute right-1/2 top-0 w-20 h-20 bg-pink-200/60 rounded-full blur-2xl opacity-60 animate-bubble-gum15" />
      <div className="max-w-2xl mx-auto flex flex-col items-center text-center gap-6 relative z-10">
        <h3 className="text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg">Your<span className="text-primary">Name</span></h3>
        <p className="text-lg md:text-xl text-white/90 font-medium max-w-md drop-shadow">Building beautiful, functional websites and web applications that help businesses achieve their goals.</p>
        <div className="flex gap-6 mt-2">
          <a href="#" className="text-white hover:text-primary transition-colors transform hover:scale-125 duration-300">
            <Github size={32} />
          </a>
          <a href="#" className="text-white hover:text-primary transition-colors transform hover:scale-125 duration-300">
            <Linkedin size={32} />
          </a>
          <a href="#" className="text-white hover:text-primary transition-colors transform hover:scale-125 duration-300">
            <Instagram size={32} />
          </a>
          <a href="#" className="text-white hover:text-primary transition-colors transform hover:scale-125 duration-300">
            <Twitter size={32} />
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <a href="#home" className="text-white/90 hover:text-primary transition-colors underline-offset-4 hover:underline text-lg">Home</a>
          <a href="#about" className="text-white/90 hover:text-primary transition-colors underline-offset-4 hover:underline text-lg">About</a>
          <a href="#services" className="text-white/90 hover:text-primary transition-colors underline-offset-4 hover:underline text-lg">Services</a>
          <a href="#projects" className="text-white/90 hover:text-primary transition-colors underline-offset-4 hover:underline text-lg">Projects</a>
          <a href="#contact" className="text-white/90 hover:text-primary transition-colors underline-offset-4 hover:underline text-lg">Contact</a>
        </div>
        <div className="mt-2 text-lg text-white/80 font-semibold">
          <div>Chisinau, Moldova</div>
          <div>Email: <a href="mailto:mihail.mihai2001@gmail.com" className="hover:text-primary transition-colors underline underline-offset-4">mihail.mihai2001@gmail.com</a></div>
          <div>Phone: <a href="tel:+37379331104" className="hover:text-primary transition-colors underline underline-offset-4">+373 79 33 11 04</a></div>
        </div>
        <div className="w-full border-t border-border pt-6 mt-6 flex flex-col md:flex-row gap-2 justify-center items-center text-base text-white/80">
          <span>© 2025 YourName. All rights reserved.</span>
          <span className="hidden md:inline">|</span>
          <a id="privacy-policy-section" href="/privacy-policy" className="hover:text-primary transition-colors underline underline-offset-4">Privacy Policy</a>
          <span>•</span>
          <a id="terms-section" href="/terms" className="hover:text-primary transition-colors underline underline-offset-4">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
