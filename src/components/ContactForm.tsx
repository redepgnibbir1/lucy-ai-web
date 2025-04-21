import React from 'react';
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

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ isOpen, onClose }) => {
  const { toast } = useToast();
  const { t } = useLanguage();

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

    try {
      // Format email body
      const recipientEmails = [
        'peder.ribbing@lucyanalytics.com', 
        'peter.schierenbeck@lucyanalytics.com'
      ];
      const subject = `Contact Form Submission from ${data.name}`;
      const body = `
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || 'Not provided'}
Company: ${data.company}

Message:
${data.message}

This message was sent from the Lucy Analytics website contact form.
      `;

      // Create mailto URL
      const mailtoUrl = `mailto:${recipientEmails.join(',')}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Open email client in a new window
      window.open(mailtoUrl, '_blank');

      toast({
        title: t('contact.successTitle') || 'Message sent!',
        description: t('contact.successDescription') || 'We will get back to you shortly.',
        variant: 'default',
      });
      form.reset();
      onClose();
    } catch (error) {
      console.error('Error sending contact form:', error);
      toast({
        title: t('contact.errorTitle') || 'Error',
        description: t('contact.errorDescription') || 'There was a problem sending your message. Please try again.',
        variant: 'destructive',
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-martina">
            {t('contact.title') || 'Contact Us'}
          </DialogTitle>
          <button 
            onClick={onClose} 
            className="absolute right-4 top-4 p-1 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <ContactFormFields form={form} />
            <div className="pt-4 flex justify-end gap-3">
              <Button variant="outline" type="button" onClick={onClose}>
                {t('contact.cancelButton') || 'Cancel'}
              </Button>
              <Button 
                type="submit" 
                className="bg-lucy-neon-yellow text-lucy-dark-gray hover:bg-lucy-neon-yellow/90"
              >
                {t('contact.submitButton') || 'Send Message'}
              </Button>
            </div>
          </form>
        </Form>
        <div className="text-xs text-gray-500 mt-4">
          <p>
            {t('contact.note') || "By submitting this form, you agree to our privacy policy and terms of service. We'll contact you at the email address provided."}
          </p>
          <p className="mt-1">
            {t('contact.emailInfo') || "Your message will be sent to our sales team."}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactForm;
