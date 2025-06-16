
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Users, MessageSquare, Clock, ArrowUp, ArrowDown, Eye, Settings } from "lucide-react";
import Navigation from "@/components/Navigation";

const DashboardPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const candidates = [
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah.johnson@email.com",
      position: "Senior Software Engineer",
      appliedDate: "2024-01-15",
      interviewDate: "2024-01-16",
      status: "completed",
      score: 88,
      analysis: {
        technicalSkills: 92,
        communication: 85,
        problemSolving: 90,
        culturalFit: 85
      },
      responses: 5,
      duration: "18 min"
    },
    {
      id: 2,
      name: "Michael Chen",
      email: "michael.chen@email.com",
      position: "Product Manager",
      appliedDate: "2024-01-14",
      interviewDate: "2024-01-15",
      status: "completed",
      score: 76,
      analysis: {
        technicalSkills: 70,
        communication: 88,
        problemSolving: 75,
        culturalFit: 82
      },
      responses: 5,
      duration: "22 min"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      email: "emily.rodriguez@email.com",
      position: "UX Designer",
      appliedDate: "2024-01-13",
      interviewDate: null,
      status: "pending",
      score: 0,
      analysis: null,
      responses: 0,
      duration: null
    },
    {
      id: 4,
      name: "David Kim",
      email: "david.kim@email.com",
      position: "AI Research Scientist",
      appliedDate: "2024-01-12",
      interviewDate: "2024-01-14",
      status: "in-progress",
      score: 0,
      analysis: null,
      responses: 3,
      duration: "12 min"
    }
  ];

  const stats = {
    totalApplications: 156,
    completedInterviews: 89,
    averageScore: 82,
    averageDuration: "19 min"
  };

  const filteredCandidates = candidates.filter(candidate => {
    const matchesSearch = candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         candidate.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         candidate.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === "all" || candidate.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "bg-green-100 text-green-800";
      case "in-progress": return "bg-blue-100 text-blue-800";
      case "pending": return "bg-yellow-100 text-yellow-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Navigation />
      
      <div className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8 animate-fade-in">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Recruiter Dashboard</h1>
            <p className="text-gray-600">Track candidates, analyze interviews, and make data-driven hiring decisions.</p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="hover-scale">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">Total Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.totalApplications}</div>
                <div className="flex items-center text-sm text-green-600 mt-1">
                  <ArrowUp className="h-4 w-4 mr-1" />
                  +12% from last month
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover-scale">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">Completed Interviews</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.completedInterviews}</div>
                <div className="flex items-center text-sm text-green-600 mt-1">
                  <ArrowUp className="h-4 w-4 mr-1" />
                  +8% from last month
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover-scale">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">Average Score</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.averageScore}%</div>
                <div className="flex items-center text-sm text-blue-600 mt-1">
                  <ArrowUp className="h-4 w-4 mr-1" />
                  +3% from last month
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover-scale">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">Avg Duration</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.averageDuration}</div>
                <div className="flex items-center text-sm text-gray-600 mt-1">
                  <Clock className="h-4 w-4 mr-1" />
                  Consistent
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <Tabs defaultValue="candidates" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="candidates">Candidates</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="candidates" className="space-y-6">
              {/* Filters */}
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="relative flex-1">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input
                        placeholder="Search candidates..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                    <Select value={filterStatus} onValueChange={setFilterStatus}>
                      <SelectTrigger className="w-full sm:w-48">
                        <SelectValue placeholder="Filter by status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Status</SelectItem>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="in-progress">In Progress</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              {/* Candidates List */}
              <div className="space-y-4">
                {filteredCandidates.map((candidate) => (
                  <Card key={candidate.id} className="hover:shadow-lg transition-all duration-300">
                    <CardContent className="pt-6">
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-lg font-semibold">{candidate.name}</h3>
                            <Badge className={getStatusColor(candidate.status)}>
                              {candidate.status.replace("-", " ")}
                            </Badge>
                          </div>
                          <p className="text-gray-600 mb-1">{candidate.position}</p>
                          <p className="text-sm text-gray-500">{candidate.email}</p>
                          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                            <span>Applied: {candidate.appliedDate}</span>
                            {candidate.interviewDate && (
                              <span>Interviewed: {candidate.interviewDate}</span>
                            )}
                          </div>
                        </div>
                        
                        {candidate.status === "completed" && candidate.analysis && (
                          <div className="lg:w-80">
                            <div className="mb-3">
                              <div className="flex justify-between items-center mb-1">
                                <span className="text-sm font-medium">Overall Score</span>
                                <span className={`text-lg font-bold ${getScoreColor(candidate.score)}`}>
                                  {candidate.score}%
                                </span>
                              </div>
                              <Progress value={candidate.score} className="h-2" />
                            </div>
                            
                            <div className="grid grid-cols-2 gap-2 text-xs">
                              <div>
                                <span className="text-gray-600">Technical:</span>
                                <span className="ml-1 font-medium">{candidate.analysis.technicalSkills}%</span>
                              </div>
                              <div>
                                <span className="text-gray-600">Communication:</span>
                                <span className="ml-1 font-medium">{candidate.analysis.communication}%</span>
                              </div>
                              <div>
                                <span className="text-gray-600">Problem Solving:</span>
                                <span className="ml-1 font-medium">{candidate.analysis.problemSolving}%</span>
                              </div>
                              <div>
                                <span className="text-gray-600">Cultural Fit:</span>
                                <span className="ml-1 font-medium">{candidate.analysis.culturalFit}%</span>
                              </div>
                            </div>
                          </div>
                        )}
                        
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4 mr-1" />
                            View Details
                          </Button>
                          {candidate.status === "completed" && (
                            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                              <MessageSquare className="h-4 w-4 mr-1" />
                              Review
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="analytics">
              <Card>
                <CardHeader>
                  <CardTitle>Interview Analytics</CardTitle>
                  <CardDescription>Detailed insights and performance metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12 text-gray-500">
                    <MessageSquare className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>Detailed analytics coming soon...</p>
                    <p className="text-sm">Track trends, performance metrics, and hiring insights</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings">
              <Card>
                <CardHeader>
                  <CardTitle>Interview Settings</CardTitle>
                  <CardDescription>Customize interview parameters and AI behavior</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12 text-gray-500">
                    <Settings className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>Customization settings coming soon...</p>
                    <p className="text-sm">Configure questions, scoring criteria, and AI parameters</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
