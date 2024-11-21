import { Input, Textarea } from '@nextui-org/react';

// Utils
import { cn } from '@/utils';

// Constants
import { ImageStore } from '@/constants/images';

// Components
import {
  ChatIcon,
  EmailIcon,
  PhoneIcon,
  Button,
  ImageFallback,
} from '@/components';

export const ContactUs = () => (
  <div className="flex pt-10 px-4">
    <div
      className={cn(
        'flex-1 flex flex-col items-center',
        'mx-auto px-6 space-y-6',
      )}
    >
      <h2 className="text-2xl font-bold">Contact Us</h2>
      <p className="text-center text-gray-600">
        Let&apos;s connect: We&apos;re here to help, and we&apos;d love to hear
        from you! Whether you have a question, a comment, or just want to chat,
        you can reach out to us through the contact form on this page, or by
        phone, email, or social media.
      </p>

      <div className={cn('w-full flex flex-row gap-4', 'justify-center')}>
        <Button
          startIcon={<ChatIcon />}
          variant="outline"
          customClass={cn(
            'w-full max-w-[200px] flex justify-center items-center',
            'p-3 rounded-lg text-sm md:text-md',
          )}
        >
          Via Support Chat
        </Button>
        <Button
          startIcon={<PhoneIcon />}
          variant="outline"
          customClass={cn(
            'w-full max-w-[200px] flex justify-center items-center',
            'px-4 rounded-lg text-sm md:text-md',
          )}
        >
          Via Phone Call
        </Button>
      </div>

      <Button
        customClass={cn('p-3 rounded-lg', 'text-sm md:text-md')}
        startIcon={<EmailIcon />}
        variant="outline"
      >
        Via Email Form
      </Button>

      <form className="w-full flex flex-col gap-4">
        <Input
          label="Name"
          labelPlacement="outside"
          placeholder="Enter your name"
          type="text"
          classNames={{
            label: 'font-base pb-0 lg:pb-2.5',
            inputWrapper: cn(
              'border border-border-secondary rounded-lg',
              'bg-transparent h-12 lg:h-14',
            ),
          }}
        />
        <Input
          label="Email"
          labelPlacement="outside"
          placeholder="Enter your email"
          type="email"
          classNames={{
            label: 'font-base pb-0 lg:pb-2.5',
            inputWrapper: cn(
              'border border-border-secondary rounded-lg',
              'bg-transparent h-12 lg:h-14',
            ),
          }}
        />
        <Textarea
          label="Message"
          labelPlacement="outside"
          placeholder="Write your message here..."
          rows={4}
          classNames={{
            label: 'font-base pb-2.5',
            inputWrapper: cn(
              'border border-border-secondary rounded-lg',
              'bg-transparent',
            ),
            innerWrapper: 'h-fit xl:h-40',
          }}
        />
      </form>
    </div>

    <div className="relative flex-1 mx-auto w-full hidden md:block">
      <ImageFallback
        fill
        alt="Contacts background image"
        sizes="(min-width: 769px) 400px, (min-width: 1024px) 100vw"
        src={ImageStore.ContactsBackgroundImage}
        className={cn(
          'shadow-md border border-border-secondary/20',
          'rounded-xl object-cover 2xl:object-[0_75%]',
        )}
      />
    </div>
  </div>
);
