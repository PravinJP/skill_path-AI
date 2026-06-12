const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-12">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        <div>
          <h2 className="font-bold text-xl">
            SkillPath AI
          </h2>
        </div>

        <div>
          <h3 className="font-semibold mb-4">
            Platform
          </h3>

          <ul className="space-y-2 text-gray-400">
            <li>Features</li>
            <li>Pricing</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">
            Company
          </h3>

          <ul className="space-y-2 text-gray-400">
            <li>Resources</li>
            <li>Privacy</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">
            Support
          </h3>

          <ul className="space-y-2 text-gray-400">
            <li>Terms</li>
            <li>Contact</li>
          </ul>
        </div>

      </div>

    </footer>
  );
};

export default Footer;