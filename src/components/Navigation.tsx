
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Settings, Users } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">AI</span>
            </div>
            <span className="text-xl font-bold text-gray-900">InterviewAI</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <Button 
              asChild 
              variant={location.pathname === "/careers" ? "default" : "ghost"}
              className="hover-scale"
            >
              <Link to="/careers">Careers</Link>
            </Button>
            <Button 
              asChild 
              variant={location.pathname === "/dashboard" ? "default" : "ghost"}
              className="hover-scale"
            >
              <Link to="/dashboard">
                <Users className="h-4 w-4 mr-2" />
                Dashboard
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
