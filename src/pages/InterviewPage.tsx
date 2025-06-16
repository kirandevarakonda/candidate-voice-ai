
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useParams, useNavigate } from "react-router-dom";
import { Mic, MicOff, Volume2, VolumeX, ArrowDown, Check } from "lucide-react";
import Navigation from "@/components/Navigation";
import { useToast } from "@/hooks/use-toast";

const InterviewPage = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [isRecording, setIsRecording] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [interviewStarted, setInterviewStarted] = useState(false);
  const [interviewCompleted, setInterviewCompleted] = useState(false);
  const [responses, setResponses] = useState<string[]>([]);

  const interviewQuestions = [
    "Welcome to the AI interview! Please introduce yourself and tell me about your background.",
    "What interests you most about this position and our company?",
    "Describe a challenging project you worked on and how you overcame obstacles.",
    "How do you stay current with technology trends in your field?",
    "Where do you see yourself in the next 5 years?"
  ];

  const jobTitles: { [key: string]: string } = {
    "1": "Senior Software Engineer",
    "2": "Product Manager", 
    "3": "UX Designer",
    "4": "AI Research Scientist"
  };

  const startInterview = () => {
    setInterviewStarted(true);
    simulateAISpeaking("Hello! I'm your AI interviewer. I'll be asking you a few questions today. Please speak clearly and take your time with your responses. Let's begin with the first question.");
  };

  const simulateAISpeaking = (text: string) => {
    setIsSpeaking(true);
    // Simulate TTS - in real implementation, this would use Speech Synthesis API
    console.log("AI Speaking:", text);
    setTimeout(() => {
      setIsSpeaking(false);
    }, 3000);
  };

  const toggleRecording = () => {
    if (!isRecording) {
      setIsRecording(true);
      toast({
        title: "Recording Started",
        description: "Please speak your answer clearly.",
      });
      
      // Simulate recording for 10 seconds
      setTimeout(() => {
        setIsRecording(false);
        handleResponseComplete();
      }, 10000);
    } else {
      setIsRecording(false);
      handleResponseComplete();
    }
  };

  const handleResponseComplete = () => {
    const simulatedResponse = `Simulated response to: ${interviewQuestions[currentQuestion]}`;
    setResponses([...responses, simulatedResponse]);
    
    if (currentQuestion < interviewQuestions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
        simulateAISpeaking(interviewQuestions[currentQuestion + 1]);
      }, 2000);
    } else {
      setTimeout(() => {
        completeInterview();
      }, 2000);
    }
  };

  const completeInterview = () => {
    setInterviewCompleted(true);
    simulateAISpeaking("Thank you for completing the interview! Your responses have been analyzed and the results will be shared with the hiring team.");
    
    toast({
      title: "Interview Completed!",
      description: "Your responses have been analyzed and submitted.",
    });
  };

  const progress = ((currentQuestion + 1) / interviewQuestions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Navigation />
      
      <div className="pt-20 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          {!interviewStarted ? (
            // Pre-interview Setup
            <Card className="animate-fade-in">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl mb-4">
                  AI Interview - {jobTitles[jobId || "1"]}
                </CardTitle>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Welcome to your AI-powered interview! This intelligent system will ask you 
                    tailored questions based on the job description and analyze your responses in real-time.
                  </p>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Before we begin:</h3>
                    <ul className="text-sm text-gray-700 space-y-1 text-left">
                      <li>• Ensure you're in a quiet environment</li>
                      <li>• Allow microphone access when prompted</li>
                      <li>• Speak clearly and at a normal pace</li>
                      <li>• The interview will take approximately 15-20 minutes</li>
                    </ul>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <Button 
                  onClick={startInterview}
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 px-8 py-4 text-lg"
                >
                  Start Interview
                </Button>
              </CardContent>
            </Card>
          ) : interviewCompleted ? (
            // Post-interview Summary
            <Card className="animate-fade-in">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl mb-4">Interview Completed!</CardTitle>
                <p className="text-gray-600">
                  Thank you for completing the AI interview. Your responses have been analyzed 
                  and will be reviewed by our hiring team.
                </p>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">What happens next?</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• AI analysis will be completed within 24 hours</li>
                    <li>• Hiring team will review your responses</li>
                    <li>• You'll receive feedback within 3-5 business days</li>
                  </ul>
                </div>
                <Button onClick={() => navigate("/careers")} variant="outline">
                  Back to Careers
                </Button>
              </CardContent>
            </Card>
          ) : (
            // Active Interview
            <div className="space-y-6 animate-fade-in">
              {/* Progress */}
              <Card>
                <CardContent className="pt-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Interview Progress</span>
                    <span className="text-sm text-gray-600">
                      Question {currentQuestion + 1} of {interviewQuestions.length}
                    </span>
                  </div>
                  <Progress value={progress} className="w-full" />
                </CardContent>
              </Card>

              {/* AI Status */}
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${isSpeaking ? 'bg-blue-500 animate-pulse' : 'bg-gray-300'}`} />
                      <span className="font-medium">
                        {isSpeaking ? "AI Interviewer Speaking..." : "AI Interviewer Ready"}
                      </span>
                    </div>
                    <Badge variant={isSpeaking ? "default" : "secondary"}>
                      {isSpeaking ? "Speaking" : "Listening"}
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Current Question */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Current Question</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {interviewQuestions[currentQuestion]}
                  </p>
                </CardContent>
              </Card>

              {/* Recording Controls */}
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="mb-4">
                    <Button
                      onClick={toggleRecording}
                      size="lg"
                      variant={isRecording ? "destructive" : "default"}
                      className="w-32 h-32 rounded-full text-lg font-semibold"
                      disabled={isSpeaking}
                    >
                      {isRecording ? (
                        <>
                          <MicOff className="h-8 w-8 mb-2" />
                          Stop
                        </>
                      ) : (
                        <>
                          <Mic className="h-8 w-8 mb-2" />
                          Record
                        </>
                      )}
                    </Button>
                  </div>
                  <p className="text-sm text-gray-600">
                    {isRecording ? "Recording your response..." : "Click to start recording your answer"}
                  </p>
                  {isRecording && (
                    <div className="mt-4">
                      <div className="flex justify-center space-x-1">
                        <div className="w-2 h-6 bg-red-500 rounded animate-pulse" style={{animationDelay: '0ms'}} />
                        <div className="w-2 h-6 bg-red-500 rounded animate-pulse" style={{animationDelay: '150ms'}} />
                        <div className="w-2 h-6 bg-red-500 rounded animate-pulse" style={{animationDelay: '300ms'}} />
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InterviewPage;
