/**
 * Client-side API utilities for calling Next.js API routes
 * These functions make secure calls to our server-side API routes
 */

export interface SupporterSignup {
  name: string;
  email: string;
  hometown: string;
  zipcode: string;
  howCanYouHelp: string;
}

/**
 * Submit supporter signup via API route
 */
export const submitSupporterSignup = async (data: SupporterSignup) => {
  try {
    const response = await fetch('/api/supporters', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    return result;
  } catch (error: any) {
    console.error('Supporter signup error:', error);
    return { success: false, error: error.message };
  }
};
