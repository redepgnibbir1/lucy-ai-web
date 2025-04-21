
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { X, Copy, Check } from 'lucide-react';
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
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<ContactFormValues | null>(null);
  const [isCopied, setIsCopied] = useState(false);

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
    setFormData(data);
    setIsSubmitted(true);
  };

  const resetForm = () => {
    form.reset();
    setIsSubmitted(false);
    setIsCopied(false);
    onClose();
  };

  const copyToClipboard = () => {
    if (!formData) return;

    const recipientEmails = [
      'peder.ribbing@lucyanalytics.com', 
      'peter.schierenbeck@lucyanalytics.com'
    ];
    const subject = `Contact Form Submission from ${formData.name}`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
Company: ${formData.company}

Message:
${formData.message}

This message was sent from the Lucy Analytics website contact form.
    `;

    const text = `To: ${recipientEmails.join(', ')}\nSubject: ${subject}\n\n${body}`;
    
    navigator.clipboard.writeText(text).then(() => {
      setIsCopied(true);
      toast({
        title: t('contact.copiedTitle') || 'Copied to clipboard!',
        description: t('contact.copiedDescription') || 'The message has been copied to your clipboard.',
        variant: 'default',
      });
      
      // Reset copied state after 3 seconds
      setTimeout(() => {
        setIsCopied(false);
      }, 3000);
    }).catch(err => {
      console.error('Failed to copy: ', err);
      toast({
        title: t('contact.errorTitle') || 'Error',
        description: t('contact.copyErrorDescription') || 'Could not copy to clipboard. Please try again.',
        variant: 'destructive',
      });
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && resetForm()}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-martina">
            {isSubmitted 
              ? (t('contact.thankYouTitle') || 'Thank You!')
              : (t('contact.title') || 'Contact Us')}
          </DialogTitle>
          <button 
            onClick={resetForm} 
            className="absolute right-4 top-4 p-1 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </DialogHeader>

        {!isSubmitted ? (
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
                >
                  {t('contact.submitButton') || 'Send Message'}
                </Button>
              </div>
            </form>
          </Form>
        ) : (
          <div className="space-y-6 py-4">
            <div className="text-center mb-4">
              <p className="text-lg font-medium mb-2">
                {t('contact.successMessage') || 'Your message has been prepared!'}
              </p>
              <p className="text-gray-600">
                {t('contact.nextSteps') || 'Follow these steps to send your message:'}
              </p>
            </div>
            
            <div className="space-y-4 bg-gray-50 p-5 rounded-md">
              <h3 className="font-medium">{t('contact.instructions') || 'Instructions:'}</h3>
              <ol className="list-decimal pl-5 space-y-2">
                <li>{t('contact.step1') || 'Copy your message to clipboard by clicking the button below'}</li>
                <li>{t('contact.step2') || 'Open your email application'}</li>
                <li>{t('contact.step3') || 'Paste the content into a new email'}</li>
                <li>{t('contact.step4') || 'Send the email'}</li>
              </ol>
            </div>
            
            <div className="flex justify-center">
              <Button
                onClick={copyToClipboard}
                className="bg-lucy-neon-yellow text-lucy-dark-gray hover:bg-lucy-neon-yellow/90 flex items-center gap-2"
              >
                {isCopied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                {isCopied 
                  ? (t('contact.copied') || 'Copied!') 
                  : (t('contact.copyToClipboard') || 'Copy to Clipboard')}
              </Button>
            </div>
            
            <div className="pt-4 border-t border-gray-200 mt-4">
              <p className="text-center text-sm text-gray-600">
                {t('contact.emailAddresses') || 'Your message will be sent to:'}
                <br />
                <span className="font-medium">peder.ribbing@lucyanalytics.com, peter.schierenbeck@lucyanalytics.com</span>
              </p>
            </div>
          </div>
        )}
        
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
