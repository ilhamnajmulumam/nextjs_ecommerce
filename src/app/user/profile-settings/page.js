import { auth } from '@/lib/auth';
import ProfileSettingsClient from './profile-settings-client';
import { currentUser } from '@/data/users';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

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

    return (
        <div className="bg-gray-100 w-full min-h-screen p-10">
            <ProfileSettingsClient user={currentUser} />
        </div>
    );
}
