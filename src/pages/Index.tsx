
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowDown, ArrowUp, Users, MessageSquare, Search, Settings } from "lucide-react";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
              AI-Powered Interviews
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Revolutionary recruitment platform that transforms hiring with intelligent AI interviews, 
              real-time analysis, and seamless candidate experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8 py-6 bg-blue-600 hover:bg-blue-700">
                <Link to="/careers">Browse Careers</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 border-blue-200 hover:bg-blue-50">
                <Link to="/dashboard">Recruiter Dashboard</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Transforming Recruitment</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the future of hiring with AI-driven interviews that adapt, analyze, and deliver insights
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300 hover-scale">
              <CardHeader>
                <MessageSquare className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>AI Voice Interviews</CardTitle>
                <CardDescription>
                  Natural, conversational AI that adapts to candidate responses with real-time speech processing
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="hover:shadow-lg transition-all duration-300 hover-scale">
              <CardHeader>
                <Search className="h-12 w-12 text-indigo-600 mb-4" />
                <CardTitle>Smart Analysis</CardTitle>
                <CardDescription>
                  Advanced AI analysis with sentiment detection, keyword matching, and comprehensive scoring
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="hover:shadow-lg transition-all duration-300 hover-scale">
              <CardHeader>
                <Users className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Recruiter Dashboard</CardTitle>
                <CardDescription>
                  Comprehensive insights, candidate tracking, and performance analytics in one intuitive interface
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-blue-100">Interview Completion Rate</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-4xl font-bold mb-2">60%</div>
              <div className="text-blue-100">Faster Hiring Process</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-4xl font-bold mb-2">10k+</div>
              <div className="text-blue-100">Successful Interviews</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Transform Your Hiring?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of companies already using AI-powered interviews to find the best talent
          </p>
          <Button asChild size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
            <Link to="/careers">Get Started Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
