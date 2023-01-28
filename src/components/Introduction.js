import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import helen from '../assets/images/helen.jpeg';

export default function Introduction() {
    return (
        <Card sx={{ maxWidth: '100%' }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    sx={{ width: 100 }}
                    image={helen}
                    alt="Helen Digby"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Welcome to Joint Prosperity
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Welcome to the website of Joint Prosperity, a leading provider of chiropractic care in the Kenmore area. Our experienced chiropractor, Dr. Helen Digby, and her team of professionals are dedicated to helping you achieve optimal health and wellness through natural, non-invasive methods.

                        We understand that every patient is unique, and we take the time to understand your individual needs and concerns. Whether you're dealing with chronic pain, an injury, or simply looking to improve your overall health and well-being, we're here to help.

                        Our services include spinal adjustments, massage therapy, and rehabilitation exercises to help alleviate pain, improve mobility, and promote healing. We also offer nutritional counseling and lifestyle advice to help you achieve optimal health and wellness.

                        We believe that informed patients are better equipped to make decisions about their health and well-being. That's why we've provided a wealth of information on our website, including articles, videos, and resources on a wide range of topics related to chiropractic care.

                        Thank you for choosing Joint Prosperity. We look forward to helping you achieve optimal health and well-being.
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}