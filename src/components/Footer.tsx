export default function Footer() {
  return (
    <footer className="max-w-6xl mx-auto px-4 py-12 flex flex-col md:flex-row justify-between items-center text-sm text-text-secondary mt-12 border-t border-gray-200">
      <p className="mb-4 md:mb-0">
        {"\u00A9"} 2024 Alex Chen. All rights reserved.
      </p>
      <div className="flex gap-6">
        <a
          href="#"
          className="hover:text-text-primary transition-colors"
        >
          Twitter
        </a>
        <a
          href="#"
          className="hover:text-text-primary transition-colors"
        >
          LinkedIn
        </a>
        <a
          href="#"
          className="hover:text-text-primary transition-colors"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}
