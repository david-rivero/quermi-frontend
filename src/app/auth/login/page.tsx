'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormLabel,
  FormItem,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import QuermiIcon from '@/icons/quermi-logo.svg';
import { FormSchema } from './login-form.schema';

export default function Login({ children }: Readonly<{ children: React.ReactNode }>) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const handleLogin = (values: z.infer<typeof FormSchema>) => { };

  return (
    <>
      <div className="mx-auto w-1/2 flex justify-center">
        <Image src={QuermiIcon} alt="Quermi" />
      </div>
      <div className="mx-auto w-1/4">
        <Form {...form}>
          <FormField
            control={form.control}
            name="email"
            render={() => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email" />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={() => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="Password" />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit" variant="outline">Login</Button>
        </Form>
      </div>
    </>
  );
}
