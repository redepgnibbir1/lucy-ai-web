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
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '@/config/emailjs';

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
    setIsSubmitting(true);
    try {
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        phone: data.phone,
        company: data.company,
        message: data.message,
        to_email: EMAILJS_CONFIG.toEmail
      };

      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams,
        EMAILJS_CONFIG.publicKey
      );

      toast({
        title: t('contact.successTitle') || 'Success!',
        description: t('contact.successDescription') || 'Your message has been sent successfully.',
        variant: 'default',
      });
      
      form.reset();
      onClose();
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: t('contact.errorTitle') || 'Error',
        description: t('contact.errorDescription') || 'Failed to send message. Please try again.',
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

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && resetForm()}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-martina">
            {t('contact.title') || 'Contact Us'}
          </DialogTitle>
          <button 
            onClick={resetForm} 
            className="absolute right-4 top-4 p-1 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close"
          >
            {/* <X className="h-5 w-5" /> */}
          </button>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <ContactFormFields form={form} />
            <div className="pt-4 flex justify-end gap-3">
              <Button variant="outline" type="button" onClick={resetForm}>
                {t('contact.cancelButton') || 'Cancel'}
              </Button>
              <Button 
                type="submit" 
                className="bg-lucy-neon-yellow text-lucy-dark-gray hover:bg-lucy-neon-yellow/90"
                disabled={isSubmitting}
              >
                {isSubmitting 
                  ? (t('contact.sendingButton') || 'Sending...') 
                  : (t('contact.submitButton') || 'Send Message')}
              </Button>
            </div>
          </form>
        </Form>
        
        <div className="text-xs text-gray-500 mt-4">
          <p>
            {t('contact.note') || "By submitting this form, you agree to our privacy policy and terms of service. We'll contact you at the email address provided."}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactForm;
