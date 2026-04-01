import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FileText, User, Zap, Settings, ArrowRight, PlayCircle } from 'lucide-react';
import { toast } from 'sonner';
import ScoreCounter from './ScoreCounter';

import { authService } from '../../services/authService';

const HomeHero = () => {
    // const isLoggedIn = !!authService.getToken();

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 md:pt-32 md:pb-20 relative z-10 transition-all duration-300">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

                {/* LEFT COLUMN: Content */}
                <div className="flex flex-col items-start text-left max-w-2xl mx-auto lg:mx-0 w-full">
                    
                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 tracking-tight leading-[1.05] mb-6"
                    >
                        Build your career <br className="hidden lg:block" />
                        with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">confidence</span>.
                    </motion.h1>

                    {/* Subheadline with improved line height */}
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-gray-500 leading-relaxed mb-8 max-w-lg"
                    >
                        Create a professional resume and track your job applications in one simple place. Our tools help you stand out and stay organized.
                    </motion.p>

                    {/* Main Actions: Primary & Secondary CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-wrap items-center gap-4 mb-12"
                    >
                        <Link
                            to="/signup"
                            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all shadow-lg shadow-blue-500/25 flex items-center gap-2 group"
                        >
                            Start Building
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        
                        <button
                            onClick={() => toast.info("Coming soon: A quick video tour of Lumina.")}
                            className="px-6 py-4 bg-white border border-gray-200 hover:border-blue-200 text-gray-700 hover:text-blue-600 rounded-xl font-bold transition-all shadow-sm flex items-center gap-2 group"
                        >
                            <PlayCircle size={18} className="text-blue-500 group-hover:scale-110 transition-transform" />
                            Watch Demo
                        </button>
                    </motion.div>
                </div>

                {/* RIGHT COLUMN: Product Mockup */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="relative mt-8 lg:mt-0 w-full max-w-[500px] mx-auto lg:max-w-none"
                >
                    {/* Mock Window */}
                    <div className="relative z-10 w-full transform lg:rotate-[-2deg] hover:rotate-0 transition-transform duration-700 ease-out group">

                        {/* The Actual Visual Window */}
                        <div className="bg-white rounded-2xl border border-gray-200/60 overflow-hidden relative shadow-2xl">
                            {/* Window Header */}
                            <div className="bg-gray-50/50 border-b border-gray-100 p-3 flex items-center gap-2">
                                <div className="flex gap-1.5 pl-1">
                                    <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-400/80"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
                                </div>
                                <div className="text-[10px] bg-white border border-gray-200 text-gray-400 px-3 py-0.5 rounded-full mx-auto font-mono hidden sm:block">lumina-editor.tsx</div>
                            </div>

                            {/* UI Body */}
                            <div className="flex h-[350px] sm:h-[450px]">
                                {/* Sidebar */}
                                <div className="w-12 sm:w-16 bg-gray-50/50 border-r border-gray-100 flex flex-col items-center py-4 gap-4">
                                    <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center"><FileText size={16} className="sm:w-[18px] sm:h-[18px]" /></div>
                                    <div className="w-8 h-8 rounded-lg text-gray-400 hover:bg-gray-100 flex items-center justify-center"><User size={16} className="sm:w-[18px] sm:h-[18px]" /></div>
                                    <div className="w-8 h-8 rounded-lg text-gray-400 hover:bg-gray-100 flex items-center justify-center"><Zap size={16} className="sm:w-[18px] sm:h-[18px]" /></div>
                                    <div className="mt-auto w-8 h-8 rounded-lg text-gray-400 flex items-center justify-center"><Settings size={16} className="sm:w-[18px] sm:h-[18px]" /></div>
                                </div>

                                {/* Main Editor Area */}
                                <div className="flex-1 bg-gray-100/30 p-4 sm:p-6 flex flex-col relative overflow-hidden">
                                    <div className="bg-white shadow-sm border border-gray-200 w-full h-full rounded p-4 sm:p-6 relative">
                                        <div className="h-4 sm:h-6 w-1/3 bg-gray-900/10 rounded mb-4"></div>
                                        <div className="h-3 sm:h-4 w-full bg-gray-100 rounded mb-2"></div>
                                        <div className="h-3 sm:h-4 w-2/3 bg-gray-100 rounded mb-6 sm:mb-8"></div>

                                        <div className="h-3 sm:h-4 w-1/4 bg-gray-200 rounded mb-4"></div>
                                        <div className="space-y-2 sm:space-y-3">
                                            <div className="h-2 sm:h-3 w-full bg-gray-50 rounded"></div>
                                            <div className="h-2 sm:h-3 w-5/6 bg-gray-50 rounded"></div>
                                            <div className="h-2 sm:h-3 w-full bg-gray-50 rounded"></div>
                                        </div>

                                        <div className="absolute top-1/2 left-4 right-4 sm:left-6 sm:right-6 p-1 border-2 border-blue-400/30 rounded-lg bg-blue-50/10 z-0"></div>
                                    </div>
                                </div>

                                {/* Right Panel: Stats */}
                                <div className="hidden sm:flex w-48 lg:w-64 bg-white border-l border-gray-100 p-4 flex-col">
                                    <div className="text-[10px] lg:text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">ATS Analysis</div>
                                    <ScoreCounter />
                                    <div className="space-y-3 mt-4">
                                        <div className="flex items-center justify-between text-[10px] lg:text-xs">
                                            <span className="text-gray-600">Keywords</span>
                                            <span className="text-green-600 font-medium">8/10</span>
                                        </div>
                                        <div className="w-full bg-gray-100 rounded-full h-1.5">
                                            <div className="bg-green-500 h-1.5 rounded-full w-[80%]"></div>
                                        </div>
                                    </div>
                                    <div className="mt-auto bg-blue-50 p-2 lg:p-3 rounded-xl border border-blue-100">
                                        <p className="text-[9px] lg:text-[10px] text-blue-700 font-medium leading-tight">
                                            Resume passing ATS.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Element 1: AI Suggestion */}
                        <motion.div 
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.8 }}
                            className="absolute top-[40%] right-[-10px] sm:right-[-30px] bg-white shadow-2xl border border-gray-100 rounded-xl p-3 w-40 sm:w-48 z-20"
                        >
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center text-blue-600"><Zap size={12} /></div>
                                <span className="text-xs font-bold text-gray-800">AI Suggestion</span>
                            </div>
                            <p className="text-[10px] text-gray-600 leading-relaxed">Use stronger action verbs like "Orchestrated" or "Spearheaded".</p>
                        </motion.div>

                        {/* Floating Element 2: Pipeline Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                            className="absolute bottom-12 -left-4 sm:-left-12 bg-white rounded-xl shadow-2xl border border-gray-100 p-4 w-40 sm:w-48 z-30"
                        >
                            <div className="flex items-center justify-between mb-3 text-left">
                                <div className="text-[10px] uppercase font-black text-gray-400 tracking-widest">In Pipeline</div>
                                <div className="h-2 w-2 rounded-full bg-green-500 shadow-lg shadow-green-500/50"></div>
                            </div>
                            <div className="space-y-2">
                                <div className="bg-blue-50/50 border border-blue-100 p-2 rounded-lg text-left">
                                    <div className="h-1.5 w-8 bg-blue-200 rounded-full mb-1"></div>
                                    <div className="h-1 w-12 bg-blue-100 rounded-full"></div>
                                </div>
                                <div className="bg-purple-50/50 border border-purple-100 p-2 rounded-lg text-left">
                                    <div className="h-1.5 w-10 bg-purple-200 rounded-full mb-1"></div>
                                    <div className="h-1 w-8 bg-purple-100 rounded-full"></div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Decor elements behind mockup */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
                </motion.div>
            </div>
        </div>
    );
};

export default HomeHero;
