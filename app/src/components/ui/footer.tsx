import { Twitter, Github } from "lucide-react";
import footerItem from "@/lib/footerItem.json";
import { Link } from "react-router-dom";
export const Footer = () => (
  <footer className="bg-gray-900 text-gray-300">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            {(Object.keys(footerItem) as Array<keyof typeof footerItem>)
              .slice(0, 3) 
              .map((key) => (
                <li key={key}>
                  <a
                    href={footerItem[key].href}
                    className={footerItem[key].className}
                  >
                    {footerItem[key].title}
                  </a>
                </li>
              ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Products</h3>
          <ul className="space-y-2">
          {(Object.keys(footerItem) as Array<keyof typeof footerItem>)
              .slice(3, 6) 
              .map((key) => (
                <li key={key}>
                  <a
                    href={footerItem[key].href}
                    className={footerItem[key].className}
                  >
                    {footerItem[key].title}
                  </a>
                </li>
              ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
          {(Object.keys(footerItem) as Array<keyof typeof footerItem>)
              .slice(6, 9) 
              .map((key) => (
                <li key={key}>
                  <a
                    href={footerItem[key].href}
                    className={footerItem[key].className}
                  >
                    {footerItem[key].title}
                  </a>
                </li>
              ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Connect</h3>
          <div className="flex space-x-4">
            <Link href="https://twitter.com/10Xpraash" className="hover:text-white transition-colors">
              <Twitter size={24} />
            </Link>
            <Link href="https://github.com/praashh" className="hover:text-white transition-colors">
              <Github size={24} />
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} HODL. All rights reserved.</p>
      </div>
    </div>
  </footer>
);
