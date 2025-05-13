'use client';
import Protection from '@/components/Protection';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
    <main className="flex min-h-screen items-center justify-center bg-white">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold text-gray-800"
      >
        Welcome to Motion Demo App 🚀
      </motion.h1>
    </main>
    <Protection />
    </>
  );
}