/**
 * EmailJS configuration
 *
 * To fill in these values:
 * 1. Create a free account at https://www.emailjs.com
 * 2. Add an Email Service (Gmail, Outlook, etc.) -> copy the Service ID
 * 3. Create an Email Template for each purpose -> copy the Template IDs
 * 4. Go to Account -> API Keys -> copy your Public Key
 *
 * Replace the placeholder strings below with your real values.
 */

export const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

export const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";

/**
 * Template for the demo request form (/demo)
 * Suggested template variables:
 *   {{from_name}}, {{from_email}}, {{phone}}, {{company}},
 *   {{job_title}}, {{company_size}}, {{use_case}}, {{message}}
 */
export const EMAILJS_DEMO_TEMPLATE_ID = "YOUR_DEMO_TEMPLATE_ID";

/**
 * Template for the newsletter subscription (/blog)
 * Suggested template variables: {{subscriber_email}}
 */
export const EMAILJS_NEWSLETTER_TEMPLATE_ID = "YOUR_NEWSLETTER_TEMPLATE_ID";
