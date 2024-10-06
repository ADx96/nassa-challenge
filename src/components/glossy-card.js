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

// Styled bubble for answers
const AnswerBubble = styled(motion(Box))(({ isSelected }) => ({
  background: isSelected ? '#3e8e0c' : '#a1a0a02e',
  borderRadius: '20px',
  padding: '10px 15px',
  margin: '10px 0',
  cursor: 'pointer',
  display: 'inline-block',
  transition: 'background-color 0.3s',
  '&:hover': {
    background: '#a0a1a124', // Lighter shade on hover
  },
}));

const QuestionAnswerCard = ({ question, answer }) => {
  const [shouldOpen, setShouldOpen] = useState(false);
  const [selected, setSelected] = useState(false); // Track selection state

  useEffect(() => {
    setShouldOpen(false);
    setSelected(false); // Reset selection when question changes

    const timer = setTimeout(() => {
      setShouldOpen(true);
    }, 300);

    return () => clearTimeout(timer);
  }, [question]);

  const handleBubbleClick = () => {
    setSelected((prev) => !prev);
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
          {'Question one'}
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
          <Typography variant="h5" component="div">
            {question}
          </Typography>
          <AnswerBubble
            isSelected={selected}
            onClick={handleBubbleClick}
            whileTap={{ scale: 0.95 }}
          >
            <Typography
              variant="body2"
              color={selected ? 'white' : 'text.primary'}
            >
              {answer}
            </Typography>
          </AnswerBubble>
        </AnimatedCardContent>
      </CardContent>
    </GlossyCard>
  );
};

export default QuestionAnswerCard;
