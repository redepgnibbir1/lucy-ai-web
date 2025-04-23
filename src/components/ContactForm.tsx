import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import ContactFormFields from './ContactFormFields';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';
import { contactFormSchema, ContactFormValues } from './ContactFormValidation';
import emailjs from 'emailjs-com';

// EmailJS service credentials
const EMAILJS_SERVICE_ID = 'default_service'; // You'll need to replace with your actual service ID
const EMAILJS_TEMPLATE_ID = 'template_contact_form'; // You'll need to replace with your actual template ID
const EMAILJS_USER_ID = 'YOUR_USER_ID'; // You'll need to replace with your actual user ID

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ isOpen, onClose }) => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    console.log('Form data submitted:', data);
    setIsSubmitting(true);

    try {
      // Prepare EmailJS template parameters
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        phone: data.phone || 'Not provided',
        company: data.company,
        message: data.message,
        to_name: 'Lucy Analytics Team', // Recipient name
        reply_to: data.email,
      };

      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_USER_ID
      );

      // Show success message
      toast({
        title: t('contact.successTitle') || 'Message sent!',
        description: t('contact.successDescription') || 'We will get back to you shortly.',
        variant: 'default',
      });

      // Close form and reset
      resetForm();
    } catch (error) {
      console.error('Failed to send email:', error);
      toast({
        title: t('contact.errorTitle') || 'Error',
        description: t('contact.errorDescription') || 'There was a problem sending your message. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    form.reset();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md relative">
        <div className="p-6">
          <h2 className="text-2xl font-martina mb-4">
            {t('contact.title') || 'Contact Us'}
          </h2>
          <button 
            onClick={resetForm} 
            className="absolute right-4 top-4 p-1 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close"
          >
            {/* <X className="h-5 w-5" /> */}
          </button>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <ContactFormFields form={form} />
              <div className="pt-4 flex justify-end gap-3">
                <Button variant="outline" type="button" onClick={resetForm} disabled={isSubmitting}>
                  {t('contact.cancelButton') || 'Cancel'}
                </Button>
                <Button 
                  type="submit" 
                  className="bg-lucy-neon-yellow text-lucy-dark-gray hover:bg-lucy-neon-yellow/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-lucy-dark-gray" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      {t('contact.sendingButton') || 'Sending...'}
                    </span>
                  ) : (
                    t('contact.submitButton') || 'Send Message'
                  )}
                </Button>
              </div>
            </form>
          </Form>
          
          <div className="text-xs text-gray-500 mt-4">
            <p>
              {t('contact.note') || "By submitting this form, you agree to our privacy policy and terms of service. We'll contact you at the email address provided."}
            </p>
            <p className="mt-2">
              {t('contact.emailInfo') || 'Your message will be sent to peder.ribbing@lucyanalytics.com and peter.schierenbeck@lucyanalytics.com.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
