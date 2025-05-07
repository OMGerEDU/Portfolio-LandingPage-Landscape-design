import { createClient } from '@base44/sdk';
// import { getAccessToken } from '@base44/sdk/utils/auth-utils';

// Create a client with authentication required
export const base44 = createClient({
  appId: "681b2a73a84dc7611d982fef", 
  requiresAuth: true // Ensure authentication is required for all operations
});
