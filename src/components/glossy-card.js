import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/system';

const GlossyCard = styled(Card)(({ theme }) => ({
  background: 'linear-gradient(145deg, #ffffff, #e6e6e6)',
  boxShadow:
    '5px 5px 15px rgba(0,0,0,0.1), -5px -5px 15px rgba(255,255,255,0.7)',
  borderRadius: '15px',
  overflow: 'hidden',
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'scale(1.02)',
  },
}));

const AnimatedCardContent = motion(Box);

const AnswerBubble = styled(motion(Box))(({ isSelected }) => ({
  background: isSelected ? '#3e8e0c' : '#a1a0a02e',
  borderRadius: '20px',
  padding: '10px 15px',
  margin: '10px 0',
  cursor: 'pointer',
  marginBottom: '30px',
  display: 'inline-block',
  transition: 'background-color 0.3s',
  '&:hover': {
    background: '#a0a1a124', // Lighter shade on hover
  },
}));

const QuestionAnswerCard = ({ questionData, setAnswers, index }) => {
  const [shouldOpen, setShouldOpen] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null); // Track selected answer

  useEffect(() => {
    setShouldOpen(false);
    setSelectedAnswer(null); // Reset selection when question changes

    const timer = setTimeout(() => {
      setShouldOpen(true);
    }, 300);

    return () => clearTimeout(timer);
  }, [questionData]);

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
    setAnswers((prev) => [...prev, answer]);
  };

  return (
    <GlossyCard>
      <CardContent>
        <Typography
          variant="h5"
          textAlign="center"
          paddingBottom="20px"
          component="div"
        >
          Question {index + 1}
        </Typography>
        <AnimatedCardContent
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: shouldOpen ? 1 : 0,
            height: shouldOpen ? 'auto' : 0,
          }}
          transition={{ duration: 0.5 }}
          style={{ overflow: 'hidden' }}
        >
          <Typography variant="h6" component="div" paddingBottom="20px">
            {questionData.Question}
          </Typography>
          {['A1', 'A2', 'A3', 'A4'].map((answerKey) => (
            <AnswerBubble
              key={answerKey}
              isSelected={selectedAnswer === questionData[answerKey]}
              onClick={() => handleAnswerClick(questionData[answerKey])}
              whileTap={{ scale: 0.95 }}
            >
              <Typography
                variant="body2"
                color={
                  selectedAnswer === questionData[answerKey]
                    ? 'white'
                    : 'text.primary'
                }
              >
                {questionData[answerKey]}
              </Typography>
            </AnswerBubble>
          ))}
        </AnimatedCardContent>
      </CardContent>
    </GlossyCard>
  );
};

export default QuestionAnswerCard;
