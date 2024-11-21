'use client';

import Link from 'next/link';
import { ChangeEvent, useCallback } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Checkbox, Input, Button, useDisclosure } from '@nextui-org/react';

// Constants
import { ROUTER } from '@/constants';

// Schemas
import { signInSchema } from '@/schemas';

// Types
import { SignInFormData } from '@/types';

// Utils
import { cn } from '@/utils';

// Components
import { EyeFilledIcon, EyeSlashFilledIcon, LoadingIcon } from '@/components';

interface SignInFormProps {
  onSubmit: (data: SignInFormData) => Promise<void | string>;
}

const DEFAULT_VALUE = {
  username: '',
  password: '',
  remember: false,
};

const SignInForm = ({ onSubmit }: SignInFormProps) => {
  const {
    control,
    formState: { isValid, isDirty, isLoading, errors },
    handleSubmit,
    clearErrors,
  } = useForm({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    defaultValues: DEFAULT_VALUE,
    resolver: zodResolver(signInSchema),
  });

  const { isOpen: isPasswordVisible, onOpenChange: togglePasswordVisibility } =
    useDisclosure();

  const handleInputChange = useCallback(
    (name: keyof SignInFormData, onChange: (value: string) => void) => {
      return (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);

        // Clear error message on change
        if (errors[name]?.message) {
          clearErrors(name);
        }
      };
    },
    [errors, clearErrors],
  );

  const handleSignIn = async (formData: SignInFormData) => {
    try {
      await onSubmit(formData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit(handleSignIn)}>
      <div className="space-y-10">
        {/* Username Input */}
        <Controller
          control={control}
          name="username"
          render={({
            field: { name, onChange, ...rest },
            fieldState: { error },
          }) => (
            <Input
              {...rest}
              isRequired
              aria-label="Username input field"
              autoComplete="off"
              data-testid="username-input"
              errorMessage={error?.message}
              isDisabled={isLoading}
              isInvalid={!!error?.message}
              label="Username"
              labelPlacement="outside"
              name={name}
              placeholder="Enter your username"
              radius="sm"
              classNames={{
                label: 'font-base pb-0 lg:pb-2.5',
                inputWrapper: cn(
                  'border border-border-secondary rounded-lg',
                  'bg-transparent h-12 lg:h-14',
                ),
              }}
              onChange={handleInputChange(name, onChange)}
            />
          )}
        />

        {/* Password Input */}
        <Controller
          control={control}
          name="password"
          render={({
            field: { name, onChange, ...rest },
            fieldState: { error },
          }) => (
            <Input
              {...rest}
              isRequired
              aria-label="Password input field"
              autoComplete="off"
              data-testid="password-input"
              errorMessage={error?.message}
              isDisabled={isLoading}
              isInvalid={!!error?.message}
              label="Password"
              labelPlacement="outside"
              name={name}
              placeholder="Enter your password"
              radius="sm"
              type={isPasswordVisible ? 'text' : 'password'}
              classNames={{
                label: 'font-base pb-0 lg:pb-2.5',
                inputWrapper: cn(
                  'border border-border-secondary rounded-lg',
                  'bg-transparent h-12 lg:h-14',
                ),
              }}
              endContent={
                isPasswordVisible ? (
                  <span
                    className="cursor-pointer"
                    onClick={togglePasswordVisibility}
                  >
                    <EyeSlashFilledIcon />
                  </span>
                ) : (
                  <span
                    className="cursor-pointer"
                    onClick={togglePasswordVisibility}
                  >
                    <EyeFilledIcon />
                  </span>
                )
              }
              onChange={handleInputChange(name, onChange)}
            />
          )}
        />
      </div>

      <div
        className="w-full flex items-center justify-between"
        title="This feature is not available in this version yet"
      >
        <Controller
          control={control}
          name="remember"
          render={({ field: { onChange } }) => {
            return (
              <Checkbox
                aria-label="Remember me checkbox"
                classNames={{
                  label: 'cursor-pointer text-text-default',
                  icon: 'bg-green-150',
                }}
                onChange={onChange}
              >
                Remember me
              </Checkbox>
            );
          }}
        />

        <Link
          aria-label="Forgot password link"
          className="text-green-150 font-semibold hover:underline"
          data-testid="forgot-password-link"
          href={ROUTER.FORGOT_PASSWORD}
        >
          Forgot your password?
        </Link>
      </div>

      <Button
        aria-label="Sign in button"
        className="w-full font-semibold uppercase text-lg py-6"
        data-testid="sign-in-button"
        isDisabled={!isValid || !isDirty}
        spinner={<LoadingIcon />}
        type="submit"
      >
        Sign in
      </Button>

      <p className="text-text-default text-center">
        Don&apos;t have an account?&nbsp;&nbsp;
        <Link
          aria-label="Register button"
          className="text-green-150 font-semibold hover:underline"
          data-testid="register-button"
          href={ROUTER.SIGN_UP}
        >
          Register here
        </Link>
      </p>
    </form>
  );
};

export default SignInForm;
