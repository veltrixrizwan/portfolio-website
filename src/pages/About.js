import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';

const About = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <Container>
            <Typography variant="h4">About</Typography>
        </Container>
    );
};

export default About;
