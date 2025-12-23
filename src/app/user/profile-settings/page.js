import ProfileSettingsClient from './profile-settings-client';
import { currentUser } from '@/data/users';

export default function ProfileSettingsPage() {
    return (
        <div className="bg-gray-100 w-full min-h-screen p-10">
            <ProfileSettingsClient user={currentUser} />
        </div>
    );
}
