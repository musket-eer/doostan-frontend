import React, { useEffect } from 'react';
import PrimaryButton from '../components/buttons/primaryButton';
import SwipableCards from '../components/containers/swipableCards';
import Card from '../components/cards/card';
import { addScrollAnimation } from '../animations/scrollAnimation';
import Carousel from '../components/cards/carousel';
import '../styles/global.css';


const HomePage = () => {
    useEffect(() => {
        const cleanup1 = addScrollAnimation('section-1');
        const cleanup2 = addScrollAnimation('section-2');
        const cleanup3 = addScrollAnimation('section-3');

        return () => {
            cleanup1 && cleanup1();
            cleanup2 && cleanup2();
            cleanup3 && cleanup3();
        };
    }, []);
    const features = [
        {
            title: 'Secure Transactions',
            image: 'https://media.istockphoto.com/id/1227400166/photo/data-protection-and-secure-online-payments-cyber-internet-security-technologies-and-data.webp?a=1&b=1&s=612x612&w=0&k=20&c=EhStvo1QgTiwEXnqhCabv9kutRVjpsiQbEXOBUS98x0=',
            descriptions: [
                'Doostan ensures your transactions are safe and secure.',
                'Advanced encryption technology for your peace of mind.',
                'Seamless and fast payment processing.',
            ],
        },
        {
            title: 'Track Contributions',
            image: 'https://media.istockphoto.com/id/878518314/photo/businessman-using-a-calculator-beside-the-magnifying-glass.webp?a=1&b=1&s=612x612&w=0&k=20&c=OuUJ19NGkvRzJM7VuptuprwZTQpfReUoWjJ7qzfApfM=',
            descriptions: [
                'Keep track of who has contributed and how much.',
                'Get detailed breakdowns of your pooling activities.',
                'Manage contributions easily in real-time.',
            ],
        },
        {
            title: 'Shared Goals',
            image: 'https://media.istockphoto.com/id/2094337676/photo/diverse-team-working-together-in-modern-co-working-space.webp?a=1&b=1&s=612x612&w=0&k=20&c=FbH7i1I3oCXoRfZKFvGj3jMXnsljD8mPmDmvY4IxQuA=',
            descriptions: [
                'Achieve shared financial goals with your group.',
                'Plan trips, purchases, and investments collaboratively.',
                'Monitor progress toward your goals effectively.',
            ],
        },
        {
            title: 'Transparent Process',
            image: 'https://media.istockphoto.com/id/2173326120/photo/cropped-hand-of-person-putting-coins-in-glass-jar-against-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=K9nodB93Uof5DgC6VIaExEJ3StkMYkIl7Wux2o64Gdg=',
            descriptions: [
                'All transactions are transparent and easy to review.',
                'Access detailed transaction histories.',
                'Maintain trust and accountability within your group.',
            ],
        },
    ];

    return (
        <div className="homepage">
            {/* Section 1: Intro */}
            <section id="section-1" className="content-section section-1">
                <div className="content">
                    <h1>Welcome to Doostan</h1>
                    <p>
                        Doostan is a revolutionary money pooling app that enables individuals
                        and groups to pool their resources, manage their funds, and achieve
                        financial goals together.
                    </p>
                    <div className="button-group">
                        <PrimaryButton onClick={() => alert('Navigating to Sign Up')}>
                            Sign Up
                        </PrimaryButton>
                        <PrimaryButton onClick={() => alert('Navigating to Login')}>
                            Login
                        </PrimaryButton>
                    </div>
                </div>
            </section>
            <h1>Features</h1>
            <Carousel>
                {features.map((feature, index) => (
                    <Card
                        key={index}
                        title={feature.title}
                        description={feature.description}
                        image={feature.image}
                    />
                ))}
            </Carousel>
            {/* Section 3: Call-to-action */}
            <section id="section-3" className="content-section section-3">
                <div className="content">
                    <h2>Get Started with Doostan Today!</h2>
                    <p>
                        Join the thousands of users achieving their financial dreams with
                        Doostan.
                    </p>
                    <PrimaryButton onClick={() => alert('Navigating to Sign Up')}>
                        Start Now
                    </PrimaryButton>
                </div>
            </section>
        </div>
    );
};

export default HomePage;