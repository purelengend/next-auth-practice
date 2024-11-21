import { Meta, StoryObj } from '@storybook/react';
import {
  EyeFilledIcon,
  EyeSlashFilledIcon,
  LoadingIcon,
  FrameIcon,
  BoxIcon,
  SearchIcon,
  TwitterIcon,
  FacebookIcon,
  InstagramIcon,
  PhoneIcon,
  PlantsIcon,
  RightArrowIcon,
  EmailIcon,
  ChatIcon,
} from '@/components';

const icons = [
  { component: EyeFilledIcon, label: 'Eye Filled' },
  { component: EyeSlashFilledIcon, label: 'Eye Slash' },
  { component: LoadingIcon, label: 'Loading' },
  { component: FrameIcon, label: 'Frame' },
  { component: BoxIcon, label: 'Box' },
  { component: SearchIcon, label: 'Search' },
  { component: TwitterIcon, label: 'Twitter' },
  { component: FacebookIcon, label: 'Facebook' },
  { component: InstagramIcon, label: 'Instagram' },
  { component: PhoneIcon, label: 'Phone' },
  { component: PlantsIcon, label: 'Plants' },
  { component: RightArrowIcon, label: 'Right Arrow' },
  { component: EmailIcon, label: 'Email' },
  { component: ChatIcon, label: 'Chat' },
];

const meta: Meta = {
  title: 'Components/IconGallery',
  component: LoadingIcon,
  tags: ['autodocs'],
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    customClass: {
      control: { type: 'text' },
      description: 'Custom CSS class via TailwindCSS for styling the icon',
    },
  },
};

export default meta;

type Story = StoryObj<{ customClass: string }>;

const IconGallery = ({ customClass }: { customClass?: string }) => (
  <div className="grid grid-cols-6 gap-4">
    {icons.map(({ component: IconComponent, label }, index) => (
      <div
        key={index}
        className="flex flex-col items-center gap-2 p-4 cursor-pointer"
      >
        <IconComponent customClass={customClass} />
        <span className="text-sm text-center mt-2">{label}</span>
      </div>
    ))}
  </div>
);

export const Default: Story = {
  args: {
    customClass: 'w-6 h-6',
  },
  render: (args) => <IconGallery customClass={args.customClass} />,
};
