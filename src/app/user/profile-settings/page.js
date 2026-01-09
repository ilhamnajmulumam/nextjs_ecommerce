import { auth } from '@/lib/auth';
import ProfileSettingsClient from './profile-settings-client';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { getUser } from '@/lib/user-profile-action';

export default async function ProfileSettingsPage() {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session) {
        redirect('/login');
    }

    if (session.user.role !== 'USER') {
        redirect('/admin');
    }

    const user = await getUser();

    return (
        <div className="bg-gray-100 w-full min-h-screen p-10">
            <ProfileSettingsClient user={user} />
        </div>
    );
}
