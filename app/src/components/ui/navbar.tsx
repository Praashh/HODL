  import {
    WalletModalProvider,
    WalletMultiButton,
  } from "@solana/wallet-adapter-react-ui";
  import { Menu, X } from "lucide-react";
  import { useState } from "react";
  import {Link} from "react-router-dom";
  import navItems from "@/lib/navitems.json";
  
  export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <nav className="fixed w-full bg-gray-900/90 backdrop-blur-md z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                HODL
              </span>
            </div>
  
            <div className="hidden md:flex items-center space-x-8">
              {(Object.keys(navItems) as Array<keyof typeof navItems>).map((key) => (
                <Link
                  key={key}
                  href={navItems[key].href}
                  className={navItems[key].className}
                >
                  {navItems[key].title}
                </Link>
              ))}
              <button className="bg-blue-600 hover:bg-blue-700 px-2 py-0 rounded-lg text-white transition-colors">
                <WalletModalProvider>
                  <WalletMultiButton
                    style={{
                      background: "transparent",
                    }}
                  />
                </WalletModalProvider>
              </button>
            </div>
  
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-white"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
  
          {isOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {(Object.keys(navItems) as Array<keyof typeof navItems>).map((key) => (
                  <Link
                    key={key}
                    href={navItems[key].href}
                    className={`block ${navItems[key].className}`}
                  >
                    {navItems[key].title}
                  </Link>
                ))}
                <button className="w-full text-left bg-blue-600 hover:bg-blue-700 px-2 rounded-lg text-white transition-colors">
                  <WalletModalProvider>
                    <WalletMultiButton
                      style={{
                        background: "transparent",
                      }}
                    />
                  </WalletModalProvider>
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    );
  };