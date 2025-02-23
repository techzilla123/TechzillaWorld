"use client"; 
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const SuccessPage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#2d033b] to-[#7a1fa2] text-white px-4 text-center"
    >
      <motion.div 
        initial={{ scale: 0 }} 
        animate={{ scale: 1 }} 
        transition={{ type: 'spring', stiffness: 100, damping: 10 }}
        className="bg-green-500 p-6 rounded-full shadow-lg"
      >
        <CheckCircle size={80} className="text-white" />
      </motion.div>

      <h1 className="text-3xl font-bold mt-6">Success!</h1>
      <p className="text-gray-300 mt-2">Your application has been completed successfully.</p>

      <Link href="/" passHref>
        <Button className="mt-6 bg-fuchsia-500 hover:bg-fuchsia-600 px-6 py-3 text-lg rounded-lg shadow-md">
          Go to home
        </Button>
      </Link>
    </motion.div>
  );
};

export default SuccessPage;
