/* eslint-disable no-console */

'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import PhoneInputWithCountry from 'react-phone-number-input/react-hook-form';

import { z } from 'zod';

import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Checkbox } from './ui/checkbox';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import 'react-phone-number-input/style.css';

const contactFormSchema = z.object({
  firstName: z.string().min(2, 'First name is required'),
  lastName: z.string().min(2, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  // phoneNumber: z.string().regex(/^\+1\(\d{3}\)\d{3}-\d{4}$/, 'Invalid phone number format'),
  phoneNumber: z.string().regex(/^\+[1-9]\d{1,14}$/, 'Invalid phone number format'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  services: z.array(z.string()).refine(value => value.length > 0, {
    message: 'Please select at least one service',
  }),
});

type ContactFormInputs = z.infer<typeof contactFormSchema>;

type ContactFormProps = {
  translations: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    message: string;
    services: string;
    submit: string;
    sending: string;
    success: string;
    error: string;
  };
  onSubmit?: (data: ContactFormInputs) => Promise<void>;
};

const services = [
  { id: 'domain-specific-search', label: 'Domain-Specific Search Solutions' },
  { id: 'pdf-based-search', label: 'PDF-Based Document Search' },
  { id: 'custom-rag', label: 'Custom RAG (Retrieval-Augmented Generation) Systems' },
  { id: 'semantic-search', label: 'Semantic Search Implementation' },
  { id: 'ai-powered-extraction', label: 'AI-Powered Content Extraction' },
  { id: 'other', label: 'Other' },
];

export default function ContactForm({ translations, onSubmit }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    getValues,
    formState: { errors },
    reset,
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      services: [],
    },
  });

  const handleFormSubmit = async (data: ContactFormInputs) => {
    console.log('Form Data:', data); // Log the submitted data
    console.log('Errors:', errors); // Check for validation errors

    setIsSubmitting(true);
    try {
      console.log(data);
      if (onSubmit) {
        await onSubmit(data);
      } else {
        // Default submission logic
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
        if (!response.ok) {
          throw new Error('Failed to submit');
        }
      }

      reset();
      // alert(translations.success);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : translations.error;
      console.error(errorMessage);
      // Display error message to the user in a user-friendly way
      // For example, you can set an error state and display it in the UI
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full space-y-6">
      <CardContent>
        <form onSubmit={handleSubmit(handleFormSubmit)} className="">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <Label htmlFor="firstName">
                {translations.firstName}
              </Label>
              <Input
                {...register('firstName')}
                type="text"
                placeholder="First Name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              {errors.firstName && (
                <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="lastName">
                {translations.lastName}
              </Label>
              <Input
                {...register('lastName')}
                type="text"
                placeholder="Last Name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              {errors.lastName && (
                <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
              )}
            </div>
          </div>

          <div>
            <Label htmlFor="email">
              {translations.email}
            </Label>
            <Input
              {...register('email')}
              type="email"
              placeholder="you@company.com"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="phoneNumber">
              {translations.phone}
            </Label>
            {/* <Input
          {...register('phoneNumber')}
          type="tel"
          placeholder="+1(555)555-5555"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        /> */}

            <PhoneInputWithCountry
              name="phoneNumber"
              control={control}
              rules={{ required: true }}
              placeholder="12345-67890"
              className="mt-1 block w-full rounded-md focus:border-blue-500 focus:ring-blue-500"
              defaultCountry="IN"
              inputComponent={Input}
              countrySelectProps={{
                className: 'border-gray-300 shadow-sm',
              }}
              onBlur={(e: any) => {
                console.log(getValues('phoneNumber'));
                console.log({ e });
              }}
            />

            {errors.phoneNumber && (
              <p className="mt-1 text-sm text-red-600">{errors.phoneNumber.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="message">
              {translations.message}
            </Label>
            <Textarea
              {...register('message')}
              placeholder="Leave us a message..."
              id="message"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="services">{translations.services}</Label>
            <div className="mt-1 grid w-full grid-cols-1 gap-4 px-1 md:grid-cols-2">
              {services.map(service => (
                <div key={service.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={service.id}
                    {...register('services', {
                      setValueAs: (value: any) =>
                        value ? [...(getValues('services') || []), service.id] : getValues('services').filter((id: string) => id !== service.id),
                    })}
                    value={service.id}
                  />
                  <Label htmlFor={service.id}>{service.label}</Label>
                </div>
              ))}
            </div>
            {errors.services && (
              <p className="mt-1 text-sm text-red-600">{errors.services.message}</p>
            )}
          </div>

          <div className="">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-md bg-black px-4 py-2 text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 disabled:opacity-50"
            >
              {isSubmitting ? translations.sending : translations.submit}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
