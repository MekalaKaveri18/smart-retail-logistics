
import { useState, useEffect } from 'react';

export const useSpeechSynthesis = () => {
  const [speechSynthesis, setSpeechSynthesis] = useState<SpeechSynthesis | null>(null);
  const [currentUtterance, setCurrentUtterance] = useState<SpeechSynthesisUtterance | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      setSpeechSynthesis(window.speechSynthesis);
    }
  }, []);

  const speakText = (text: string) => {
    if (!speechSynthesis || isMuted) return;
    
    // Stop any current speech
    speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9;
    utterance.pitch = 1;
    utterance.volume = 0.8;
    
    utterance.onend = () => {
      setIsPlaying(false);
      setCurrentUtterance(null);
    };
    
    utterance.onerror = () => {
      setIsPlaying(false);
      setCurrentUtterance(null);
    };
    
    setCurrentUtterance(utterance);
    setIsPlaying(true);
    speechSynthesis.speak(utterance);
  };

  const stopSpeech = () => {
    if (speechSynthesis) {
      speechSynthesis.cancel();
      setIsPlaying(false);
      setCurrentUtterance(null);
    }
  };

  const togglePlayPause = (text: string) => {
    if (isPlaying) {
      stopSpeech();
    } else {
      speakText(text);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (!isMuted && isPlaying) {
      stopSpeech();
    }
  };

  return {
    speakText,
    stopSpeech,
    togglePlayPause,
    toggleMute,
    isPlaying,
    isMuted
  };
};
