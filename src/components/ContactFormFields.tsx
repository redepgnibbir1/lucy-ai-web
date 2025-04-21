
import React from 'react';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { UseFormReturn } from 'react-hook-form';
import { ContactFormValues } from './ContactFormValidation';
import { useLanguage } from '@/contexts/LanguageContext';

type Props = {
  form: UseFormReturn<ContactFormValues>;
};

const ContactFormFields: React.FC<Props> = ({ form }) => {
  const { t } = useLanguage();

  return (
    <>
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
    </>
  );
};

export default ContactFormFields;
