import React from 'react';
import { AuthProvider } from './authContext';
import { PoolProvider } from './poolContext';
import { VotingProvider } from './votingContext';
import { NotificationProvider } from './notificationContext';
import { ThemeProvider } from './themeContext';

export const AppProviders = ({ children }) => {
    return (
        <AuthProvider>
            <PoolProvider>
                <VotingProvider>
                    <NotificationProvider>
                        <ThemeProvider>
                            {children}
                        </ThemeProvider>
                    </NotificationProvider>
                </VotingProvider>
            </PoolProvider>
        </AuthProvider>
    );
};
