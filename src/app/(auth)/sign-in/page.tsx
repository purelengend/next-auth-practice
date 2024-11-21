// Actions
import { authenticate } from '@/actions/auth';

// UI
import { SignInForm } from '@/components';

const SignInPage = () => <SignInForm onSubmit={authenticate} />;

export default SignInPage;
