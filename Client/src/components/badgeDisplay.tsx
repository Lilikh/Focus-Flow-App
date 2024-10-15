import React, { useEffect, useState } from 'react';

interface BadgeDisplayProps {
    userId: string; // Pass userId as a prop
    badges: string[]; // Add this line to include badges prop
}

const BadgeDisplay: React.FC<BadgeDisplayProps> = ({ userId, badges }) => {
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchBadges = async () => {
            try {
                const res = await fetch(`http://localhost:3000/badges/${userId}`);
                if (!res.ok) throw new Error(`Error: ${res.status}`);
                
                // Use the fetched data to update the badges state
                // setBadges(data); // Uncomment this line if you want to store the fetched badges
            } catch (err) {
                setError((err as Error).message); // Type assertion to Error
            } finally {
                setLoading(false);
            }
        };

        fetchBadges();
    }, [userId]);

    if (loading) {
        return <div>Loading badges...</div>;
    }

    if (error) {
        return <div>Error fetching badges: {error}</div>;
    }

    return (
        <div className="badge-display">
            <h2>Your Badges</h2>
            {badges.length === 0 ? (
                <p>No badges earned yet.</p>
            ) : (
                <ul className="list-disc pl-5">
                    {badges.map((badge, index) => (
                        <li key={index} className="text-green-500">
                            {badge}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default BadgeDisplay;
