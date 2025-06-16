
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Link } from "react-router-dom";
import { Search, MapPin, Clock, Users } from "lucide-react";
import Navigation from "@/components/Navigation";
import ApplicationModal from "@/components/ApplicationModal";

const CareersPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const jobs = [
    {
      id: 1,
      title: "Senior Software Engineer",
      department: "Engineering",
      location: "San Francisco, CA",
      type: "Full-time",
      description: "Join our engineering team to build scalable AI-powered solutions. Work with cutting-edge technologies including React, Node.js, and machine learning frameworks.",
      requirements: ["5+ years experience", "React/Node.js", "AI/ML knowledge", "System design"],
      posted: "2 days ago"
    },
    {
      id: 2,
      title: "Product Manager",
      department: "Product",
      location: "New York, NY",
      type: "Full-time",
      description: "Lead product strategy for our AI interview platform. Define roadmaps, work with cross-functional teams, and drive product innovation.",
      requirements: ["3+ years PM experience", "AI/ML products", "User research", "Data-driven decisions"],
      posted: "5 days ago"
    },
    {
      id: 3,
      title: "UX Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      description: "Design intuitive user experiences for our AI-powered recruitment platform. Create user-centered designs that simplify complex interactions.",
      requirements: ["4+ years UX design", "Figma/Sketch", "User research", "B2B SaaS experience"],
      posted: "1 week ago"
    },
    {
      id: 4,
      title: "AI Research Scientist",
      department: "Research",
      location: "Boston, MA",
      type: "Full-time",
      description: "Research and develop advanced AI models for natural language processing and speech recognition in interview contexts.",
      requirements: ["PhD in AI/ML", "NLP expertise", "Python/TensorFlow", "Research publications"],
      posted: "3 days ago"
    }
  ];

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Navigation />
      
      <div className="pt-20 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Join Our Mission
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Help us revolutionize recruitment with AI. Find your perfect role and make an impact.
            </p>
          </div>

          {/* Search */}
          <div className="mb-8">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Search jobs, departments, locations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 py-3 text-lg"
              />
            </div>
          </div>

          {/* Job Listings */}
          <div className="grid gap-6">
            {filteredJobs.map((job) => (
              <Card key={job.id} className="hover:shadow-lg transition-all duration-300 hover-scale">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                      <CardDescription className="text-base mb-4">
                        {job.description}
                      </CardDescription>
                    </div>
                    <Badge variant="secondary" className="ml-4">
                      {job.department}
                    </Badge>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {job.type}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      Posted {job.posted}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {job.requirements.map((req, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {req}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="flex gap-3">
                    <ApplicationModal job={job} />
                    <Button variant="outline" asChild>
                      <Link to={`/interview/${job.id}`}>Preview Interview</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No jobs found matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CareersPage;
