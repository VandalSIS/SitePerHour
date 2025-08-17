
import emailjs from 'emailjs-com';

interface EmailConfig {
  serviceId: string;
  templateId: string;
  publicKey: string;
}

interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
  company?: string;
  phone?: string;
  budget?: string;
  timeline?: string;
  services?: string[];
  project_type?: string;
}

interface QuoteData extends EmailData {
  selectedServices: string[];
  estimatedCost: number;
  projectDetails: string;
}

// EmailJS credentials - pre-configured
const EMAIL_CONFIG = {
  service: 'emailjs',
  config: {
    serviceId: 'service_3yy9xa9',
    templateId: 'template_0gugh5f',
    publicKey: 'pqnAFS_ayDh7oxufo'
  }
};

// Initialize EmailJS with public key
export const initEmailService = () => {
  emailjs.init(EMAIL_CONFIG.config.publicKey);
  return true;
};

// Send email using EmailJS
export const sendEmail = async (data: EmailData): Promise<boolean> => {
  try {
    const { serviceId, templateId } = EMAIL_CONFIG.config as EmailConfig;
    
    const templateParams = {
      name: data.name,
      email: data.email,
      subject: data.subject || 'Contact Form Submission',
      message: data.message,
      company: data.company || '',
      phone: data.phone || '',
      budget: data.budget || '',
      timeline: data.timeline || '',
      services: data.services ? data.services.join(', ') : '',
      project_type: data.project_type || 'General Inquiry'
    };

    await emailjs.send(serviceId, templateId, templateParams);
    
    // Store to local storage for tracking
    const submission = {
      ...data,
      timestamp: new Date().toISOString(),
      id: Date.now().toString()
    };
    
    const submissions = getStoredSubmissions();
    submissions.push(submission);
    localStorage.setItem('contact_submissions', JSON.stringify(submissions));
    
    return true;
  } catch (error) {
    console.error('Failed to send email:', error);
    throw error;
  }
};

// Send custom quote email
export const sendQuoteEmail = async (data: QuoteData): Promise<boolean> => {
  try {
    const { serviceId, templateId } = EMAIL_CONFIG.config as EmailConfig;
    
    const templateParams = {
      name: data.name,
      email: data.email,
      subject: `Custom Quote Request - ${data.estimatedCost > 0 ? '$' + data.estimatedCost.toLocaleString() : 'TBD'}`,
      message: `Project Details: ${data.projectDetails}\n\nSelected Services: ${data.selectedServices.join(', ')}\n\nEstimated Cost: $${data.estimatedCost.toLocaleString()}`,
      company: data.company || '',
      phone: data.phone || '',
      budget: data.budget || '',
      timeline: data.timeline || '',
      services: data.selectedServices.join(', '),
      project_type: 'Custom Quote Request'
    };

    await emailjs.send(serviceId, templateId, templateParams);
    
    // Store quote request
    const quoteRequest = {
      ...data,
      timestamp: new Date().toISOString(),
      id: Date.now().toString(),
      type: 'quote_request'
    };
    
    const submissions = getStoredSubmissions();
    submissions.push(quoteRequest);
    localStorage.setItem('contact_submissions', JSON.stringify(submissions));
    
    return true;
  } catch (error) {
    console.error('Failed to send quote email:', error);
    throw error;
  }
};

// Get stored submissions
export const getStoredSubmissions = () => {
  try {
    const stored = localStorage.getItem('contact_submissions');
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

// Analytics tracking
export const trackEmailEvent = (eventType: string, data?: any) => {
  try {
    // Track with analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', eventType, {
        event_category: 'Email',
        event_label: data?.project_type || 'Contact',
        value: data?.estimatedCost || 0
      });
    }
  } catch (error) {
    console.warn('Analytics tracking failed:', error);
  }
};

// Email service is now always configured
export const isEmailServiceConfigured = (): boolean => {
  return true;
};
