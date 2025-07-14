'use client';
import { useState, useEffect } from 'react';
import Loader from './loader'; 

export default function LayoutClient({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? <Loader /> : children}
    </>
  );
}
