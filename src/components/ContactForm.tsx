
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  company: z.string().min(1, { message: "Company name is required." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof formSchema>;

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ isOpen, onClose }) => {
  const { toast } = useToast();
  const { t } = useLanguage();
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
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
      const recipientEmails = ['peder.ribbing@lucyanalytics.com', 'peter.schierenbeck@lucyanalytics.com'];
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
      
      // Create and click a temporary anchor element to open the email client
      const tempLink = document.createElement('a');
      tempLink.href = `mailto:${recipientEmails.join(',')}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      document.body.appendChild(tempLink);
      tempLink.click();
      document.body.removeChild(tempLink);
      
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
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('contact.nameLabel') || 'Name'}</FormLabel>
                  <FormControl>
                    <Input placeholder={t('contact.namePlaceholder') || 'Your name'} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('contact.emailLabel') || 'Email'}</FormLabel>
                  <FormControl>
                    <Input placeholder={t('contact.emailPlaceholder') || 'your.email@example.com'} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('contact.phoneLabel') || 'Phone (Optional)'}</FormLabel>
                  <FormControl>
                    <Input placeholder={t('contact.phonePlaceholder') || 'Your phone number'} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('contact.companyLabel') || 'Company'}</FormLabel>
                  <FormControl>
                    <Input placeholder={t('contact.companyPlaceholder') || 'Your company name'} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('contact.messageLabel') || 'Message'}</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder={t('contact.messagePlaceholder') || 'How can we help you?'} 
                      className="min-h-[120px]" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
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
          <p>{t('contact.note') || "By submitting this form, you agree to our privacy policy and terms of service. We'll contact you at the email address provided."}</p>
          <p className="mt-1">{t('contact.emailInfo') || "Your message will be sent to our sales team."}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactForm;
